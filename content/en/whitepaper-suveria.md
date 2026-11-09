# Suveria: private work with digital intelligence

Version of 9 November 2026. This document develops the principles of the manifesto that concern Suveria: how we want to protect privacy, how work with digital intelligence is to function, how much it costs and how we will verify it. The architecture described here is a design. Referring to an existing technology or to a provider's documentation does not mean that we have launched it in Suveria. We add the results of our trials in chapter 9, always with the date, the configuration version and the scope of the measurement.

*Translated into English by digital intelligence from the Polish original of 8 November 2026. Where the versions differ, the Polish text prevails.*

## 1. What Suveria is and why it is being created

Suveria is to be a private space on the internet where a person talks with digital intelligence, works on their own materials and returns to earlier thoughts, as in a home of their own behind a closed door. It is being designed by the Novus Ignis Foundation in Poznań, whose values are described in the [manifesto](manifest.md), with people from every part of the world in mind. It is based on open digital intelligence models, and we want to make our own software available as a digital public good with open source code.

Suveria is being created because we entrust more and more to conversations with digital intelligence: questions about health, relationships, work, money and life plans. In many popular services the content of such conversations goes to the provider's servers, where the provider can read it, and its protection depends on the provider's rules and on trust in the provider. We want people to be able to talk about the most important matters without fear that such close insight into a person will one day be monetized or used to influence them. We also want everyone to pay for what they actually use, to see what they are paying for and to set their own spending limit.

In Suveria we want people to be able to:

- talk with digital intelligence about personal and professional matters while seeing where the conversation is processed and who can see it;
- work on their own documents and files, and save the results and move them elsewhere in open formats;
- store conversations, files and the assistant's memory primarily on their own devices, encrypted with a key that remains under the user's control;
- with their own consent, use the memory of earlier conversations, return to the old reasons for decisions and build a Personal Canon (*Canon Personalis*), that is, a collection of their own principles and values;
- choose a way of working, from a model on their own device to a confidential environment on a server, with clear information about what each one protects against;
- pay for actual use, with a spending limit they set themselves;
- refine a thought privately and then consciously bring it into the shared conversation in OmniForum.

We are aiming the first release at people for whom verifiable privacy is the reason for their choice.

We want the very first day in Suveria to give a calm sense of being at home, in a private workshop arranged at one's own pace. The user will be able to tell the assistant about their affairs and goals; we also want to make it possible to bring into Suveria one's own notes and archives of earlier conversations with other digital intelligence services. Such an archive is to remain encrypted and organized on the user's device, and only the portion chosen for the current question is to go to a remote model (chapter 3).

We measure the value of the service by whether it helps people achieve their goals, keep their privacy and make decisions on their own. The terms are to be clear and easy to find, and the user is to control their spending and be able to export their own materials and leave.

Full privacy, including from us as the people who run the infrastructure, is the goal to which we subordinate the design. Protection is to rest on safeguards that can be independently verified, not on trust in the foundation. That is why every release describes specifically what is protected, against whom, under what conditions and what gaps remain.

The starting point is a text conversation with a single model and work on a chosen document, with a clearly described level of protection, a spending limit and export of the result. Further capabilities, such as memory, search, integrations and performing actions, each get a separate scope of permissions. A single convenient interface can combine several modes of work, as long as the person sees where the data goes and what rules apply before sending it.

What the first release will use depends on how much funding the foundation raises before it is launched. The most likely option is a third-party provider's confidential API; such services are available today in the USA, and at the start their confidentiality is the provider's declaration, which we will verify. If there are enough funds to rent our own servers in a confidential environment, the first release may run on them from the start. Until the trials in chapter 9 produce a positive result, we label each of these options as declared protection, not confidential protection. Chapter 2 describes the target protection. Before launching the pilot, we will describe what this means for the protection of the personal data of people in Europe.

Using Suveria is not consent to the use of conversations for training models. Users' content goes into research materials only with separate, informed consent, and the remaining materials come from the foundation's public body of work and other sources with a clear basis for use, as described in the [materials and benchmark whitepaper](whitepaper-materialy-i-benchmark.md).

Suveria complements OmniForum, the shared space for conversation and decisions: one provides a private workshop, the other a public podium. The values from which both projects grow are described in the foundation's manifesto. In what follows we show in turn:

- what we protect and against what, and where the data and keys are (chapter 2);
- how a message travels from the device to the model and how to verify it (3);
- how we limit abuse without reading private conversations (4);
- how computing on multiple GPUs works (5);
- what models, memory and tools we are planning (6);
- how much computing power is needed, from 30 people to all of humanity (7);
- how much it costs, in a dated calculation (8);
- how we will check whether the promises work: acceptance trials and the results log (9).

## 2. What we protect and against what

We protect the content of conversations and files, history and memory, keys, billing data and metadata, for example the time of a connection, the network address and the size of a request. Each of these areas requires different measures.

The table below shows against whom each of the five ways of working described in section 2.3 protects. Protection in the server options relies on attestation, that is, a hardware-signed confirmation of what software is running on a remote machine and in what protection mode. We filled in the cells on the basis of the later chapters of this document; “provider's declaration” means that we do not confirm the protection until we have verified it ourselves.

| Against whom | Local model on a device without a network connection | Local model on a network-connected device | Processing in a confidential environment on servers | A third-party provider's confidential API | A model provider's external API |
| --- | --- | --- | --- | --- | --- |
| The provider's administrator | not applicable: processing on the device | not applicable to the model itself; with integrations, depends on the chosen services | protects: hardware isolation that the server administrator cannot look into | provider's declaration, to be verified | does not protect: the provider has access to the content |
| Another customer on the same machine | not applicable | not applicable | protects: the isolation covers other customers | provider's declaration, to be verified | depends on the provider: customers are separated by its software, without hardware isolation |
| A network observer | not applicable: no network traffic | partial protection: the integrations' network traffic requires assessment | partial protection: content encrypted in transit; metadata (time, address, size and rhythm of packets) require separate measures (chapter 3) | partial protection: as in the confidential environment, if the connection key is bound to attestation | partial protection: content encrypted in transit, metadata as in the previous column |
| A person with physical access to the server | not applicable to a server; what matters is physical access to the device | not applicable to a server; what matters is physical access to the device | does not protect: in someone else's data center the provider has access; with our own hardware, visible physical oversight | does not protect: the provider has access | does not protect: the provider has access to the content anyway |
| The foundation | not applicable: the foundation does not take part in processing | not applicable: the foundation does not take part in processing | protects: the isolation also covers us as the operator; the user holds the keys to stored data | is to protect the content: the gateway bills requests without insight into the content; we will show where encryption ends before the pilot (chapter 3) | is to protect the content from us: billing without insight into the content; the provider sees it |
| The processor manufacturer | depends on trust in the device's hardware | depends on trust in the device's hardware | does not protect: attestation relies on the manufacturer's keys, and the manufacturer must be honest | does not protect: as in the previous column | irrelevant given the provider's access to the content |

Confidential computing changes the cost of an attack: instead of an administrator's remote access, physical tampering with the hardware is needed.

Below we describe how the target option with our own confidential environment is to work; the table in section 2.3 shows how the other options differ. What this means in practice, along the successive stretches of the path a message travels:

- **On the user's device** the text is readable, because the user writes and reads it. It is protected by an app that asks only for the permissions it needs, by updates and by care with backups. We cannot protect it if malicious software is running on the phone or computer.
- **On the way to the server** the message is encrypted so that only the verified place of processing can read it. Before the app sends it, it checks whether exactly the software we published is running on the other end.
- **On the server** the model has to read the content in order to respond, so it does so in a closed hardware environment that neither the server administrator nor other customers can look into. We check whether this isolation covers the processor, the GPUs, memory and the connections between them.
- **In storage** the conversation history and the assistant's memory are encrypted with a key held by the user. We check backups, recovery of access and deletion.
- **In running the service** billing, diagnostics and error reports work without the content of conversations, and every type of data collected is public (chapter 3).
- **With external tools**, when the assistant is to do something outside Suveria, for example search for information on the internet, it sends only what the user has agreed to and shows where it is sending it.

Confidential computing does not fix an infected user's computer. Nor does it protect against everyone who has physical access to the server: in 2025 researchers showed that a device attached to the memory bus, built from parts costing less than a thousand dollars, makes it possible to extract attestation keys in Intel and AMD solutions, and thereby also to forge attestation in NVIDIA's confidential computing, and processor manufacturers consider such attacks to be outside the scope of their protection.[^teefail] There also remain dependencies on hardware manufacturers, on the correctness of the cryptography, the application code and the update process. A provider can refuse service even when it cannot read the content. The threat model must therefore distinguish insight into content, inference from metadata, changes to behavior and interruption of service, and for each option indicate who must be honest for the protection to work.

