// Google Ads web bulk-upload format, using its official gstatic templates.
// One-time creation templates only. These campaigns already exist in account
// 168-183-2284. Never upload these Add rows again to that account.
// Keep templates paused; live status is recorded separately in campaign-plan.json.
const fs = require('node:fs');
const path = require('node:path');
const services = require('../src/data/landingPages.json');
const budgets = [40,20,20,12,15,8,7,5.11];
const phrases = [
 ['upvc windows','upvc window dealers','koemmerling windows','casement upvc windows','fixed upvc windows','upvc window price'],
 ['aluminium windows','aluminum window suppliers','aluminium window dealers','aluminium casement windows','fixed aluminium windows','aluminium window price'],
 ['upvc doors','upvc door suppliers','koemmerling doors','upvc balcony doors','upvc patio doors','upvc door price'],
 ['aluminium doors','aluminum door suppliers','aluminium door dealers','aluminium entrance doors','aluminium shop doors','aluminium door price'],
 ['sliding windows and doors','sliding door suppliers','sliding window dealers','balcony sliding doors','patio sliding doors','sliding door price'],
 ['glass facade solutions','facade glazing contractors','glass facade suppliers','commercial glass facades','glazed building facades','glass facade cost'],
 ['window and door installation','upvc window installation','window installers','door fitting services','window replacement installation','window installation cost'],
 ['window and door maintenance','upvc window repair','window repair service','sliding door repair','window lock repair','window repair cost']
];
const cities = ['tirupati','bangalore','bengaluru','hyderabad'];
// Phrase negatives cover irrelevant intent without blocking free quotations,
// installation-inclusive supply or product repair enquiries.
const negatives = ['job','jobs','vacancy','vacancies','salary','salaries','career','careers','hiring','recruitment','internship','internships','course','courses','training','tutorial','tutorials','diy','do it yourself','second hand','used windows','scrap','windows 11','windows 10','windows 7','windows xp','windows server','microsoft windows','windows update','windows activation','windows product key','operating system','free download','software','autocad','revit families','windows installation iso','windows installer download','windows maintenance software','windows startup repair'];
const rows = [], campaignRows=[], groupRows=[], keywordRows=[], adRows=[], negativeRows=[];
const campaigns=[];
function add(row, bucket) { rows.push(row); bucket.push(row); }
function csv(records) {
 const keys=[...new Set(records.flatMap(record=>Object.keys(record)))];
 const quote=value=>'"'+String(value??'').replace(/"/g,'""')+'"';
 return [keys.map(quote).join(','),...records.map(record=>keys.map(key=>quote(record[key])).join(','))].join('\n')+'\n';
}
for (let i=0;i<services.length;i++) {
 const service=services[i], campaign=`Tejesh | ${service.title} | Search Calls`;
 const finalUrl=`https://tejeshprofine.com/landing/${service.slug}`;
 const suffix=`utm_source=google&utm_medium=cpc&utm_campaign=tejesh_${service.slug.replace(/-/g,'_')}`;
 const settings={'Row Type':'Campaign',Action:'Add','Campaign status':'Paused',Campaign:campaign,'Campaign type':'Search',Networks:'Google search',Budget:budgets[i].toFixed(2),'Budget type':'Daily','Delivery method':'Standard','Bid strategy type':'Maximize conversions',Language:'en;te;kn;hi;ta',Location:'Tirupati, Andhra Pradesh, India; Bengaluru, Karnataka, India; Hyderabad, Telangana, India','Final URL suffix':suffix,'EU political ads':'No'};
 add(settings,campaignRows);
 const groups=[['Suppliers and locations',phrases[i].slice(0,3).flatMap(keyword=>[keyword+' near me',...cities.map(city=>keyword+' '+city)])],['Styles and applications',phrases[i].slice(3,5).flatMap(keyword=>[keyword,...cities.map(city=>keyword+' '+city)])],['Price and quotation',[phrases[i][5],...cities.map(city=>phrases[i][5]+' '+city),`${phrases[i][0]} quotation`]]];
 for (const [group,keywords] of groups) {
  add({'Row Type':'Ad group',Action:'Add','Ad group status':'Paused',Campaign:campaign,'Ad group':group,'Ad group type':'Standard','Ad rotation':'Optimize'},groupRows);
  for (const keyword of [...new Set(keywords)]) for (const type of ['Exact match','Phrase match']) add({'Row Type':'Keyword',Action:'Add','Keyword status':'Paused',Campaign:campaign,'Ad group':group,Keyword:keyword,Type:type,'Final URL':finalUrl},keywordRows);
  const headlines=[service.title==='Maintenance'?'Window Maintenance Enquiries':service.title, 'Tejesh Profine','Call to Discuss Your Project','Options for Your Space','Request an Itemised Quote','Tirupati Project Enquiries','Bengaluru Project Enquiries','Hyderabad Project Enquiries','Confirm Site Coverage'];
  const descriptions=[`Discuss ${service.title.toLowerCase()} options. Call our team for project advice.`,'Share dimensions and location. Confirm site coverage and availability before ordering.','Compare specifications, finishes and project requirements with our team.'];
  const ad={'Row Type':'Ad',Action:'Add','Ad status':'Paused',Campaign:campaign,'Ad group':group,'Ad type':'Responsive search ad','Final URL':finalUrl,'Final URL suffix':suffix,'Path 1':service.slug.slice(0,15),'Path 2':'enquire'};
  headlines.forEach((value,n)=>{ if(value.length>30)throw new Error('Headline exceeds 30 characters: '+value); ad['Headline '+(n+1)]=value; });
  descriptions.forEach((value,n)=>{ if(value.length>90)throw new Error('Description exceeds 90 characters: '+value); ad['Description '+(n+1)]=value; });
  add(ad,adRows);
 }
 const exclusions=negatives;
 for (const negative of exclusions) add({'Row Type':'Negative keyword',Action:'Add',Level:'Campaign',Campaign:campaign,'Negative keyword':negative,Type:'Phrase match'},negativeRows);
 campaigns.push({name:campaign,service:service.slug,budget_net_inr:budgets[i],status:'Paused',landing_page:finalUrl,ad_groups:groups.map(([name])=>name)});
}
const total=Math.round(budgets.reduce((a,b)=>a+b,0)*100)/100;
if(total!==127.11)throw new Error('Unexpected total budget');
for(const [name,data] of Object.entries({'service-campaigns':campaignRows,'service-ad-groups':groupRows,'service-keywords':keywordRows,'service-search-ads':adRows,'service-negative-keywords':negativeRows,'service-campaigns-complete':rows}))fs.writeFileSync(path.join(__dirname,name+'.csv'),csv(data));
fs.writeFileSync(path.join(__dirname,'service-campaign-plan.json'),JSON.stringify({account_id:'168-183-2284',status:'Local import plan; verify Google Ads preview before applying',total_average_daily_budget_net_inr:total,maximum_daily_gross_at_2x_and_18pct_gst_inr:299.98,all_entities_paused:true,location_mode_required:'Presence only; verify after import because the template has no geo-target-type field',call_hours:'Monday-Saturday 09:30-22:30 Asia/Kolkata',primary_goal:'Qualified calls from ads, 60-second minimum where call reporting is supported',campaigns},null,2)+'\n');
console.log(JSON.stringify({campaigns:campaignRows.length,ad_groups:groupRows.length,keywords:keywordRows.length,ads:adRows.length,negatives:negativeRows.length,total_average_budget:total,total_rows:rows.length,paused:true}));
