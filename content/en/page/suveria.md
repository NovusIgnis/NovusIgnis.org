---
tytul: What is Suveria
opis: A private space for working with digital intelligence that the foundation is designing: what it is meant to make possible, what it is meant to protect against and what stage it is at today
grupa: suveria
kolejnosc: 1
menu: What is Suveria
---
# What is Suveria

This page briefly explains what Suveria is meant to be, who it is being created for and what stage it is at. Each part links to the Suveria whitepaper, in case you want to know more.

Suveria is to be a private space on the internet where a person talks with digital intelligence, works on their own materials and returns to earlier thoughts, as in a home of their own behind a closed door. The Novus Ignis Foundation is designing it with people from every part of the world in mind.

Today Suveria is at the design stage. It is being created so that people can talk with digital intelligence about health, relationships, work, money and life plans without fear that such close insight into a person will one day be monetized or used to influence them. We are aiming the first release at people for whom verifiable privacy is the reason for their choice.

More: [Suveria whitepaper, chapter 1](../whitepaper-suveria.md#s1).

## What we want to make possible

In Suveria we want people to be able to:

- talk about personal and professional matters while seeing where the conversation is processed and who can see it;
- work on their own documents and files, and save the results and move them elsewhere in open formats;
- store conversations, files and the assistant's memory primarily on their own devices, encrypted with a key under their control;
- with their own consent, use the memory of earlier conversations and build a Personal Canon, that is, a collection of their own principles and values;
- choose a way of working, from a model on their own device to a confidential environment on a server, knowing what each one protects against;
- pay for actual use, with a spending limit they set themselves;
- refine a thought privately and then consciously bring it into the shared conversation in OmniForum, the public space for conversation and decisions.

From the very first day, it is meant to give a calm sense of being at home. We also want to make it possible to bring over your own notes and conversation archives from other digital intelligence services. Using Suveria is not consent to the use of conversations for training models.

More: [Suveria whitepaper, chapter 1](../whitepaper-suveria.md#s1).

## What it protects against and what does not exist yet

Protection is to rest on safeguards that can be independently verified, not on trust in the foundation, including trust in us as the people who run the infrastructure. No such verification has taken place yet.

We compare several ways of working, because each one protects against something different:

- **A model on your device.** The conversation does not leave your phone or computer, unless the assistant uses integrations with online services; what matters is the state of the device, the app's permissions and who has physical access to it.
- **A confidential environment on servers.** The server has a hardware-isolated zone that not even its administrator can look into; that is where the model reads the content. The hardware is to confirm this with a digital signature (this is attestation: a confirmation of what software is running on a remote machine and in what protection mode). This also requires trusting the processor manufacturer. This is the target option.
- **A third-party provider's confidential API.** An API is the connection through which our app sends the conversation to a model run by another provider. The first release will most likely use a confidential API; if before its launch we raise enough funds to rent our own servers in a confidential environment, it may run on them from the start. At the start, confidentiality here is the provider's declaration, which we will verify; until the trials produce a positive result, we label this option as declared protection, not confidential protection.
- **A model provider's standard API.** The provider has access to the content; this is not the default option for private Suveria.

Confidential computing does not fix an infected computer and does not protect against everyone who has physical access to the server. No option gets the label “full privacy” before the specific configuration has been verified. Every conversation is to show which option you are working in, and changing the option requires your conscious decision.

More: [Suveria whitepaper, chapter 2](../whitepaper-suveria.md#s2) and [section 2.3](../whitepaper-suveria.md#s2-3). See also: [Privacy and security](suveria-prywatnosc.md).

## Models

The project is based on open models that can be run independently. When choosing a model, we consider, among other things, quality in many languages, reliability, license, cost and whether it can run in the required protection architecture.

We announce a change or withdrawal of a model in advance, and your conversation history stays with you: you can choose a successor model, export your data or stop working. The moment a model changes is to be visible in the conversation.

More: [Suveria whitepaper, chapter 6](../whitepaper-suveria.md#s6).

## How much it costs

The manifesto puts forward the hypothesis that shared infrastructure can deliver more computing power and digital intelligence for every dollar than closed services. The whitepaper works this out in a calculation dated 29 October 2026: for the assumed usage profile, a confidential API with declared confidentiality costs about USD 0.70–1.25 per person per month for computing alone. On top of that comes the fixed cost of the private environment, which weighs most heavily when there are few people: with 30 participants, about USD 6–11 per person per month.

This is an estimate on paper, not Suveria's price list: the calculation does not include people's work, security reviews, payments or a reserve for failures. Status of the hypothesis as of that date: the calculation brings us closer to it, but does not confirm it.

More: [Suveria whitepaper, chapter 8](../whitepaper-suveria.md#s8). See also: [How much it costs](suveria-koszty.md).

## Current status

The whitepaper keeps a results log. Its status as of 29 October 2026: we have not yet carried out any of the trials described, we have not rented any GPUs and we have not run a model in Suveria. We plan the first measurement on a single confidential GPU with a smaller model.

The most important trial: a team with operator privileges tries to read the conversations of test accounts in which secret character strings have been hidden. If anyone extracts them, including us, the trial has failed.

We want to run the trials openly. If you work in security, cryptography, infrastructure or applications, or want to take a critical look at the project, write to us with the subject line “[Dołącz] Próby Suverii” at salve@novusignis.org.

More: [Suveria whitepaper, chapter 9](../whitepaper-suveria.md#s9) and [section 8.2](../whitepaper-suveria.md#s8-2).

## Why Suveria is a path, not a goal

The manifesto says it plainly:

> Today Suveria is our best path to private work with digital intelligence, not a goal in itself. If models come to fit on people's own devices, or a better way of protection emerges, part of this path will become unnecessary, and we will consider that good news.

More: [manifesto, section 3.1](../manifest.md#s3-1).

## Read it and tell us what you think

You will find the full description, with a table of protection options, a cost calculation and a list of open issues to be resolved, in the [Suveria whitepaper](../whitepaper-suveria.md). If something puzzles you or seems wrong, highlight that passage in the document and use the “I have a comment” button, or write to salve@novusignis.org.