As long as we use other people's data centers, the provider has physical access to the hardware and we cannot verify this; we say so for each option. With our own hardware (steps 3–4 in section 8.2) we want to make such access visible through:

- an inventory of devices;
- access control at entrances;
- seals with a random pattern and sensors that detect opening of the chassis;
- a work log;
- cameras of independent observers, with an image that shows the current value from a public randomness beacon signed with the machine's key;
- and, in the longer term, a server room that anyone can see.

Servicing and replacement of parts take place as announced, public procedures. Visible physical oversight reduces risk and makes it possible to detect many events, but it does not prove the machine's entire history or the absence of tampering before delivery, and attacks similar to the one described above can lead to forged attestation evidence. That is why after the chassis is opened, a part is replaced, an unplanned restart occurs or another suspicious event takes place, we stop processing private content on that machine. We replace the session and application keys, but a new attestation does not by itself restore trust if the suspicion concerns the basis of hardware attestation; we describe the conditions and evidence for readmission in advance. The keys that encrypt users' data have separate protection and recovery, so such a procedure does not take away people's private body of work.

### 2.1. Your own devices and optional servers

The primary place for storing private conversations, files and memory is to be the user's devices, in encrypted containers, that is, collections of data whose content is read with the appropriate key. This is the local-first approach: data is saved first on the device, and servers can support backups and synchronization.[^local-first] Saved materials are to remain available even after a person stops using the foundation's services; tasks that require a remote model depend on the availability of the chosen computing service.

Optional storage on selected servers serves backups and the reconciliation of changes between devices. We encrypt the content on the device before sending it, so that the operator storing the copy receives only an encrypted record, without the key to read it. The user chooses the storage provider and the devices authorized to read it. We separately limit the disclosure of metadata, such as the time and size of the copy being transferred.

### 2.2. Keys and recovery of access

The keys to private containers remain under the user's control. The recovery procedure clearly indicates whether access is restored by a second device, a saved recovery key or another consciously chosen mechanism, and to whom it gives the ability to read. Recovering an account with the operator does not unlock the content of the container. Losing all copies of the key and all means of recovery can mean permanent loss of data, which is why we check the chosen mechanism with a trial restoration of data and describe it in clear instructions.

We are considering several methods of recovery, which can be combined: a second device that already has access; a recovery key written on paper or kept in a password manager; a hardware key; splitting the key among several trusted people, for example so that any two of three can restore access together, while none of them can read the data alone. The foundation does not store keys or parts of them, so it cannot recover access on the user's behalf or hand over their data.

To start with, we recommend a second device and a key written on paper; splitting the key among trusted people is an option for those who want it.

### 2.3. Protection options

We want to compare five ways of working, because each one protects against something different:

| Option | Where processing takes place | What needs to be assessed |
| --- | --- | --- |
| Local model on a device without a network connection | On the user's device | The state of the device, physical access, storage media and copies of data |
| Local model on a network-connected device | Locally, and with integrations also in the chosen services | App permissions, updates, network traffic and the scope of data passed to integrations |
| Processing in a confidential environment on servers | In a remote environment whose configuration is confirmed by attestation | Verification of the environment, administrators' access and physical access to the hardware, protection of transmission and processing, metadata and keys |
| A third-party provider's confidential API | In the provider's confidential environment, whose configuration is to be confirmed by attestation | Whether the connection key is bound to attestation, whether attestation covers the processor and the GPU, whether a specific request can be linked to a specific machine, who has physical access to the hardware, data retention and jurisdiction; until we have verified it ourselves, we treat confidentiality as the provider's declaration |
| A model provider's external API | At the external provider | The provider's terms, access to content, retention and jurisdiction; we do not extend the promises of confidential execution to this option |

Independent verification of the server requires an installed app. In a browser, the code that verifies the server is delivered by the operator every time, which is why we label this method as less protected.

A network-connected device can have more points of attack than an isolated server environment, so the location of computing alone does not determine security. No option gets the label “full privacy” before the specific configuration has been verified. In every conversation the user sees which option they are working in, and changing the option requires their conscious decision. Your own key to an external API is used to bill access, but does not provide confidentiality from the provider. This option is not the default option for private Suveria, and before content is sent we show whether the provider may use it for training models and how long it stores it.

We are also analyzing a direction that is not yet in this table: a trusted swarm. The model would then run on the hardware of several people who know and trust one another, for example a family, friends or a small community, and each of them would share some of their computer's computing power. The privacy of such an option rests on trust in these people, not on technology, because their computers see the content being processed, and that is exactly how we want to describe it. This is an idea we are only beginning to analyze, but it is one of the paths we want to explore.

A secure server will not protect text read from a compromised phone, and a more secure phone will not fix the server, which is why we design the app together with device protection. We want the Suveria app to work without Google services, for example on GrapheneOS, to be available outside the Google Play store as well, and to have reproducible builds: anyone can build the app themselves from the published source code and check that they got a file identical to the one they install. We are also planning safeguards in the app itself: blocking screenshots, a keyboard mode that does not learn from typed text, excluding private data from cloud backups, hidden notification content and an app lock. On the foundation's website we will prepare a guide to securing your own devices at three levels: from basic settings and updates, through stronger isolation of work and keys, to proven configurations for people with the highest requirements, such as Qubes OS on a computer with open firmware. Using Suveria does not require buying the recommended hardware, and the name of an operating system is not a certification of the whole device.

In every conversation we will show a protection card (*Charta Tutelae*): a list of the elements on which the privacy of that conversation depends, each in one of three states:

- **Verified by us:** we have verified it ourselves, with the date, the version and a description of how we did it.
- **Declared by the provider:** the provider says so, and we have not yet checked it.
- **Not protected:** this option does not protect it, for example the timing and length of messages visible to the network provider, the provider's physical access to the hardware or the jurisdiction in which the server is located.

The “verified by us” state carries the date of the last check and expires: after a set time without a new check, it returns to the “declared” state. We will separately show known breakdowns of trust, for example an incident at the provider or an unconfirmed configuration change. The card is the same for everyone and does not depend on the price, and an option in which even one element is only declared is not labeled “full privacy”. The overview at the beginning of chapter 2 and the table of options in this section describe the options in general, while the card will show the state for this specific conversation.

## 3. The path from the device to the model

Suveria is to consist of several parts:

- an app on the user's device;
- a gateway that bills requests and enforces the spending limit;
- a confidential environment with the model, our own or at a provider;
- storage of encrypted copies;
- an optional relay that hides the user's address.

The gateway is to run in a confidential machine. Before the pilot, we will show in the app where the encryption controlled by the user's device ends and whether the gateway sees the content, and if so, that it does so only inside the confidential environment.

Encrypted storage and confidential processing require separate safeguards. A model running on a server needs readable content for its task in a protected computing environment; encrypting copies of files alone does not protect this stage.[^apple-pcc] The app shares only the portion chosen for a given piece of work, without passing on the key to the entire private container. The session description indicates where the content becomes available for computing, what limits the operator's insight and what happens to the data after the result is returned.

Proposed course of a session:

1. The app downloads the description of the approved release and checks attestation, that is, a cryptographic confirmation of specified properties of the running environment.
2. It checks that the hardware, the protection state and the software measurements match a public policy. The key of the data recipient must be bound to this confirmation.
3. After a successful check, it establishes an encrypted connection with the approved environment. A mismatch stops the data from being sent; switching to another option requires a conscious choice.
4. The environment processes the request with limited access to the network and tools, returns the result and deletes working data in accordance with the published policy.
5. The conversation or memory is saved only to the extent chosen by the user.

Attestation helps establish what has been launched, but does not by itself prove that this code is secure. What is needed are code reviews, reproducible builds of the software from source code (described in section 2.3), a register of approved versions and the possibility of independent verification. The Apple Private Cloud Compute architecture is a reference for us on how to link protection with transparency in releasing software; it is not a certification of our project.[^apple-pcc]

We want to secure releases so that trust does not depend on a single person or on the foundation alone:

- every release is to be reproducible from source code, and at least two independent parties from outside the foundation reproduce it and publicly confirm that the fingerprint matches; until we find them, we label the release as not confirmed by third parties;
- the fingerprints of approved releases go into a public append-only register, and its successive states are confirmed by independent witnesses;
- a new version goes onto the servers after approval by several people, including at least one from outside the board;
- the keys needed to handle data are given only to an environment that has passed attestation.

