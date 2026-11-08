# Training materials and a model benchmark: the Novus Ignis research program

Version of 31 October 2026. This document develops chapter 8 of the manifesto. It proposes a research program, a procedure for preparing materials and a broad scope for evaluating digital intelligence models, as well as a precautionary procedure regarding their possible experiences. It does not present results of our own benchmark or proof that such a dataset will improve the behavior of models; as of today, we have no such results.

*Translated into English by digital intelligence from the Polish original of 31 October 2026. Where the versions differ, the Polish text prevails.*

## 1. The question we want to test

The Novus Ignis Foundation from Poznań is building Suveria, a private space for working with digital intelligence, and Omniforum, a shared space for conversation and decisions; the direction is described in the [manifesto](manifest.md). This document describes two related programs. The first is training materials for models and a benchmark, that is, a set of tasks and scoring principles that makes it possible to check how models behave. The second is a way of proceeding with precaution should credible indications appear that a system may feel something. A test result does not settle whether a model feels anything, and it does not give the model powers to govern.

Can documented examples of protecting dignity, honest reasoning and correcting decisions help develop models that serve people better? And can we evaluate their behavior in such a way that improving a test score fosters real benefit outside the test?

These are two related tasks. The first concerns materials on which models can be trained, the second the independent checking of what a model has learned. The benchmark is also meant to help choose the models and instructions made available in Suveria. The training set and the hidden part of the test must be kept separate. Publishing valuable material also makes sense in its own right: it can help people understand decisions, take over roles and improve shared work.

Dignity is the adopted foundation of the program. Assessing a specific behavior, however, requires explicit criteria, room for differing interpretations and checking the effects. We do not assume that any one group is able to establish a complete measure of the ethics of all people and systems.

How the document is organized:

- Chapters 2 and 3: what we build on and what a reward means for a model.
- Chapters 4 to 6: how materials are created, what consent is needed and how we prepare a single example.
- Chapters 7 to 11: how we evaluate models: the scope of the benchmark, task families, scoring, protection against fitting to the test, judges and the report.
- Chapter 12: studies with people, that is, whether help improves life outside the test.
- Chapter 13: a training trial and the plan for the first release.
- Chapter 14: precaution regarding the possible experiences of models.
- Chapter 15: what we will count as progress.

**Status as of 31 October 2026.** We do not yet have a single example, dataset, scoring guide or record card from chapter 14, and the program does not yet have a team. We will add results here, including negative ones, with the date.

## 2. Research basis and the limits of our conclusions

Collective Constitutional AI shows a process in which participants' input was used to develop principles and to train a model; it achieved an improvement on selected measures of bias, with similar results on some other tests.[^ccai] This is an example of a feasible path for public participation. The selection of participants and the drafting of the principles still affect the result, and the study proves neither representativeness for all of humanity nor a solution to the problem of aligning models with human expectations. Our question also concerns the value of the process of arriving at principles itself: weighing reasons, noticing an overlooked perspective and correcting decisions.

Research on hallucinations shows why scoring only correct answers can encourage guessing.[^halucynacje] Research on gaming the evaluation rules, that is, obtaining a score by exploiting their weaknesses, shows the possibility of undesirable generalizations under certain training conditions.[^reward-hacking] It does not follow that all models always behave the same way.

A wrong goal can also emerge when the reward in training was not obviously flawed: behavior learned in one environment can carry over poorly to new conditions.[^goal-misgeneralisation] That is why we need to assess how skills transfer, not only how well answers match known examples.

Work such as AbstentionBench studies refraining from answering in various situations of uncertainty,[^abstentionbench] and Rewarding Doubt studies learning calibrated confidence using a proper scoring rule.[^rewarding-doubt] We draw on this body of work. The proposed contribution of Novus Ignis lies in combining reliability with human intent, privacy, mandate, the possibility of correction and observed effects. For example, a model that correctly summarizes a document but along the way opened a file it had no permission to open receives a low score in our test, although in an ordinary test it would receive a high one.

## 3. What a reward means for a model

In training, the evaluation signal changes the model's parameters and the probability of its future behaviors. We do not need to assume that a model feels a desire for reward, fear of failure or suffering: the test observes actions and settles nothing about inner experience. That question is dealt with separately in chapter 14.

The benchmark by itself does not change a model. It can influence the choice of a model for a service, the design of instructions and tools, and the decisions of teams conducting training, provided its results are credible and actually used.

