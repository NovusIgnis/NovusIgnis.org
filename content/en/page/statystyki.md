---
tytul: Site statistics
opis: How often our website and documents are read, counted in aggregate from server logs, with no analytics scripts and no cookies
grupa: skroty
kolejnosc: 11
menu: Site statistics
---
# Site statistics

We want to know how interest in the foundation changes and which texts are read most often, and we want to show this openly. We count it in the simplest way: from the logs of the server, which records every page request anyway. The website has no analytics scripts, no cookies and nothing that would recognize you on your next visit.

**As of 31 October 2026.** The website is moving to a hosting plan that provides server logs. We start counting statistics from November 2026; the rules below apply from the first month we count.

## What we count

- **Page views:** how many times each page and each document was requested, separately in Polish and in English.
- **File downloads:** for example `llms-full.txt`, that is, the manifesto and whitepapers in a single file.
- **Bot visits** in four groups: search engines; crawlers of companies that build digital intelligence models; models reading the site at a person's request, for example when someone asks their chat to read the manifesto; other bots.
- **Files for models:** how many times model crawlers fetched `llms.txt` and `llms-full.txt`.

## What we do not record

- IP addresses, full browser descriptions or anything else that makes it possible to recognize an individual person.
- The history of one person's visits: we do not combine page views into visits or profiles.
- Data from other websites and services.

That is why we do not know how many people visited us, only how many times pages were requested. One person may open a page several times, and some bots pretend to be ordinary browsers, so the numbers are approximate.

## How we count

Every week we download the server log from the control panel of Infomaniak, the company that hosts the website, because logs are kept there for only a few days. At the end of the month the `tools/statystyki.mjs` script counts from them only the totals listed above and records them without IP addresses or browser descriptions. We keep the downloaded copies of the logs until the end of the month at most and delete them right after counting. How we process data is described on the [Your data](twoje-dane.md) page.

## Results

{{statystyki}}
