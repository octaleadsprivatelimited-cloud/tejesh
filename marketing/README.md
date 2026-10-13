# Google Ads configuration

`campaign-plan.json` records the configuration observed on 13 October 2026 in
Google Ads account `168-183-2284`, owned by `sriadithayinteiors@gmail.com`.

Eight service Search campaigns contain 24 ad groups, 496 exact/phrase keywords and
24 responsive search ads. Google Search is the only network. Each campaign has
presence-only targeting in Tirupati, Bengaluru and Hyderabad and runs Monday to
Saturday, 09:30-22:30 IST. Additional towns along the corridor require confirmed
service coverage before expansion.

The campaign primary goal is Phone call leads. The approved account call asset
uses the business number and account-default Calls from ads conversion. Call
reporting and auto-tagging are on. A qualified call lasts at least 60 seconds and
is counted once per ad interaction. Six imported GA4 contact/lead actions are
secondary. A website phone click is not a completed call. Google-managed Business
Profile tracked calls are also part of the native call goal.

The verified Tejesh Business Profile is linked through the account's location
source. The account-level location asset uses a dedicated group containing only
the Gajulamandyam showroom, avoiding unrelated locations. Ads and call assets
were eligible when checked. Eligibility is not evidence of impressions or calls;
the account still needs real traffic for a performance assessment.

## Budget protection

The combined average net budgets are INR 127.11 per day, split across services as
40/20/20/12/15/8/7/5.11. With Google's usual 2x daily spending ceiling and 18% GST,
the total is INR 299.98. Do not increase an individual budget without checking
the combined total and the owner's INR 300 including GST maximum.

On 13 October, uPVC Windows had been increased to INR 300 before GST. Its budget
was restored to INR 40 and the campaign held for that day because Google uses
the day's highest budget when calculating the spending ceiling. Verified rule
`62171715` runs once on 14 October between 09:00 and 10:00 IST to enable only that
campaign, with an email on changes or errors to the business account. Campaign
call hours still restrict delivery. The other seven campaigns remain enabled.

## Negative keywords

Shared list `Tejesh | Call lead quality exclusions` (`12269879404`) contains 40
phrase negatives and is applied to all eight campaigns. It excludes job and
training searches, software/operating-system downloads, DIY and used/scrap
intent. Singular and plural forms are included because negative keywords do not
automatically cover close variants.

The old blanket free/installation/installer/maintenance/repair exclusions were
replaced with software-specific phrases. Do not reintroduce blanket negatives
that suppress free quotation, supply-and-installation or legitimate repair
enquiries. Keep price, cost, quotation and near-me intent eligible. Review actual
search terms after traffic accumulates before adding further negatives. No
measured CPC, conversion rate or guaranteed performance is claimed.

## Creation templates and archived drafts

`build-campaigns.cjs` generates paused CSV creation templates and
`service-campaign-plan.json`. Those files are not a live account export.
**Do not re-upload their Add rows to this existing account.** The original
699-row upload was applied once; later settings and negative-list corrections
were made in the Google Ads interface. Regenerated templates include the corrected
ad copy, bidding strategy and negative terms for review and reproducibility.

`legacy/` retains the previous single-campaign drafts for history only. They
must not be used to overwrite the service configuration.

The Octaleads MCC invitation remains pending at the owner's request. The India
tax form is left unchanged at the owner's latest request. No certificate or
private tax identifier is stored in this repository. A completion-notification
automation checks for actionable review/restart problems without raising budgets
or adding funds.

Sources: [budget changes](https://support.google.com/google-ads/answer/10487143),
[negative keyword matching](https://support.google.com/google-ads/answer/2453972),
[call reporting](https://support.google.com/google-ads/answer/2454052).
