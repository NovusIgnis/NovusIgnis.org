---
tytul: Digital intelligence models in Suveria
opis: Where we get the models for Suveria, how we choose them, what happens when a model changes and what public principles the assistant is to have
grupa: suveria
kolejnosc: 4
menu: Models
---
# Digital intelligence models in Suveria

A digital intelligence model is a program that reads your words and composes a response; the assistant in Suveria is to run on such a model. This page explains where we get models, how we choose them, what happens when a model changes and what principles the assistant is to follow openly.

Today Suveria is at the design stage. The whitepaper's results log (status as of 29 October 2026) states plainly: we have not yet run any model in Suveria or carried out any of the trials described. Everything below is intentions and candidates, not a working service.

More: [Suveria whitepaper, chapter 9](../whitepaper-suveria.md#s9).

## Why open models

The project is based on open models, that is, models released on terms that allow them to be run independently. This lets the foundation make them available practically at cost and focus its work on a private environment for using existing models, with the possibility of developing our own in the future as well.

To begin with, we want to use them through providers of confidential computing, and, if the calculation and the conditions justify it, on our own servers. The manifesto notes that Suveria is “our best path to private work with digital intelligence, not a goal in itself”: if models come to fit on a person's own device, or a better way of protection emerges, part of this path will become unnecessary.

More: [manifesto, section 3.1](../manifest.md#s3-1) and [Suveria whitepaper, chapter 6](../whitepaper-suveria.md#s6).

## How we choose a model

Suveria is to be available to people all over the world, in their own languages. That is why, when choosing a model, we consider:

- quality in many languages;
- understanding of intentions;
- reliability;
- the license, that is, the terms on which the creator allows the model to be used;
- cost;
- whether it can run in the protected environment we describe on the [Privacy and security](suveria-prywatnosc.md) page.

We choose a larger model only if it clearly performs better on tasks that matter to people. The foundation's benchmark is to help with this, that is, a set of tasks and scoring principles that makes it possible to check how models behave; today it is a research program with no results.

The whitepaper names two candidates. They are candidates to be checked, not a decision: the first model and the acceptable level of quality remain to be settled.

- **DeepSeek-V4.1-Flash.** A model under the MIT license, which allows it to be used for services as well. The manufacturer states 552 billion parameters in the main part (parameters are numbers set during the model's training) and an additional memory called Engram with 196 billion parameters. Only 8–16 billion of them work on each word, which is why it responds quickly and cheaply, although running it requires at least four modern GPUs. The parameters are stored in an abbreviated form (quantization). This saves memory but can lower quality, so we will check it on our own tasks.
- **Kimi K3.1 Pro.** The manufacturer has announced the publication of the full weights, that is, the parameters, but has not yet announced the license. After publication we will check, among other things, their size, the license and availability through providers of confidential computing, and we will add the result to the whitepaper with a date, also if the terms turn out to be unsuitable.

More: [Suveria whitepaper, chapter 6](../whitepaper-suveria.md#s6) and [benchmark whitepaper, chapter 1](../whitepaper-materialy-i-benchmark.md#s1).

## What happens when a model changes

We announce a change or withdrawal of a model in advance. Your conversation history stays with you: you can choose a new model, export your data or stop working.

The moment a model changes is to be visible in the conversation, and moving private context to a new model requires your decision. A change of model may also require checking the protection again, because an update must not quietly weaken the agreed safeguards.

More: [Suveria whitepaper, chapter 6](../whitepaper-suveria.md#s6) and [chapter 9](../whitepaper-suveria.md#s9).

## The assistant's principles are to be public

We will publish in full the principles according to which the assistant responds, together with every release. In Suveria you are always to be able to read the full main instruction of your assistant, that is, the written principles according to which it responds, along with a description of its way of working: how it breaks a task down into steps, uses memory and checks its answers.

The shared infrastructure is to make available only models and settings that pass the public trials of the benchmark. Above this minimum, it is you who choose the style of work, from calmly organizing your thoughts to a demanding conversation in which the assistant points out gaps in your reasoning.

We want to maintain an open library of proven instructions, which participants improve in Omniforum (the shared space for conversation and decisions) and check in the benchmark. This library does not exist yet.

More: [Suveria whitepaper, chapter 4](../whitepaper-suveria.md#s4) and [section 4.1](../whitepaper-suveria.md#s4-1).

## The assistant, the Personal Canon and the Telescope of Thought

The memory of earlier conversations is to work with your consent and be openly editable: every entry can be deleted or corrected, and its origin can be seen. The assistant clearly distinguishes its own suggestion from a position that the person has consciously recognized as their own.

The Personal Canon is the collection of principles and values you have written down and recognize as your own. The Telescope of Thought is to let you see a record of your own reflections from different moments and how they changed over time, and also to set a situation you point to against your Canon. The idea grew out of the Overton window, that is, the range of ideas that are considered acceptable in a society at a given time. For a single person, it is the range of thoughts that they consider permissible for themselves at a given time; the Telescope is to be such a window for one person and for them alone.

The model shows possible connections together with the source of the principle invoked, and its interpretation can be corrected or rejected. We do not create scores of morality or a public ranking. In the first version, the Telescope works only on a single situation that you point to, and it does not follow your life on an ongoing basis.

More: [Suveria whitepaper, chapter 6](../whitepaper-suveria.md#s6) and [section 6.1](../whitepaper-suveria.md#s6-1).

## Limits: what the model does and does not do

- **Crisis.** When a conversation concerns a threat to life or health, the assistant is to provide information about available help, for example emergency numbers, without sending anything outside the private environment.
- **Other people's messages.** Someone else's message, for example from a connected mailbox, may contain hidden instructions, which is why we separate content from outside from your instructions: while organizing such content, the assistant cannot on its own send messages, open web addresses or change the Personal Canon without your confirmation.
- **The creator's choices.** The model itself also carries the choices of its creator, for example topics it avoids; we check them in the benchmark and describe them when choosing a model.
- **No hidden access.** We want to counter abuse without reading private conversations. We do not create hidden access to private content.

More: [Suveria whitepaper, chapter 4](../whitepaper-suveria.md#s4), [chapter 3](../whitepaper-suveria.md#s3) and [chapter 6](../whitepaper-suveria.md#s6).

## Read it and tell us what you think

You will find the figures, footnotes and the list of open issues to be resolved in the [Suveria whitepaper](../whitepaper-suveria.md), and the way models are evaluated in the [whitepaper on materials for training and benchmarking models](../whitepaper-materialy-i-benchmark.md). If something puzzles you or seems wrong, highlight that passage and use the “I have a comment” button, or write to salve@novusignis.org.