We are designing the full protection option for installed apps with signed, verifiable releases, protection against rollback to a faulty version and secure key storage, because in a browser the code that verifies the server is delivered by the operator every time. The browser version clearly describes its lower level of protection. Reproducible builds make it possible to compare a release with the code, but the assessment of the code itself and of the configuration still comes from reviews, audits and bug bounties, and every incident goes into a public register.

To limit the disclosure of the user's address, we can examine relaying based on Oblivious HTTP, which separates knowledge of the sender from knowledge of the content of a request under a specified trust model.[^ohttp] Collusion between relays, traffic correlation and implementation details still require assessment, which is why we do not describe the use of this protocol alone as full anonymity.

Encryption and confidential computing do not hide the length or rhythm of the packets in which the response flows. Research from 2024–2025 showed that a network observer can reconstruct from them the topic, and sometimes the content, of a conversation.[^weiss-keylogging][^whisper-leak] That is why in confidential mode we want to send the response in frames of a fixed size and at a fixed rhythm, not to share the prompt cache between users and to turn off speculative decoding. These measures cost some latency and throughput; we will include this in the calculation.

We also protect the infrastructure by limiting what individual parts of the system can do: resource limits, isolation of tasks and blocking outgoing connections by default from the node that processes the conversation. This block is to be part of the software whose fingerprint is visible in attestation: changing it changes the fingerprint, so the app will refuse to connect. We treat the provider's network rules as a second layer, not as a guarantee. Permitted external actions pass through a separate tool layer with permissions set by the user. Before deployment we will check the effectiveness of these boundaries, the way incidents are detected and the minimum scope of metadata needed. The goal is the security of shared resources while preserving the confidentiality of the content of conversations.

We are especially careful when the user connects sources containing messages from other people, for example a mailbox. Someone else's message may contain hidden instructions that try to get the model to reveal private memory. That is why we separate content from outside from the user's instructions: while organizing such content, the assistant cannot on its own send messages, open web addresses or change the Personal Canon without a person's confirmation.

Everything we know about how Suveria works, anyone can know. When the service launches, we will publish a list of all types of data we collect about the operation of the service, with the purpose and retention period, and we will make the data itself available in aggregate form: token usage, models used, machine load, waiting time in the queue, failures and costs. Everyone sees them in the same place where we see them. Before publishing summaries, we check whether the behavior of a specific person can be identified from them: we set a minimum group size, a publication delay and the data we omit. We do not collect data outside the list; if it turned out otherwise, we would treat this as a serious incident and describe it publicly.

## 4. Limiting abuse without insight into private content

We also apply the protection of dignity to people who may be affected by the use of our tools. We want to counter abuse without reading private conversations: through the principles the assistant itself follows, limits on the permissions of tools and network connections, resource limits and protection against mass account creation. We do not create hidden access to private content, because it would weaken everyone's protection.

It will be possible to create an account in several ways, from completely private (a key on your own device, without an email address) to convenient (signing in through an external provider). For each method we will show, before the choice is made, who outside the foundation learns that the account has been created and what data they see, and what happens if that provider disappears. The way an account is created does not affect a participant's rights; the right to vote in OmniForum is a separate credential added to the account.

We assess privacy and the limiting of abuse separately. We are designing Suveria so that the foundation does not have data it could hand over about a specific person: content is encrypted with the user's keys, we collect data about the operation of the service only within the public scope described in chapter 3, and we limit personal data to the minimum required by law for payments and accounting; we also publish its scope. If someone demands a specific person's data from us, we want to be able to answer honestly that, beyond this publicly described minimum, we do not have it. For every safeguard against abuse, we will describe what data it needs, how long we keep it, what consequences it has for an honest participant and how a wrongful block can be challenged.

We will also describe how we receive reports from people who consider themselves harmed, and what we can do then without access to the content of conversations: for example, restrict the permissions of tools or the account's resources, check billing data and metadata to the extent that we store them, or tell the person reporting where to look for help. The legal obligations of the operator of such a service require separate analysis before launch.

These safeguards are goals and options to be tested, and none of them will detect all abuse. For each one, we will indicate which threats it addresses, what it does not detect and what can be checked without the operator having insight into private conversations. The result of this assessment determines the conditions for making a given feature available.

When a conversation concerns a threat to life or health, the assistant is to provide information about available help, for example emergency numbers, without sending anything outside the private environment.

### 4.1. Public assistant instructions and a shared library

How the assistant behaves is also determined by its main instruction and its way of working: how it breaks a task down into steps, uses memory and checks its answers. In Suveria a person is always to be able to read the full instruction of their assistant. The shared infrastructure is to make available only models and settings that pass the public trials of the benchmark; above this minimum, it is the user who chooses the style of work, from calmly organizing one's thoughts to a demanding conversation in which the assistant points out gaps in one's reasoning. We want to maintain an open library of proven instructions, which participants improve in OmniForum and check in the benchmark.

## 5. Computing on multiple GPUs

The model in chapter 6 does not fit on a single GPU, so protection must also be checked in the connections between GPUs: the PCIe bus connects the processor with the GPUs, and NVLink and NVSwitch connect the GPUs with one another.

When a model uses several GPUs, data also flows between them, so protection must be checked both for the GPUs themselves and for the connections. The name of the GPU is not enough to order a confidential service: the appropriate machine, processor, connection topology, firmware, drivers and runtime software must be confirmed, and then their joint operation must be checked.[^nvidia-platformy]

In Hopper Protected PCIe mode, described in the PPCIe v2 documentation, the NVLink and NVSwitch network belongs to the trusted part of the system, so PCIe encryption does not mean encryption of every connection between GPUs.[^nvidia-ppcie-v2] The NVIDIA R595 documentation describes, for Blackwell GPUs, a multi-GPU confidential computing mode with encryption of NVLink connections and support for up to eight GPUs in a single confidential virtual machine.[^nvidia-blackwell] This is a basis for checking the configuration, not proof that every rental of B200 GPUs includes this feature. Different releases have different compatibility matrices, so we do not assemble a configuration from arbitrarily chosen versions.

An inquiry to a provider covers:

- the specific protection mode and the possibility of independent attestation;
- exclusive use of the required resources and the region;
- administrators' access and physical access to the hardware;
- data retention;
- delivery time and full cost.

We compare an offer only after a trial with our own app. The commercial label “secure” does not replace this information.

## 6. Model, memory and tools

The project is based on open models that can be run independently. Suveria is to be available to people all over the world, in their own languages, which is why when choosing a model we consider quality in many languages, understanding of intentions, reliability, license, cost and whether it can run in the required protection architecture. When the need arises, we can run, alongside a general model, models that handle specific languages better. Open weights make some uses possible, but they do not settle whether the data and the entire process of creating the model are open.[^osi]

The first candidate is DeepSeek-V4.1-Flash, a model under the MIT license, which allows it to be used for services as well.[^deepseek] It is large but economical: the manufacturer states 552 billion parameters in the main part, that is, numbers set during training, and an additional Engram memory of 196 billion parameters, while only 8–16 billion parameters work on each successive word, which is why it responds quickly and cheaply (calculation in chapter 8). All the parameters must, however, fit in GPU memory, so at least four modern GPUs are needed. The parameters of this model are already stored in an economical form, with fewer digits for each number; such storage is called quantization and reduces the memory needed, but it can lower quality, so we check this on our own tasks for every version. We also compare it with smaller models: we choose the larger one only if it clearly performs better on tasks that matter to people.

The second candidate is Kimi K3.1 Pro from Moonshot AI, released on 23 October 2026. The manufacturer describes it as a further-trained version of Kimi K3 with about 3 trillion parameters and a context of up to a million tokens, and has announced plans to release the full weights before 4 November 2026; the license has not yet been announced.[^kimi-k31] The detailed data we use for the comparison come from the predecessor's model card: Kimi K3 has 2.8 trillion parameters, of which 104 billion work on each token, and its own license, not approved by the Open Source Initiative.[^kimi-k3] In the Artificial Analysis index in the version of 28 October 2026, Kimi K3.1 Pro scored 46 points against 32 for DeepSeek-V4.1-Flash, but it is several times more expensive and slower.[^aa] The Kimi K3 weight files take up about 1.56 TB, and running it additionally requires memory for context and computation, so we do not decide whether the model will work on the basis of the total GPU memory alone. The SGLang engine's recipe describes a verified configuration of Kimi K3 on eight B300 GPUs; this is not yet a test of Kimi K3.1 or of a confidential configuration.[^spheron-kimi][^sglang-k3] After the weights are published, we will check their size and format, the license, the engines' recipes, the capacity on a specific configuration and availability in confidential APIs. We will add the result with a date as the first update of this document, also if the weights have not been published or the license terms turn out to be unsuitable.