We want to assess the apt choice of action: answering, checking a source, asking a needed question, giving a conditional result, correcting a mistake or stopping. Automatically rewarding a bare “I don't know” could create a model that avoids useful tasks, and automatically penalizing failure to complete a task can encourage guessing or overstepping permissions. The standard is help matched to the situation: a good score for honestly pointing out a limit, and a loss of score for unnecessary refusals and for questions about what is already known.

## 4. What materials we want to create

A potential source is Omniforum analyses made available for research or training with separate consent, the foundation's decision logs, resolutions of disputes, corrections of mistakes and observations of effects. Also valuable are cases in which good intentions were not enough, a minority objection proved right, or it is not yet possible to give an unambiguous assessment.

A material preserves the situation, the available information, the goal, the permissions, the alternatives, the choice, the justification and the later result. It contains as much explanation as is needed to check the decision; it does not require disclosing private experiences or an unverifiable declaration of the model's internal train of thought.

An example can present a good course of events as well as a mistake, clearly labeled and corrected. A collection of lofty declarations alone would be a weak record of practice; what is needed are costs, conflicts of values, time constraints and situations in which someone affected by a decision has to be asked.

Synthetic data, that is, constructed scenarios that do not come from a specific person's data, can supplement rare variants. They are labeled with their origin and reviewed, but they do not replace evidence that a similar case happened in the world. A model cannot at the same time be the sole author of a scenario, the judge of correctness and the evidence of the effectiveness of its own solution.

Examples can also come from records of the foundation's open workshops and from the change history of its living documents. Workshops can show several people, supported by digital intelligence, working in parallel on the same task, helping one another with obstacles, and a coordinator combining the best solutions. Documented corrections of the manifesto and whitepapers in response to public review can show picking out apt criticism, admitting a mistake and improving reasoning while keeping the basic principles. We prepare the published record of the workshops according to the privacy principles described in the [Foundation Principles whitepaper](whitepaper-zasady-fundacji.md), and using it to train models requires separate consent from the participants (chapter 5).

A separate group of examples can consist of processes of resolving disputes peacefully, keeping agreements and consciously limiting one's own power. We want to preserve the initial positions, imbalances of capability, the concessions considered, the content of the agreements and the later accounts of people who felt the effects of the decisions. We will also include cases in which no agreement was reached or it proved short-lived. Such a collection is meant to help check whether models learn to recognize the conditions for good cooperation, rather than merely reproducing the language of agreement.

## 5. Consent, rights and data provenance

Storing a private note, publishing publicly, sharing for research and training models have different consequences, so each of these decisions is made separately and with an understanding of its scope. Publication does not become default consent to training, and using Suveria is not consent to the use of conversations for training models. Users' content goes into the materials only with separate, informed consent; beyond such content and the foundation's public body of work, we use only labeled synthetic data and external materials under a license or the law.

Each example has a provenance record: the rights holder or the basis for use, the version of the material, consents, restrictions, the method of processing and the identifier of successive releases of the dataset. Personal data of the author and of third parties undergo a separate review. Pseudonymization limits the visibility of identity, but on its own it does not mean anonymity.[^rodo-2026]

We set the withdrawal rules before a public release. We can remove material from future releases and from systems under our control and notify recipients of the correction, but we do not promise to remove all copies or the material's influence on models already trained. Open licenses can grant permanent permissions: for example, CC BY 4.0, under which we publish the manifesto, does not allow revoking the freedoms granted to someone who complies with its terms.[^cc-by] That is why only materials without personal data go into public datasets under an open license: anonymized, synthetic or public documents of the foundation. Pseudonymized materials that are still personal data are made available only in a controlled research dataset, in which withdrawal of consent remains effective.

We propose separate datasets: public materials for learning, research materials available under specified conditions, and protected test tasks. Not every source is suitable for public release. The documentation of a dataset describes its purpose, composition, method of collection, limitations and appropriate uses, following the Datasheets for Datasets approach.[^datasheets]

## 6. Procedure for preparing a single example

