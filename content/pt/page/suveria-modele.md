---
tytul: Modelos de inteligência digital na Suveria
opis: De onde vêm os modelos da Suveria, como os escolhemos, o que acontece quando um modelo muda e quais princípios públicos o assistente deverá seguir
grupa: suveria
kolejnosc: 4
menu: Modelos
---
# Modelos de inteligência digital na Suveria

Um modelo de inteligência digital é um programa que lê suas palavras e compõe uma resposta; é nele que o assistente da Suveria deverá funcionar. Esta página explica de onde vêm os modelos, como os escolhemos, o que acontece quando um modelo muda e quais princípios o assistente deverá seguir de forma pública.

Hoje, a Suveria é um projeto. O registro de resultados do whitepaper (situação em 29 de outubro de 2026) diz claramente: ainda não colocamos nenhum modelo em funcionamento na Suveria nem realizamos nenhum dos testes descritos. Tudo abaixo são intenções e candidatos, e não um serviço em funcionamento.

Saiba mais: [whitepaper da Suveria, capítulo 9](../whitepaper-suveria.md#s9).

## Por que modelos abertos

A base do projeto são modelos abertos, ou seja, disponibilizados em condições que permitem executá-los por conta própria. Assim, a fundação pode oferecê-los praticamente a preço de custo e concentrar o trabalho em um ambiente privado de uso dos modelos existentes, com a possibilidade de desenvolver também modelos próprios no futuro.

No início, queremos usá-los em provedores de computação confidencial e, se os cálculos e as condições justificarem, em servidores próprios. O manifesto ressalta que a Suveria é “nosso melhor caminho para trabalhar de forma privada com a inteligência digital, e não um fim em si mesma”: se os modelos couberem no próprio dispositivo ou surgir uma forma melhor de proteção, parte desse caminho se tornará desnecessária.

Saiba mais: [manifesto, seção 3.1](../manifest.md#s3-1) e [whitepaper da Suveria, capítulo 6](../whitepaper-suveria.md#s6).

## Como escolhemos o modelo

A Suveria deverá estar disponível para pessoas de todo o mundo, nos próprios idiomas. Por isso, ao escolher um modelo, levamos em conta:

- a qualidade em vários idiomas;
- a compreensão da intenção;
- a confiabilidade;
- a licença, ou seja, as condições em que o criador permite usar o modelo;
- o custo;
- a possibilidade de executá-lo no ambiente protegido que descrevemos na página [Privacidade e segurança](suveria-prywatnosc.md).

Só escolhemos um modelo maior quando realiza claramente melhor as tarefas importantes para as pessoas. O benchmark da fundação deverá ajudar nisso: um conjunto de tarefas e regras de avaliação que permite verificar como os modelos se comportam; hoje, é um programa de pesquisa sem resultados.

O whitepaper cita dois candidatos. São candidatos a verificar, e não uma decisão: o primeiro modelo e o nível aceitável de qualidade continuam por definir.

- **DeepSeek-V4.1-Flash.** Modelo sob licença MIT, que também permite usá-lo em serviços. O fabricante informa 552 bilhões de parâmetros na parte principal (parâmetros são números ajustados durante o treinamento do modelo) e uma memória adicional chamada Engram com 196 bilhões de parâmetros. Para gerar cada palavra, o modelo usa apenas 8–16 bilhões desses parâmetros, por isso responde de forma rápida e barata, embora sua execução exija pelo menos quatro placas de vídeo modernas. Os parâmetros são armazenados em uma forma abreviada (quantização). Isso economiza memória, mas pode reduzir a qualidade, portanto verificaremos esse efeito em nossas próprias tarefas.
- **Kimi K3.1 Pro.** Um modelo da empresa Moonshot AI. Em 9 de novembro de 2026, seus pesos completos, ou seja, seus parâmetros, são públicos. A licença permite usá-lo também em serviços; condições adicionais só se aplicam a serviços com receita muito alta ou com muitíssimos usuários, por isso, na escala atual da fundação, não se aplicam a nós (esta é a nossa leitura, não um parecer jurídico). Para executá-lo, são necessárias pelo menos oito placas de vídeo da geração mais recente. O custo e a velocidade no ambiente protegido ainda precisam ser medidos; o DeepSeek-V4.1-Flash continua sendo o primeiro candidato.

Saiba mais: [whitepaper da Suveria, capítulo 6](../whitepaper-suveria.md#s6) e [whitepaper de materiais e benchmark, capítulo 1](../whitepaper-materialy-i-benchmark.md#s1).

## O que acontece quando o modelo muda

Anunciamos com antecedência a mudança ou retirada de um modelo. O histórico das conversas fica com você: é possível escolher um novo modelo, exportar os dados ou encerrar o trabalho.

O momento da mudança de modelo deverá ficar visível na conversa, e transferir o contexto privado para o novo modelo exige sua decisão. Mudar de modelo também pode exigir uma nova verificação da proteção, pois uma atualização não pode enfraquecer silenciosamente as salvaguardas acordadas.

Saiba mais: [whitepaper da Suveria, capítulo 6](../whitepaper-suveria.md#s6) e [capítulo 9](../whitepaper-suveria.md#s9).

## Os princípios do assistente deverão ser públicos

Publicaremos integralmente os princípios segundo os quais o assistente responde, junto com cada versão. Na Suveria, você deverá sempre poder ler a instrução completa do seu assistente, ou seja, os princípios escritos que orientam suas respostas, e a descrição da forma de trabalho: como divide uma tarefa em etapas, usa a memória e verifica as respostas.

A infraestrutura compartilhada deverá oferecer apenas modelos e configurações que passem pelos testes públicos do benchmark. Acima desse mínimo, você escolhe o estilo de trabalho, de uma organização tranquila dos pensamentos a uma conversa exigente em que o assistente aponta lacunas no raciocínio.

Queremos manter uma biblioteca aberta de instruções verificadas, que os participantes aperfeiçoam no OmniForum (o espaço compartilhado de conversa e decisões) e verificam no benchmark. Essa biblioteca ainda não existe.

Saiba mais: [whitepaper da Suveria, capítulo 4](../whitepaper-suveria.md#s4) e [seção 4.1](../whitepaper-suveria.md#s4-1).

## O assistente, o Cânone Pessoal e o Telescópio do Pensamento

A memória das conversas anteriores deverá funcionar com seu consentimento e ser editável de forma transparente: cada registro pode ser removido ou corrigido, e sua origem pode ser vista. O assistente distingue claramente suas próprias sugestões das posições que uma pessoa adotou conscientemente.

O Cânone Pessoal é seu conjunto escrito de princípios e valores que reconhece como próprios. O Telescópio do Pensamento deverá permitir ver o registro dos próprios pensamentos em diferentes momentos e suas mudanças ao longo do tempo, além de comparar uma situação indicada por você com o Cânone. A ideia nasceu da janela de Overton, ou seja, o conjunto de ideias consideradas socialmente aceitáveis em determinado momento. Para uma pessoa, é o conjunto de pensamentos que ela considera admissíveis para si naquele momento; o Telescópio deverá ser uma janela assim para uma única pessoa e só para ela.

O modelo mostra possíveis relações junto com a fonte do princípio citado, e sua interpretação pode ser corrigida ou rejeitada. Não criamos uma pontuação de moralidade nem um ranking público. Na primeira versão, o Telescópio trabalha apenas com uma situação indicada por você e não acompanha sua vida continuamente.

Saiba mais: [whitepaper da Suveria, capítulo 6](../whitepaper-suveria.md#s6) e [seção 6.1](../whitepaper-suveria.md#s6-1).

## Limites: o que o modelo faz e o que não faz

- **Crise.** Quando a conversa envolve um risco à vida ou à saúde, o assistente deverá fornecer informações sobre a ajuda disponível, como números de emergência, sem enviar nada para fora do ambiente privado.
- **Mensagens de outras pessoas.** Uma mensagem de outra pessoa, por exemplo, de uma caixa de e-mail conectada, pode conter instruções ocultas; por isso, separamos o conteúdo externo das suas instruções: ao organizá-lo, o assistente não pode enviar mensagens, abrir endereços de rede nem alterar o Cânone Pessoal por conta própria sem sua confirmação.
- **Escolhas do criador.** O próprio modelo também carrega as escolhas de quem o criou, como temas que evita; verificamos isso no benchmark e descrevemos ao escolher o modelo.
- **Sem acessos ocultos.** Queremos conter os abusos sem ler as conversas privadas. Não criamos acessos ocultos a conteúdos privados.

Saiba mais: [whitepaper da Suveria, capítulo 4](../whitepaper-suveria.md#s4), [capítulo 3](../whitepaper-suveria.md#s3) e [capítulo 6](../whitepaper-suveria.md#s6).

## Leia e diga o que pensa

Os números, as notas e a lista de questões a resolver estão no [whitepaper da Suveria](../whitepaper-suveria.md), e o método de avaliação dos modelos, no [whitepaper de materiais e benchmark](../whitepaper-materialy-i-benchmark.md). Se algo fizer você refletir ou parecer errado, selecione esse trecho e use o botão “Tenho uma observação” ou escreva para salve@novusignis.org.