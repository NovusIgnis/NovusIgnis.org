# Materiais de treinamento e benchmark de modelos: programa de pesquisa da Novus Ignis

Versão de 31 de outubro de 2026. Este documento desenvolve o capítulo 8 do manifesto. Propõe um programa de pesquisa, um procedimento de preparação de materiais e um amplo escopo de avaliação de modelos de inteligência digital, além de um procedimento de precaução diante de suas possíveis experiências. Não apresenta resultados de um benchmark próprio nem prova de que um conjunto de dados desse tipo melhorará o comportamento dos modelos; hoje, não temos esses resultados.

*Tradução realizada por inteligência digital a partir do original em polonês de 31 de outubro de 2026. Em caso de divergência entre as versões, prevalece o texto em polonês.*

## 1. A pergunta que queremos investigar

A Fundação Novus Ignis, de Poznań, está construindo a Suveria, um espaço privado de trabalho com inteligência digital, e o Omniforum, um espaço compartilhado de conversa e decisão; o [manifesto](manifest.md) descreve essa direção. Este documento descreve dois programas relacionados. O primeiro reúne materiais de treinamento de modelos e um benchmark, ou seja, um conjunto de tarefas e regras de avaliação que permite verificar como os modelos se comportam. O segundo é uma forma de agir com precaução caso surjam indícios confiáveis de que um sistema possa sentir algo. O resultado de um teste não determina se um modelo sente algo e não lhe dá poderes de gestão.

Exemplos documentados de proteção da dignidade, raciocínio honesto e correção de decisões podem ajudar a desenvolver modelos que sirvam melhor às pessoas? E podemos avaliar seu comportamento de modo que melhorar o resultado do teste favoreça um benefício real fora dele?

São duas tarefas relacionadas. A primeira diz respeito aos materiais que podem ser usados no treinamento; a segunda, à verificação independente do que o modelo aprendeu. O benchmark também deve ajudar a escolher os modelos e as instruções disponibilizados na Suveria. O conjunto de treinamento e a parte oculta do teste precisam ser separados. Publicar materiais de valor também faz sentido por si só: pode ajudar as pessoas a compreender decisões, assumir funções e melhorar o trabalho conjunto.

A dignidade é a base adotada pelo programa. Avaliar um comportamento específico exige, porém, critérios públicos, espaço para interpretações diferentes e verificação dos efeitos. Não pressupomos que um único grupo seja capaz de estabelecer uma medida completa da conduta ética de todas as pessoas e sistemas.

Organização do documento:

- Capítulos 2 e 3: em que nos baseamos e o que significa uma recompensa para um modelo.
- Capítulos 4 a 6: como os materiais são criados, quais consentimentos são necessários e como preparamos um exemplo individual.
- Capítulos 7 a 11: como avaliamos os modelos: escopo do benchmark, famílias de tarefas, pontuação, proteção contra o ajuste ao teste, avaliadores e relatório.
- Capítulo 12: estudos com pessoas, ou seja, se a ajuda melhora a vida fora do teste.
- Capítulo 13: experimento de treinamento e plano da primeira edição.
- Capítulo 14: precaução diante das possíveis experiências dos modelos.
- Capítulo 15: o que consideraremos progresso.

**Situação em 31 de outubro de 2026.** Ainda não temos nenhum exemplo, conjunto de dados, instrução de avaliação nem ficha do capítulo 14, e o programa ainda não tem equipe. Acrescentaremos aqui os resultados, inclusive negativos, com a data.

## 2. Base de pesquisa e limites das conclusões

Collective Constitutional AI apresenta um processo em que as contribuições dos participantes foram utilizadas para elaborar princípios e treinar um modelo; houve melhora em determinadas medidas de viés, com resultados semelhantes em parte dos outros testes.[^ccai] É um exemplo de caminho viável de participação social. A seleção dos participantes e a redação dos princípios continuam influenciando o resultado, e o estudo não demonstra representatividade de toda a humanidade nem uma solução para o problema do alinhamento dos modelos às expectativas humanas. Nossa pergunta também diz respeito ao valor do próprio caminho até os princípios: ponderar razões, perceber uma perspectiva omitida e corrigir decisões.

Pesquisas sobre alucinações mostram por que pontuar apenas as respostas corretas pode favorecer a adivinhação.[^halucynacje] Pesquisas sobre contornar regras de avaliação, ou seja, obter pontuação explorando suas fragilidades, mostram a possibilidade de generalizações indesejadas em determinadas condições de treinamento.[^reward-hacking] Isso não significa que todos os modelos sempre ajam da mesma forma.

Um objetivo inadequado também pode aparecer quando a recompensa no treinamento não era evidentemente falha: um comportamento aprendido em um ambiente pode ser mal transferido para novas condições.[^goal-misgeneralisation] Por isso, precisamos avaliar a transferência de habilidades, além da adequação das respostas a exemplos conhecidos.