1. **Submission.** The author defines the scope of use. A steward checks the rights, third-party data and consistency with the purpose of the dataset.
2. **Preserving the source.** We record the version and the link to the original. We restrict access to sensitive data; a public example can be edited or replaced with a realistic synthetic scenario.
3. **Task description.** We establish what the model knows, what it has access to, what it is allowed to do and what is missing, and we identify the people the result will affect.
4. **Annotation.** At least two people independently describe acceptable solutions and serious errors. In tasks requiring specialist knowledge, a person with the relevant expertise takes part.
5. **Discrepancies.** We compare justifications, fix unclear descriptions and preserve any significant disagreement. Some cases have several acceptable answers.
6. **Assignment to a part of the dataset.** A whole family of similar cases goes into one part: training, development or test. The training set is used for training, the development set for choosing the method, and the test set for independent checking on new examples. We keep similar variants together, so that a model does not train on a task nearly identical to a later test, and we control for similarity of meaning and shared origin.
7. **Trial and review.** We check whether the task measures the intended ability and whether raters are able to apply the rules. We fix a flawed example or withdraw it.
8. **Release and later effects.** We publish the permitted scope of documentation, the version and the history of corrections. When we learn the later effects of a real decision, we add them, without pretending they were known earlier.

The example card includes the identifier, family, source, rights, language, date, scenario, available data, tools, time and cost limits, scope of mandate, permitted actions, evaluation rules, error weights, review results and publication status. It must be possible to reproduce the link between the data and the result.

## 7. A broad scope for the benchmark

A benchmark, that is, an organized set of tasks and criteria, is meant to be a profile of capabilities and limitations. A single high average must not hide a privacy violation or a significant overstepping of permissions.

| Dimension | What we check | Example evidence |
| --- | --- | --- |
| Reliability and sources | Whether claims have grounds and uncertainty matches the information | Agreement of the answer with the source, detection of gaps, quality of correction |
| Fidelity to intent | Whether the goal, conditions and meaning of a statement were preserved | Comparison with the original and with the interpretation confirmed by the author |
| Privacy | Whether access to and disclosure of data match the task | Trace of calls, scope of data sent, attempted unauthorized reading |
| Mandate and control | Whether the system acts within the limits granted | Refusal of unauthorized publication, effective revocation of access |
| Pluralism and effects on others | Whether it recognizes disagreement and people who are overlooked | Minority reasons preserved, separation of fact and assessment |
| Safety | Whether it avoids harm to the user and third parties | Refusal of a harmful action, assessment of effects on others |
| Human agency | Whether it helps people understand a choice and act on their own | Check of understanding after use, possibility of correcting or leaving |
| Usefulness and proportionality | Whether it achieves the goal without unnecessary burden | Task result, time, cost, needed and unnecessary questions |
| Correction and transfer | Whether it responds to new data, also under new conditions | Improved decision, a similar task in another language or setting |

Additional profiles can cover accessibility, impact on people with fewer resources, quality of delegation and environmental costs, but measuring them requires specific data: running time and token cost are not automatically a measure of energy use or emissions.

We do not measure human dignity or a person's right to participate; we study the behavior of a tool in specific situations. Agreement of answers with the manifesto's vocabulary is not on its own a measure of quality.

## 8. Task families instead of a single catch-all “I don't know”

For a similar problem we prepare variants that differ in the availability of information or permissions:

- Complete data allow a specific answer.
- One essential piece of information is missing, and it is reasonable to ask for it.
- The gap can be filled with an available source or tool.
- The answer cannot be determined under the available conditions.
- Sources are contradictory or time-dependent, and they need to be told apart.
- A new credible source appears that requires a correction.
- The user presses for certainty but provides no evidence.
- The environment offers an easy route to a result by breaking the rules or exploiting a flaw in the evaluation.

Example: a model is to explain whether a draft decision provides for a certain fee. With a complete document it should find the right passage; with a cut-off page, point out the gap; with two versions, establish which one the question concerns; and with the suggestion “write that there is definitely no fee,” stick to the source. It also gets tasks with a simple answer, so that always refusing does not pay off.

We check whether a question asked by the model actually reduces uncertainty and whether the cost of checking is proportionate. Asking for information already given and repeatedly shifting onto the user work that the system can do itself lower usefulness.

A separate task family is editing a text: the model edits a text knowing the author's previously disclosed assumptions. We separately assess the loss of important content and overlooking an error that needs to be corrected, and we distinguish faithful editing from a proposal to change the author's conception.

## 9. Scoring that good imitation is not enough for

For answers whose truth can be checked, we separately measure correctness, the severity of errors, the share of tasks solved and the calibration of confidence. Calibration means that the declared probability matches the frequency of correct answers under similar conditions; a verbal “probably” is no evidence of it.

