const Ajv = require('ajv');
const addFormats = require('ajv-formats');
(async () => {
  const response = await fetch('https://openapi.vercel.sh/vercel.json');
  if (!response.ok) throw new Error(`Schema download failed: ${response.status}`);
  const ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(ajv);
  const schema = await response.json();
  // The published schema declares draft 4 but contains newer numeric exclusivity.
  // Normalize the older boolean form to draft 7 without changing its meaning.
  function normalize(value) {
    if (!value || typeof value !== 'object') return;
    for (const [exclusive, bound] of [['exclusiveMinimum', 'minimum'], ['exclusiveMaximum', 'maximum']]) {
      if (typeof value[exclusive] === 'boolean') {
        if (value[exclusive] && typeof value[bound] === 'number') { value[exclusive] = value[bound]; delete value[bound]; }
        else delete value[exclusive];
      }
    }
    Object.values(value).forEach(normalize);
  }
  normalize(schema);
  schema.$schema = 'http://json-schema.org/draft-07/schema#';
  const validate = ajv.compile(schema);
  if (!validate(require('../vercel.json'))) throw new Error(JSON.stringify(validate.errors, null, 2));
  console.log('Vercel configuration passes the official JSON schema.');
})().catch(error => { console.error(error.message); process.exitCode = 1; });
