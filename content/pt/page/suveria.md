---
tytul: O que é a Suveria
opis: Um espaço privado de trabalho com inteligência digital que a fundação está projetando: o que deverá ser possível, contra o que deverá proteger e em que etapa está hoje
grupa: suveria
kolejnosc: 1
menu: O que é a Suveria
---
# O que é a Suveria

Esta página explica brevemente o que a Suveria deverá ser, para quem está sendo criada e em que etapa se encontra. Em cada parte você encontrará um link para o whitepaper da Suveria, caso queira saber mais.

A Suveria deverá ser um espaço privado na internet onde uma pessoa conversa com a inteligência digital, trabalha com seus próprios materiais e retoma pensamentos anteriores, como em sua própria casa, com a porta fechada. A Fundação Novus Ignis está projetando esse espaço pensando em pessoas de todas as partes do mundo.

Hoje, a Suveria é um projeto. Está sendo criada para que seja possível conversar com a inteligência digital sobre saúde, relacionamentos, trabalho, dinheiro e planos de vida sem medo de que um conhecimento tão íntimo de uma pessoa seja um dia monetizado ou usado para influenciá-la. Direcionamos a primeira versão a pessoas para quem a privacidade verificável é um motivo de escolha.

Saiba mais: [whitepaper da Suveria, capítulo 1](../whitepaper-suveria.md#s1).

## O que queremos que seja possível

Na Suveria, queremos que seja possível:

- conversar sobre assuntos pessoais e profissionais, vendo onde a conversa é processada e quem pode vê-la;
- trabalhar com os próprios documentos e arquivos, salvar os resultados e transferi-los para outros lugares em formatos abertos;
- armazenar conversas, arquivos e a memória do assistente principalmente nos próprios dispositivos, criptografados com uma chave sob seu controle;
- com seu consentimento, usar a memória de conversas anteriores e construir um Cânone Pessoal, ou seja, um conjunto de princípios e valores próprios;
- escolher a forma de trabalho, de um modelo no próprio dispositivo a um ambiente confidencial em um servidor, sabendo contra o que cada opção protege;
- pagar pelo uso real, com um limite de gastos definido por você;
- aperfeiçoar um pensamento de forma privada e depois levá-lo conscientemente à conversa compartilhada no OmniForum, o espaço público de conversa e decisões.

Já o primeiro dia deverá proporcionar a sensação tranquila de estar em casa. Também queremos possibilitar a transferência de anotações e arquivos de conversas de outros serviços de inteligência digital. Usar a Suveria não constitui consentimento para usar as conversas no treinamento de modelos.

Saiba mais: [whitepaper da Suveria, capítulo 1](../whitepaper-suveria.md#s1).

## Contra o que protege e o que ainda não existe

A proteção deverá se apoiar em salvaguardas que possam ser verificadas de forma independente, em vez da confiança na fundação, inclusive em nós, que operamos a infraestrutura. Até hoje, nenhuma verificação desse tipo foi feita.

Comparamos várias formas de trabalho, pois cada uma protege contra coisas diferentes:

- **Modelo no seu dispositivo.** A conversa não sai do celular ou do computador, a menos que o assistente use integrações com serviços na rede; importam o estado do dispositivo, as permissões do aplicativo e quem tem acesso físico a ele.
- **Ambiente confidencial em servidores.** O servidor tem uma área isolada por hardware, cujo conteúdo nem o administrador consegue ler; é ali que o modelo lê o conteúdo. O equipamento deverá confirmar isso com uma assinatura digital (isso é atestação: um comprovante do software em execução na máquina remota e de seu modo de proteção). É necessário confiar no fabricante do processador. Essa é a opção pretendida como destino.
- **API confidencial de um provedor externo.** API é uma conexão pela qual nosso aplicativo envia a conversa ao modelo de outro provedor. A primeira versão provavelmente usará uma API confidencial; se, antes do lançamento, reunirmos recursos suficientes para alugar servidores próprios em um ambiente confidencial, ela poderá funcionar neles desde o início. Aqui, a confidencialidade começa como uma declaração do provedor que verificaremos; até um resultado positivo nos testes, identificamos essa opção como proteção declarada, e não confidencial.
- **API convencional do provedor do modelo.** O provedor tem acesso ao conteúdo; essa não é a opção padrão da Suveria privada.

A computação confidencial não corrige um computador infectado nem protege contra qualquer pessoa que tenha acesso físico ao servidor. Nenhuma opção recebe o rótulo de “privacidade plena” antes da verificação de uma configuração específica. Em cada conversa deverá ser possível ver em qual opção você está trabalhando, e mudar de opção exige sua decisão consciente.

Saiba mais: [whitepaper da Suveria, capítulo 2](../whitepaper-suveria.md#s2) e [seção 2.3](../whitepaper-suveria.md#s2-3). Veja também: [Privacidade e segurança](suveria-prywatnosc.md).

## Modelos

A base do projeto são modelos abertos que podem ser executados por conta própria. Ao escolher um modelo, levamos em conta, entre outros fatores, a qualidade em vários idiomas, a confiabilidade, a licença, o custo e a possibilidade de execução na arquitetura de proteção exigida.

Anunciamos com antecedência a mudança ou retirada de um modelo, e o histórico das conversas fica com você: é possível escolher um modelo sucessor, exportar os dados ou encerrar o trabalho. O momento da mudança de modelo deverá ficar visível na conversa.

Saiba mais: [whitepaper da Suveria, capítulo 6](../whitepaper-suveria.md#s6).

## Quanto custa

O manifesto propõe a hipótese de que uma infraestrutura compartilhada possa oferecer mais capacidade computacional e inteligência digital por dólar do que serviços fechados. O whitepaper faz esse cálculo com data de 29 de outubro de 2026: no perfil de uso adotado, uma API confidencial com confidencialidade declarada custa cerca de 0,70–1,25 USD por pessoa por mês apenas em processamento. Soma-se a isso o custo fixo do ambiente privado, que pesa mais com um número pequeno de pessoas: com 30 participantes, cerca de 6–11 USD por pessoa por mês.

É uma estimativa no papel, e não uma tabela de preços da Suveria: o cálculo não inclui trabalho humano, revisões de segurança, pagamentos nem margem para falhas. Situação da hipótese nessa data: o cálculo nos aproxima dela, mas não a confirma.

Saiba mais: [whitepaper da Suveria, capítulo 8](../whitepaper-suveria.md#s8). Veja também: [Quanto custa](suveria-koszty.md).

## Andamento do trabalho

O whitepaper mantém um registro de resultados. Sua situação em 29 de outubro de 2026: ainda não realizamos nenhum dos testes descritos, não alugamos placas de vídeo nem colocamos um modelo em funcionamento na Suveria. Planejamos a primeira medição em uma única placa confidencial, com um modelo menor.

O teste mais importante: uma equipe com permissões de operador tenta ler as conversas de contas de teste nas quais foram escondidas sequências secretas de caracteres. Se qualquer pessoa conseguir extraí-las, inclusive nós, o teste terá falhado.

Queremos conduzir os testes de forma aberta. Se você trabalha com segurança, criptografia, infraestrutura ou aplicativos, ou quer examinar o projeto de forma crítica, escreva para salve@novusignis.org com o assunto “[Dołącz] Próby Suverii”.

Saiba mais: [whitepaper da Suveria, capítulo 9](../whitepaper-suveria.md#s9) e [seção 8.2](../whitepaper-suveria.md#s8-2).

## Por que a Suveria é um caminho, e não um fim

O manifesto diz isso de forma direta:

> Hoje, a Suveria é nosso melhor caminho para trabalhar de forma privada com a inteligência digital, e não um fim em si mesma. Se os modelos couberem no próprio dispositivo ou surgir uma forma melhor de proteção, parte desse caminho se tornará desnecessária, e consideraremos isso uma boa notícia.

Saiba mais: [manifesto, seção 3.1](../manifest.md#s3-1).

## Leia e diga o que pensa

A descrição completa, com uma tabela das opções de proteção, o cálculo de custos e uma lista de questões a resolver, está no [whitepaper da Suveria](../whitepaper-suveria.md). Se algo fizer você refletir ou parecer errado, selecione esse trecho no documento e use o botão “Tenho uma observação” ou escreva para salve@novusignis.org.