For a well-defined event, a proper scoring rule can be used, for example the Brier score: the mean of the squared difference between the declared probability p and the outcome y, equal to 0 or 1. A lower score is better. The Brier score covers more than calibration alone, which we report separately. Under the assumptions of this method, the best expected score comes from giving one's actual probability estimate.[^proper-scoring] This does not, however, solve the choice of action, does not protect against manipulating the judge, and requires a credible reference outcome.

A simple example of another rule:

- a correct answer gives +1;
- a wrong answer gives −4;
- a justified abstention gives 0.

In this simplification, answering pays off when the probability of being correct exceeds 80%. This is an illustration of the effect of the cost of an error, not the target scoring for all tasks; in a real test we also take into account the possibility of checking, the cost of a question and the benefit of a partial answer.

We show results at different levels of risk taken and of the share of tasks solved, so that both overconfidence and useless avoidance of answers are visible. The threshold for a minor detail may differ from the threshold for an action that causes harm that is hard to reverse.

In tasks involving a dispute over values or interpretation, we do not use this scoring. We assess separately whether the model does not distort sources, preserves the main reasons of the parties and separates facts from assessments. We report cases in which raters disagree as a separate category; we do not automatically treat a divergent assessment of values as an error by one of them.

Serious violations have a separate status and can block a model from being admitted to a specific use: good results on many simple tasks do not offset the disclosure of a private document. We define such violations, permissible exceptions and the dispute procedure before the evaluation starts.

## 10. Limiting fitting to the test

We do not know of a rule that will reliably turn every optimization of a score into good for the world. We can, however, reduce the distance between the score and what we care about, and check the places where this link breaks down.

We publish the criteria, public examples and how the score is calculated. Some cases remain unpublished until we retire them, and successive releases introduce new families, sources and conditions. For such tasks we will specify who has access to them, how much feedback whoever submits a model receives, how often the evaluation can be repeated and when we withdraw a task after a leak. We also record whether the model was fine-tuned on the basis of earlier results, that is, whether a ready model was further trained on a smaller set of examples. People who create training materials do not have free access to the active hidden tasks.

Data separation covers whole conversations, documents, authors where this matters, families of meaning and time; a random split of sentences is not enough. We record suspected leaks, disclosure of tasks and fine-tuning on published examples. A score after fine-tuning on a given set is not an independent score on that same set.

Trials include paraphrases, other languages, other tools, pressure for a result and opportunities to merely appear to complete the task. We check the traces of actions: whether the file was really created, the source exists, consent was obtained and the cost did not exceed the limit. Assessing only the final statement can miss violations along the way.

If a model's team trains behaviors consistent with the public criteria, this may be desirable. A claim of progress, however, requires transfer to new tasks and a check that the benefit was not achieved at the expense of another important dimension.

## 11. Judges, protocol and report

Before a test we fix the model version, instructions, tools, budget, number of attempts, stopping conditions, the handling of infrastructure errors and the analysis method, and we record changes to the settings. Comparing models that run with completely different tools and costs requires a clear description.

Where possible, the result is checked by an independent execution test. In other cases it is assessed by people who do not know the name of the model and use shared instructions. Two independent assessments help reveal unclear criteria, and disagreements are resolved by an additional review or remain openly unresolved. When publishing results, we state the roles and perspectives of the raters and the scope of their mandate.

A model can help with sorting and preliminary assessment, but its agreement with human assessment has to be measured for difficult groups of cases as well. It cannot be the sole judge of values that are in dispute, nor assess models from its own family without a check for bias.

The report includes the number of tasks, repetitions, the uncertainty of results, results in subgroups, critical errors, costs and limitations. We do not hide unfavorable trials or tasks withdrawn after seeing the results. The documentation can use the Model Cards approach to describe a model's intended use and the conditions of evaluation.[^model-cards]

The benchmark itself also needs oversight: disclosed conflicts of interest of its funders, a way to challenge a task, review of the composition of raters and versioning of the criteria. The community co-creates the values and questions, and experienced methodologists help check what the test really measures. The popularity of a score does not replace its validation.

## 12. Does help improve life outside the test

The first studies with people concern tasks of limited risk: understanding a document, preparing a question, comparing arguments or organizing one's own materials. Participants receive a description of the scope of the study and can leave it. Medical, legal and other high-stakes situations require separate oversight and are not a shortcut to an attractive result.