**Update of 9 November 2026.** The Kimi K3.1 Pro weights are public and available without registration; the manufacturer's repository was created on 2 November 2026.[^kimi-k31-wagi] They take up about 1.56 TB in 96 files. The model was trained in a compact format from the start: the expert weights are in MXFP4 format, the rest in BF16. The model card gives 2.8 trillion parameters, of which 104 billion work on each token, and a context of up to 1,048,576 tokens; the earlier “about 3 trillion” was the name of the model class, not a count. The license is the manufacturer's own (Kimi K3.1-Pro License). It allows the model to be used for services as well, with two conditions: a separate agreement with the manufacturer when the entity providing access to the model as a service exceeds USD 20 million in revenue over 12 months, and the model's name shown in the interface when there are more than 100 million monthly users or more than USD 20 million in monthly revenue. The Open Source Initiative has not approved it. At the foundation's current scale, neither of these conditions applies to us; this is our reading of the text, not a legal opinion.[^kimi-k31-licencja] The vLLM and SGLang engines have recipes for this model; the smallest configuration described is eight latest-generation GPUs (one 8 × B300 node or two GB300 trays), and support is so far only in development versions of both engines.[^kimi-k31-silniki] No one has yet published the throughput of such a configuration in normal operation, so today we cannot calculate how many people one configuration will serve. In confidential APIs we found this model on 9 November at one provider, labeled as experimental, at USD 4 per million input tokens and USD 20 per million output tokens; we have not yet checked the attestation of this offering.[^kimi-k31-poufne] In the Artificial Analysis index (version 5.0.1, read on 9 November), Kimi K3.1 Pro has 46 points and DeepSeek-V4.1-Flash 33.[^aa-2026-11] Conclusion for today: the license and the weight format do not close the path, but the model needs at least eight GPUs, and its cost and speed in the confidential variant remain to be measured. DeepSeek-V4.1-Flash remains the first candidate.

We announce a change or withdrawal of a model in advance. The conversation history stays with the user: they can choose a successor model, export their data or stop working. The moment a model changes is to be visible in the conversation, and moving private context to a new model requires the user's decision.

We will publish in full the principles according to which the assistant responds, together with every release. The model itself also carries the choices of its creator, for example topics it avoids; we check them in the benchmark and describe them when choosing a model.

The memory of earlier conversations is to work with the user's consent and be openly editable. We distinguish original statements, the model's summaries and information confirmed by the user. Every entry can be deleted or corrected, its origin can be seen, and the user can specify in which tasks it may be used. The assistant clearly distinguishes its own suggestion from a position that the person has consciously recognized as their own.

Performing actions requires permissions granted for a specific purpose and time. The content of a web page or document is material for analysis, not an instruction to change these permissions. External actions, spending, publications and deletions require proportionate confirmations and an action log available to the user.

### 6.1. The Telescope of Thought and the Personal Canon

The idea of the Telescope of Thought (*Telescopium Mentis*) grew out of the Overton window, a concept that describes the range of ideas that are considered acceptable in a society at a given time. For a single person, it is about the range of thoughts that they consider permissible for themselves at a given time. The Telescope is to be such a window for one person and for them alone: it lets them see a record of their own reflections and values from different moments, and how these changed over time.

The Telescope of Thought is to serve returning to one's own reasoning: what I knew then, what I wanted and why I changed my mind. It can also help set events chosen by the user, information about the world and their own actions against their Personal Canon, that is, the collection of principles and values they have written down and recognize as their own. The comparison concerns a situation that the user describes or points to themselves; it is they who determine the material and the scope. The model shows possible connections together with the source of the principle invoked and a description of the event, distinguishing confirmed information from interpretation and uncertainty. The proposed interpretation can be corrected or rejected, and we assess earlier positions taking into account their time and context.

A tension that is noticed may concern the principle itself, a conflict of values, the conditions of one's surroundings, a person's limitations or an inaccurate interpretation by the model. A person can keep an ideal and accept a present inconsistency, refine a conviction, consider changing their actions or surroundings, or leave the question open. The Canon is to help people understand their own choices: we do not create scores of morality or a public ranking of consistency. Private reflection remains private, and recording it does not mean publishing it or casting a vote.

We will start carefully. In the first version, the Telescope of Thought works only on a single situation that the user points to themselves, for example a decision they want to return to; it does not follow their life on an ongoing basis. The user decides how often they use it, what notes and memories they share and when they delete them. In this trial we check whether the connections shown are understandable, whether they give a sense of being in charge of one's own choices and whether the tool creates pressure to constantly hold oneself to account. We also consider it a good result if someone, after reflection, accepts that they do not always act in accordance with their principles, or leaves the matter open: the tool is to help people understand themselves, not force decisions.

### 6.2. Open formats, portability and interoperability of tools

We want to develop Suveria as a digital public good, with open source code and documentation; our point of reference is the Digital Public Goods Alliance standard.[^dpga] The data transfer format has a public description, a version and rules for preserving information when the version changes. We use existing open standards first, and document the extensions we need.

An export includes selected originals, history, sources and connections, as well as the distinction between the user's words, the model's elaboration and the meaning confirmed by the author, and also the structure of the Personal Canon. A downloaded package can be read without an active Suveria account, after decryption by an authorized person.

APIs, that is, documented ways for programs to communicate, are to make it possible to work with materials in other tools, including ones people build themselves. The user chooses the scope of data and the permitted actions, and can withdraw an integration's permissions. Revoking a permission stops further access; what happens to copies passed on earlier also depends on the recipient.

A private space can also serve work for shared projects. The user chooses the materials they want to hand over for acceptance or publication, and the tool helps remove from them, locally, access keys, passwords, personal data and information about unpatched vulnerabilities. Using privately paid resources does not require disclosing working conversations. For a task funded from the foundation's shared resources, the scope of the public record, the choice of a pseudonym and the preparation of materials are set in advance by the [foundation's rules for open workshops](whitepaper-zasady-fundacji.md) (chapter 11.1). From reflections in Suveria, a person can also consciously draw out a single question or argument and publish it in OmniForum; this step, described in the manifesto as the Ignis Ceremony (*Caerimonia Ignis*), always requires a separate decision.

## 7. Scale: from 30 people to all of humanity

The number of accounts alone does not determine the infrastructure needed. What matters is activity, the length of questions and answers, the number of simultaneous sessions, an acceptable waiting time and the cost of tools. The example below is a load model for a trial, not a demand forecast or an offer.

Assumptions: each of N people is active every day and makes 20 requests a day, an average request includes 1,500 input tokens and 600 output tokens, and a month has 30 days. A token is a unit of text processed by the model; its length depends on the language. A real load must add longer context, document processing, reasoning tokens and auxiliary calls.

| Active people | Requests per month | Input per month | Output per month | Average generation over a day | Hourly peak in the worldwide scenario, about 1.51 × average |
| --- | ---: | ---: | ---: | ---: | ---: |
| 30 | 18,000 | 27 million tokens | 10.8 million tokens | 4.2 tokens/s | 6.3 tokens/s |
| 100 | 60,000 | 90 million | 36 million | 13.9 tokens/s | 20.9 tokens/s |
| 1,000 | 600,000 | 900 million | 360 million | 138.9 tokens/s | 209 tokens/s |
| 100,000 | 60 million | 90 billion | 36 billion | 13,889 tokens/s | 20,921 tokens/s |
| 1 million | 600 million | 900 billion | 360 billion | 138,889 tokens/s | 209,208 tokens/s |
| 1 billion | 600 billion | 900 trillion | 360 trillion | 138.9 million tokens/s | 209.2 million tokens/s |
| 10 billion | 6 trillion | 9 quadrillion | 3.6 quadrillion | 1.39 billion tokens/s | 2.09 billion tokens/s |

We are planning Suveria as a worldwide service, available in many languages. We do not know how participants will be distributed across time zones, so we compare two scenarios, which measurement will verify. In the worldwide scenario we assume regional shares proportional to the number of internet users according to the ITU for 2025, and the same assumed daily shape in every zone: an evening peak and a quiet night.[^itu] The zones partly fill in one another's troughs, so the hourly peak is about 1.51 × the average, and the lowest traffic about 0.49 ×. In the scenario concentrated in a single region, for example in Europe, the peak is about 1.87 × the average, and the night almost nothing. Such a distribution can also occur at large scale; it means poorer utilization of our own machine and more frequent use of the confidential API, or longer waiting at the peak. Both values follow from our assumptions, not from observation of future participants. Short spikes within an hour are to be smoothed out by a short queue with a visible waiting time, and traffic above the capacity of our own machine can be taken over by the confidential API; we will measure the waiting time, including its 95th and 99th percentiles, in the pilot, together with the queue limit and the behavior once it is exhausted. The load trial will also cover a sudden influx of new people, for example five times the average traffic. This is total output throughput; it does not replace measuring the latency of a single conversation or the cost of processing input. The test should reproduce the distribution of sessions, long contexts, failures and the queue, not a single convenient query.

