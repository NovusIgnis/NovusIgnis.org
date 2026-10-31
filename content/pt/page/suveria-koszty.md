---
tytul: Quanto custa a Suveria
opis: Pelo que se deverá pagar na Suveria, o que mostra o cálculo com data e por que é uma estimativa, e não uma tabela de preços
grupa: suveria
kolejnosc: 3
menu: Quanto custa
---
# Quanto custa a Suveria

Esta página trata do seu dinheiro: pelo que se deverá pagar na Suveria, como a conta é formada e o que mostram nossos cálculos. Hoje, a Suveria é um projeto. O serviço ainda não existe, portanto também não há preço. Os números abaixo vêm de um cálculo com data de 29 de outubro de 2026 (exceto a linha “Total”, que somamos por conta própria). É um cálculo no papel, e não uma tabela de preços.

Saiba mais: [whitepaper da Suveria, capítulo 8](../whitepaper-suveria.md#s8).

## Pelo que você paga

O princípio é simples: você paga pelo que realmente usa, junto com uma parcela dos custos compartilhados calculada de forma justa (aqueles que não podem ser atribuídos a uma única pessoa, como segurança ou contabilidade), vê pelo que paga e define seu próprio limite de gastos. A cobrança cobre os custos e nada mais. Tudo que excede isso é uma doação voluntária, apresentada separadamente.

A conta tem duas partes:

- **uso real** no período: processamento, memória, transferência de dados;
- **uma parcela dos custos fixos atribuída de forma pública**, que mantém a infraestrutura pronta: segurança, pagamentos, contabilidade, operação, desgaste e substituição de equipamentos.

Queremos dividir os custos compartilhados por uma regra pública escolhida no piloto: proporcionalmente ao uso ou igualmente entre as contas ativas. O custo estimado da tarefa deverá poder ser verificado sempre, e anunciaremos sua parcela dos custos compartilhados antes do período de cobrança; ela sempre cabe no seu limite. Anunciaremos cada mudança de preço, com o motivo e o impacto sobre os usuários.

Saiba mais: [whitepaper de princípios da fundação, capítulo 3](../whitepaper-zasady-fundacji.md#s3) e [seção 3.1](../whitepaper-zasady-fundacji.md#s3-1); [manifesto, seção 6.1](../manifest.md#s6-1).

## O que mostram os cálculos

Adotamos um exemplo de usuário para os cálculos: 20 perguntas por dia, cada resposta com cerca de 600 tokens (um token é um pedaço de texto, aproximadamente uma palavra curta), todos os dias durante 30 dias. É um modelo de carga a ser testado, e não uma previsão. Os preços vêm de tabelas públicas, sem impostos.

A primeira versão provavelmente usará uma API confidencial (se reunirmos recursos suficientes, poderá funcionar desde o início em servidores próprios alugados): o modelo de inteligência digital funciona em um provedor externo que declara não ler o conteúdo das conversas, e verificaremos essa declaração. Soma-se a isso o ambiente privado: uma ou duas máquinas confidenciais com a porta de entrada, memória e arquivos dos usuários. Esse custo é fixo, portanto pesa mais em um grupo pequeno.

| Por pessoa por mês, se a Suveria fosse usada por (cálculo de 29/10/2026) | 30 pessoas | 100 pessoas | 1.000 pessoas |
| --- | --- | --- | --- |
| Apenas processamento na API confidencial | 0,70–1,25 USD | 0,70–1,25 USD | 0,70–1,25 USD |
| Custo fixo do ambiente privado (170–340 USD mensais) | cerca de 6–11 USD | cerca de 1,70–3,40 USD | algumas dezenas de centavos |

É uma estimativa no papel: não inclui trabalho humano, revisões de segurança, pagamentos nem margem para falhas; verificaremos no piloto se esse tamanho de máquinas é suficiente. Queremos mostrar o custo fixo separadamente e cobri-lo com o orçamento de apoio ao piloto, por exemplo, com doações destinadas à Suveria. Não supomos que já temos esses recursos.

Saiba mais: [whitepaper da Suveria, capítulo 7](../whitepaper-suveria.md#s7) e [seção 8.1](../whitepaper-suveria.md#s8-1); [whitepaper de princípios da fundação, seção 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## De 30 pessoas a toda a humanidade

O mesmo exemplo de usuário permite calcular quanto trabalho o modelo teria com diferentes quantidades de pessoas. Na tabela, “pico” é a hora mais movimentada do dia, quando pessoas de diferentes fusos horários usam a Suveria (cerca de 1,51 × a média de uso).

| Pessoas ativas | Perguntas por mês | Texto das respostas no pico |
| --- | ---: | ---: |
| 30 | 18.000 | 6,3 tokens por segundo |
| 100 | 60.000 | 20,9 tokens por segundo |
| 1.000 | 600.000 | 209 tokens por segundo |
| 100 mil | 60 milhões | 20.921 tokens por segundo |
| 1 milhão | 600 milhões | 209.208 tokens por segundo |
| 1 bilhão | 600 bilhões | 209,2 milhões de tokens por segundo |
| 10 bilhões | 6 trilhões | 2,09 bilhões de tokens por segundo |

Quanto equipamento isso representa? O whitepaper faz um experimento mental. Se cada uma de 10 bilhões de pessoas usasse a Suveria dessa forma, com o desempenho medido para o modelo DeepSeek-V4.1-Flash, seriam necessárias cerca de 2,25 milhões de placas B200 e cerca de 4 GW de potência. Para um bilhão de pessoas, seriam cerca de 225 mil placas e 0,4 GW; para um milhão, cerca de 225 placas. Como comparação, no início de 2026 a Epoch AI estimou que a capacidade mundial em operação para a inteligência digital ultrapassava 15 milhões de equivalentes de placas H100, que exigiam mais de 10 GW de potência. É uma simplificação: o usuário do exemplo é econômico, enquanto trabalho intensivo, modelos maiores e imagens exigem várias vezes mais.

Não fornecemos o custo por pessoa para milhões de pessoas: nessa escala, os equipamentos, os preços e a forma de manter o serviço mudariam, portanto esse número seria uma adivinhação. O cálculo de 29/10/2026 diz apenas que, sob nossas premissas, a infraestrutura própria pode se tornar mais barata do que uma API confidencial quando o número de pessoas ativas estiver entre pouco mais de dez mil e algumas dezenas de milhares.

Saiba mais: [whitepaper da Suveria, capítulo 7](../whitepaper-suveria.md#s7).

## Por que calculamos em dólares

Apresentaremos os preços dos serviços em dólares, pois é nessa moeda que se compra capacidade computacional. Também queremos aceitar pagamentos em outras moedas, pela taxa de câmbio indicada na conta. Mantemos a contabilidade da fundação em zlotys.

Saiba mais: [whitepaper de princípios da fundação, seção 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Pagamento antecipado, devolução e arredondamento

- **Pagamento antecipado.** Você informa um valor, e exatamente esse valor entra no seu saldo, independentemente da forma de pagamento. Os pagamentos antecipados deverão ficar em uma conta bancária separada; não os usamos para cobrir custos da fundação antes de prestar o serviço.
- **Limite.** Ao depositar, você define quanto quer gastar no máximo. O limite deverá funcionar como uma barreira, e não como um aviso após o ocorrido. É um requisito a ser construído e verificado, e não uma função em funcionamento.
- **Devolução.** Deverá ser possível recuperar o saldo não utilizado a qualquer momento, futuramente com um único botão; o regulamento definirá o prazo de devolução, seus eventuais custos, o pagamento mínimo e os demais detalhes. Após o encerramento da conta ou do serviço, o saldo é devolvido automaticamente pela mesma via. Um saldo não resgatado não alimenta o orçamento da fundação.
- **Arredondamento.** Ao criar uma conta, perguntamos se você quer arredondar cada cobrança para cima até o próximo dólar inteiro ou um equivalente próximo em moeda local; a diferença vai como doação para o orçamento comum. Perguntamos, em vez de selecionar por alguém, e a decisão pode ser alterada a qualquer momento com uma única configuração.

A conta mostra separadamente a cobrança pelo serviço e o valor da doação. O regulamento, preparado antes de aceitar o primeiro pagamento antecipado, definirá o prazo de devolução, o pagamento mínimo e os demais detalhes.

Saiba mais: [whitepaper de princípios da fundação, seção 3.2](../whitepaper-zasady-fundacji.md#s3-2) e [seção 3.3](../whitepaper-zasady-fundacji.md#s3-3); [whitepaper da Suveria, seção 8.3](../whitepaper-suveria.md#s8-3).

## Como isso se compara às assinaturas

O preço de uma assinatura em plataformas comerciais geralmente reúne, em um único valor, o custo de uso, a manutenção de contas gratuitas, o marketing, a administração e o lucro dos investidores, sem que o usuário veja a participação de cada componente. O manifesto propõe a hipótese de que, sem esse acréscimo oculto, uma infraestrutura compartilhada já possa oferecer, com um número relativamente pequeno de participantes regulares, mais capacidade computacional e inteligência digital por dólar gasto do que serviços fechados, com privacidade baseada em salvaguardas verificáveis.

Situação da hipótese em 29 de outubro de 2026: o cálculo nos aproxima dela, mas não a confirma. O processamento com confidencialidade declarada já está disponível em tabelas públicas de preços, portanto um grupo pequeno pode começar a usá-lo a preço de custo, e, sob nossas premissas, a infraestrutura própria pode se tornar mais barata com um número de pessoas ativas entre pouco mais de dez mil e algumas dezenas de milhares. Não competimos em preço com planos de 100–200 USD que, no trabalho intensivo com agentes, oferecem o equivalente a milhares de dólares pelos preços de tabela das APIs. Propomos cobrar pelo uso real com privacidade verificável.

Saiba mais: [manifesto, seção 2.4](../manifest.md#s2-4); [whitepaper da Suveria, seção 8.1](../whitepaper-suveria.md#s8-1).

## O que mudará o cálculo

Atualizamos o cálculo a cada mudança relevante de preços e após cada teste, preservando as versões anteriores. Três fatores serão decisivos, e os verificaremos nos testes:

- se a confidencialidade desses serviços passa por uma verificação independente;
- se a qualidade dos modelos disponíveis é suficiente para as tarefas que levarão as pessoas à Suveria;
- qual é o perfil real de tráfego.

Queremos desenvolver a infraestrutura em etapas: primeiro uma API confidencial e um ambiente privado em máquinas confidenciais; depois, o aluguel de máquinas confidenciais próprias; em seguida, a compra de equipamentos para um centro de dados externo; e, em um futuro distante, um edifício próprio, se demonstrar vantagem. Cada etapa é justificada por dados medidos e uma ficha de decisão com custo integral, riscos e condições de retirada. Hoje, calculamos a compra de um servidor apenas como estimativa, e não como oferta.

Saiba mais: [whitepaper da Suveria, seção 8.1](../whitepaper-suveria.md#s8-1) e [seção 8.2](../whitepaper-suveria.md#s8-2).

## Leia e diga o que pensa

O cálculo completo, com a tabela de opções e as fontes dos preços, está no [whitepaper da Suveria](../whitepaper-suveria.md#s8), e os princípios da cobrança, dos pagamentos antecipados e das devoluções, no [whitepaper de princípios da fundação](../whitepaper-zasady-fundacji.md#s3). Se algo nos números ou nas premissas não fizer sentido, selecione esse trecho no documento e use o botão “Tenho uma observação” ou escreva para salve@novusignis.org.