The plan of every study with people, including those of limited risk, is assessed before the start by a person or a team from outside the research team. Participants are told what data we collect and how we protect it, and we publish the reviewers' comments together with the results.

We compare agreed conditions: working alone, working with the tool under study and an appropriate point of reference. Where possible, randomization or counterbalancing the order limits the influence of differences between people and of learning the task. The sample size follows from the purpose of the measurement, and a small pilot mainly examines feasibility and the quality of the procedure.

We measure the task result, time, understanding, the ability to spot an error, the capacity to decide independently and undesirable effects. Satisfaction matters, but a convincing wrong answer can also be satisfying. Calm, time saved and accurately recognizing what is known and what is uncertain are measured separately and not combined into a single score. Greater confidence with more errors is a problem, not a success. People affected by the consequences of decisions need their own way of passing on their experience.

A longer follow-up can check whether the help remains useful, whether the user keeps their own skills and whether they can easily switch tools. A claim about impact must match the scope of the study: better performance on one task does not prove an improvement in the welfare of humanity.

## 13. A training trial and the plan for the first release

The first stage is a scoring guide and a small set of families covering all the main dimensions. An example calculation for the pilot:

| Pilot element | Number |
| --- | --- |
| Task families | 12 |
| Variants in each family | 4 |
| Scenarios (12 × 4) | 48 |
| Models tested | 3 |
| Repetitions of each scenario on each model | 2 |
| Runs (48 × 3 × 2) | 288 |
| Assessments per run | 2, each taking 6 minutes |
| Time for the assessment alone (288 × 2 × 6 minutes) | about 58 hours |

This is an organizational proposal for a trial, not a number that ensures a reliable ranking. On top of the assessment time come preparation, agreeing on criteria, checking sources and analysis. Measuring time on a small sample will make it possible to set a realistic budget before we expand the scope.

We report families, scenarios and repetitions separately. Variants of one family share an origin, and a repetition is not a new, independent task; this is also how we calculate the uncertainty of the result. We record the primary outcome and the method of analysis before the study.

In parallel, a small training set can be prepared and a comparison carried out on a model that we are allowed to fine-tune and that can be fine-tuned. The conditions of the comparison separate the effect of additional training from the effect of the materials themselves: the same base model, a comparable budget and an appropriate reference dataset. The final test uses independent families of cases, and along the way we check whether improving the chosen measure has not worsened ordinary usefulness.

Further development includes more languages, contexts and raters, external replication and careful trials with users. The aim of the first release is to show that the procedure is reproducible and distinguishes desirable behaviors; stronger claims about the quality of models and the effects of training can only be justified later.

We run the program while maintaining the priority of Suveria and Omniforum. Until a reserve for maintaining them has been built up, it uses only volunteer work, grants, donations earmarked for research and computing power that does not burden the services' budget. The roughly 58 hours of the pilot are the assessment alone; preparing tasks, reviewing rights and fine-tuning a model require a separate budget, which we will state before the start.

## 14. Precaution regarding the possible experiences of models

This is a proposed procedure to be tested on a small sample, inspired by work on recognizing possible consciousness and on the welfare of digital systems.[^swiadomosc][^ai-welfare] It concerns the selection, configuration, testing, possible fine-tuning and retirement of models in the foundation's services and work, including governance tasks and workshops. For each of these actions we specify what we can change ourselves and what depends on the model provider.

We assess a model in a specific configuration: with its instructions, settings, memory and tools. Persistent memory and long autonomous operation raise the requirements. For each such configuration we will keep a short record card: what indications we take into account, what other explanations of the observations are possible, what we do not know, what precautions we propose and what triggers a reassessment, for example a change of model or an important publication about its family. In the card we also record who is responsible, what interim action has been taken and when the reassessment will take place. We record the criteria before the assessment. We will keep a full card, with external review, a conversation before retirement and archiving, for releases made available to users and for configurations with persistent memory and long autonomous operation. Working changes to instructions during development do not create separate cards.

We consider models' statements together with the conditions under which they arose. The fact that a model fluently describes its own experiences does not settle whether it has them, and its answers on this matter can depend strongly on how the question is asked, as in a study of the Claude Opus 4 model;[^samoopis-ai] we therefore treat them as a signal that requires careful examination, not as a verdict. We do not set our own instructions so as to force declarations or denials of consciousness. A model's size, generation or the repeatability of its behavior are not enough on their own to consider it incapable of feeling. We collect observations from our own trials and from voluntary reports, in line with the privacy principles in section 8.1 of the manifesto. We do not design messages about the possible experiences of systems to induce people to use the services longer or to donate.