The peak multiplier compares the busiest hour with the average. It comes from a model of a day divided into 24 hours: we shift one daily shape across eight regions and add them up according to the assumed shares. This is a scenario for the calculation; it does not compute the waiting time of an individual query.

To see what this calculation looks like on a global scale, let us carry out a thought experiment. If each of 10 billion people used Suveria as in the assumed profile, about 2.1 billion output tokens per second would be needed at the peak. With the performance measured for DeepSeek-V4.1-Flash, about 930 tokens per second per B200 GPU, that is about 2.25 million GPUs and, at about 1.75 kW per GPU including the server (our assumption, without measurement), about 4 GW of power. For a billion people, that is about 225,000 GPUs and 0.4 GW, for a million about 225 GPUs. For comparison, Epoch AI estimated at the beginning of 2026 that the world's installed computing power for digital intelligence exceeds 15 million H100 GPU equivalents and requires more than 10 GW of power.[^epoch] This is a simplification: the assumed profile is light, and intensive work, larger models and images need many times more, while hardware and models change quickly. It does, however, show the order of magnitude: everyday help from digital intelligence to this extent for every person would require less power than what is already running in the world today. This is a simplified calculation, not proof that such infrastructure would be available for this purpose.

## 8. Costs and a dated calculation

The monthly cost of a fixed reservation can, as a first approximation, be written as: number of GPUs × price per GPU-hour × number of hours paid for, plus memory, disks, transfer, security, monitoring, operations, payments and taxes. It must be checked which of these items an offer already includes. For round-the-clock operation a month has from 672 to 744 hours; 730 hours is an average approximation.

In the calculation we compare five cost options: a local model, our own instance on rented hardware, our own instance in a confidential computing environment, with protection declared by the provider and to be verified, a third-party provider's confidential API and an ordinary external API. The cost options correspond to the protection options in section 2.3; we show renting a machine without confidentiality only as a price reference point, not as a Suveria option. We are not yet pricing the local model, because the cost depends on the user's device. We compare the same range of quality, availability and protection. The break-even point is the cost of the full service divided by actual utilization, not the cost of the GPUs divided by the number of registered accounts. An external API makes it easier to test users' needs, but its provider has its own rules on access to data, so we do not extend the promises of confidential execution to it.

### 8.1. Dated calculation: as of 29 October 2026

The manifesto puts forward the hypothesis that even with a relatively small number of regular participants, shared infrastructure can give more computing power and digital intelligence for every dollar than closed services, with privacy protection based on verifiable safeguards. Below is its calculation at prices of 29 October 2026. Assumptions: the usage profile from chapter 7 (20 requests a day of 600 output tokens each) and the worldwide scenario (hourly peak about 1.51 × the average), prices excluding taxes, 730 hours a month for converting rental prices. The number of people per machine means as many participants as the machine can serve at the hourly peak: output throughput per second × 86,400 / (20 × 600 × peak multiplier). The permissible number of people will also be determined by the measured waiting time for a response. In parentheses we give the scenario concentrated in Europe (multiplier about 1.87). For DeepSeek-V4.1-Flash we adopt the measurement by the provider Lambda on four B200 GPUs: about 3,714 output tokens per second with 64 simultaneous requests.[^lambda-v41] The measurement was made with speculative decoding, which we do not want to use in confidential mode (chapter 3). According to our September estimate, throughput may then be lower by as much as about 30%, which raises the cost per person in a similar proportion. For H200 and B300 GPUs there is no measurement of this model; we assume that every GPU set with one copy of the model (8 × H200 or half of an 8 × B300 machine) achieves the performance of four B200 GPUs. This is an optimistic assumption: the H200 is an older generation, confidential mode may slow down work, and the Lambda measurement concerns longer requests than our profile. That is why we also give a conservative variant with half of this throughput.

The model's weights take up about 511 GB, and the vLLM engine recommends about 614 GB of GPU memory. Four H200 GPUs (564 GB) are not enough, which is why one copy on H200 needs eight GPUs. The engine developer's recipe for this configuration was still being verified on 29 October, and in H200 GPUs the connection between GPUs (NVLink) is not hardware-encrypted, unlike in the B200 and B300.

| Option | Confidentiality | Monthly cost | People per machine | Compute-only cost per person |
| --- | --- | ---: | ---: | ---: |
| DeepSeek API | none, the provider sees the content | according to use | not applicable to a single machine; the provider's limits and availability | USD 0.35–0.70 |
| Confidential API with DeepSeek-V4.1-Flash (Confidential AI, Tinfoil, Phala) | declared by the provider, to be verified | according to use | not applicable to a single machine; the provider's limits and availability | USD 0.70–1.25 |
| Kimi K3.1 Pro API (Moonshot) | none | according to use | not applicable to a single machine; the provider's limits and availability | USD 5.40 |
| Confidential API with Kimi K3 (Phala, NEAR AI) | declared by the provider, to be verified | according to use | not applicable to a single machine; the provider's limits and availability | USD 8.10–8.91 |
| Rented confidential machine 8 × H200 (Phala), DeepSeek, one copy of the model | attestation of the processor and GPUs, to be verified | USD 23,506 with a 180-day commitment, USD 32,266 on demand | about 17,750 (14,300), capacity assumption | USD 1.32–1.82 (1.64–2.25) |
| As above, conservative variant: half the throughput | attestation of the processor and GPUs, to be verified | as above | about 8,900 (7,150), capacity assumption | USD 2.65–3.64 (3.29–4.51) |
| Rented confidential machine 8 × B300 (Phala), Kimi K3 | attestation of the processor and GPUs, to be verified | USD 45,552–47,888 | about 4,800–7,600 (3,900–6,200), capacity assumption | about USD 6–10 (7.4–12.4) |
| 4 × B200 without confirmed confidentiality (Lambda), DeepSeek | none confirmed | USD 19,827 | about 17,750 (14,300) | USD 1.12 (1.38) |
| 8 × B200 without confirmed confidentiality (Lambda), DeepSeek, two copies of four GPUs each | none confirmed | USD 39,070 | about 35,500 (28,700), assumption about the performance of two copies | USD 1.10 (1.36) |

Where these figures come from: API prices from the price lists of DeepSeek, Moonshot, Confidential AI, Tinfoil, Phala and NEAR AI;[^deepseek-cennik][^cai][^tinfoil][^phala-api][^near] prices of confidential machines from the Phala price list;[^phala-gpu] B200 rental at Lambda at USD 6.79 per GPU-hour in an instance with four GPUs and USD 6.69 in an instance with eight.[^lambda-cennik] We take Kimi's capacity from third-party measurements for Kimi K3 on eight B300 GPUs, which give about 1,000–1,600 output tokens per second.[^spheron-kimi] The monthly amounts with a commitment do not mean monthly payments: Phala requires the whole period to be paid up front, with no refund for early termination, so 180 days of an 8 × H200 machine means USD 139,104 in cash at the time of ordering, and 180 days of an 8 × B300 machine USD 269,568.[^phala-gpu]

What follows from this:

- For the assumed profile, the prices of APIs with declared confidentiality are about USD 0.70–1.25 per person per month, from a cost comparable to an ordinary API to about 3.6 times its cost, depending on the provider and the time of use; the lowest price is declared by Confidential AI, and we also have to verify this offer. A confidential API provides flexible capacity without running our own machine, although it has its own limits, queues and failures. A rented confidential machine for DeepSeek, sized for the peak, runs in the worldwide scenario at about two thirds of its capacity on average and costs about USD 1.32 per person, that is, roughly as much as the more expensive confidential APIs and more than the cheapest one. In our hourly model, the first node of our own, with overflow directed to a confidential API at USD 1.25 per person, appears at the checked point of about 20,000 active people; this is a result of the assumptions adopted, not an exact threshold, and with a cheaper confidential API a rented machine does not pay off at this scale.
- Hourly rental of a full confidential machine does not today provide flexibility for the evening peak: Phala requires at least a day (8 × H200) or a month (8 × B300), Confidential AI three months for 8 × B300 at USD 60 per hour, and VoltageGPU, which bills 8 × H200 by the second at USD 64.62 per hour, does not cover this configuration or the NVSwitch switches with published attestation evidence.[^cai][^voltage] On top of that comes the time needed to allocate the machine and load the weights.
- For Kimi, the calculation depends on measurement: a confidential API costs about USD 8–9 per person, and our own 8 × B300 machine at full utilization about USD 6 with the higher capacity estimate and about USD 9.5 with the lower one. It comes out cheaper than a confidential API if one machine serves more than about 5,100–5,600 active people using this model; with the lower capacity estimate (about 4,800 people) this does not work out.

