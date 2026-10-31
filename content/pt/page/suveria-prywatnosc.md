---
tytul: Privacidade e segurança da Suveria
opis: De quem a Suveria deverá proteger as conversas, como uma mensagem percorre o sistema, quem tem as chaves e como verificaremos se a proteção funciona
grupa: suveria
kolejnosc: 2
menu: Privacidade e segurança
---
# Privacidade e segurança da Suveria

Esta página é para quem quer saber em que deverá consistir a proteção da privacidade na Suveria antes de confiar suas conversas a ela. Aprofunda a página [O que é a Suveria](suveria.md) e leva ao whitepaper em cada parte.

Um princípio organiza o conjunto: a privacidade não pode depender da confiança nas boas intenções da fundação ou dos administradores dos servidores, mas de salvaguardas cujo funcionamento possa ser verificado de forma independente. O manifesto expressa isso assim: “Toda promessa de segurança deve ter comprovação no código e no silício, e não apenas em nossas palavras”. Seus próprios dispositivos deverão ser o principal lugar de armazenamento das conversas, e não criamos acessos ocultos a conteúdos privados.

Hoje, a Suveria é um projeto. Tudo abaixo descreve como deverá funcionar; ainda não realizamos nenhum dos testes que deverão confirmar isso.

Saiba mais: [manifesto, seção 2.2](../manifest.md#s2-2) e [seção 3.1](../manifest.md#s3-1).

## De quem deverá proteger e de quem não

Protegemos o conteúdo das conversas e dos arquivos, o histórico e a memória do assistente, as chaves (sequências secretas de caracteres que abrem os dados criptografados), os dados de cobrança e os metadados, ou seja, informações sobre a própria conexão: horário, endereço de rede e tamanho da solicitação.

Um ambiente confidencial é uma parte do servidor isolada por hardware, cujo conteúdo nem seu administrador consegue ler. A atestação deverá confirmar se isso realmente ocorre: um comprovante assinado pelo hardware que indica qual software está em execução no servidor e em qual modo de proteção. Uma API confidencial é um ambiente desse tipo em um provedor externo ao qual nosso aplicativo se conecta (API é uma conexão entre programas). A tabela descreve o funcionamento pretendido, ainda não verificado em um teste:

| De quem deverá proteger | Modelo no seu dispositivo | Ambiente confidencial em servidores | API confidencial de um provedor externo |
| --- | --- | --- | --- |
| Administrador do provedor | não se aplica: processamento no dispositivo | deverá proteger: isolamento por hardware | declaração do provedor, a verificar |
| Observador da rede | não se aplica sem rede; o tráfego das integrações exige avaliação | proteção parcial: conteúdo criptografado, metadados exigem medidas separadas | proteção parcial, se a chave da conexão estiver vinculada à atestação |
| Pessoa com acesso físico ao servidor | não se aplica; importa o acesso ao dispositivo | não protege: em um centro de dados externo, o provedor tem acesso; em equipamento próprio, controle físico visível | não protege: o provedor tem acesso |
| Fundação | não se aplica: a fundação não participa do processamento | deverá proteger: o isolamento também nos abrange, as chaves de armazenamento ficam com você | deverá proteger o conteúdo: a porta de entrada, nossa parte responsável pela cobrança das solicitações, sem acesso ao conteúdo; mostraremos onde termina a criptografia antes do piloto |

Legenda: “deverá proteger” é a proteção pretendida; “proteção parcial” protege o conteúdo, mas não tudo ao redor dele; “não protege” declara um limite; e “declaração do provedor, a verificar” significa que não confirmamos a proteção até nossa própria verificação. O administrador do provedor é quem gerencia os servidores nos quais o modelo funciona; o observador da rede vê o tráfego entre seu dispositivo e o servidor, mas o conteúdo é criptografado durante a transmissão; a pessoa com acesso físico pode abrir o gabinete do servidor; a fundação somos nós como operadores do serviço.

Vale conhecer três limites desde o início. A computação confidencial não corrige um celular ou computador infectado. Não protege contra qualquer pessoa com acesso físico ao servidor: em 2025, pesquisadores construíram, por menos de mil dólares, um dispositivo que, com acesso físico ao servidor, permite falsificar o comprovante do hardware. A proteção nos servidores também depende das chaves do fabricante do processador, que precisa ser honesto.

Saiba mais: [whitepaper da Suveria, capítulo 2](../whitepaper-suveria.md#s2) e [seção 2.3](../whitepaper-suveria.md#s2-3).

## Como uma mensagem percorre o sistema

A Suveria deverá ser composta pelo aplicativo no seu dispositivo, pela porta de entrada (nossa parte do sistema que contabiliza as solicitações e controla o limite de gastos), por um ambiente confidencial com o modelo, pelo armazenamento de cópias criptografadas e por um intermediário opcional que oculta seu endereço.

Na opção pretendida como destino, uma mensagem deverá seguir este percurso:

1. O aplicativo obtém a descrição de uma versão aprovada e verifica a atestação do servidor.
2. Compara esse comprovante com a política pública. A chave com a qual criptografa a mensagem precisa estar vinculada a ele.
3. Só estabelece uma conexão criptografada após a verificação bem-sucedida. Uma divergência impede o envio dos dados; para usar outra opção, você precisa escolhê-la conscientemente.
4. O ambiente processa a solicitação com acesso limitado à rede e às ferramentas, devolve o resultado e remove os dados de trabalho conforme a política publicada.
5. A conversa ou a memória só é salva no escopo escolhido por você.

A atestação ajuda a determinar o que foi colocado em execução, mas não comprova, por si só, que esse código é seguro; são necessárias revisões do código e a possibilidade de verificação independente. Antes do piloto, mostraremos no aplicativo onde termina a criptografia controlada pelo seu dispositivo e se a porta de entrada vê o conteúdo.

Temos cuidado especial quando você conecta fontes com mensagens de outras pessoas, como uma caixa de e-mail. Uma mensagem de outra pessoa pode conter instruções ocultas que tentam induzir o modelo a revelar a memória privada. Por isso, o assistente não pode enviar mensagens, abrir endereços de rede nem alterar o Cânone Pessoal (seu conjunto de princípios e valores) por conta própria sem confirmação humana.

Junto com o lançamento do serviço, publicaremos uma lista de todos os tipos de dados que coletamos sobre seu funcionamento, com a finalidade e o prazo de armazenamento. Não coletamos dados fora dessa lista.

Saiba mais: [whitepaper da Suveria, capítulo 3](../whitepaper-suveria.md#s3).

## Suas chaves

As chaves dos contêineres privados, ou seja, dos conjuntos de dados criptografados, permanecem sob seu controle. A fundação não armazena as chaves nem partes delas, portanto não pode recuperar o acesso por você nem entregar seus dados. Recuperar a conta no operador não desbloqueia o conteúdo.

Perder todas as cópias da chave pode significar a perda definitiva dos dados. Por isso, consideramos métodos de recuperação que podem ser combinados: outro dispositivo com acesso, uma chave anotada em papel ou em um gerenciador de senhas, uma chave física ou a divisão da chave entre várias pessoas de confiança, nenhuma das quais pode ler os dados sozinha. Para começar, recomendamos outro dispositivo e uma chave anotada em papel. Verificamos cada mecanismo com um teste de restauração dos dados.

Saiba mais: [whitepaper da Suveria, seção 2.2](../whitepaper-suveria.md#s2-2).

## O que não se vê, mas revela: o ritmo da transmissão

A resposta chega a você em pacotes, ou seja, porções de dados. A criptografia oculta seu conteúdo, mas não seu tamanho nem seu ritmo. Isso é um canal lateral: a informação vaza pela forma de transmissão, e não pelo conteúdo. Pesquisas de 2024–2025 mostraram que um observador da rede pode reconstruir, a partir disso, o tema e, às vezes, o conteúdo da conversa. Por isso, no modo confidencial, queremos enviar a resposta em porções de tamanho constante e em ritmo constante; isso tem um pequeno custo em latência e capacidade de transmissão.

Saiba mais: [whitepaper da Suveria, capítulo 3](../whitepaper-suveria.md#s3).

## Versões que podem ser verificadas

A confiança no software não deverá depender de uma pessoa ou apenas da fundação. Qualquer pessoa pode compilar o aplicativo por conta própria a partir do código publicado e verificar se o resultado é idêntico ao que instala. Pelo menos duas partes independentes de fora da fundação deverão reproduzir a versão e confirmar publicamente a correspondência; até encontrá-las, identificamos a versão como não confirmada por terceiros.

Projetamos a proteção completa para um aplicativo instalado. No navegador, o operador fornece, a cada vez, o código que verifica o servidor, portanto a versão de navegador descreverá claramente seu nível inferior de proteção.

Saiba mais: [whitepaper da Suveria, capítulo 3](../whitepaper-suveria.md#s3).

## Várias placas de vídeo

O modelo que queremos executar não cabe em uma única placa de vídeo, portanto os dados também circulam entre as placas. É necessário verificar a proteção das próprias placas e das conexões entre elas; o rótulo comercial “secure” não substitui isso. Só comparamos a oferta de um provedor após um teste com nosso próprio aplicativo.

Saiba mais: [whitepaper da Suveria, capítulo 5](../whitepaper-suveria.md#s5).

## Como verificaremos se funciona

O teste mais importante: uma equipe com permissões de operador fora do ambiente confidencial (porta de entrada, discos, rede, registros de eventos) tenta ler conversas de contas de teste nas quais foram escondidas sequências secretas de caracteres. Se qualquer pessoa conseguir extraí-las, inclusive nós, o teste terá falhado.

Antes de chamar qualquer versão de confidencial, documentaremos, entre outros pontos, a atestação correta, a recusa do envio de dados após a troca do código ou da chave, a ausência de conteúdo nos registros de eventos e os processos de remoção e recuperação. Os resultados, inclusive negativos, entram no registro de resultados. Situação em 29 de outubro de 2026: ainda não realizamos nenhum dos testes descritos.

Queremos conduzir os testes de forma aberta. Se você trabalha com segurança, criptografia, infraestrutura ou aplicativos, ou quer examinar o projeto de forma crítica, escreva para salve@novusignis.org com o assunto “[Dołącz] Próby Suverii”.

Saiba mais: [whitepaper da Suveria, capítulo 9](../whitepaper-suveria.md#s9).

## Leia e diga o que pensa

A comparação completa das opções e ameaças, as salvaguardas do aplicativo e a lista de questões a resolver estão no [whitepaper da Suveria](../whitepaper-suveria.md). Se algo fizer você refletir ou parecer errado, selecione o trecho no documento e use o botão “Tenho uma observação” ou escreva para salve@novusignis.org.