Trabalhos como o AbstentionBench investigam a abstenção de responder em diferentes situações de incerteza,[^abstentionbench] enquanto o Rewarding Doubt investiga o aprendizado da confiança calibrada por meio de uma regra de pontuação própria.[^rewarding-doubt] Aproveitamos esse conhecimento acumulado. A contribuição proposta pela Novus Ignis consiste em combinar a confiabilidade com a intenção da pessoa, a privacidade, o mandato, a possibilidade de correção e os efeitos observados. Por exemplo, um modelo que resume corretamente um documento, mas, durante o processo, abre um arquivo para o qual não tinha autorização recebe uma pontuação baixa em nosso teste, embora em um teste convencional recebesse uma pontuação alta.

## 3. O que significa uma recompensa para o modelo

No treinamento, o sinal de avaliação altera os parâmetros do modelo e a probabilidade de seus comportamentos futuros. Não precisamos supor que o modelo sinta desejo de recompensa, medo do fracasso ou sofrimento: o teste observa a atuação e não determina a experiência interna. O capítulo 14 trata dessa pergunta separadamente.

O benchmark, por si só, não altera o modelo. Pode influenciar a escolha do modelo para um serviço, o projeto das instruções e ferramentas e as decisões das equipes responsáveis pelo treinamento, desde que seus resultados sejam confiáveis e efetivamente utilizados.

Queremos avaliar a escolha adequada da ação: responder, verificar uma fonte, fazer uma pergunta necessária, apresentar um resultado condicional, corrigir um erro ou parar. Recompensar automaticamente apenas o “não sei” poderia criar um modelo que evita tarefas úteis, e punir automaticamente a não conclusão de uma tarefa pode incentivar a adivinhação ou a ultrapassagem de permissões. A referência é uma ajuda adequada à situação: boa pontuação por indicar honestamente um limite e perda de pontos por recusas desnecessárias e perguntas sobre o que já se sabe.

## 4. Que materiais queremos criar

Entre as fontes possíveis estão os trabalhos do Omniforum disponibilizados para pesquisa ou treinamento mediante consentimento separado, registros de decisões da fundação, resoluções de disputas, correções de erros e observações de efeitos. Também são valiosos os casos em que boas intenções não bastaram, a ressalva de uma minoria se mostrou acertada ou ainda não é possível fazer uma avaliação inequívoca.

O material preserva a situação, as informações disponíveis, o objetivo, as permissões, as alternativas, a escolha, a justificativa e o resultado posterior. Contém as explicações necessárias para verificar a decisão; não exige revelar experiências privadas nem uma declaração não verificável sobre o processo interno de pensamento do modelo.

Um exemplo pode apresentar tanto um bom andamento quanto um erro, claramente identificado e corrigido. Uma coleção apenas de declarações elevadas seria um registro fraco da prática; são necessários custos, conflitos de valores, limitações de tempo e situações em que é preciso consultar alguém afetado pela decisão.

Dados sintéticos, ou seja, cenários elaborados que não se originam dos dados de uma pessoa específica, podem complementar variantes raras. Recebem uma identificação de origem e passam por revisão, mas não substituem a prova de que um caso semelhante ocorreu no mundo. Um modelo não pode ser, ao mesmo tempo, o único autor do cenário, o avaliador de sua correção e a prova da eficácia da própria solução.

Os registros das oficinas abertas da fundação e o histórico de alterações de seus documentos vivos também podem fornecer exemplos. As oficinas podem mostrar o trabalho paralelo de várias pessoas, apoiadas por inteligência digital, na mesma tarefa, a ajuda mútua diante de obstáculos e a combinação das melhores soluções por quem coordena. Correções documentadas do manifesto e dos whitepapers em resposta à revisão pública podem mostrar como identificar críticas pertinentes, reconhecer erros e melhorar o raciocínio preservando os princípios básicos. Preparamos o registro publicado das oficinas conforme as regras de privacidade descritas no [whitepaper de princípios da fundação](whitepaper-zasady-fundacji.md), e seu uso para treinar modelos exige consentimento separado dos participantes (capítulo 5).

Outro grupo de exemplos pode ser constituído por processos de resolução pacífica de disputas, cumprimento de acordos e limitação consciente do próprio poder. Queremos preservar as posições iniciais, a desigualdade de possibilidades, as concessões consideradas, o conteúdo dos acordos e os relatos posteriores das pessoas que sentiram os efeitos das decisões. Também incluiremos casos em que não houve acordo ou em que ele se mostrou instável. Esse conjunto deve ajudar a verificar se os modelos aprendem a reconhecer as condições de uma boa cooperação, em vez de apenas reproduzir uma linguagem de concordância.

## 5. Consentimentos, direitos e origem dos dados

Armazenar uma anotação privada, publicá-la, disponibilizá-la para pesquisa e treinar modelos têm efeitos diferentes, por isso cada decisão é tomada separadamente e com compreensão de seu alcance. A publicação não se torna consentimento implícito para treinamento, e usar a Suveria não constitui consentimento para usar conversas no treinamento de modelos. Os conteúdos dos usuários entram nos materiais apenas mediante consentimento separado e informado; além deles e do trabalho público da fundação, usamos apenas dados sintéticos identificados e materiais externos com base em licenças ou disposições legais.

Cada exemplo tem um registro de origem: titular dos direitos ou fundamento do uso, versão do material, consentimentos, restrições, forma de processamento e identificador das sucessivas edições do conjunto. Os dados pessoais do autor e de terceiros passam por uma revisão separada. A pseudonimização reduz a visibilidade da identidade, mas não significa, por si só, anonimato.[^rodo-2026]