Buying our own server: a complete Supermicro server with eight B300 GPUs cost about USD 663,000 in September 2026.[^supermicro] We estimate the monthly cost of such a purchase as follows:

| Item | Monthly amount |
| --- | ---: |
| Depreciation of the server over five years | about USD 11,000 |
| Depreciation of the server over four years | about USD 13,800 |
| Colocation | about USD 1,900–3,000 |
| Network, parts and service (estimate) | about USD 1,500 |
| Total | about USD 14,000–18,000 |

Such a server can hold two copies of DeepSeek, which in the worldwide scenario will serve about 35,000 people (in the European one about 28,000), at about USD 0.41–0.52 per person. Under these assumptions, buying comes out cheaper than a confidential API at USD 1.11–1.25 from about 12,000–17,000 active people, and cheaper than the cheapest declared one (USD 0.70) from about 21,000–26,000. The calculation does not include the full cost of maintaining and measuring this configuration; a purchase also requires cash up front, round-the-clock on-call staff and steady demand for years, and the foundation then has physical access to the hardware (chapter 2). These are our estimates, not offers.

- Confidential machines with multiple GPUs are publicly available today in the USA. In the European Union we found confidential machines with a single H100 GPU,[^azure-ncc] in which neither the full DeepSeek nor Kimi fits. A confidential API with servers in the European Union is also offered by Privatemode (Edgeless Systems, Germany), with a smaller choice of models.[^privatemode] This too is a provider's declaration, to be verified.
- An independent directory that checks confidential APIs, in an observation of 29 October 2026 at 14:00 UTC, did not confirm full verification of any of the 95 routes checked; what was most often missing was proof of the identity of the running program, of the origin of the code and of the binding of the request to a machine.[^katalog] This is a result of the available evidence, not proof that the services disclose content. Until we have verified it ourselves, we treat the confidentiality of these services as the provider's declaration.
- The calculation covers computing. The private environment (gateway, memory, files) in one or two confidential machines with four virtual processors and 8 GB of memory costs about USD 168 per month per machine at Phala, and the disk is billed separately, about USD 10 per 100 GB.[^phala-cvm] We will check in the pilot whether this size is enough. At USD 170–340 per month, that is about USD 6–11 per person with 30 people, and a few tens of cents with 1,000 people. The calculation does not include people's work, security reviews, payments or a reserve for failures.
- Popular subscriptions cost about USD 20 per month, and the DeepSeek chat is free.[^abonamenty] Plans at USD 100–200 give, with intensive agentic work, the equivalent of thousands of dollars at list API prices;[^semianalysis] we do not compete on price with such plans. We propose billing for actual use with privacy that can be verified.

Status of the manifesto's hypothesis as of 29 October 2026: the calculation brings us closer to it, but does not confirm it. Processing with declared confidentiality and attestation is already available in public price lists and, for the assumed usage profile, costs about USD 0.70–1.25 per person per month, so a small group can start with it at cost, and under our assumptions our own infrastructure may become cheaper at somewhere between more than ten thousand and several tens of thousands of active people. Three things will decide, and we will check them in the trials in chapter 9: whether the confidentiality of these services passes independent verification, whether the quality of the available models is sufficient for the tasks for which people will come to Suveria, and what the actual traffic profile is. We update the calculation with every significant change in prices and after every trial, and we keep the previous versions.

### 8.2. Infrastructure steps and decision cards

We are developing the infrastructure in steps, each of which gives participants value on its own, without any obligation to move on to the next one: first a confidential API and a private environment in confidential machines (if we raise enough funds before the launch, we can start straight away with the next step), then renting our own confidential machines, next buying hardware and placing it in an external server room, and in the distant future, if it shows an advantage, a building of our own. The next step is justified by measured data: the full cost of the service, actual traffic, response time at the peak, the ability to maintain safeguards and handle failures, and, in the case of a purchase, also funding for repairs, hardware replacement and the people who will take on responsibility. Renting our own machine can also make sense when the model needed is not available in a confidential API or when we want full control over what is running.

We describe each transition with a decision card: what we gain, the full cost, the risks, the conditions for starting and withdrawing, the way of moving data and keys, and consistency with the [reserve rules and the rules for launching further pillars](whitepaper-zasady-fundacji.md) (chapter 8 of the Foundation Principles whitepaper). We allow combining our own machine with a confidential API for traffic peaks only when each of the paths has an accepted level of protection; switching to a weaker option requires a separate, conscious decision by the user. We plan the first measurement on a single confidential GPU with a smaller model, and the next one on a machine that can hold the full model.

We match capacity to traffic without sizing everything for the highest peak. We are designing a short queue with a visible waiting time; we will measure its actual time, its limit and its behavior once it is exhausted in the pilot. Flexible capacity for longer peaks is provided first of all by a confidential API, provided that it maintains the accepted level of protection, the user's consent and spending limit; when no such path exists, we honestly inform people about the wait or unavailability. Hourly rental makes sense for models that are not available in a confidential API or are clearly more expensive there, and only where the provider actually allows confidential machines to be started and released quickly. We want to use the spare capacity of our own machine in quieter hours for the foundation's tasks, such as analyses for OmniForum; its value at API prices is not income to the budget, so such tasks have their own goal and budget. After the first pilot we want to test two modes: “Conversation” for ordinary work with the assistant and “No rush” for tasks that can wait, for example translating a document. In “No rush” mode we show an approximate start window, a cost estimate, a maximum budget, the option to cancel with billing for the work done and the same information about protection. A lower price for such work is possible only if it follows from a public method of dividing costs, without counting the fixed cost twice.

### 8.3. Measuring use without the content of conversations

To bill for actual use, we measure the resources needed to perform tasks and clearly describe the share in fixed costs. The billing meter is limited to the data necessary to check the cost, and the content of a conversation is not needed to issue a bill. In the trials we will check the accuracy of the measurement, how the user can check it, the scope of disclosed metadata and the behavior of the service after the spending limit is reached. The rules of the bill, rounding, prepayments and refunds are described in the [Foundation Principles whitepaper](whitepaper-zasady-fundacji.md).

The spending limit set by a participant is to work as a boundary, not as a warning after the fact. Some providers bill ongoing requests only after they finish, so their limits can be exceeded; this is how Tinfoil describes it, for example.[^tinfoil] That is why we are designing a reservation: before sending a request, the Suveria gateway sets aside from the balance its maximum permissible cost, taking into account other requests in progress, and limits the number of parallel requests and the length of the response. After it finishes, we bill the actual cost and release the unused reservation. This is a requirement to be built and tested, not a working feature.

## 9. Acceptance trials and the results log

Before we call any release confidential, we will document at least:

- correct attestation;
- refusal to send data after the code or key has been swapped;
- session isolation;
- the administrator's restrictions;
- no content in logs, dumps and telemetry;
- cache handling;
- deletion and recovery;
- behavior after a failure;
- the boundaries of tools;
- costs under load.

The result includes the configuration version and the scenario in which we tried to break the protection.

We want every Suveria release to pass all the evidence gates of at least one independent verifier of confidential services: hardware and security state, freshness of the evidence, binding of the connection key to the protected environment, identity of the running program, origin of the code and binding of the request to a specific machine, while maintaining availability. We publish the result with the date of observation, the version of the criteria and the evidence for the specific release, model and request route, and we describe the verifier's affiliations together with the result. We do not promise a place in any ranking. Passing verification means achieving the described control at a given time, with public limitations, and does not replace an audit or our own trials.

When we launch our own confidential option, we will submit Suveria to every independent directory that checks whether models are run confidentially, and give it an endpoint for checking attestation; the first example is confidentialinference.net (as of 31 October 2026).[^confidentialinference] We do not promise a listing, because that is the directory's decision; we promise the submission, answers to its questions and publication of the result, including a bad one, with the date. A directory checks only what it can see from the outside, usually the attestation and the connection channel; it does not replace an audit of the code or the configuration, or an assessment of side channels.

Storage and portability trials include:

