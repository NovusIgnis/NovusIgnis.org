---
tytul: Suveria privacy and security
opis: Whom Suveria is meant to protect conversations from, how a message travels through the system, who holds the keys and how we will check whether the protection works
grupa: suveria
kolejnosc: 2
menu: Privacy and security
---
# Suveria privacy and security

This page is for people who want to know what privacy protection in Suveria is meant to consist of before they entrust their conversations to it. It goes deeper than the page [What is Suveria](suveria.md) and links to the whitepaper from each part.

One principle organizes the whole: privacy cannot rest on trust in the good intentions of the foundation or of server administrators, but only on safeguards whose operation can be independently verified. The manifesto puts it this way: “Every security promise must have proof in code and silicon, not only in our words.” Your own devices are to be the primary place where conversations are stored, and we do not create hidden access to private content.

Today Suveria is at the design stage. Everything below describes how it is meant to work; we have not yet carried out any of the trials that are to confirm it.

More: [manifesto, section 2.2](../manifest.md#s2-2) and [section 3.1](../manifest.md#s3-1).

## Whom it is meant to protect against, and whom not

We protect the content of conversations and files, the assistant's history and memory, keys (that is, secret character strings that open encrypted data), billing data and metadata, that is, information about the connection itself: its time, the network address and the size of the request.

A confidential environment is a hardware-isolated part of a server that not even its administrator can look into. Whether this is really so is to be confirmed by attestation, that is, a hardware-signed confirmation of what software is running on the server and in what protection mode. A confidential API is such an environment at a third-party provider, to which our app connects (an API is a connection between programs). The table describes the intended operation, not yet checked in a trial:

| Against whom it is meant to protect | Model on your device | Confidential environment on servers | A third-party provider's confidential API |
| --- | --- | --- | --- |
| The provider's administrator | not applicable: processing on the device | is to protect: hardware isolation | provider's declaration, to be verified |
| A network observer | not applicable without a network; integration traffic requires assessment | partial protection: content encrypted, metadata require separate measures | partial protection, if the connection key is bound to attestation |
| A person with physical access to the server | not applicable; what matters is access to the device | does not protect: in someone else's data center the provider has access; with our own hardware, visible physical oversight | does not protect: the provider has access |
| The foundation | not applicable: the foundation does not take part in processing | is to protect: the isolation also covers us, and you hold the keys to stored data | is to protect the content: the gateway, that is, our part that bills requests, without insight into the content; we will show where encryption ends before the pilot |

Legend: “is to protect” means intended protection, “partial protection” protects the content but not everything around it, “does not protect” states a limit plainly, and “provider's declaration, to be verified” means that we do not confirm the protection until we have verified it ourselves. The provider's administrator is whoever manages the servers on which the model runs; a network observer sees the traffic between your device and the server, but the content is encrypted in transit; a person with physical access can open the server's chassis; the foundation is us as the operator of the service.

Three limits are worth knowing right away. Confidential computing does not fix an infected phone or computer. It does not protect against everyone who has physical access to the server: in 2025 researchers built, for less than a thousand dollars, a device that, with physical access to a server, makes it possible to forge the hardware's confirmation. Protection on servers also relies on the keys of the processor manufacturer, who must be honest.

More: [Suveria whitepaper, chapter 2](../whitepaper-suveria.md#s2) and [section 2.3](../whitepaper-suveria.md#s2-3).

## How a message travels through the system

Suveria is to consist of an app on your device, a gateway (our part of the system, which bills requests and enforces the spending limit), a confidential environment with the model, storage of encrypted copies and an optional relay that hides your address.

In the target option, a single message is to travel this path:

1. The app downloads the description of the approved release and checks the server's attestation.
2. It compares this confirmation with a public policy. The key with which it encrypts the message must be bound to it.
3. Only after a successful check does it establish an encrypted connection. A mismatch stops the data from being sent; switching to another option requires your conscious choice.
4. The environment processes the request with limited access to the network and tools, returns the result and deletes working data in accordance with the published policy.
5. The conversation or memory is saved only to the extent you choose.

Attestation helps establish what has been launched, but does not by itself prove that this code is secure; what is needed are code reviews and the possibility of independent verification. Before the pilot, we will show in the app where the encryption controlled by your device ends and whether the gateway sees the content.

We are especially careful when you connect sources containing messages from other people, for example a mailbox. Someone else's message may contain hidden instructions that try to get the model to reveal private memory. That is why the assistant cannot on its own send messages, open web addresses or change the Personal Canon (your collection of principles and values) without a person's confirmation.

When the service launches, we will publish a list of all types of data we collect about the operation of the service, with the purpose and retention period. We do not collect data outside the list.

More: [Suveria whitepaper, chapter 3](../whitepaper-suveria.md#s3).

## Your keys

The keys to private containers, that is, encrypted collections of data, remain under your control. The foundation does not store keys or parts of them, so it cannot recover access on your behalf or hand over your data. Recovering an account with the operator does not unlock the content.

Losing all copies of the key can mean permanent loss of data. That is why we are considering methods of recovery, which can be combined: a second device with access, a key written on paper or kept in a password manager, a hardware key, or splitting the key among several trusted people, none of whom can read the data alone. To start with, we recommend a second device and a key written on paper. We check every mechanism with a trial restoration of data.

More: [Suveria whitepaper, section 2.2](../whitepaper-suveria.md#s2-2).

## What cannot be seen, yet gives things away: the rhythm of transmission

The response flows to you in packets, that is, portions of data. Encryption hides their content, but not their length or rhythm. This is a side channel: information leaks not from the content, but from the way it is transmitted. Research from 2024–2025 showed that a network observer can reconstruct from this the topic, and sometimes the content, of a conversation. That is why in confidential mode we want to send the response in portions of a fixed size and at a fixed rhythm; this costs some latency and throughput.

More: [Suveria whitepaper, chapter 3](../whitepaper-suveria.md#s3).

## Releases that can be verified

Trust in the software is not to depend on a single person or on the foundation alone. Anyone can build the app themselves from the published source code and check that the result is identical to the one they install. At least two independent parties from outside the foundation are to reproduce the release and publicly confirm that it matches; until we find them, we label the release as not confirmed by third parties.

We are designing full protection for the installed app. In a browser, the code that verifies the server is delivered by the operator every time, so the browser version will clearly describe its lower level of protection.

More: [Suveria whitepaper, chapter 3](../whitepaper-suveria.md#s3).

## Multiple GPUs

The model we want to run does not fit on a single GPU, so data also flows between GPUs. Protection has to be checked both for the GPUs themselves and for the connections between them; the commercial label “secure” does not replace this. We compare a provider's offer only after a trial with our own app.

More: [Suveria whitepaper, chapter 5](../whitepaper-suveria.md#s5).

## How we will check whether it works

The most important trial: a team with operator privileges outside the confidential environment (gateway, disks, network, logs) tries to read the conversations of test accounts in which secret character strings have been hidden. If anyone extracts them, including us, the trial has failed.

Before we call any release confidential, we will document, among other things, correct attestation, refusal to send data after the code or key has been swapped, no content in logs, and deletion and recovery. The results, including the failed ones, go into the results log. Status as of 29 October 2026: we have not yet carried out any of the trials described.

We want to run the trials openly. If you work in security, cryptography, infrastructure or applications, or want to take a critical look at the project, write to salve@novusignis.org with the subject line “[Dołącz] Próby Suverii”.

More: [Suveria whitepaper, chapter 9](../whitepaper-suveria.md#s9).

## Read it and tell us what you think

You will find the full overview of options and threats, the app's safeguards and the list of open issues to be resolved in the [Suveria whitepaper](../whitepaper-suveria.md). If something puzzles you or seems wrong, highlight that passage in the document and use the “I have a comment” button, or write to salve@novusignis.org.