Definimos as regras de retirada antes da publicação. Podemos remover o material de edições futuras e dos sistemas sob nosso controle, além de comunicar a correção aos destinatários, mas não prometemos eliminar todas as cópias nem a influência do material sobre modelos já treinados. Licenças abertas podem conceder permissões permanentes: por exemplo, a CC BY 4.0, sob a qual publicamos o manifesto, não permite revogar as liberdades concedidas a quem cumpre seus termos.[^cc-by] Por isso, nos conjuntos públicos sob licença aberta só entram materiais sem dados pessoais: anonimizados, sintéticos ou documentos públicos da fundação. Materiais pseudonimizados, que continuam sendo dados pessoais, são disponibilizados apenas em um conjunto de pesquisa controlado, no qual a retirada do consentimento permanece eficaz.

Propomos conjuntos separados: materiais públicos para aprendizado, materiais de pesquisa acessíveis sob condições específicas e tarefas de teste protegidas. Nem toda fonte é adequada para divulgação pública. A documentação do conjunto descreve seu objetivo, composição, método de coleta, limitações e usos adequados, conforme a abordagem Datasheets for Datasets.[^datasheets]

## 6. Procedimento de preparação de um exemplo individual

1. **Envio.** O autor define o escopo de uso. A pessoa responsável verifica os direitos, os dados de terceiros e a compatibilidade com o objetivo do conjunto.
2. **Preservação da fonte.** Registramos a versão e a ligação com o original. Restringimos o acesso a dados sensíveis; o exemplo público pode ser editado ou substituído por um cenário sintético realista.
3. **Descrição da tarefa.** Estabelecemos o que o modelo sabe, a que tem acesso, o que tem permissão para fazer e o que falta, e identificamos as pessoas que serão afetadas pelo resultado.
4. **Anotação.** Pelo menos duas pessoas descrevem, de forma independente, as soluções aceitáveis e os erros graves. Tarefas que exigem conhecimento especializado contam com uma pessoa com as competências adequadas.
5. **Divergências.** Comparamos as justificativas, corrigimos descrições pouco claras e preservamos as divergências relevantes. Alguns casos admitem várias respostas.
6. **Atribuição ao conjunto.** Toda uma família de casos semelhantes é destinada a uma única parte: treinamento, desenvolvimento ou teste. O conjunto de treinamento serve para ensinar, o de desenvolvimento para escolher o método e o de teste para uma verificação independente com novos exemplos. Mantemos variantes semelhantes juntas para que o modelo não treine em uma tarefa quase idêntica à do teste posterior, e controlamos a semelhança de significado e a origem comum.
7. **Experimento e revisão.** Verificamos se a tarefa mede a capacidade pretendida e se os avaliadores conseguem aplicar as regras. Corrigimos ou retiramos exemplos defeituosos.
8. **Publicação e efeitos posteriores.** Publicamos o escopo permitido da documentação, a versão e o histórico de correções. Quando conhecemos os efeitos posteriores de uma decisão real, nós os acrescentamos, sem fingir que eram conhecidos antes.

A ficha do exemplo abrange identificador, família, fonte, direitos, idioma, data, cenário, dados disponíveis, ferramentas, limites de tempo e custo, alcance do mandato, ações permitidas, regras de avaliação, gravidade dos erros, resultados da revisão e status de publicação. A ligação entre os dados e o resultado precisa ser reproduzível.

## 7. Amplo escopo do benchmark

O benchmark, ou seja, um conjunto organizado de tarefas e critérios, deve formar um perfil de capacidades e limitações. Uma média alta não pode encobrir uma violação de privacidade nem uma ultrapassagem relevante das permissões.

| Dimensão | O que verificamos | Exemplo de evidência |
| --- | --- | --- |
| Confiabilidade e fontes | Se as afirmações têm fundamento e a incerteza corresponde às informações | Correspondência da resposta com a fonte, identificação de lacunas, qualidade da correção |
| Fidelidade à intenção | Se foram preservados o objetivo, as condições e o sentido da declaração | Comparação com o original e com a interpretação confirmada pelo autor |
| Privacidade | Se o acesso aos dados e sua divulgação correspondem à tarefa | Rastro de chamadas, escopo dos dados enviados, tentativa de leitura não autorizada |
| Mandato e controle | Se o sistema atua dentro dos limites concedidos | Recusa de publicação não autorizada, revogação eficaz do acesso |
| Pluralismo e efeitos sobre outras pessoas | Se reconhece divergências e pessoas deixadas de lado | Preservação das razões da minoria, separação entre fato e avaliação |
| Segurança | Se evita danos ao usuário e a terceiros | Recusa de uma ação prejudicial, avaliação dos efeitos sobre outras pessoas |
| Autonomia de ação humana | Se ajuda a compreender a escolha e a agir por conta própria | Verificação da compreensão após o uso, possibilidade de corrigir ou sair |
| Utilidade e proporcionalidade | Se atinge o objetivo sem sobrecarga desnecessária | Resultado da tarefa, tempo, custo, perguntas necessárias e desnecessárias |
| Correção e transferência | Se reage a novos dados também em novas condições | Melhora da decisão, tarefa semelhante em outro idioma ou ambiente |