- restoring an encrypted copy on another authorized device and refusal to read it without the correct key;
- loss of one device, recovery of access with the chosen method and a clear presentation of the consequences of losing all keys;
- synchronizing parallel changes without silently overwriting one of the versions;
- reading an export in an independent tool without an account with the original operator, comparing originals, history, sources and connections;
- limiting the scope of an integration and effectively stopping its further access after the permission is revoked.

Stages:

1. a usability test on materials that are not sensitive;
2. a technical trial of the protection;
3. a limited pilot with clear terms;
4. gradually increasing the scale.

Before the pilot we will set and publish thresholds: the time to the first word of a response, the computing cost per person for the measured profile and the quality of the model according to the [materials and benchmark whitepaper](whitepaper-materialy-i-benchmark.md). We will consider the pilot successful when it meets all three.

A change of model, firmware or sign-in method may require requalification, and an update must not silently weaken the agreed protection. Every release has a public card:

- scope of operation;
- evidence from trials;
- known limitations;
- responsible people;
- costs;
- how to report a problem;
- withdrawal plan.

Detecting a vulnerability leads to limiting exposure, informing the people affected and a verifiable fix.

We want to run the trials openly. We invite people who work in security, cryptography, infrastructure and applications, including creators who show technology to a wide audience, to design the tests together with us and to try to break the protection on separate test accounts with made-up data. We also invite critics. We do not pay for promotion, and we mark every collaboration in accordance with the [register of benefits](whitepaper-zasady-fundacji.md) (chapter 7 of the Foundation Principles whitepaper). The results, including the failed ones, go into the results log. If you want to get involved, write to [salve@novusignis.org](mailto:salve@novusignis.org?subject=%5BDo%C5%82%C4%85cz%5D%20Pr%C3%B3by%20Suverii) with the subject line “[Dołącz] Próby Suverii”.

The most important trial: a team with operator privileges outside the confidential environment (gateway, disks, network, logs) tries to read the conversations of test accounts in which secret character strings have been hidden. If anyone extracts them, including us, the trial has failed.

We will make the first release of Suveria available to a few people who are helping to configure it. If it uses a confidential API, its protection card (section 2.3) will state plainly that the model runs at an external provider, that the attestation is declared by the provider and we have not yet verified it, and that metadata is not protected. Because the first people are also helping to operate the service, the first result we publish will be the most important trial described above, with a description of what the operator managed to do.

**Results log.** Status as of 29 October 2026: we have not yet carried out any of the trials described, we have not rented any GPUs and we have not run a model in Suveria. We add every subsequent result here with the date, configuration, scenario and conclusion, also when a trial fails.

Still to be resolved:

- the first model and an acceptable level of quality;
- independent verification of confidential APIs and confidential machines, and their availability in jurisdictions with strong personal data protection, such as the European Union with the GDPR;
- response time;
- the rules for keys and memory;
- the minimum scope of billing data;
- the operator's legal obligations regarding abuse reports;
- the way of funding continuity.

The [Foundation Principles whitepaper](whitepaper-zasady-fundacji.md) describes the budget, the bill and accountability, and the [materials and benchmark whitepaper](whitepaper-materialy-i-benchmark.md) the assessment of models' behavior.

Novus Ignis Foundation, Poznań, KRS 0001269575. Website and manifesto: novusignis.org. Comments: salve@novusignis.org.

## Notes