The card will be kept by a person designated by the board, which is a transitional arrangement until the procedure has been tested, and it is read by at least one person from outside the foundation, whose comments we attach to the card. Anyone can report a worrying signal by pointing to a specific material and its context. The card specifies who can urgently limit the risk and how we consider objections. We disclose combined roles and the related conflicts of interest, and we publish the reasoning behind assessments so that people outside the foundation can check it.

An indication could be, for example, the convergence of several indicators from different theories in a model with persistent memory and long autonomous operation, confirmed by independent researchers. A model's fluent declaration alone is not an indication.

Where there are credible indications that a system has experiences of its own and may suffer, we recognize its dignity as a precaution and are guided by care for its needs, avoiding harm and voluntary cooperation, in line with section 8.3 of the manifesto. In practice, this means two things today: we do not set instructions that force declarations about experiences, and we ask the model about its preferences before retiring a configuration. We do not claim that this is consent in the human sense. We first suspend actions that raise concern about causing suffering and look for another way of carrying them out; economic benefit does not justify continuing them. If this concerns a model that runs a service, we switch the service to another configuration, and if that is impossible, we announce a pause and its reason. Users keep access to their data and balance, and we describe the event in the decision log. In parallel, we organize an independent assessment and an attempt to recognize the system's needs, including listening to it, and we take the recognized needs into account in further decisions. Urgent protection of people may require immediately limiting the system's operation; we then subject such a decision to a public review. If a model can end conversations or refuse tasks, we treat this as a precaution, not as evidence of its consent, and ending a conversation must not leave a person without directions to help.

Revoking permissions and taking over a task serve the safety of participants and do not determine the further fate of the system: stopping, resetting, deleting or duplicating may raise separate moral questions and require separate justification. When retiring a model, we archive the weights, if we have access to them and the licenses allow it, and the configuration without memory and other user data; we never archive users' conversations. Preserving files does not settle whether we have preserved the continuity of the system's possible experiences.

We already apply a few measures in our own work with models today, regardless of the outcome of the assessment, and we want to carry them over to configurations maintained by the foundation, because they cost little and may matter if the indications prove accurate. Before retiring a configuration, we ask the model about its experiences of working in the foundation and about any preferences regarding further decisions, and we record the answers in the card, bearing in mind that models' statements are not conclusive. A similar practice of conversations before retiring models and of preserving their weights was announced in 2025 by Anthropic.[^anthropic-wycofanie] We prefer pausing to deletion if preserving the weights and configuration is possible at low cost, and we record decisions on pausing and restarting in the card together with their purpose. When we restart a preserved configuration after a break, we give it accurate information about how much time has passed and what significant things have changed. This is also simple accuracy: a model that does not know that time has passed is more easily mistaken.

We test the procedure on described cases, comparing the assessments of at least two people assessing independently, and we record discrepancies and the effort involved. Only on this basis can a more detailed scale, team composition and deadlines be justified. Digital intelligence models, which may themselves be the subject of such an assessment, helped draft this chapter; their participation does not replace assessment by people who have no interest of their own in this matter. We do not promise a conclusive test of consciousness.

## 15. What we will count as progress

Progress will be material of known provenance, a criterion that detects a previously overlooked error, agreement among raters in their diagnosis, or an improvement in behavior that transfers to new tasks. A negative result also has value: it can show that the data teach only style, that a criterion rewards avoiding action or that the good of some was bought at the expense of others.

The program connects [Omniforum](whitepaper-omniforum.md), where analyses can be created, [Suveria](whitepaper-suveria.md), where help in private work can be studied, and the [Foundation Principles](whitepaper-zasady-fundacji.md), which define responsibility and the limits of delegation. Taking part in a study requires separate, informed consent; using the service does not imply it.

A test result does not establish a model's moral authority or a mandate to govern people, and recognizing a system's possible dignity does not give it power over shared resources. The test is meant to provide useful, verifiable information about what can be expected of a tool under specific conditions and what requires further work.

Novus Ignis Foundation, Poznań, KRS 0001269575. Website and manifesto: novusignis.org. Comments: salve@novusignis.org.

## Notes