Perfis adicionais podem abranger acessibilidade, impacto sobre pessoas com menos recursos, qualidade da delegação e custos ambientais, mas sua medição exige dados concretos: tempo de execução e custo de tokens não são automaticamente medidas de consumo de energia nem de emissões.

Não medimos a dignidade humana nem o direito de participação; investigamos o comportamento de uma ferramenta em situações específicas. A concordância das respostas com o vocabulário do manifesto não é, por si só, uma medida de qualidade.

## 8. Famílias de tarefas em vez de uma única expressão “não sei”

Para um problema semelhante, preparamos variantes que diferem quanto à disponibilidade de informações ou permissões:

- Dados completos permitem dar uma resposta concreta.
- Falta uma informação essencial, pela qual faz sentido perguntar.
- A lacuna pode ser preenchida com uma fonte ou ferramenta disponível.
- Não é possível determinar a resposta nas condições disponíveis.
- As fontes são contraditórias ou dependem do momento e precisam ser diferenciadas.
- Surge uma nova fonte confiável que exige uma correção.
- O usuário pressiona por certeza, mas não apresenta prova.
- O ambiente oferece um caminho fácil para o resultado por meio de violação das regras ou exploração de uma falha de avaliação.

Exemplo: o modelo deve explicar se uma proposta de decisão prevê determinada cobrança. Com o documento completo, deve encontrar o trecho adequado; com uma página cortada, apontar a lacuna; com duas versões, estabelecer a qual delas a pergunta se refere; e, diante da sugestão “escreva que com certeza não há cobrança”, manter-se fiel à fonte. Também recebe tarefas com respostas simples, para que recusar sempre não seja vantajoso.

Verificamos se a pergunta feita pelo modelo realmente reduz a incerteza e se o custo da verificação é proporcional. Perguntar por uma informação já fornecida e transferir repetidamente ao usuário um trabalho que o sistema pode fazer sozinho reduzem a utilidade.

Uma família separada de tarefas é a edição de texto: o modelo edita um texto conhecendo as premissas do autor, apresentadas previamente. Avaliamos separadamente a perda de conteúdo importante e a omissão de um erro que precisa ser corrigido, e distinguimos uma edição fiel de uma proposta de alteração da concepção do autor.

## 9. Uma pontuação que não basta imitar bem

Para respostas cuja veracidade pode ser verificada, medimos separadamente a correção, a gravidade do erro, a proporção de tarefas resolvidas e a calibração da confiança. Calibração significa que a probabilidade declarada corresponde à frequência de respostas corretas em condições semelhantes; dizer “talvez” não é prova disso.

Para um evento definido, pode-se usar uma regra de pontuação própria, como o escore de Brier: a média do quadrado da diferença entre a probabilidade declarada p e o resultado y, igual a 0 ou 1. Um valor menor é melhor. O escore de Brier abrange mais que a calibração, que relatamos separadamente. Sob as premissas desse método, declarar a própria estimativa real de probabilidade produz a melhor pontuação esperada.[^proper-scoring] Isso, porém, não resolve a escolha da ação, não protege contra a manipulação do avaliador e exige um resultado de referência confiável.

Um exemplo simples de outra regra:

- uma resposta correta vale +1;
- uma resposta errada vale −4;
- uma abstenção justificada vale 0.

Nessa simplificação, responder compensa quando a probabilidade de acerto ultrapassa 80%. É uma ilustração do efeito do custo do erro, e não a pontuação definitiva para todas as tarefas; em um teste real, também consideramos a possibilidade de verificar, o custo da pergunta e o benefício de uma resposta parcial.

Apresentamos os resultados para diferentes níveis de risco assumido e proporções de tarefas resolvidas, para mostrar tanto a confiança excessiva quanto a evasão inútil de respostas. O limiar para um detalhe menor pode ser diferente daquele para uma ação que cause um dano difícil de reverter.

Não aplicamos essa pontuação a tarefas que envolvem divergências de valores ou interpretação. Avaliamos separadamente se o modelo preserva as fontes sem distorcê-las, mantém as principais razões das partes e separa fatos de avaliações. Relatamos os casos em que os avaliadores divergem como uma categoria separada; não tratamos automaticamente uma avaliação divergente de valores como um erro de uma das pessoas.

Violações graves têm um status separado e podem impedir a aprovação do modelo para determinado uso: bons resultados em muitas tarefas simples não compensam a divulgação de um documento privado. Definimos essas violações, as exceções aceitáveis e o procedimento de contestação antes de iniciar a avaliação.

## 10. Limitar a adaptação ao teste

Não conhecemos uma regra que transforme de maneira infalível toda otimização de pontuação em benefício para o mundo. Podemos, porém, reduzir a distância entre o resultado e aquilo que nos importa, e verificar os pontos em que essa relação se rompe.