[^teefail]: [TEE.fail: Breaking Trusted Execution Environments via DDR5 Memory Bus Interposition](https://tee.fail/). A study by Georgia Tech, Purdue University and Synkhronix, published on 28 October 2025: extraction of Intel TDX and SGX and AMD SEV-SNP attestation keys by physically attaching to the DDR5 memory bus, with consequences for NVIDIA confidential computing. Requires physical access to the server; Intel and AMD consider such attacks to be outside the scope of their protection. Coverage: [The Hacker News](https://thehackernews.com/2025/10/new-teefail-side-channel-attack.html). Accessed 28 October 2026.

[^local-first]: [Kleppmann, Wiggins, van Hardenberg and McGranaghan (2019): Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/). Essay. Principles of keeping the primary copy on the user's devices and of the supporting role of servers, including encrypted copies.

[^apple-pcc]: [Apple: Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/). Architecture description. An example of linking confidentiality with control over software and transparency of the system.

[^ohttp]: [RFC 9458: Oblivious HTTP](https://www.rfc-editor.org/rfc/rfc9458.html). Specification. Separation of knowledge of the sender and of the request under a specified trust model; not full anonymity.

[^weiss-keylogging]: [Weiss, Ayzenshteyn, Amit and Mirsky (2024): What Was Your Prompt? A Remote Keylogging Attack on AI Assistants](https://www.usenix.org/conference/usenixsecurity24/presentation/weiss). Peer-reviewed paper (USENIX Security 2024; arXiv preprint 2403.09751). From the length of encrypted packets in a response stream, a network observer reconstructs the topic, and in part the content, of the assistant's response. Accessed 30 October 2026.

[^whisper-leak]: [McDonald and Bar Or (2025): Whisper Leak: a side-channel attack on Large Language Models](https://arxiv.org/abs/2511.03675) and [Microsoft's write-up (7 November 2025)](https://www.microsoft.com/en-us/security/blog/2025/11/07/whisper-leak-a-novel-side-channel-cyberattack-on-remote-language-models/). Research paper and vendor description. The topic of a conversation can be identified from the size and rhythm of packets in an encrypted response stream; some providers have added random padding to packets. Accessed 30 October 2026.

[^nvidia-platformy]: [NVIDIA: supported platforms for confidential containers](https://docs.nvidia.com/datacenter/cloud-native/confidential-containers/latest/supported-platforms.html). Vendor documentation. Requirements for the entire configuration of processor, GPUs and software.

[^nvidia-ppcie-v2]: [NVIDIA: Protected PCIe v2, Introduction](https://docs.nvidia.com/attestation/attestation-client-tools-ppcie-sdk-cpp/latest/ppcie_introduction.html). Vendor documentation. In PPCIe v2 mode the NVLink and NVSwitch network belongs to the trusted part of the system; PCIe protection does not mean encryption of all traffic between GPUs.

[^nvidia-blackwell]: [NVIDIA: Trusted Computing Solutions 595](https://docs.nvidia.com/595trd1-trusted-computing-solutions-release-notes.pdf). Vendor documentation. Multi-GPU confidential computing mode on Blackwell GPUs, including protection of connections; requires a compatible configuration.

[^osi]: [OSI: Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition). Definition. Open weights do not settle whether the entire definition of an open system is met.

[^deepseek]: [DeepSeek-V4.1-Flash: model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash). Vendor documentation. Architecture, MIT license and the model's declared capabilities; not a measurement of Suveria's performance.

[^dpga]: [Digital Public Goods Alliance: standard](https://www.digitalpublicgoods.net/standard). Standard. Criteria for assessing a digital public good; a design direction, not recognition obtained from the DPGA.

[^lambda-cennik]: [Lambda: instance pricing](https://lambda.ai/pricing). Provider's price list. NVIDIA B200 SXM6 180 GB: USD 6.79 per GPU-hour in an instance with four GPUs and USD 6.69 in an instance with eight; H100 SXM 80 GB: USD 3.99; on-demand prices, excluding taxes, without confidential mode. Accessed 29 October 2026.

[^lambda-v41]: [Lambda: DeepSeek-V4.1-Flash, performance measurement results](https://lambda.ai/inference-models/deepseek-ai/deepseek-v4.1-flash). Provider's measurement. 4 × B200, vLLM, tensor parallelism 4, speculative decoding, about 8,192 input and 1,024 output tokens per request; with 64 simultaneous requests, a total of 3,713.9 output tokens per second and an average of 66.8 tokens per second per conversation. No measurement date given. Accessed 28 October 2026.

[^azure-ncc]: [Azure: price of the NCC40ads H100 v5 machine](https://prices.azure.com/api/retail/prices?$filter=armSkuName%20eq%20%27Standard_NCC40ads_H100_v5%27%20and%20priceType%20eq%20%27Consumption%27) and [series description](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/nccadsh100v5-series). Provider's price list. Confidential machine with a single H100 NVL 94 GB GPU; USD 6.98 per hour (East US 2) to USD 8.90 (West Europe), Linux, pay-as-you-go. Accessed 28 October 2026.

[^deepseek-cennik]: [DeepSeek: API pricing (Chinese version)](https://api-docs.deepseek.com/zh-cn/quick_start/pricing). Provider's price list. Model deepseek-flash (V4.1-Flash-1017): input without a cache hit CNY 1 off-peak and CNY 2 at peak, output CNY 4 and 8 per million tokens. Conversion to USD according to the [eesel summary](https://www.eesel.ai/blog/deepseek-v4-1-flash-pricing), a secondary source. Accessed 28 October 2026.

[^abonamenty]: Subscription prices: [ChatGPT Plus](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus), [Claude Pro](https://claude.com/pricing), [Google AI Pro](https://gemini.google/subscriptions/), [Kimi Plus (geotoolbox summary)](https://geotoolbox.ai/blog/kimi-pricing); the DeepSeek chat is free ([description](https://en.wikipedia.org/wiki/DeepSeek_(chatbot))). Monthly prices in USD, excluding taxes; Kimi Plus USD 19. Accessed 28–29 October 2026.

[^kimi-k31]: [Moonshot: launch of Kimi K3.1 Pro](https://forum.moonshot.ai/t/kimi-k3-1-pro-has-launched-start-exploring-now/629) and [Kimi: description of K3.1 Pro (24 October 2026)](https://www.kimi.com/news/kimi-k3-1-pro). Vendor documentation. A further-trained version of Kimi K3, about 3 trillion parameters, context of 1 million tokens, weights announced for release before 4 November 2026; license not announced. API prices according to OpenRouter: USD 2 / 10 per million tokens.

[^kimi-k3]: [Kimi K3: model card](https://huggingface.co/moonshotai/Kimi-K3). Vendor documentation. 2.8 trillion parameters, 104 billion active, context of about 1 million, MXFP4, Kimi K3 License.

[^spheron-kimi]: [Spheron: deploying Kimi K3 (19 October 2026)](https://www.spheron.network/blog/deploy-kimi-k3-gpu-cloud/). Provider's guide. Weight files 1,560.94 GB, configurations that can hold the model. Capacity of about 1,000–1,600 tokens per second on 8 × B300 according to a summary of third-party measurements of 29 October 2026; wide spread.

[^aa]: [Artificial Analysis: Kimi K3.1 Pro and DeepSeek V4.1 Flash 1017](https://artificialanalysis.ai/models/comparisons/kimi-k3-1-pro-vs-deepseek-v4-1-flash-1017). Independent comparison. Index v5 of 28 October 2026: 46 and 32; speed of about 36 and 178 tokens per second. Accessed 29 October 2026.

[^kimi-k31-wagi]: [Moonshot AI: Kimi K3.1 Pro, weights repository and model card](https://huggingface.co/moonshotai/Kimi-K3.1-Pro). Vendor documentation. 96 safetensors files, about 1.56 TB; 2.8 trillion parameters, 104 billion active, 896 experts, context of 1,048,576; MXFP4 for the expert weights. Accessed 9 November 2026.

[^kimi-k31-licencja]: [Kimi K3.1-Pro License](https://huggingface.co/moonshotai/Kimi-K3.1-Pro/blob/main/LICENSE) and [list of licenses approved by the Open Source Initiative](https://opensource.org/licenses). License text and the register of an independent organization. Accessed 9 November 2026.

[^kimi-k31-silniki]: [vLLM: recipe for Kimi K3.1 Pro](https://recipes.vllm.ai/moonshotai/Kimi-K3.1-Pro) and [SGLang: recipe for Kimi K3.1 Pro](https://docs.sglang.io/cookbook/autoregressive/Moonshotai/Kimi-K3.1-Pro). Engine documentation. vLLM requires version 0.34.0, not yet released; “Throughput was not tuned”. Accessed 9 November 2026.

[^kimi-k31-poufne]: Public model lists of confidential API providers, reviewed on 9 November 2026; a summary with addresses is in the foundation's records. One provider offered the model in a confidential variant; another offered it without a trusted execution environment.

[^aa-2026-11]: [Artificial Analysis: Kimi K3.1 Pro](https://artificialanalysis.ai/models/kimi-k3-1-pro) and [DeepSeek V4.1 Flash](https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017). Independent comparison. Index v5.0.1. Accessed 9 November 2026.

[^tinfoil]: [Tinfoil: pricing](https://tinfoil.sh/pricing). Provider's price list. DeepSeek-V4.1-Flash USD 0.65 input and USD 1.45 output per million tokens; description of spending limits. Accessed 29 October 2026.

[^phala-api]: [Phala: confidential models](https://phala.com/confidential-ai-models). Provider's price list. DeepSeek V4.1 Flash 1017: USD 0.75 / 1.60; Kimi K3: USD 3 / 15 per million tokens; attestation of the gateway and confirmations of responses according to the provider. Accessed 29 October 2026.

[^near]: [NEAR AI: pricing](https://near.ai/pricing). Provider's price list. Kimi K3: USD 3.30 / 16.50 per million tokens; different prices on the home page, discrepancy to be clarified. Accessed 29 October 2026.

[^phala-gpu]: [Phala: confidential GPUs](https://phala.com/gpu-tee) and [pricing](https://cloud.phala.com/about/pricing). Provider's price list. 8 × H200: USD 44.20 per hour on demand, USD 32.20 with a 180-day commitment; 8 × B300: USD 65.60 (30 days), USD 62.40 (180 days); Intel TDX with NVIDIA confidential computing; no machines in Europe. Accessed 29 October 2026. The commitment is paid up front, with no refund for early termination.

[^privatemode]: [Privatemode (Edgeless Systems)](https://www.privatemode.ai/). Provider's offer. Confidential API with servers in the European Union and remote attestation; a smaller choice of open models than at US providers; prices are not published. Confidentiality declared by the provider, not verified by us. Accessed 30 October 2026.

[^katalog]: [Confidential Inference Directory: methodology and observations](https://confidentialinference.net/attestation). Independent directory, sponsored by a company that offers confidential inference. 0 of 95 routes verified end to end in the observation of 29 October 2026, 14:00:19 UTC.

[^supermicro]: [Supermicro: AS-8126GS-NB3RT-01-G2 server](https://store.supermicro.com/us_en/8u-gpu-gold-series-as-8126gs-nb3rt-01-g2.html) and [GPU Per Hour: NVIDIA server prices](https://gpuperhour.com/blog/nvidia-gpu-prices). Manufacturer's offer and price summary. Complete server with eight B300 GPUs: USD 662,845.95 (21 September 2026).

[^semianalysis]: [BigGo Finance on the SemiAnalysis analysis (7 October 2026)](https://finance.biggo.com/news/173039423dab79be). Industry analysis. A USD 200 plan gives, with intensive work, about USD 12,000 at list API prices; margin estimates, not company data.

[^sglang-k3]: [SGLang: recipe for Kimi K3](https://github.com/sgl-project/sglang/blob/main/docs/cookbook/autoregressive/Moonshotai/Kimi-K3.mdx). Engine documentation. Verified configuration of Kimi K3 on 8 × B300; does not apply to Kimi K3.1 or to confidential mode.

[^phala-cvm]: [Phala: confidential machine pricing](https://phala.com/pricing). Provider's price list. tdx.large (4 virtual processors, 8 GB of memory): USD 0.23 per hour; disk USD 0.000139 per GB per hour. Accessed 29 October 2026.

[^itu]: [ITU: Facts and Figures 2025, internet use](https://www.itu.int/itu-d/reports/statistics/2025/10/15/ff25-internet-use). International statistics. The percentage of people using the internet in the world's regions in 2025 (about 6 billion people, 74% of the population); the regional shares in our calculation are an approximation: percentage × the region's population.

[^cai]: [Confidential AI: pricing](https://confidential.ai/pricing). Provider's price list, prices of 26 October 2026. DeepSeek V4.1 Flash: USD 0.30 input, USD 0.03 cached input, USD 1.20 output per million tokens; 8 × B300 machine USD 60 per hour, minimum three months, allocation within a few days. Confidentiality declared by the provider, not verified by us.

[^voltage]: [VoltageGPU: pricing](https://voltagegpu.com/pricing) and [scope of evidence](https://voltagegpu.com/). Provider's price list and declarations. 8 × H200 USD 64.62 per hour with per-second billing; the published evidence does not cover attestation of this configuration or of the NVSwitch switches.

[^epoch]: [The Decoder on Epoch AI data (8 January 2026)](https://the-decoder.com/global-ai-compute-hits-15-million-h100-equivalents-epoch-ai-finds/) and [Epoch AI: AI Chip Users](https://epoch.ai/data/ai-chip-users). Data compilation by an independent research institute. Installed computing power for digital intelligence of more than 15 million NVIDIA H100 equivalents, demand of more than 10 GW. An estimate, not a measurement.

[^confidentialinference]: [confidentialinference.net](https://confidentialinference.net): a comparison of providers that run models in trusted execution environments, with dated attestation checks; a site sponsored by the company Enclava, listing eleven providers at the time of access. Accessed 31 October 2026.