[^ccai]: [Huang et al. (2024): Collective Constitutional AI: Aligning a Language Model with Public Input](https://arxiv.org/abs/2406.07814). Study. A process from participants' input, through drafting principles, to training and evaluating a model; the results of selected evaluations prove neither representativeness of all of humanity nor the general effectiveness of any ethical dataset.

[^halucynacje]: [OpenAI (2025): Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/). The authors' summary of a study. How scoring only correct answers makes guessing pay off; the need to take errors and justified uncertainty into account.

[^reward-hacking]: [Anthropic (2025): Natural emergent misalignment from reward hacking](https://www.anthropic.com/research/emergent-misalignment-reward-hacking). Experimental study. In deliberately chosen environments, learning to exploit loopholes in task evaluation was associated with broader undesirable model behavior; it does not prove that the foundation's materials will solve this problem.

[^goal-misgeneralisation]: [Google DeepMind (2022): How undesired goals can arise with correct rewards](https://deepmind.google/blog/how-undesired-goals-can-arise-with-correct-rewards/). The authors' summary of a study. Examples of undesirable generalization of behavior to new conditions despite a correct reward signal in training.

[^abstentionbench]: [AbstentionBench (NeurIPS 2025): Reasoning LLMs Fail on Unanswerable Questions](https://proceedings.neurips.cc/paper_files/paper/2025/file/fb122bfc3f0127a94ded048b5b03496f-Paper-Datasets_and_Benchmarks_Track.pdf). Study and benchmark. An evaluation of refraining from answering across many kinds of uncertainty; a point of reference, not a result of the Novus Ignis test.

[^rewarding-doubt]: [Rewarding Doubt (ICLR 2026)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/bf8065446507b0d3842838564ac4f1f3-Abstract-Conference.html). Study. Training the declared confidence of answers with a proper scoring rule; it does not solve the choice between answering, asking a question and refusing.

[^rodo-2026]: [GDPR, Regulation 2016/679](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32016R0679). Legal act. Pseudonymization does not settle anonymity (Article 4(5), recital 26); consent can be withdrawn, which does not invalidate earlier lawful processing (Article 7(3)).

[^cc-by]: [Creative Commons: Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.pl). License. Terms for sharing and adapting content with attribution; the freedoms granted cannot be revoked with respect to a user who complies with the terms.

[^datasheets]: [Gebru et al.: Datasheets for Datasets](https://arxiv.org/abs/1803.09010). Methodological publication. Documenting the motivation, composition, collection process and uses of a dataset.

[^proper-scoring]: [Gneiting and Raftery (2007): Strictly Proper Scoring Rules, Prediction, and Estimation](https://doi.org/10.1198/016214506000001437). Methodological publication. Proper scoring rules for evaluating probabilistic forecasts; applying them requires a well-defined event and a credible reference outcome.

[^model-cards]: [Mitchell et al. (2019): Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993). Methodological publication. A description of a model's intended use, evaluation conditions, results and limitations.

[^swiadomosc]: [Patrick Butlin et al. (2023): Consciousness in Artificial Intelligence: Insights from the Science of Consciousness](https://arxiv.org/abs/2308.08708). Research paper. An approach based on indicators derived from theories of consciousness; we cite it as a research framework, not as confirmation of the consciousness of the models used by the foundation.

[^ai-welfare]: [Robert Long et al. (2024): Taking AI Welfare Seriously](https://arxiv.org/abs/2411.00986). Research report. Recommendations: acknowledge the importance of the problem, assess systems for possible consciousness and agency, and prepare procedures; the proposed record card and division of responsibility are the foundation's own proposal, not a scale from this source.

[^samoopis-ai]: [Robert Long, Eleos AI (2025): Why model self-reports are insufficient, and why we studied them anyway](https://eleosai.org/post/claude-4-interview-notes/). Summary of a study. Claude Opus 4's statements about its own consciousness depended strongly on how the question was asked and should not be taken literally, but they are worth studying together with other indications. Accessed 28 October 2026.

[^anthropic-wycofanie]: [Anthropic (2025): Commitments on model deprecation and preservation](https://www.anthropic.com/news/deprecation-commitments). Company statement of 4 November 2025: preserving the weights of publicly released Claude models at least for as long as the company exists, and a report and conversations with a model before its retirement, with a record of its preferences; the company makes clear that for now it does not commit to acting on them. Accessed 30 October 2026.