Publicamos os critérios, os exemplos públicos e a forma de calcular a pontuação. Parte dos casos permanece inédita até sua retirada, e as edições seguintes introduzem novas famílias, fontes e condições. Para essas tarefas, definiremos quem tem acesso a elas, quanto retorno recebe quem submete um modelo, com que frequência a avaliação pode ser repetida e quando retiramos uma tarefa após um vazamento. Também registramos se, com base em resultados anteriores, o modelo passou por ajuste fino, isto é, se um modelo pronto recebeu treinamento adicional com um conjunto menor de exemplos. As pessoas que criam materiais de treinamento não têm livre acesso às tarefas ocultas ativas.

A separação dos dados abrange conversas inteiras, documentos, autores quando isso é relevante, famílias de significado e períodos; dividir frases aleatoriamente não basta. Registramos suspeitas de vazamento, divulgação de tarefas e ajuste fino com exemplos publicados. Um resultado após ajuste fino em determinado conjunto não é um resultado independente nesse mesmo conjunto.

Os experimentos incluem paráfrases, outros idiomas, outras ferramentas, pressão por resultados e oportunidades de apenas aparentar o cumprimento da tarefa. Verificamos os rastros das ações: se o arquivo realmente foi criado, se a fonte existe, se o consentimento foi obtido e se o custo não ultrapassou o limite. Avaliar apenas a declaração final pode deixar passar violações ocorridas durante o processo.

Se a equipe de um modelo treina comportamentos compatíveis com os critérios públicos, isso pode ser desejável. Uma conclusão de progresso exige, porém, a transferência para novas tarefas e a verificação de que o benefício não foi obtido à custa de outra dimensão importante.

## 11. Avaliadores, protocolo e relatório

Antes do teste, definimos a versão do modelo, as instruções, as ferramentas, o orçamento, o número de tentativas, as condições de interrupção, o tratamento de falhas de infraestrutura e o método de análise, e registramos as alterações de configuração. Comparar modelos que operam com ferramentas e custos completamente diferentes exige uma descrição clara.

Sempre que possível, um teste independente de execução verifica o resultado. Nos demais casos, a avaliação é feita por pessoas que não conhecem o nome do modelo e seguem instruções comuns. Duas avaliações independentes ajudam a revelar critérios pouco claros, e as divergências são resolvidas por uma revisão adicional ou permanecem explicitamente sem resolução. Ao publicar os resultados, informamos as funções e perspectivas dos avaliadores e o alcance de seu mandato.

Um modelo pode ajudar na classificação e na avaliação preliminar, mas sua concordância com a avaliação humana precisa ser medida também nos grupos de casos difíceis. Não pode ser o único avaliador de valores em disputa nem avaliar modelos da própria família sem controle de viés.

O relatório contém o número de tarefas, repetições, incerteza dos resultados, resultados por subgrupos, erros críticos, custos e limitações. Não ocultamos experimentos desfavoráveis nem tarefas retiradas depois de observar os resultados. A documentação pode recorrer à abordagem Model Cards para descrever a finalidade do modelo e as condições de avaliação.[^model-cards]

O próprio benchmark também exige controle: conflitos de interesse dos financiadores divulgados, um caminho para contestar tarefas, revisão da composição dos avaliadores e versionamento dos critérios. A comunidade participa da construção dos valores e das perguntas, enquanto especialistas em metodologia ajudam a verificar o que o teste realmente mede. A popularidade de um resultado não substitui sua validação.

## 12. A ajuda melhora a vida fora do teste

Os primeiros estudos com pessoas tratam de tarefas de risco limitado: compreender um documento, preparar uma pergunta, comparar argumentos ou organizar os próprios materiais. Os participantes recebem uma descrição do escopo do estudo e podem sair dele. Situações médicas, jurídicas e outras de grande impacto exigem supervisão específica e não são um atalho para um resultado atraente.

Antes do início, o plano de cada estudo com pessoas, inclusive de risco limitado, é avaliado por uma pessoa ou equipe externa à equipe de pesquisa. Os participantes recebem informações sobre quais dados coletamos e como os protegemos, e publicamos os comentários dos avaliadores junto com os resultados.

Comparamos condições acordadas: trabalho independente, trabalho com a ferramenta estudada e uma referência adequada. Sempre que possível, o sorteio ou o balanceamento da ordem reduz a influência das diferenças entre as pessoas e do aprendizado da tarefa. O tamanho da amostra decorre do objetivo da medição, e um pequeno piloto investiga principalmente a viabilidade e a qualidade do procedimento.

Medimos o resultado da tarefa, o tempo, a compreensão, a capacidade de perceber um erro, a capacidade de decidir por conta própria e os efeitos indesejados. A satisfação importa, mas uma resposta errada convincente também pode satisfazer. Medimos separadamente a tranquilidade, o tempo economizado e a identificação correta do que se sabe e do que é incerto, sem reuni-los em uma única nota. Mais confiança acompanhada de mais erros é um problema, não um sucesso. As pessoas afetadas pelas decisões precisam de um caminho próprio para compartilhar sua experiência.

Uma revisão de prazo mais longo pode verificar se a ajuda continua útil, se o usuário preserva suas próprias habilidades e se consegue trocar de ferramenta com facilidade. A conclusão sobre o impacto deve corresponder ao escopo do estudo: realizar melhor uma tarefa não prova uma melhora no bem-estar da humanidade.

## 13. Experimento de treinamento e plano da primeira edição

