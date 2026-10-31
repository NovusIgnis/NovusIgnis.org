---
tytul: How much Suveria costs
opis: What you are to pay for in Suveria, what a dated calculation shows and why it is an estimate, not a price list
grupa: suveria
kolejnosc: 3
menu: How much it costs
---
# How much Suveria costs

This page is about your money: what you are to pay for in Suveria, how the bill is made up and what our calculations show. Today Suveria is a project. The service does not exist yet, so there is no price either. The figures below come from a calculation dated 29 October 2026 (apart from the “Total” row, which we added up ourselves). This is a calculation on paper, not a price list.

More: [Suveria whitepaper, chapter 8](../whitepaper-suveria.md#s8).

## What you pay for

The principle is simple: you pay for what you actually use, together with a fairly calculated share of shared costs (those that cannot be attributed to a single person, such as security or accounting), you see what you are paying for, and you set the limit on your own spending. The fee covers costs and nothing more. Anything above that is a voluntary donation, shown separately.

The bill has two parts:

- **actual use** in a given cycle: computing, memory, data transfer;
- **an openly assigned share of fixed costs**, which keep the infrastructure ready: security, payments, accounting, support, wear and replacement of hardware.

We want to divide shared costs according to a public rule chosen in the pilot: in proportion to use or equally among active accounts. The estimated cost of a task is always to be checkable, and we will announce your share of shared costs before the billing cycle, and it always stays within your limit. We will announce every price change together with its reason and its impact on users.

More: [Foundation Principles whitepaper, chapter 3](../whitepaper-zasady-fundacji.md#s3) and [section 3.1](../whitepaper-zasady-fundacji.md#s3-1); [manifesto, section 6.1](../manifest.md#s6-1).

## What the calculation shows

For the calculation we assumed an example user: 20 questions a day, each answer about 600 tokens long (a token is a piece of text, roughly a short word), every day for 30 days. This is a load model for a trial, not a forecast. The prices come from public price lists, excluding taxes.

The first release will most likely use a confidential API (if we raise enough funds, it may run on our own rented servers from the start): the digital intelligence model runs at an external provider that declares it does not read the content of conversations, and we will verify this declaration. On top of that comes a private environment: one or two confidential machines with the gateway, memory and users' files. This cost is fixed, so with a small group it weighs the most.

| Per person per month, if Suveria were used by (calculation of 29 October 2026) | 30 people | 100 people | 1,000 people |
| --- | --- | --- | --- |
| Compute-only cost in a confidential API | USD 0.70–1.25 | USD 0.70–1.25 | USD 0.70–1.25 |
| Fixed cost of the private environment (USD 170–340 per month) | about USD 6–11 | about USD 1.70–3.40 | a few dozen cents |

This is an estimate on paper: it does not include people's work, security reviews, payments or a reserve for failures, and we will check in the pilot whether machines of this size are enough. We want to show the fixed cost separately and cover it from the pilot support budget, for example from donations earmarked for Suveria. We do not assume that we already have such funds.

More: [Suveria whitepaper, chapter 7](../whitepaper-suveria.md#s7) and [section 8.1](../whitepaper-suveria.md#s8-1); [Foundation Principles whitepaper, section 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## From 30 people to all of humanity

The same sample user makes it possible to calculate how much work the model would have with different numbers of people. In the table, “peak” is the busiest hour of the day when people from different time zones use Suveria (about 1.51 × the average).

| Active people | Questions per month | Answer text at peak |
| --- | ---: | ---: |
| 30 | 18,000 | 6.3 tokens per second |
| 100 | 60,000 | 20.9 tokens per second |
| 1,000 | 600,000 | 209 tokens per second |
| 100,000 | 60 million | 20,921 tokens per second |
| 1 million | 600 million | 209,208 tokens per second |
| 1 billion | 600 billion | 209.2 million tokens per second |
| 10 billion | 6 trillion | 2.09 billion tokens per second |

How much hardware is that? The whitepaper runs a thought experiment. If each of 10 billion people used Suveria this way, then at the throughput measured for the DeepSeek-V4.1-Flash model it would take about 2.25 million B200 cards and about 4 GW of power. For a billion people that is about 225,000 cards and 0.4 GW, and for a million about 225 cards. For comparison, at the start of 2026 Epoch AI estimated that more than 15 million H100-equivalent cards were working for digital intelligence worldwide, needing more than 10 GW of power. This is a simplification: the sample user is frugal, and intensive work, larger models and images need many times more.

We do not give a cost per person for millions of people: at that scale the hardware, prices and way of running the service would change, so such a number would be guesswork. The calculation of 29 October 2026 says only that, under our assumptions, our own infrastructure could become cheaper than a confidential API at between a dozen and several dozen thousand active people.

More: [Suveria whitepaper, chapter 7](../whitepaper-suveria.md#s7).

## Why we calculate in dollars

We will give service prices in dollars, because computing power is bought in that currency. We want to accept payments in other currencies as well, at the exchange rate shown on the bill. The foundation keeps its books in Polish zloty.

More: [Foundation Principles whitepaper, section 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Prepayment, refund, rounding up

- **Prepayment.** You enter one amount and exactly that amount goes to your balance, regardless of the payment method. Prepayments are to be kept in a separate bank account; we do not cover the foundation's costs from them before the service has been performed.
- **Limit.** When you pay in, you set the most you want to spend. The limit is to work as a boundary, not as a warning after the fact. This is a requirement to be built and tested, not a working feature.
- **Refund.** Your unused balance is to be recoverable at any time, ultimately with a single button; the refund deadline, any costs of a refund, the minimum payment and other details will be set out in the regulations. If you close your account or the service is shut down, the balance is returned automatically by the same route. Unclaimed balances do not go into the foundation's budget.
- **Rounding up.** When you create an account, we ask whether you want to round each bill up to the full dollar or a similar equivalent in your local currency; the difference goes as a donation to the shared budget. We ask instead of ticking the box for you, and you can change your decision at any time with a single setting.

The bill shows the service fee and the donation amount separately. The refund deadline, the minimum payment and other details will be set out in the regulations, which will be prepared before the first prepayment is accepted.

More: [Foundation Principles whitepaper, section 3.2](../whitepaper-zasady-fundacji.md#s3-2) and [section 3.3](../whitepaper-zasady-fundacji.md#s3-3); [Suveria whitepaper, section 8.3](../whitepaper-suveria.md#s8-3).

## How this compares with subscriptions

On commercial platforms, the price of a subscription usually combines in a single amount the cost of use with the upkeep of free accounts, marketing, management and investors' profit, and the user does not see the share of these components. The manifesto puts forward the hypothesis that without this hidden markup, even with a relatively small number of regular participants, shared infrastructure can give more computing power and digital intelligence for every dollar spent than closed services, with privacy based on verifiable safeguards.

Status of the hypothesis as of 29 October 2026: the calculation brings us closer to it, but does not confirm it. Processing with declared confidentiality is already available in public price lists, so a small group can start with it at cost, and under our assumptions our own infrastructure may become cheaper at somewhere between more than ten thousand and several tens of thousands of active people. We do not compete on price with plans at USD 100–200, which with intensive agentic work give the equivalent of thousands of dollars at list API prices. We propose billing for actual use with privacy that can be verified.

More: [manifesto, section 2.4](../manifest.md#s2-4); [Suveria whitepaper, section 8.1](../whitepaper-suveria.md#s8-1).

## What will change the calculation

We update the calculation with every significant change in prices and after every trial, and we keep the previous versions. Three things will decide, and we will check them in the trials:

- whether the confidentiality of these services passes independent verification;
- whether the quality of the available models is sufficient for the tasks for which people will come to Suveria;
- what the actual traffic profile is.

We want to develop the infrastructure in steps: first a confidential API and a private environment in confidential machines, then renting our own confidential machines, next buying hardware for an external server room, and in the distant future, if it shows an advantage, a building of our own. Each step is to be justified by measured data and a decision card with the full cost, the risks and the conditions for withdrawal. For now we count the purchase of a server only as an estimate, not an offer.

More: [Suveria whitepaper, section 8.1](../whitepaper-suveria.md#s8-1) and [section 8.2](../whitepaper-suveria.md#s8-2).

## Read it and tell us what you think

You will find the full calculation, with a table of options and price sources, in the [Suveria whitepaper](../whitepaper-suveria.md#s8), and the rules for the bill, prepayments and refunds in the [Foundation Principles whitepaper](../whitepaper-zasady-fundacji.md#s3). If something in the figures or assumptions does not add up for you, highlight that passage in the document and use the “I have a comment” button, or write to salve@novusignis.org.