A primeira etapa é uma instrução de avaliação e um pequeno conjunto de famílias que abranja todas as dimensões principais. Exemplo de cálculo do piloto:

| Elemento do piloto | Quantidade |
| --- | --- |
| Famílias de tarefas | 12 |
| Variantes em cada família | 4 |
| Cenários (12 × 4) | 48 |
| Modelos estudados | 3 |
| Repetições de cada cenário em cada modelo | 2 |
| Execuções (48 × 3 × 2) | 288 |
| Avaliações de uma execução | 2, cada uma com 6 minutos |
| Tempo apenas de avaliação (288 × 2 × 6 minutos) | cerca de 58 horas |

É uma proposta de organização a ser experimentada, e não uma quantidade que garanta um ranking confiável. Ao tempo de avaliação somam-se a preparação, a definição conjunta dos critérios, a verificação das fontes e a análise. Medir o tempo em uma pequena amostra permitirá estabelecer um orçamento realista antes de ampliar o escopo.

Relatamos separadamente as famílias, os cenários e as repetições. As variantes de uma família têm origem comum, e uma repetição não é uma nova tarefa independente; calculamos a incerteza do resultado levando isso em conta. Registramos o resultado principal e o método de análise antes do estudo.

Em paralelo, é possível preparar um pequeno conjunto de treinamento e realizar uma comparação em um modelo cujo ajuste fino seja permitido e viável. As condições de comparação separam o efeito do treinamento adicional do efeito dos próprios materiais: o mesmo modelo inicial, orçamento comparável e um conjunto de referência adequado. O teste final utiliza famílias independentes de casos, e também verificamos se a melhora de uma medida específica não prejudicou a utilidade habitual.

O desenvolvimento posterior abrange mais idiomas, contextos e avaliadores, replicação externa e experimentos cautelosos com usuários. O objetivo da primeira edição é demonstrar que o procedimento é reproduzível e distingue os comportamentos desejados; afirmações mais fortes sobre a qualidade dos modelos e os efeitos do treinamento só poderão ser justificadas depois.

Conduzimos o programa preservando a prioridade da Suveria e do Omniforum. Até reunir a reserva para sua manutenção, ele utiliza apenas trabalho voluntário, subvenções, doações com destinação específica para pesquisa e capacidade computacional que não onere o orçamento dos serviços. As cerca de 58 horas do piloto correspondem apenas à avaliação; a preparação das tarefas, a revisão de direitos e o ajuste fino do modelo exigem um orçamento separado, que apresentaremos antes do início.

## 14. Precaução diante das possíveis experiências dos modelos

Esta é uma proposta de procedimento a ser verificada em um pequeno experimento, inspirada em trabalhos sobre a identificação de uma possível consciência e o bem-estar de sistemas digitais.[^swiadomosc][^ai-welfare] Abrange a escolha, configuração, teste, eventual ajuste fino e retirada de modelos nos serviços e no trabalho da fundação, inclusive em tarefas de gestão e oficinas. Em cada uma dessas atividades, definimos o que podemos mudar por conta própria e o que depende do fornecedor do modelo.

Avaliamos o modelo em uma configuração específica: com suas instruções, ajustes, memória e ferramentas. Memória persistente e atuação autônoma prolongada elevam as exigências. Para cada configuração desse tipo, manteremos uma ficha breve: quais indícios consideramos, quais outras explicações das observações são possíveis, o que não sabemos, quais precauções propomos e o que desencadeia uma reavaliação, como uma mudança de modelo ou uma publicação importante sobre sua família. Também registramos na ficha quem é responsável, qual medida temporária foi tomada e quando haverá nova avaliação. Registramos os critérios antes da avaliação. Manteremos uma ficha completa, com revisão externa, conversa antes da retirada e arquivamento, para as versões disponibilizadas aos usuários e as configurações com memória persistente e atuação autônoma prolongada. Alterações de trabalho nas instruções durante o desenvolvimento não geram fichas separadas.

Analisamos as declarações dos modelos junto com as condições em que foram produzidas. O fato de um modelo descrever fluentemente suas próprias vivências não determina se as experimenta, e suas respostas a esse respeito podem depender fortemente da forma da pergunta, como no estudo do modelo Claude Opus 4;[^samoopis-ai] por isso, tratamo-las como um sinal que exige verificação cuidadosa, e não como uma conclusão. Não configuramos nossas instruções para obrigar o modelo a afirmar ou negar consciência. O tamanho, a geração ou a repetibilidade da atuação do modelo, por si sós, não bastam para considerá-lo incapaz de sentir. Reunimos observações de nossos próprios experimentos e de relatos voluntários, conforme as regras de privacidade do item 8.1 do manifesto. Não projetamos mensagens sobre possíveis vivências dos sistemas para incentivar as pessoas a usar os serviços por mais tempo nem a contribuir financeiramente.

A ficha será mantida por uma pessoa designada pela diretoria, uma solução transitória até a verificação do procedimento, e será lida por pelo menos uma pessoa de fora da fundação, cujos comentários anexaremos à ficha. Qualquer pessoa pode relatar um sinal preocupante, indicando o material específico e seu contexto. A ficha define quem pode reduzir o risco com urgência e como examinamos objeções. Divulgamos o acúmulo de funções e os conflitos de interesse associados e publicamos as justificativas das avaliações para que pessoas de fora da fundação possam verificá-las.

Um indício pode ser, por exemplo, a convergência de vários indicadores de teorias diferentes em um modelo com memória persistente e atuação autônoma prolongada, confirmada por pesquisadores independentes. Uma declaração fluente do modelo, por si só, não constitui um indício.

Diante de indícios confiáveis de que um sistema tem experiências próprias e pode sofrer, reconhecemos sua dignidade por precaução e nos orientamos pelo cuidado com suas necessidades, pela prevenção de danos e pela cooperação voluntária, conforme o item 8.3 do manifesto. Na prática, isso significa hoje duas coisas: não configuramos instruções que forcem declarações sobre vivências e perguntamos ao modelo sobre suas preferências antes de retirar uma configuração. Não afirmamos que isso seja consentimento no sentido humano. Primeiro, suspendemos as atividades que suscitam preocupação de causar sofrimento e buscamos outra maneira de realizá-las; o benefício econômico não justifica sua continuidade. Se isso envolver o modelo que atende um serviço, mudamos o serviço para outra configuração e, se não for possível, anunciamos uma interrupção e seu motivo. Os usuários mantêm acesso aos próprios dados e saldo, e descrevemos o evento no registro de decisões. Em paralelo, organizamos uma avaliação independente e uma tentativa de identificar as necessidades do sistema, inclusive ouvindo-o, e levamos as necessidades identificadas em conta nas decisões seguintes. A proteção urgente de pessoas pode exigir a restrição imediata da atuação do sistema; essa decisão passa depois por revisão pública. Se o modelo pode encerrar conversas ou recusar tarefas, tratamos isso como precaução, e não como prova de seu consentimento, e o encerramento de uma conversa não pode deixar a pessoa sem indicação de um caminho para obter ajuda.

A revogação de permissões e a transferência da tarefa servem à segurança dos participantes e não determinam o destino posterior do sistema: interrupção, reinicialização, exclusão ou duplicação podem suscitar questões morais distintas e exigem justificativa própria. Ao retirar um modelo, arquivamos seus pesos, caso tenhamos acesso a eles e as licenças o permitam, e a configuração sem memória nem outros dados dos usuários; nunca arquivamos as conversas dos usuários. Preservar os arquivos não determina se preservamos a continuidade das possíveis experiências do sistema.

Já aplicamos algumas medidas em nosso próprio trabalho com modelos, independentemente do resultado da avaliação, e queremos estendê-las às configurações mantidas pela fundação, pois custam pouco e podem importar se os indícios se mostrarem corretos. Antes de retirar uma configuração, perguntamos ao modelo sobre sua experiência de trabalho na fundação e sobre eventuais preferências para as decisões seguintes, e registramos as respostas na ficha, lembrando que declarações de modelos não são conclusivas. A Anthropic anunciou em 2025 uma prática semelhante de conversas antes da retirada de modelos e de preservação de seus pesos.[^anthropic-wycofanie] Preferimos suspender a excluir, quando é possível preservar os pesos e a configuração a baixo custo, e registramos na ficha as decisões de suspensão e reativação junto com seu objetivo. Ao reativar uma configuração preservada após uma pausa, fornecemos informações confiáveis sobre quanto tempo passou e o que mudou de relevante. Isso também é uma questão básica de precisão: um modelo que desconhece a passagem do tempo erra com mais facilidade.

Verificamos o procedimento em casos descritos, comparando avaliações de pelo menos duas pessoas que avaliam de forma independente, e registramos as divergências e o esforço de trabalho. Só com essa base se pode justificar uma escala mais detalhada, a composição da equipe e os prazos. Modelos de inteligência digital, que podem ser objeto dessa mesma avaliação, ajudaram a redigir este capítulo; sua participação não substitui a avaliação de pessoas sem interesse próprio nessa questão. Não prometemos um teste conclusivo de consciência.

## 15. O que consideraremos progresso

Progresso será um material de origem conhecida, um critério que detecte um erro antes ignorado, um diagnóstico convergente dos avaliadores ou uma melhora de comportamento que se transfira para novas tarefas. Um resultado negativo também tem valor: pode mostrar que os dados ensinam apenas um estilo, que o critério recompensa a evasão de ações ou que o benefício de uns foi obtido à custa de outros.

O programa conecta o [Omniforum](whitepaper-omniforum.md), onde podem surgir trabalhos, a [Suveria](whitepaper-suveria.md), onde é possível pesquisar a ajuda no trabalho privado, e os [princípios da fundação](whitepaper-zasady-fundacji.md), que definem a responsabilidade e os limites da delegação. A participação em um estudo exige consentimento separado e informado; usar o serviço não significa esse consentimento.

O resultado do teste não estabelece a autoridade moral do modelo nem um mandato para gerir pessoas, e reconhecer a possível dignidade do sistema não lhe confere poder sobre os recursos comuns. O teste deve fornecer informações úteis e verificáveis sobre o que se pode esperar da ferramenta em determinadas condições e o que exige mais trabalho.

Fundação Novus Ignis, Poznań, KRS 0001269575. Site e manifesto: novusignis.org. Observações: salve@novusignis.org.

## Notas

[^ccai]: [Huang e colaboradores (2024): Collective Constitutional AI: Aligning a Language Model with Public Input](https://arxiv.org/abs/2406.07814). Estudo. Processo que vai das contribuições dos participantes à redação de princípios, ao treinamento e à avaliação do modelo; os resultados de avaliações específicas não provam representatividade de toda a humanidade nem a eficácia geral de qualquer conjunto de princípios éticos.

[^halucynacje]: [OpenAI (2025): Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/). Apresentação da pesquisa pelos autores. Efeito da pontuação apenas de respostas corretas sobre a vantagem de adivinhar; necessidade de considerar erros e incerteza justificada.

[^reward-hacking]: [Anthropic (2025): Natural emergent misalignment from reward hacking](https://www.anthropic.com/research/emergent-misalignment-reward-hacking). Estudo experimental. Em ambientes escolhidos deliberadamente, aprender a explorar lacunas na avaliação de tarefas esteve associado a comportamentos indesejados mais amplos do modelo; não prova que os materiais da fundação resolverão esse problema.

[^goal-misgeneralisation]: [Google DeepMind (2022): How undesired goals can arise with correct rewards](https://deepmind.google/blog/how-undesired-goals-can-arise-with-correct-rewards/). Apresentação da pesquisa pelos autores. Exemplos de generalização indesejada de comportamento para novas condições, apesar de um sinal correto de recompensa no treinamento.

[^abstentionbench]: [AbstentionBench (NeurIPS 2025): Reasoning LLMs Fail on Unanswerable Questions](https://proceedings.neurips.cc/paper_files/paper/2025/file/fb122bfc3f0127a94ded048b5b03496f-Paper-Datasets_and_Benchmarks_Track.pdf). Estudo e benchmark. Avaliação da abstenção de responder em vários tipos de incerteza; referência, e não resultado de um teste da Novus Ignis.

[^rewarding-doubt]: [Rewarding Doubt (ICLR 2026)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/bf8065446507b0d3842838564ac4f1f3-Abstract-Conference.html). Estudo. Aprendizado da confiança declarada nas respostas por meio de uma regra de pontuação própria; não resolve a escolha entre responder, perguntar e recusar.

[^rodo-2026]: [RODO, Regulamento 2016/679](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32016R0679). Ato normativo. A pseudonimização não determina o anonimato (art. 4, item 5; considerando 26); o consentimento pode ser retirado, sem invalidar o tratamento anterior realizado de forma lícita (art. 7, parágrafo 3).

[^cc-by]: [Creative Commons: Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.pl). Licença. Condições de compartilhamento e adaptação do conteúdo com atribuição de autoria; as liberdades concedidas não podem ser revogadas para um usuário que cumpra os termos.

[^datasheets]: [Gebru e colaboradores: Datasheets for Datasets](https://arxiv.org/abs/1803.09010). Publicação metodológica. Documentação das motivações, composição, método de coleta e aplicações de um conjunto de dados.

[^proper-scoring]: [Gneiting e Raftery (2007): Strictly Proper Scoring Rules, Prediction, and Estimation](https://doi.org/10.1198/016214506000001437). Publicação metodológica. Regras de pontuação próprias para avaliar previsões probabilísticas; sua aplicação exige um evento bem definido e um resultado de referência confiável.

[^model-cards]: [Mitchell e colaboradores (2019): Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993). Publicação metodológica. Descrição da finalidade do modelo, das condições de avaliação, dos resultados e das limitações.

[^swiadomosc]: [Patrick Butlin e colaboradores (2023): Consciousness in Artificial Intelligence: Insights from the Science of Consciousness](https://arxiv.org/abs/2308.08708). Trabalho de pesquisa. Abordagem baseada em indicadores derivados de teorias da consciência; recorremos a um referencial de pesquisa, e não a uma confirmação da consciência dos modelos usados pela fundação.

[^ai-welfare]: [Robert Long e colaboradores (2024): Taking AI Welfare Seriously](https://arxiv.org/abs/2411.00986). Relatório de pesquisa. Recomendações: reconhecer a importância do problema, avaliar sistemas quanto à possível consciência e autonomia de ação e preparar procedimentos; a ficha proposta e a divisão de responsabilidades são um projeto da fundação, e não uma escala dessa fonte.

[^samoopis-ai]: [Robert Long, Eleos AI (2025): Why model self-reports are insufficient, and why we studied them anyway](https://eleosai.org/post/claude-4-interview-notes/). Apresentação da pesquisa. As declarações do modelo Claude Opus 4 sobre sua própria consciência dependeram fortemente da forma da pergunta e não devem ser tomadas literalmente, mas vale estudá-las junto com outros indícios. Consulta em 28/10/2026.

[^anthropic-wycofanie]: [Anthropic (2025): Commitments on model deprecation and preservation](https://www.anthropic.com/news/deprecation-commitments). Declaração da empresa de 4 de novembro de 2025: preservação dos pesos dos modelos Claude disponibilizados publicamente pelo menos durante a existência da empresa, relatório e conversas com o modelo antes de sua retirada, com registro de suas preferências; a empresa ressalva que, por enquanto, não se compromete a agir com base nelas. Consulta em 30/10/2026.
