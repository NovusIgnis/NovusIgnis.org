# Suveria: trabalho privado com inteligência digital

Versão de 8 de novembro de 2026. Este documento desenvolve os princípios do manifesto relativos à Suveria: como queremos proteger a privacidade, como deverá funcionar o trabalho com inteligência digital, quanto custa e como verificaremos isso. A arquitetura descrita é um projeto. A referência a uma tecnologia existente ou à documentação de um fornecedor não significa que a colocamos em funcionamento na Suveria. Acrescentamos os resultados dos nossos testes no capítulo 9, sempre com data, versão da configuração e escopo da medição.

*Tradução realizada por inteligência digital a partir do original em polonês de 8 de novembro de 2026. Em caso de divergência entre as versões, prevalece o texto em polonês.*

## 1. O que é a Suveria e por que está sendo criada

A Suveria deverá ser um espaço privado na internet em que uma pessoa conversa com inteligência digital, trabalha com seus próprios materiais e retoma pensamentos anteriores, como em sua própria casa, de portas fechadas. É projetada pela Fundação Novus Ignis, de Poznań, cujos valores são descritos no [manifesto](manifest.md), pensando em pessoas de todos os lugares do mundo. Baseia-se em modelos abertos de inteligência digital, e queremos disponibilizar nosso próprio software como um bem público digital com código aberto.

A Suveria está sendo criada porque confiamos cada vez mais coisas às conversas com inteligência digital: perguntas sobre saúde, relacionamentos, trabalho, dinheiro e planos de vida. Em muitos serviços populares, o conteúdo dessas conversas vai para os servidores do fornecedor, que pode lê-lo, e sua proteção depende das regras desse fornecedor e da confiança nele. Queremos que seja possível conversar sobre os assuntos mais importantes sem medo de que um conhecimento tão íntimo de uma pessoa seja um dia monetizado ou usado para influenciá-la. Também queremos que cada pessoa pague pelo que realmente usa, veja pelo que está pagando e estabeleça seu próprio limite de gastos.

Na Suveria, queremos que seja possível:

- conversar com inteligência digital sobre assuntos pessoais e profissionais, vendo onde a conversa é processada e quem pode vê-la;
- trabalhar com seus próprios documentos e arquivos, salvar os resultados e transferi-los para outro lugar em formatos abertos;
- armazenar conversas, arquivos e a memória do assistente principalmente nos próprios dispositivos, criptografados com uma chave que permanece sob o controle do usuário;
- com seu próprio consentimento, usar a memória de conversas anteriores, retomar os motivos de decisões passadas e construir um Cânone Pessoal (*Canon Personalis*), ou seja, um conjunto de princípios e valores próprios;
- escolher a forma de trabalho, desde um modelo no próprio dispositivo até um ambiente confidencial em um servidor, com informação clara sobre aquilo contra o que cada um protege;
- pagar pelo uso real, com um limite de gastos definido pela própria pessoa;
- aperfeiçoar uma ideia em privado e depois levá-la conscientemente à conversa coletiva no OmniForum.

A primeira versão se destina a pessoas para quem a privacidade verificável é uma razão de escolha.

Queremos que o primeiro dia na Suveria já proporcione uma sensação tranquila de estar em casa, em uma oficina privada organizada no próprio ritmo. O usuário poderá contar ao assistente sobre seus assuntos e objetivos; também queremos permitir a transferência para a Suveria de suas próprias anotações e arquivos de conversas anteriores com outros serviços de inteligência digital. Esse arquivo deverá permanecer criptografado e organizado no dispositivo do usuário, e apenas a parte selecionada para a pergunta atual deverá ser enviada ao modelo remoto (capítulo 3).

Medimos o valor do serviço pela sua capacidade de ajudar a alcançar um objetivo, preservar a privacidade e tomar decisões de forma independente. As condições deverão ser claras e de fácil acesso, e o usuário deverá controlar seus gastos, poder exportar seus próprios materiais e sair.

A privacidade plena, inclusive perante nós, que operamos a infraestrutura, é o objetivo ao qual subordinamos o projeto. A proteção deverá se apoiar em salvaguardas que possam ser verificadas de forma independente, e não na confiança na fundação. Por isso, cada versão descreve concretamente o que está protegido, contra quem, em quais condições e quais lacunas permanecem.

O ponto de partida é uma conversa por texto com um único modelo e o trabalho com um documento selecionado, com um nível de proteção claramente descrito, um limite de gastos e a exportação do resultado. Outras possibilidades, como memória, busca, integrações e execução de ações, recebem um escopo separado de permissões. Uma única interface conveniente pode reunir vários modos de trabalho, desde que a pessoa veja para onde vão os dados e quais regras se aplicam antes de enviá-los.

O que a primeira versão utilizará depende de quanto a fundação arrecadar antes do seu lançamento. A opção mais provável é a API confidencial de um fornecedor externo; esses serviços estão disponíveis hoje nos EUA, e, de início, sua confidencialidade é uma declaração do fornecedor que iremos verificar. Se houver recursos suficientes para alugar nossos próprios servidores em um ambiente confidencial, a primeira versão poderá funcionar neles desde o início. Até um resultado positivo nos testes do capítulo 9, identificamos cada uma dessas opções como proteção declarada, e não como confidencial. O capítulo 2 descreve a proteção pretendida. Antes do lançamento do piloto, descreveremos o que isso implica para a proteção dos dados pessoais de pessoas da Europa.

Usar a Suveria não significa consentir com o uso das conversas para treinar modelos. O conteúdo dos usuários só entra nos materiais de pesquisa com consentimento separado e informado, e os demais materiais provêm da produção pública da fundação e de outras fontes com uma base clara para o uso, como descreve o [whitepaper de materiais e benchmark](whitepaper-materialy-i-benchmark.md).

A Suveria complementa o OmniForum, um espaço coletivo de conversa e decisão: uma oferece uma oficina privada, o outro uma tribuna pública. Os valores dos quais ambos os projetos nascem são descritos no manifesto da fundação. A seguir, mostramos, em ordem:

- o que protegemos e contra o quê, onde estão os dados e as chaves (capítulo 2);
- como uma mensagem passa do dispositivo ao modelo e como verificar isso (3);
- como limitamos abusos sem ler conversas privadas (4);
- como funcionam os cálculos em várias placas de vídeo (5);
- quais modelos, memória e ferramentas planejamos (6);
- quanta capacidade computacional é necessária, de 30 pessoas a toda a humanidade (7);
- quanto isso custa, em um cálculo datado (8);
- como verificaremos se as promessas funcionam: testes de aceitação e registro de resultados (9).

## 2. O que protegemos e contra o quê

Protegemos o conteúdo de conversas e arquivos, o histórico e a memória, as chaves, os dados de cobrança e os metadados, por exemplo, horário de conexão, endereço de rede e tamanho da solicitação. Cada uma dessas áreas exige medidas diferentes.

Contra quem protege cada uma das cinco opções de trabalho descritas na seção 2.3 é o que mostra a comparação abaixo. A proteção nas opções com servidores baseia-se na atestação, ou seja, um comprovante assinado pelo hardware que informa qual software está em execução na máquina remota e em qual modo de proteção. Preenchemos as células com base nos capítulos seguintes deste documento; “declaração do fornecedor” significa que, até nossa própria verificação, não confirmamos a proteção.

| Contra quem | Modelo local no dispositivo sem conexão de rede | Modelo local no dispositivo conectado à rede | Processamento em ambiente confidencial em servidores | API confidencial de fornecedor externo | API externa do fornecedor do modelo |
| --- | --- | --- | --- | --- | --- |
| Administrador do fornecedor | não se aplica: processamento no dispositivo | não se aplica ao modelo em si; nas integrações, depende dos serviços escolhidos | protege: isolamento por hardware ao qual o administrador do servidor não tem acesso | declaração do fornecedor, a verificar | não protege: o fornecedor tem acesso ao conteúdo |
| Outro cliente na mesma máquina | não se aplica | não se aplica | protege: o isolamento abrange outros clientes | declaração do fornecedor, a verificar | depende do fornecedor: a separação dos clientes é garantida pelo seu software, sem isolamento por hardware |
| Observador da rede | não se aplica: sem tráfego de rede | proteção parcial: o tráfego de rede das integrações exige avaliação | proteção parcial: conteúdo criptografado em trânsito, metadados (horário, endereço, tamanho e ritmo dos pacotes) exigem medidas separadas (capítulo 3) | proteção parcial: como no ambiente confidencial, se a chave da conexão estiver vinculada à atestação | proteção parcial: conteúdo criptografado em trânsito, metadados como na opção ao lado |
| Pessoa com acesso físico ao servidor | não se aplica ao servidor; o que importa é o acesso físico ao dispositivo | não se aplica ao servidor; o que importa é o acesso físico ao dispositivo | não protege: em um centro de dados de terceiros, o fornecedor tem acesso; com hardware próprio, controle físico visível | não protege: o fornecedor tem acesso | não protege: o fornecedor já tem acesso ao conteúdo |
| Fundação | não se aplica: a fundação não participa do processamento | não se aplica: a fundação não participa do processamento | protege: o isolamento também nos abrange como operador, e o usuário tem as chaves de armazenamento | deverá proteger o conteúdo: a porta de entrada faz a cobrança das solicitações sem acesso ao conteúdo; mostraremos onde termina a criptografia antes do piloto (capítulo 3) | deverá proteger o conteúdo contra nosso acesso: cobrança sem acesso ao conteúdo; o fornecedor o vê |
| Fabricante do processador | depende da confiança no hardware do dispositivo | depende da confiança no hardware do dispositivo | não protege: a atestação baseia-se nas chaves do fabricante, que precisa ser honesto | não protege: como na opção ao lado | irrelevante diante do acesso do fornecedor ao conteúdo |

A computação confidencial muda o custo de um ataque: em vez do acesso remoto de um administrador, é necessária uma intervenção física no hardware.

Abaixo descrevemos como deverá funcionar a opção pretendida com nosso próprio ambiente confidencial; a tabela da seção 2.3 mostra como as demais opções diferem. O que isso significa na prática, nos sucessivos trechos do caminho percorrido por uma mensagem:

- **No dispositivo do usuário**, o texto é legível, porque é o usuário quem o escreve e lê. Ele é protegido pelo aplicativo, que solicita apenas as permissões necessárias, pelas atualizações e pelo cuidado com as cópias de segurança. Não conseguiremos protegê-lo se houver software malicioso no celular ou computador.
- **No caminho até o servidor**, a mensagem é criptografada de modo que apenas o local de processamento verificado possa lê-la. Antes de enviá-la, o aplicativo verifica se, do outro lado, está em execução exatamente o software que publicamos.
- **No servidor**, o modelo precisa ler o conteúdo para responder, e por isso faz isso em um ambiente fechado por hardware, ao qual nem o administrador do servidor nem outros clientes têm acesso. Verificamos se esse isolamento abrange o processador, as placas de vídeo, a memória e as conexões entre eles.
- **No armazenamento**, o histórico de conversas e a memória do assistente são criptografados com uma chave que o usuário possui. Verificamos as cópias, a recuperação de acesso e a exclusão.
- **Na operação do serviço**, a cobrança, o diagnóstico e os relatos de erros funcionam sem o conteúdo das conversas, e cada tipo de dado coletado é divulgado (capítulo 3).
- **Nas ferramentas externas**, quando o assistente deve fazer algo fora da Suveria, por exemplo, buscar uma informação na internet, envia apenas aquilo que o usuário autorizou e mostra para onde.

A computação confidencial não corrige um computador infectado do usuário. Também não protege contra qualquer pessoa que tenha acesso físico ao servidor: em 2025, pesquisadores mostraram que um dispositivo conectado ao barramento de memória, construído com peças que custam menos de mil dólares, permite extrair chaves de atestação em soluções da Intel e da AMD e, com isso, também falsificar a atestação na computação confidencial da NVIDIA, e os fabricantes de processadores consideram que esses ataques estão fora do escopo de sua proteção.[^teefail] Permanecem também as dependências dos fabricantes de hardware, da correção da criptografia, do código do aplicativo e do processo de atualização. O fornecedor pode recusar o serviço mesmo quando não consegue ler o conteúdo. Portanto, o modelo de ameaças deverá distinguir acesso ao conteúdo, inferência a partir de metadados, alteração do funcionamento e interrupção do serviço e, para cada opção, indicar quem precisa ser honesto para que a proteção funcione.

Enquanto utilizamos centros de dados de terceiros, o fornecedor tem acesso físico ao hardware e não conseguimos verificar isso; informamos esse fato em cada opção. Com hardware próprio (etapas 3–4 da seção 8.2), queremos tornar esse acesso visível por meio de:

- inventário dos dispositivos;
- controle de entradas;
- lacres com padrão aleatório e sensores de abertura do gabinete;
- registro de intervenções;
- câmeras de observadores independentes, com imagens nas quais seja visível o valor atual de um gerador público de aleatoriedade, assinado pela chave da máquina;
- e, em uma perspectiva mais distante, um centro de dados que qualquer pessoa possa ver.

A manutenção e a troca de peças ocorrem como procedimentos anunciados e públicos. O controle físico visível reduz o risco e permite detectar muitos eventos, mas não comprova todo o histórico da máquina nem a ausência de intervenção antes da entrega, e ataques semelhantes ao descrito acima podem levar à falsificação de provas de atestação. Por isso, após a abertura do gabinete, troca de peças, reinicialização não planejada ou outro evento suspeito, suspendemos o processamento de conteúdo privado nessa máquina. Substituímos as chaves de sessão e do aplicativo, mas uma nova atestação, por si só, não restabelece a confiança se a suspeita recair sobre a base da atestação de hardware; descrevemos de antemão as condições e as provas para a readmissão. As chaves que criptografam os dados dos usuários têm proteção e recuperação separadas, portanto esse procedimento não priva as pessoas de sua produção privada.

### 2.1. Dispositivos próprios e servidores opcionais

O principal local de armazenamento das conversas privadas, dos arquivos e da memória deverá ser os dispositivos do usuário, em contêineres criptografados, ou seja, conjuntos de dados cujo conteúdo é lido com a chave adequada. Essa é a abordagem local-first: os dados são salvos primeiro no dispositivo, e os servidores podem apoiar as cópias de segurança e a sincronização.[^local-first] Os materiais salvos deverão permanecer acessíveis também após o fim do uso dos serviços da fundação; tarefas que exigem um modelo remoto dependem da disponibilidade do serviço computacional escolhido.

O armazenamento opcional em servidores selecionados serve às cópias de segurança e à conciliação de alterações entre dispositivos. Criptografamos o conteúdo no dispositivo antes do envio, de modo que o operador que armazena a cópia receba apenas o registro criptografado, sem a chave para lê-lo. O usuário escolhe o fornecedor de armazenamento e os dispositivos autorizados a ler. Separadamente, limitamos a exposição de metadados, como horário e tamanho da cópia transferida.

### 2.2. Chaves e recuperação de acesso

As chaves dos contêineres privados permanecem sob o controle do usuário. O procedimento de recuperação indica claramente se o acesso é restabelecido por um segundo dispositivo, por uma chave de recuperação guardada ou por outro mecanismo escolhido conscientemente, e a quem esse mecanismo dá a possibilidade de leitura. A recuperação da conta junto ao operador não desbloqueia o conteúdo do contêiner. A perda de todas as cópias da chave e das possibilidades de recuperação pode significar a perda permanente dos dados; por isso, verificamos o mecanismo escolhido com um teste de restauração dos dados e o descrevemos em instruções compreensíveis.

Consideramos várias formas de recuperação que podem ser combinadas: um segundo dispositivo que já tenha acesso; uma chave de recuperação guardada em papel ou em um gerenciador de senhas; uma chave de hardware; a divisão da chave entre algumas pessoas de confiança, das quais, por exemplo, quaisquer duas de três possam, juntas, restabelecer o acesso, e nenhuma possa ler os dados sozinha. A fundação não armazena chaves nem partes delas, portanto não pode recuperar o acesso pelo usuário nem entregar seus dados.

Para começar, recomendamos um segundo dispositivo e uma chave guardada em papel; dividir a chave entre pessoas de confiança é uma opção para quem quiser.

### 2.3. Opções de proteção

Queremos comparar cinco opções de trabalho, porque cada uma protege contra algo diferente:

| Opção | Onde ocorre o processamento | O que precisa ser avaliado |
| --- | --- | --- |
| Modelo local no dispositivo sem conexão de rede | No dispositivo do usuário | Estado do dispositivo, acesso físico, mídias e cópias dos dados |
| Modelo local no dispositivo conectado à rede | Localmente e, nas integrações, também nos serviços selecionados | Permissões do aplicativo, atualizações, tráfego de rede e escopo dos dados enviados às integrações |
| Processamento em ambiente confidencial em servidores | Em um ambiente remoto cuja configuração é confirmada pela atestação | Verificação do ambiente, acesso de administradores e acesso físico ao hardware, proteção da transmissão e do processamento, metadados e chaves |
| API confidencial de fornecedor externo | No ambiente confidencial do fornecedor, cuja configuração deverá ser confirmada pela atestação | Se a chave da conexão está vinculada à atestação, se a atestação abrange o processador e a placa de vídeo, se é possível vincular uma solicitação específica a uma máquina específica, quem tem acesso físico ao hardware, armazenamento de dados e jurisdição; até nossa própria verificação, tratamos a confidencialidade como declaração do fornecedor |
| API externa do fornecedor do modelo | No fornecedor externo | Condições do fornecedor, acesso ao conteúdo, armazenamento e jurisdição; não estendemos a essa opção as promessas da execução confidencial |

A verificação independente do servidor exige um aplicativo instalado. No navegador, o código que verifica o servidor é fornecido pelo operador a cada vez, por isso identificamos essa forma como menos protegida.

Um dispositivo conectado à rede pode ter mais pontos de ataque do que um ambiente de servidor isolado, portanto a localização dos cálculos, por si só, não determina a segurança. Nenhuma opção recebe o rótulo “privacidade plena” antes da verificação de uma configuração específica. Em cada conversa, o usuário vê em qual opção está trabalhando, e a mudança de opção exige sua decisão consciente. Uma chave própria de acesso a uma API externa permite a cobrança do acesso, mas não garante confidencialidade perante o fornecedor. Essa opção não é a opção padrão da Suveria privada e, antes do envio do conteúdo, mostramos se o fornecedor pode usá-lo para treinar modelos e por quanto tempo o armazena.

Também analisamos um caminho que ainda não aparece nesta comparação: um enxame de confiança. Nesse caso, o modelo funcionaria no hardware de algumas pessoas que se conhecem e confiam umas nas outras, por exemplo, familiares, amigos ou uma pequena comunidade, e cada uma disponibilizaria um pouco da capacidade computacional do seu computador. A privacidade dessa opção baseia-se na confiança nessas pessoas, e não na técnica, porque seus computadores veem o conteúdo processado, e é assim que queremos descrevê-la. É uma ideia que ainda estamos analisando, mas um dos caminhos que queremos investigar.

Um servidor seguro não protegerá um texto lido de um celular comprometido, e um celular mais seguro não corrigirá um servidor; por isso, projetamos o aplicativo em conjunto com a proteção do dispositivo. Queremos que o aplicativo da Suveria funcione sem os serviços do Google, por exemplo, no sistema GrapheneOS, esteja disponível também fora da loja Google Play e tenha versões feitas com compilações reproduzíveis: qualquer pessoa pode compilar o aplicativo a partir do código-fonte publicado e verificar se obteve um arquivo idêntico ao que instala. Também planejamos proteções no próprio aplicativo: bloqueio de capturas de tela, modo de teclado sem aprendizado do texto digitado, exclusão de dados privados das cópias na nuvem, conteúdo de notificações oculto e bloqueio do aplicativo. No site da fundação, prepararemos um guia para proteger os próprios dispositivos em três níveis: das configurações básicas e atualizações, passando por um isolamento mais forte do trabalho e das chaves, até configurações verificadas para pessoas com as maiores exigências, como o Qubes OS em um computador com firmware aberto. O uso da Suveria não exige a compra do hardware indicado, e o nome de um sistema não é um certificado do dispositivo inteiro.

Em cada conversa, mostraremos uma ficha de proteção (*Charta Tutelae*): uma lista dos elementos dos quais depende a privacidade dessa conversa, cada um em um de três estados:

- **Verificado por nós:** verificamos pessoalmente, com data, versão e descrição de como fizemos isso.
- **Declarado pelo fornecedor:** o fornecedor afirma isso, e nós ainda não verificamos.
- **Não protegido:** essa opção não protege isso, por exemplo, horário e tamanho das mensagens visíveis ao fornecedor da rede, acesso físico do fornecedor ao hardware ou jurisdição em que o servidor está localizado.

O estado “verificado por nós” tem a data da última verificação e expira: após um prazo determinado sem nova verificação, volta ao estado “declarado”. Mostraremos separadamente as quebras de confiança conhecidas, por exemplo, um incidente no fornecedor ou uma mudança de configuração não confirmada. A ficha é a mesma para todos e não depende do preço, e uma opção em que pelo menos um elemento seja apenas declarado não recebe o nome “privacidade plena”. A comparação no início do capítulo 2 e a tabela de opções desta seção descrevem as opções de modo geral, enquanto a ficha mostrará o estado desta conversa específica.

## 3. O caminho do dispositivo ao modelo

A Suveria deverá ser composta por algumas partes:

- um aplicativo no dispositivo do usuário;
- uma porta de entrada que faz a cobrança das solicitações e controla o limite de gastos;
- um ambiente confidencial com o modelo, próprio ou de um fornecedor;
- armazenamento de cópias criptografadas;
- um intermediário opcional que oculta o endereço do usuário.

A porta de entrada deverá funcionar em uma máquina confidencial. Antes do piloto, mostraremos no aplicativo em qual ponto termina a criptografia controlada pelo dispositivo do usuário e se a porta de entrada vê o conteúdo e, se vir, que isso ocorre apenas dentro do ambiente confidencial.

O armazenamento criptografado e o processamento confidencial exigem salvaguardas distintas. O modelo que funciona no servidor precisa de conteúdo legível para a tarefa em um ambiente computacional protegido; a simples criptografia de cópias dos arquivos não protege essa etapa.[^apple-pcc] O aplicativo disponibiliza apenas o escopo selecionado para aquele trabalho, sem transmitir a chave de todo o contêiner privado. A descrição da sessão indica onde o conteúdo fica disponível para processamento, o que limita o acesso do operador e o que acontece com os dados após a devolução do resultado.

Fluxo proposto para uma sessão:

1. O aplicativo obtém a descrição da versão aprovada e verifica a atestação, ou seja, a comprovação criptográfica de determinadas propriedades do ambiente em execução.
2. Verifica a conformidade do hardware, do estado de proteção e das medições do software com uma política pública. A chave do destinatário dos dados precisa estar vinculada a essa comprovação.
3. Após a verificação bem-sucedida, estabelece uma conexão criptografada com o ambiente aprovado. Uma divergência interrompe o envio dos dados; passar a outra opção exige uma escolha consciente.
4. O ambiente processa a solicitação com acesso limitado à rede e às ferramentas, devolve o resultado e exclui os dados de trabalho conforme a política publicada.
5. O registro da conversa ou da memória ocorre apenas no escopo escolhido pelo usuário.

A atestação ajuda a determinar o que foi colocado em execução, mas, por si só, não comprova que esse código é seguro. São necessárias revisões de código, compilações reproduzíveis do software a partir do código-fonte (descritas na seção 2.3), um registro de versões aprovadas e a possibilidade de verificação independente. A arquitetura Apple Private Cloud Compute é uma referência para nós sobre como vincular a proteção à transparência no lançamento de software; não é um certificado do nosso projeto.[^apple-pcc]

Queremos proteger as versões de modo que a confiança não dependa de uma única pessoa nem apenas da fundação:

- cada versão deverá permitir compilações reproduzíveis a partir do código-fonte, e pelo menos duas partes independentes externas à fundação a reproduzem e confirmam publicamente que a impressão digital corresponde; até que as encontremos, identificamos a versão como não confirmada por terceiros;
- as impressões digitais das versões aprovadas entram em um registro público ao qual só é possível acrescentar informações, e seus estados sucessivos são confirmados por testemunhas independentes;
- uma nova versão vai para os servidores após a aprovação de várias pessoas, incluindo pelo menos uma de fora da diretoria;
- as chaves necessárias para tratar os dados são entregues apenas ao ambiente que passou pela atestação.

Projetamos a opção de proteção completa para aplicativos instalados, com versões assinadas e verificáveis, proteção contra o retorno a uma versão defeituosa e armazenamento seguro das chaves, porque, no navegador, o código que verifica o servidor é fornecido pelo operador a cada vez. A versão para navegador descreve claramente seu nível inferior de proteção. As compilações reproduzíveis permitem comparar a versão com o código, mas a avaliação do próprio código e da configuração continua sendo feita por revisões, auditorias e recompensas por erros relatados, e cada incidente entra em um registro público.

Para limitar a exposição do endereço do usuário, pode-se investigar a intermediação baseada em Oblivious HTTP, que separa o conhecimento do remetente do conhecimento do conteúdo da solicitação em um modelo de confiança específico.[^ohttp] O conluio entre intermediários, a correlação de tráfego e os detalhes da implementação ainda exigem avaliação; por isso, não descrevemos o simples uso desse protocolo como anonimato pleno.

A criptografia e a computação confidencial não ocultam o tamanho nem o ritmo dos pacotes pelos quais a resposta é transmitida. Pesquisas de 2024–2025 mostraram que um observador da rede pode reconstruir, a partir deles, o tema e, às vezes, o conteúdo da conversa.[^weiss-keylogging][^whisper-leak] Por isso, no modo confidencial, queremos enviar a resposta em quadros de tamanho fixo e em ritmo constante, não compartilhar entre usuários a memória de cache de consultas e desativar a decodificação especulativa. Essas medidas têm algum custo em latência e capacidade de transmissão; incluiremos isso no cálculo.

Também protegemos a infraestrutura limitando o que cada parte do sistema pode fazer: limites de recursos, isolamento das tarefas e bloqueio por padrão das conexões de saída do nó que processa a conversa. Esse bloqueio deverá fazer parte do software cuja impressão digital aparece na atestação: alterá-lo muda a impressão digital, portanto o aplicativo recusará a conexão. Tratamos as regras de rede do fornecedor como uma segunda camada, e não como garantia. As ações externas permitidas passam por uma camada separada de ferramentas, com permissões definidas pelo usuário. Antes da implementação, verificaremos a eficácia desses limites, a forma de detectar incidentes e o escopo mínimo necessário de metadados. O objetivo é a segurança dos recursos compartilhados, preservando a confidencialidade do conteúdo das conversas.

Temos cuidado especial quando o usuário conecta fontes com mensagens de outras pessoas, por exemplo, uma caixa de e-mail. A mensagem de outra pessoa pode conter instruções ocultas que tentam induzir o modelo a revelar a memória privada. Por isso, separamos o conteúdo externo das instruções do usuário: ao organizá-lo, o assistente não pode, por iniciativa própria, enviar mensagens, abrir endereços de rede nem alterar o Cânone Pessoal sem confirmação humana.

Tudo o que sabemos sobre o funcionamento da Suveria pode ser conhecido por qualquer pessoa. Com o lançamento do serviço, publicaremos uma lista de todos os tipos de dados que coletamos sobre sua operação, com a finalidade e o prazo de armazenamento, e disponibilizaremos os próprios dados de forma agregada: uso de tokens, modelos utilizados, carga das máquinas, tempo de espera na fila, falhas e custos. Todos os veem no mesmo lugar em que nós os vemos. Antes de publicar as compilações desses dados, verificamos se é possível identificar, a partir delas, o comportamento de uma pessoa específica: definimos um tamanho mínimo de grupo, um atraso na publicação e os dados que omitimos. Não coletamos dados fora da lista; se isso acontecesse, trataríamos o caso como um incidente grave e o descreveríamos publicamente.

## 4. Limitar abusos sem acesso a conteúdo privado

A proteção da dignidade também se estende às pessoas que podem ser afetadas pelo uso das nossas ferramentas. Queremos prevenir abusos sem ler conversas privadas: por meio dos princípios seguidos pelo próprio assistente, dos limites de permissões das ferramentas e das conexões de rede, dos limites de recursos e da proteção contra a criação de contas em massa. Não criamos acessos ocultos ao conteúdo privado, pois enfraqueceriam a proteção de todos.

Será possível criar uma conta de várias formas, desde a totalmente privada (chave no próprio dispositivo, sem endereço de e-mail) até as convenientes (login por um fornecedor externo). Para cada forma, mostraremos antes da escolha quem, além da fundação, fica sabendo da criação da conta e quais dados vê, bem como o que acontece se esse fornecedor desaparecer. A forma de criação da conta não afeta os direitos do participante; o direito de voto no OmniForum é uma credencial separada, adicionada à conta.

Avaliamos separadamente a privacidade e a limitação de abusos. Projetamos a Suveria para que a fundação não tenha dados que possa entregar sobre uma pessoa específica: o conteúdo é criptografado com as chaves do usuário, coletamos dados sobre o funcionamento do serviço apenas no escopo público descrito no capítulo 3 e limitamos os dados pessoais ao mínimo exigido por lei para pagamentos e contabilidade; também publicamos seu escopo. Se alguém nos exigir dados de uma pessoa específica, queremos poder responder honestamente que, além desse mínimo descrito publicamente, não os temos. Para cada salvaguarda contra abusos, descreveremos de quais dados ela precisa, por quanto tempo os armazenamos, quais consequências tem para um participante honesto e como contestar um bloqueio indevido.

Também descreveremos como recebemos relatos de pessoas que se consideram prejudicadas e o que podemos fazer nesses casos sem acesso ao conteúdo das conversas: por exemplo, limitar as permissões das ferramentas ou os recursos da conta, verificar os dados de cobrança e os metadados no escopo em que os armazenamos ou informar a quem fez o relato onde buscar ajuda. As obrigações legais do operador desse tipo de serviço exigem uma análise separada antes do lançamento.

Essas salvaguardas são objetivos e opções a testar, e nenhuma delas detectará todos os abusos. Para cada uma, indicaremos quais ameaças enfrenta, o que não detecta e o que pode ser verificado sem o acesso do operador às conversas privadas. O resultado dessa avaliação determina as condições para disponibilizar uma função.

Quando uma conversa tratar de ameaça à vida ou à saúde, o assistente deverá informar sobre a ajuda disponível, por exemplo, números de emergência, sem enviar nada para fora do ambiente privado.

### 4.1. Instruções públicas do assistente e biblioteca compartilhada

O comportamento do assistente também é determinado por sua instrução principal e sua forma de trabalhar: como divide a tarefa em etapas, usa a memória e verifica as respostas. Na Suveria, a pessoa deverá poder ler a instrução completa do seu assistente a qualquer momento. A infraestrutura compartilhada deverá disponibilizar apenas modelos e configurações que passem pelos testes públicos do benchmark; acima desse mínimo, o usuário escolhe o estilo de trabalho, desde a organização tranquila de ideias até uma conversa exigente em que o assistente aponta lacunas no raciocínio. Queremos manter uma biblioteca aberta de instruções testadas, que os participantes aperfeiçoam no OmniForum e verificam no benchmark.

## 5. Cálculos em várias placas de vídeo

O modelo do capítulo 6 não cabe em uma única placa de vídeo, portanto é preciso verificar a proteção também nas conexões entre as placas: o barramento PCIe conecta o processador às placas, e o NVLink e o NVSwitch conectam as placas entre si.

Quando o modelo utiliza várias placas de vídeo, os dados também circulam entre elas, por isso é preciso verificar a proteção tanto das próprias placas quanto das conexões. O nome da placa não basta para contratar um serviço confidencial: é necessário confirmar a máquina adequada, o processador, a topologia das conexões, o firmware, os drivers e o software de execução e depois verificar o funcionamento conjunto.[^nvidia-platformy]

No modo Hopper Protected PCIe, descrito na documentação PPCIe v2, a rede NVLink e NVSwitch pertence à parte confiável do sistema, portanto a criptografia PCIe não significa a criptografia de todas as conexões entre as placas.[^nvidia-ppcie-v2] A documentação NVIDIA R595 descreve, para as placas Blackwell, um modo de computação confidencial em várias placas, com criptografia das conexões NVLink e suporte a até oito placas em uma única máquina virtual confidencial.[^nvidia-blackwell] Isso é uma base para verificar a configuração, e não uma prova de que todo aluguel de placas B200 inclui essa função. Diferentes versões têm diferentes matrizes de compatibilidade, por isso não montamos a configuração a partir de versões escolhidas arbitrariamente.

A consulta ao fornecedor abrange:

- o modo específico de proteção e a possibilidade de atestação por conta própria;
- a exclusividade dos recursos necessários e a região;
- o acesso de administradores e o acesso físico ao hardware;
- a retenção dos dados;
- o prazo de entrega e o custo total.

Só comparamos a oferta após um teste com nosso próprio aplicativo. A designação comercial “secure” não substitui essas informações.

## 6. Modelo, memória e ferramentas

A base do projeto são modelos abertos que podem ser executados por conta própria. A Suveria deverá estar disponível para pessoas de todo o mundo, nos seus próprios idiomas; por isso, ao escolher um modelo, levamos em conta a qualidade em vários idiomas, a compreensão das intenções, a confiabilidade, a licença, o custo e a possibilidade de execução na arquitetura de proteção exigida. Quando necessário, poderemos executar, ao lado de um modelo geral, modelos que lidem melhor com idiomas específicos. Os pesos abertos permitem alguns usos, mas não determinam a abertura dos dados e de todo o processo de criação do modelo.[^osi]

O primeiro candidato é o DeepSeek-V4.1-Flash, um modelo com licença MIT, que permite seu uso também em serviços.[^deepseek] É grande, mas econômico: o fabricante informa 552 bilhões de parâmetros na parte principal, ou seja, números ajustados durante o treinamento, e uma memória Engram adicional de 196 bilhões de parâmetros, enquanto apenas 8–16 bilhões de parâmetros trabalham a cada palavra seguinte, por isso responde de forma rápida e barata (cálculo no capítulo 8). Todos os parâmetros, porém, precisam caber na memória das placas de vídeo, portanto são necessárias pelo menos quatro placas modernas. Os parâmetros desse modelo já são armazenados de forma econômica, com menos dígitos para cada número; essa representação se chama quantização e reduz a memória necessária, mas pode diminuir a qualidade, por isso verificamos esse efeito nas nossas próprias tarefas a cada versão. Também o comparamos com modelos menores: só escolhemos o maior quando ele executa claramente melhor as tarefas importantes para as pessoas.

O segundo candidato é o Kimi K3.1 Pro, da Moonshot AI, disponibilizado em 23 de outubro de 2026. O fabricante o descreve como uma versão do Kimi K3 com treinamento adicional, com cerca de 3 trilhões de parâmetros e contexto de até um milhão de tokens, e anuncia os pesos completos para antes de 4 de novembro de 2026; a licença ainda não foi anunciada.[^kimi-k31] Os dados detalhados que usamos na comparação vêm da ficha do antecessor: o Kimi K3 tem 2,8 trilhões de parâmetros, dos quais 104 bilhões trabalham a cada token, e sua própria licença, não aprovada pela Open Source Initiative.[^kimi-k3] No índice Artificial Analysis, na versão de 28 de outubro de 2026, o Kimi K3.1 Pro obteve 46 pontos contra 32 do DeepSeek-V4.1-Flash, mas é várias vezes mais caro e mais lento.[^aa] Os arquivos de pesos do Kimi K3 ocupam cerca de 1,56 TB, e sua execução exige memória adicional para contexto e cálculos, portanto não determinamos se o modelo funcionará apenas pela soma da memória das placas. A receita do mecanismo SGLang descreve uma configuração verificada do Kimi K3 em oito placas B300; isso ainda não é um teste do Kimi K3.1 nem de uma configuração confidencial.[^spheron-kimi][^sglang-k3] Após a publicação dos pesos, verificaremos seu tamanho e formato, a licença, as receitas dos mecanismos, a capacidade de uma configuração específica e a disponibilidade em APIs confidenciais. Acrescentaremos o resultado com data como a primeira atualização deste documento, inclusive se os pesos não tiverem sido publicados ou as condições da licença se mostrarem inadequadas.

Anunciamos com antecedência a mudança ou a retirada de um modelo. O histórico das conversas fica com o usuário: ele pode escolher um modelo sucessor, exportar os dados ou encerrar o trabalho. O momento da mudança de modelo deverá ficar visível na conversa, e a transferência do contexto privado para um novo modelo exige uma decisão do usuário.

Publicaremos na íntegra os princípios segundo os quais o assistente responde, junto com cada versão. O próprio modelo também traz as escolhas de quem o criou, por exemplo, assuntos que evita; nós as verificamos no benchmark e as descrevemos ao escolher o modelo.

A memória de conversas anteriores deverá funcionar com o consentimento do usuário e permitir edição transparente. Distinguimos as declarações originais, os resumos do modelo e as informações confirmadas pelo usuário. Cada registro pode ser excluído ou corrigido, sua origem pode ser vista e é possível definir em quais tarefas seu uso é permitido. O assistente distingue claramente sua própria sugestão de uma posição que a pessoa reconheceu conscientemente como sua.

A execução de ações exige permissões concedidas para uma finalidade e um prazo determinados. O conteúdo de uma página ou documento é material de análise, e não uma instrução para alterar essas permissões. Ações externas, gastos, publicações e exclusões exigem confirmações proporcionais e um registro de ações acessível ao usuário.

### 6.1. Telescópio do Pensamento e Cânone Pessoal

A ideia do Telescópio do Pensamento (*Telescopium Mentis*) nasceu da janela de Overton, um conceito que descreve o conjunto de ideias consideradas aceitáveis na sociedade em determinado momento. Para uma pessoa, trata-se do conjunto de pensamentos que considera admissíveis para si em determinado momento. O Telescópio deverá ser uma janela assim para uma pessoa e apenas para ela: permite ver o registro das próprias reflexões e valores em diferentes momentos e como mudaram com o tempo.

O Telescópio do Pensamento deverá servir para retomar o próprio raciocínio: o que eu sabia naquele momento, o que queria e por que mudei de ideia. Também pode ajudar a comparar eventos selecionados pelo usuário, informações sobre o mundo e suas próprias ações com seu Cânone Pessoal, ou seja, o conjunto de princípios e valores que registrou e reconhece como seus. A comparação se refere a uma situação que o próprio usuário descreve ou indica; é ele quem determina o material e o escopo. O modelo mostra possíveis ligações junto com a fonte do princípio citado e a descrição do evento, distinguindo informações confirmadas de interpretações e incertezas. A interpretação proposta pode ser corrigida ou rejeitada, e avaliamos as posições anteriores levando em conta seu momento e contexto.

Uma tensão percebida pode dizer respeito ao próprio princípio, a um conflito de valores, às condições do ambiente, às limitações da pessoa ou a uma interpretação inadequada do modelo. A pessoa pode manter o ideal e aceitar a incoerência atual, tornar uma convicção mais precisa, considerar mudar suas ações ou o ambiente ou deixar a questão em aberto. O Cânone deverá ajudar a compreender as próprias escolhas: não criamos uma pontuação de moralidade nem um ranking público de coerência. A reflexão privada permanece privada, e seu registro não significa publicação nem voto.

Começaremos com cautela. Na primeira versão, o Telescópio do Pensamento trabalha apenas com uma situação que o próprio usuário indicar, por exemplo, uma decisão que deseja retomar; não acompanha sua vida de forma contínua. O usuário decide com que frequência o utiliza, quais anotações e lembranças compartilha e quando as exclui. Nesse teste, verificamos se as ligações apresentadas são compreensíveis, se dão a sensação de controle sobre as próprias escolhas e se a ferramenta não gera pressão para prestar contas constantemente a si mesmo. Também consideramos um bom resultado quando alguém, após refletir, aceita que nem sempre age de acordo com seus princípios ou deixa a questão em aberto: a ferramenta deverá ajudar a compreender a si mesmo, e não impor decisões.

### 6.2. Formatos abertos, transferência e colaboração entre ferramentas

Queremos desenvolver a Suveria como um bem público digital, com código aberto e documentação; a referência é o padrão da Digital Public Goods Alliance.[^dpga] O formato de transferência de dados tem descrição pública, versão e regras de preservação das informações nas mudanças de versão. Usamos, em primeiro lugar, os padrões abertos existentes e documentamos as extensões necessárias.

A exportação inclui os originais selecionados, o histórico, as fontes e as ligações, além da distinção entre as palavras do usuário, a elaboração do modelo e o significado confirmado pelo autor, bem como a estrutura do Cânone Pessoal. O pacote baixado pode ser lido sem uma conta ativa na Suveria, após a descriptografia por uma pessoa autorizada.

As APIs, ou seja, formas documentadas de comunicação entre programas, deverão permitir trabalhar com os materiais em outras ferramentas, inclusive construídas por conta própria. O usuário escolhe o escopo dos dados e as ações permitidas e pode retirar as permissões das integrações. A revogação de uma permissão interrompe o acesso futuro; o destino das cópias já transmitidas depende também do destinatário.

O espaço privado também pode servir ao trabalho em projetos coletivos. O usuário escolhe os materiais que deseja entregar para aceitação ou publicação, e a ferramenta ajuda a remover deles, localmente, chaves de acesso, senhas, dados pessoais e informações sobre vulnerabilidades não corrigidas. O uso de recursos pagos de forma privada não exige a divulgação de conversas de trabalho. Em uma tarefa financiada com recursos compartilhados da fundação, o escopo do registro público, a escolha de pseudônimo e a preparação dos materiais são definidos de antemão pelas [regras das oficinas da fundação](whitepaper-zasady-fundacji.md) (capítulo 11.1). Das reflexões na Suveria também é possível extrair conscientemente uma pergunta ou um argumento e publicá-lo no OmniForum; essa etapa, descrita no manifesto como Cerimônia Ignis (*Caerimonia Ignis*), sempre exige uma decisão separada.

## 7. Escala: de 30 pessoas a toda a humanidade

O número de contas, por si só, não determina a infraestrutura necessária. O que importa é a atividade, o tamanho das perguntas e respostas, o número de sessões simultâneas, o tempo de espera aceitável e o custo das ferramentas. O exemplo abaixo é um modelo de carga a testar, e não uma previsão de demanda nem uma oferta.

Premissas: cada uma das N pessoas está ativa todos os dias e faz 20 solicitações por dia; uma solicitação média inclui 1.500 tokens de entrada e 600 tokens de saída, e o mês tem 30 dias. Um token é uma unidade de texto processada pelo modelo; seu tamanho depende do idioma. Na carga real, é preciso acrescentar contexto mais longo, processamento de documentos, tokens de raciocínio e chamadas auxiliares.

| Pessoas ativas | Solicitações por mês | Entrada por mês | Saída por mês | Geração média ao longo de um dia | Pico horário no cenário mundial, cerca de 1,51 × a média |
| --- | ---: | ---: | ---: | ---: | ---: |
| 30 | 18.000 | 27 milhões de tokens | 10,8 milhões de tokens | 4,2 tokens/s | 6,3 tokens/s |
| 100 | 60.000 | 90 milhões | 36 milhões | 13,9 tokens/s | 20,9 tokens/s |
| 1.000 | 600.000 | 900 milhões | 360 milhões | 138,9 tokens/s | 209 tokens/s |
| 100 mil | 60 milhões | 90 bilhões | 36 bilhões | 13.889 tokens/s | 20.921 tokens/s |
| 1 milhão | 600 milhões | 900 bilhões | 360 bilhões | 138.889 tokens/s | 209.208 tokens/s |
| 1 bilhão | 600 bilhões | 900 trilhões | 360 trilhões | 138,9 milhões de tokens/s | 209,2 milhões de tokens/s |
| 10 bilhões | 6 trilhões | 9 quadrilhões | 3,6 quadrilhões | 1,39 bilhão de tokens/s | 2,09 bilhões de tokens/s |

Planejamos a Suveria como um serviço mundial, disponível em vários idiomas. Não sabemos como os participantes se distribuirão entre os fusos horários, por isso comparamos dois cenários que serão verificados por medição. No cenário mundial, adotamos participações das regiões proporcionais ao número de usuários da internet segundo a ITU em 2025 e o mesmo perfil diário pressuposto em cada fuso: pico à noite e madrugada tranquila.[^itu] Os fusos preenchem parcialmente os períodos de baixa uns dos outros, portanto o pico horário é de cerca de 1,51 × a média e o menor tráfego, de cerca de 0,49 ×. No cenário concentrado em uma região, por exemplo, na Europa, o pico é de cerca de 1,87 × a média, e o tráfego noturno é quase nulo. Essa distribuição também pode ocorrer em grande escala; significa menor aproveitamento da máquina própria e uso mais frequente da API confidencial ou espera maior no pico. Ambos os valores resultam das nossas premissas, e não da observação dos futuros participantes. Uma fila curta com tempo de espera visível deverá absorver os picos breves dentro de uma hora, e a API confidencial poderá assumir o tráfego que ultrapassar a capacidade da máquina própria; mediremos o tempo de espera, inclusive seus percentis 95 e 99, no piloto, junto com o limite da fila e o comportamento quando ele for atingido. O teste de carga também abrangerá a chegada repentina de novas pessoas, por exemplo, cinco vezes o tráfego médio. Trata-se da vazão total de saída; ela não substitui a medição da latência de uma conversa individual nem do custo de processamento da entrada. O teste deve reproduzir a distribuição das sessões, contextos longos, falhas e a fila, e não uma única consulta conveniente.

O multiplicador de pico compara a hora de maior carga com a média. Vem de um modelo do dia dividido em 24 horas: deslocamos um mesmo perfil diário entre oito regiões e somamos de acordo com as participações pressupostas. É um cenário de cálculo; não calcula o tempo de espera de uma consulta individual.

Para ver como esse cálculo se apresenta em escala mundial, façamos um experimento mental. Se cada uma de 10 bilhões de pessoas usasse a Suveria como no perfil adotado, seriam necessários, no pico, cerca de 2,1 bilhões de tokens de saída por segundo. Com o desempenho medido para o DeepSeek-V4.1-Flash, cerca de 930 tokens por segundo por placa B200, isso corresponde a cerca de 2,25 milhões de placas e, com cerca de 1,75 kW por placa incluindo o servidor (nossa premissa, sem medição), cerca de 4 GW de potência. Para um bilhão de pessoas, seriam cerca de 225 mil placas e 0,4 GW; para um milhão, cerca de 225 placas. Para comparação, a Epoch AI estimava no início de 2026 que a capacidade computacional para inteligência digital instalada no mundo ultrapassava 15 milhões de equivalentes de placas H100 e exigia mais de 10 GW de potência.[^epoch] É uma simplificação: o perfil adotado é leve; trabalho intenso, modelos maiores e imagens precisam de muitas vezes mais, e o hardware e os modelos mudam rapidamente. Ainda assim, mostra a ordem de grandeza: a ajuda diária da inteligência digital nesse escopo para cada pessoa exigiria menos potência do que a que já está em operação hoje no mundo. É um cálculo simplificado, e não uma prova de que essa infraestrutura estaria disponível para essa finalidade.

## 8. Custos e cálculo datado

O custo mensal de uma reserva fixa pode, em uma primeira aproximação, ser escrito assim: número de placas × preço por hora de placa × número de horas pagas, acrescido de memória, discos, transferência, proteção, monitoramento, operação, pagamentos e impostos. É preciso verificar quais desses itens a oferta já inclui. Para operação ininterrupta, um mês tem de 672 a 744 horas; 730 horas é uma aproximação média.

No cálculo, comparamos cinco opções de custo: modelo local, instância própria em hardware alugado, instância própria em um ambiente de computação confidencial, com proteção declarada pelo fornecedor e a verificar, API confidencial de fornecedor externo e API externa comum. As opções de custo correspondem às opções de proteção da seção 2.3; mostramos o aluguel de uma máquina sem confidencialidade apenas como referência de preço, e não como uma opção da Suveria. Ainda não atribuímos um preço ao modelo local, porque o custo depende do dispositivo do usuário. Comparamos o mesmo escopo de qualidade, disponibilidade e proteção. O ponto de equilíbrio é o custo do serviço completo dividido pelo uso real, e não o custo das placas dividido pelo número de contas cadastradas. A API externa facilita o teste das necessidades dos usuários, mas seu fornecedor tem regras próprias de acesso aos dados, portanto não estendemos a ela as promessas da execução confidencial.

### 8.1. Cálculo datado: situação em 29 de outubro de 2026

O manifesto apresenta a hipótese de que, mesmo com um número relativamente pequeno de participantes regulares, a infraestrutura compartilhada pode oferecer mais capacidade computacional e inteligência digital por dólar do que serviços fechados, com proteção da privacidade baseada em salvaguardas verificáveis. Abaixo, seu cálculo com os preços de 29 de outubro de 2026. Premissas: perfil de uso do capítulo 7 (20 solicitações por dia, cada uma com 600 tokens de saída) e cenário mundial (pico horário de cerca de 1,51 × a média), preços sem impostos, 730 horas por mês para converter os preços de aluguel. O número de pessoas por máquina significa a quantidade de participantes que a máquina atenderá no pico horário: vazão de saída por segundo × 86.400 / (20 × 600 × multiplicador de pico). O número admissível de pessoas também será determinado pelo tempo de espera medido para a resposta. Entre parênteses, apresentamos o cenário concentrado na Europa (multiplicador de cerca de 1,87). Para o DeepSeek-V4.1-Flash, adotamos a medição do fornecedor Lambda em quatro placas B200: cerca de 3.714 tokens de saída por segundo com 64 solicitações simultâneas.[^lambda-v41] A medição foi realizada com decodificação especulativa, que não queremos usar no modo confidencial (capítulo 3). Segundo nossa estimativa de setembro, a vazão pode então ser até cerca de 30% menor, o que aumenta o custo por pessoa em proporção semelhante. Não há medição desse modelo para as placas H200 e B300; pressupomos que cada conjunto de placas com uma cópia do modelo (8 × H200 ou metade de uma máquina 8 × B300) atinja o desempenho de quatro placas B200. É uma premissa otimista: a H200 é de uma geração anterior, o modo confidencial pode tornar o trabalho mais lento e a medição da Lambda envolve solicitações mais longas do que as do nosso perfil. Por isso, também apresentamos uma opção cautelosa com metade dessa vazão.

Os pesos do modelo ocupam cerca de 511 GB, e o mecanismo vLLM recomenda cerca de 614 GB de memória de placas. Quatro placas H200 (564 GB) não são suficientes, por isso uma cópia na H200 precisa de oito placas. A receita do desenvolvedor do mecanismo para essa configuração estava em verificação em 29/10 e, nas placas H200, a conexão entre placas (NVLink) não é criptografada por hardware, ao contrário das B200 e B300.

| Opção | Confidencialidade | Custo mensal | Pessoas por máquina | Custo apenas dos cálculos por pessoa |
| --- | --- | ---: | ---: | ---: |
| API DeepSeek | nenhuma, o fornecedor vê o conteúdo | conforme o uso | não se aplica a uma máquina individual; limites e disponibilidade do fornecedor | 0,35–0,70 USD |
| API confidencial com DeepSeek-V4.1-Flash (Confidential AI, Tinfoil, Phala) | declarada pelo fornecedor, a verificar | conforme o uso | não se aplica a uma máquina individual; limites e disponibilidade do fornecedor | 0,70–1,25 USD |
| API Kimi K3.1 Pro (Moonshot) | nenhuma | conforme o uso | não se aplica a uma máquina individual; limites e disponibilidade do fornecedor | 5,40 USD |
| API confidencial com Kimi K3 (Phala, NEAR AI) | declarada pelo fornecedor, a verificar | conforme o uso | não se aplica a uma máquina individual; limites e disponibilidade do fornecedor | 8,10–8,91 USD |
| Máquina confidencial alugada 8 × H200 (Phala), DeepSeek, uma cópia do modelo | atestação do processador e das placas, a verificar | 23.506 USD com compromisso de 180 dias, 32.266 USD sob demanda | cerca de 17.750 (14.300), premissa de capacidade | 1,32–1,82 USD (1,64–2,25) |
| Como acima, opção cautelosa: metade da vazão | atestação do processador e das placas, a verificar | como acima | cerca de 8.900 (7.150), premissa de capacidade | 2,65–3,64 USD (3,29–4,51) |
| Máquina confidencial alugada 8 × B300 (Phala), Kimi K3 | atestação do processador e das placas, a verificar | 45.552–47.888 USD | cerca de 4.800–7.600 (3.900–6.200), premissa de capacidade | cerca de 6–10 USD (7,4–12,4) |
| 4 × B200 sem confidencialidade confirmada (Lambda), DeepSeek | nenhuma confirmada | 19.827 USD | cerca de 17.750 (14.300) | 1,12 USD (1,38) |
| 8 × B200 sem confidencialidade confirmada (Lambda), DeepSeek, duas cópias de quatro placas | nenhuma confirmada | 39.070 USD | cerca de 35.500 (28.700), premissa de desempenho de duas cópias | 1,10 USD (1,36) |

De onde vêm esses números: preços de API das tabelas de preços da DeepSeek, Moonshot, Confidential AI, Tinfoil, Phala e NEAR AI;[^deepseek-cennik][^cai][^tinfoil][^phala-api][^near] preços das máquinas confidenciais da tabela de preços da Phala;[^phala-gpu] aluguel de B200 na Lambda a 6,79 USD por hora de placa em uma instância com quatro placas e 6,69 USD em uma instância com oito.[^lambda-cennik] Adotamos a capacidade do Kimi a partir de medições de terceiros para o Kimi K3 em oito placas B300, que fornecem cerca de 1.000–1.600 tokens de saída por segundo.[^spheron-kimi] Os valores mensais com compromisso não significam pagamento mensal: a Phala exige o pagamento antecipado de todo o período, sem reembolso por encerramento antecipado, portanto 180 dias de uma máquina 8 × H200 correspondem a 139.104 USD em dinheiro no momento da contratação, e 180 dias de uma máquina 8 × B300, a 269.568 USD.[^phala-gpu]

O que resulta disso:

- Para o perfil adotado, os preços de APIs com confidencialidade declarada são de cerca de 0,70–1,25 USD por pessoa por mês, desde um custo comparável ao de uma API comum até cerca de 3,6 vezes seu custo, dependendo do fornecedor e do horário de uso; o menor preço é declarado pela Confidential AI, e também precisamos verificar essa oferta. A API confidencial oferece capacidade flexível sem colocar uma máquina própria em funcionamento, embora tenha seus próprios limites, filas e falhas. Uma máquina confidencial alugada para o DeepSeek, dimensionada para o pico, funciona no cenário mundial, em média, com cerca de dois terços da capacidade e custa aproximadamente 1,32 USD por pessoa, ou seja, mais ou menos o mesmo que APIs confidenciais mais caras e mais do que a mais barata. No nosso modelo horário, o primeiro nó próprio, com o excedente direcionado à API confidencial a 1,25 USD por pessoa, aparece no ponto verificado de cerca de 20 mil pessoas ativas; é um resultado das premissas adotadas, e não um limiar exato, e, com uma API confidencial mais barata, a máquina alugada não compensa nessa escala.
- O aluguel por hora de uma máquina confidencial completa não oferece hoje flexibilidade para o pico noturno: a Phala exige pelo menos um dia (8 × H200) ou um mês (8 × B300), a Confidential AI exige três meses para 8 × B300 a 60 USD por hora, e a VoltageGPU, que cobra 8 × H200 por segundo a 64,62 USD por hora, não abrange essa configuração nem os switches NVSwitch nas provas de atestação publicadas.[^cai][^voltage] A isso se soma o tempo de alocação da máquina e de carregamento dos pesos.
- Para o Kimi, o cálculo depende da medição: a API confidencial custa cerca de 8–9 USD por pessoa, e uma máquina própria 8 × B300, com uso pleno, cerca de 6 USD na estimativa de capacidade mais alta e cerca de 9,5 USD na mais baixa. Ela fica mais barata do que a API confidencial se uma máquina atender mais de cerca de 5.100–5.600 pessoas ativas usando esse modelo; na estimativa de capacidade mais baixa (cerca de 4.800 pessoas), isso não acontece.

Compra de um servidor próprio: um servidor Supermicro completo com oito placas B300 custava, em setembro de 2026, cerca de 663 mil USD.[^supermicro] Estimamos o custo mensal dessa compra da seguinte forma:

| Item | Valor mensal |
| --- | ---: |
| Depreciação do servidor em cinco anos | cerca de 11 mil USD |
| Depreciação do servidor em quatro anos | cerca de 13,8 mil USD |
| Colocação em centro de dados | cerca de 1,9–3 mil USD |
| Rede, peças e manutenção (estimativa) | cerca de 1,5 mil USD |
| Total | cerca de 14–18 mil USD |

Nesse servidor caberão duas cópias do DeepSeek, que, no cenário mundial, atenderão cerca de 35 mil pessoas (no europeu, cerca de 28 mil), por cerca de 0,41–0,52 USD por pessoa. Nessas premissas, a compra fica mais barata do que a API confidencial a 1,11–1,25 USD a partir de cerca de 12–17 mil pessoas ativas, e do que a opção declarada mais barata (0,70 USD) a partir de cerca de 21–26 mil. O cálculo não inclui o custo total de manutenção e medição dessa configuração; a compra também exige dinheiro adiantado, pessoas de plantão 24 horas por dia e demanda constante durante anos, e, nesse caso, a fundação tem acesso físico ao hardware (capítulo 2). São nossas estimativas, e não ofertas.

- Máquinas confidenciais com várias placas estão disponíveis publicamente hoje nos EUA. Na União Europeia, encontramos máquinas confidenciais com uma única placa H100,[^azure-ncc] nas quais nem o DeepSeek completo nem o Kimi cabem. A Privatemode (Edgeless Systems, Alemanha) também oferece uma API confidencial com servidores na União Europeia, com uma seleção menor de modelos.[^privatemode] Isso também é uma declaração do fornecedor, a verificar.
- Um catálogo independente que verifica APIs confidenciais, em uma observação de 29 de outubro de 2026, às 14:00 UTC, não confirmou a verificação completa de nenhuma das 95 rotas examinadas; as ausências mais comuns eram a prova de identidade do programa em execução, a origem do código e o vínculo entre a solicitação e a máquina.[^katalog] É o resultado das provas disponíveis, e não uma prova de que os serviços revelam conteúdo. Até nossa própria verificação, tratamos a confidencialidade desses serviços como declaração do fornecedor.
- A conta abrange o processamento computacional. O ambiente privado (porta de entrada, memória, arquivos), em uma ou duas máquinas confidenciais com quatro processadores virtuais e 8 GB de memória, custa na Phala cerca de 168 USD por mês por máquina, e o disco é cobrado separadamente, cerca de 10 USD por 100 GB.[^phala-cvm] Verificaremos no piloto se esse tamanho é suficiente. Com 170–340 USD mensais, isso representa, para 30 pessoas, cerca de 6–11 USD por pessoa; para 1.000 pessoas, algumas dezenas de centavos. O cálculo não inclui trabalho humano, revisões de segurança, pagamentos nem reserva para falhas.
- As assinaturas populares custam cerca de 20 USD por mês, e o chat da DeepSeek é gratuito.[^abonamenty] Planos de 100–200 USD oferecem, em trabalho intenso com agentes, o equivalente a milhares de dólares pelos preços de tabela das APIs;[^semianalysis] não competimos em preço com esses planos. Propomos a cobrança do uso real com privacidade verificável.

Situação da hipótese do manifesto em 29 de outubro de 2026: o cálculo nos aproxima dela, mas não a confirma. O processamento com confidencialidade declarada e atestação já está disponível em tabelas de preços públicas e, no perfil de uso adotado, custa cerca de 0,70–1,25 USD por pessoa por mês, portanto um pequeno grupo pode começar por ele a preço de custo e, nas nossas premissas, a infraestrutura própria pode se tornar mais barata com algo entre pouco mais de dez mil e algumas dezenas de milhares de pessoas ativas. Três fatores decidirão isso e serão verificados nos testes do capítulo 9: se a confidencialidade desses serviços passa por verificação independente, se a qualidade dos modelos disponíveis é suficiente para as tarefas que levarão as pessoas à Suveria e qual é o perfil real do tráfego. Atualizamos o cálculo a cada mudança significativa de preços e após cada teste, e preservamos as versões anteriores.

### 8.2. Etapas da infraestrutura e fichas de decisão

Desenvolvemos a infraestrutura em etapas, cada uma oferecendo valor próprio aos participantes, sem obrigação de passar à seguinte: primeiro, API confidencial e ambiente privado em máquinas confidenciais (se arrecadarmos recursos suficientes antes do início, poderemos começar diretamente pela etapa seguinte); depois, aluguel de máquinas confidenciais próprias; mais adiante, compra de hardware e sua instalação em um centro de dados externo; e, em uma perspectiva distante, se demonstrar vantagem, um prédio próprio. A etapa seguinte é justificada por dados medidos: custo total do serviço, tráfego real, tempo de resposta no pico, possibilidade de manter as salvaguardas e lidar com falhas e, na compra, também financiamento de reparos, substituição do hardware e pessoas que assumam a responsabilidade. Alugar uma máquina própria também pode fazer sentido quando o modelo necessário não está disponível em uma API confidencial ou quando queremos controle completo sobre o que está em execução.

Descrevemos cada transição em uma ficha de decisão: o que ganhamos, custo total, riscos, condições para iniciar e recuar, forma de transferir dados e chaves e conformidade com as [regras da reserva e do início dos demais pilares](whitepaper-zasady-fundacji.md) (capítulo 8 do whitepaper de princípios da fundação). Só permitimos combinar uma máquina própria com uma API confidencial para os picos de tráfego quando cada caminho tem um nível de proteção aceito; a passagem a uma opção mais fraca exige uma decisão separada e consciente do usuário. Planejamos a primeira medição em uma única placa confidencial com um modelo menor, e a seguinte em uma máquina que comporte o modelo completo.

Ajustamos a capacidade ao tráfego sem dimensionar tudo para o pico máximo. Projetamos uma fila curta com tempo de espera visível; mediremos no piloto seu tempo real, limite e comportamento quando esse limite for atingido. A capacidade flexível para picos mais longos vem, em primeiro lugar, da API confidencial, desde que preserve o nível de proteção aceito, o consentimento e o limite de gastos do usuário; quando esse caminho não existe, informamos com honestidade sobre a espera ou a indisponibilidade. O aluguel por hora faz sentido para modelos que não estão em APIs confidenciais ou que são consideravelmente mais caros nelas, e apenas onde o fornecedor realmente permite iniciar e liberar máquinas confidenciais com rapidez. Queremos usar a capacidade ociosa da máquina própria nos horários mais tranquilos para tarefas da fundação, como elaborações para o OmniForum; seu valor em preços de API não é receita para o orçamento, portanto essas tarefas têm objetivo e orçamento próprios. Após o primeiro piloto, queremos testar dois modos: “Conversa”, para o trabalho habitual com o assistente, e “Sem pressa”, para tarefas que podem esperar, por exemplo, a tradução de um documento. No modo “Sem pressa”, mostramos uma janela aproximada de início, uma estimativa de custo, o orçamento máximo, a possibilidade de cancelamento com cobrança do trabalho realizado e as mesmas informações sobre proteção. Um preço menor para esse trabalho só é possível quando resulta de um método público de divisão de custos, sem contar duas vezes o custo fixo.

### 8.3. Medição do uso sem o conteúdo das conversas

Para cobrar pelo uso real, medimos os recursos necessários para executar as tarefas e descrevemos claramente a participação nos custos fixos. O medidor de cobrança se limita aos dados indispensáveis para verificar o custo, e o conteúdo da conversa não é necessário para emitir a conta. Nos testes, verificaremos a precisão da medição, a forma de controle pelo usuário, o escopo dos metadados expostos e o comportamento do serviço quando o limite de gastos for atingido. As regras de cobrança, arredondamento, pagamentos antecipados e reembolsos são descritas no [whitepaper de princípios da fundação](whitepaper-zasady-fundacji.md).

O limite de gastos definido pelo participante deverá funcionar como uma barreira, e não como um aviso depois do fato. Alguns fornecedores só cobram as solicitações em andamento após sua conclusão, portanto seus limites podem ser ultrapassados; a Tinfoil, por exemplo, descreve isso assim.[^tinfoil] Por isso, projetamos uma reserva: antes de enviar a solicitação, a porta de entrada da Suveria separa do saldo seu maior custo permitido, levando em conta outras solicitações em andamento, e limita o número de solicitações paralelas e o tamanho da resposta. Após a conclusão, cobramos o custo real e liberamos a reserva não utilizada. Esse é um requisito a construir e verificar, e não uma função em operação.

## 9. Testes de aceitação e registro de resultados

Antes de chamar qualquer versão de confidencial, documentaremos pelo menos:

- atestação correta;
- recusa do envio de dados após substituição do código ou da chave;
- isolamento das sessões;
- restrições do administrador;
- ausência de conteúdo em logs, despejos e telemetria;
- tratamento da memória de cache;
- exclusão e recuperação;
- comportamento após falhas;
- limites das ferramentas;
- custos sob carga.

O resultado inclui a versão da configuração e o cenário no qual tentamos violar a proteção.

Queremos que cada versão da Suveria passe por todos os critérios de prova de pelo menos um verificador independente de serviços confidenciais: hardware e estado das salvaguardas, atualidade da prova, vínculo da chave da conexão com o ambiente protegido, identidade do programa em execução, origem do código e vínculo da solicitação com uma máquina específica, preservando a disponibilidade. Publicamos o resultado com data da observação, versão dos critérios e provas para uma versão, um modelo e uma rota de solicitação específicos, e descrevemos os vínculos do verificador junto com o resultado. Não prometemos uma posição em nenhum ranking. Passar pela verificação significa alcançar o controle descrito em determinado momento, com limitações públicas, e não substitui uma auditoria nem nossos próprios testes.

Quando colocarmos em funcionamento nossa própria opção confidencial, inscreveremos a Suveria em cada catálogo independente que verifica a confidencialidade da execução de modelos e lhe disponibilizaremos um ponto de verificação da atestação; o primeiro exemplo é confidentialinference.net (situação em 31 de outubro de 2026).[^confidentialinference] Não prometemos a inclusão, porque quem decide é o catálogo; prometemos a inscrição, a resposta às suas perguntas e a publicação do resultado, mesmo que ruim, com data. O catálogo verifica apenas o que vê de fora, geralmente a atestação e o canal de conexão; não substitui a auditoria do código, da configuração nem a avaliação dos canais laterais.

Os testes de armazenamento e transferência incluem:

- restauração de uma cópia criptografada em outro dispositivo autorizado e recusa da leitura sem a chave correta;
- perda de um dispositivo, recuperação do acesso pelo método escolhido e apresentação clara das consequências da perda de todas as chaves;
- sincronização de alterações paralelas sem sobrescrever silenciosamente uma das versões;
- leitura da exportação em uma ferramenta independente, sem conta no operador original, com comparação dos originais, histórico, fontes e ligações;
- limitação do escopo da integração e interrupção efetiva do seu acesso futuro após a revogação da permissão.

Etapas:

1. teste de usabilidade com materiais não sensíveis;
2. teste técnico de proteção;
3. piloto limitado com condições claras;
4. aumento gradual da escala.

Antes do piloto, definiremos e publicaremos os limiares: tempo até a primeira palavra da resposta, custo dos cálculos por pessoa no perfil medido e qualidade do modelo conforme o [whitepaper de materiais e benchmark](whitepaper-materialy-i-benchmark.md). Consideraremos o piloto bem-sucedido quando atender aos três.

Uma mudança de modelo, firmware ou método de login na conta pode exigir uma nova qualificação, e uma atualização não pode enfraquecer silenciosamente a proteção acordada. Cada versão tem uma ficha pública:

- escopo de funcionamento;
- provas dos testes;
- limitações conhecidas;
- pessoas responsáveis;
- custos;
- caminho para relatar um problema;
- plano de retirada.

A descoberta de uma falha leva à limitação da exposição, à informação das pessoas afetadas e a uma correção verificável.

Queremos realizar os testes abertamente. Convidamos pessoas que trabalham com segurança, criptografia, infraestrutura e aplicativos, inclusive criadores que apresentam a tecnologia ao grande público, para projetar conjuntamente as verificações e tentar romper a proteção em contas de teste separadas, com dados fictícios. Também convidamos os críticos. Não pagamos por promoção e identificamos cada colaboração conforme o [registro de benefícios](whitepaper-zasady-fundacji.md) (capítulo 7 do whitepaper de princípios da fundação). Os resultados, inclusive os malsucedidos, entram no registro de resultados. Se você quiser participar, escreva para [salve@novusignis.org](mailto:salve@novusignis.org?subject=%5BDo%C5%82%C4%85cz%5D%20Pr%C3%B3by%20Suverii) com o assunto “[Dołącz] Próby Suverii”.

O teste mais importante: uma equipe com permissões de operador fora do ambiente confidencial (porta de entrada, discos, rede, logs) tenta ler as conversas das contas de teste, nas quais foram ocultadas sequências secretas de caracteres. Se qualquer pessoa as extrair, inclusive nós, o teste fracassou.

Disponibilizaremos a primeira versão da Suveria a algumas pessoas que ajudam a configurá-la. Se usar uma API confidencial, sua ficha de proteção (seção 2.3) dirá claramente que o modelo funciona em um fornecedor externo, que a atestação é declarada pelo fornecedor e ainda não foi verificada por nós e que os metadados não estão protegidos. Como as primeiras pessoas também ajudam a operar o serviço, o primeiro resultado que publicaremos será o teste mais importante descrito acima, com a descrição do que o operador conseguiu fazer.

**Registro de resultados.** Situação em 29 de outubro de 2026: ainda não realizamos nenhum dos testes descritos, não alugamos placas de vídeo e não colocamos um modelo em funcionamento na Suveria. Acrescentamos aqui cada resultado seguinte com data, configuração, cenário e conclusão, inclusive quando o teste não for bem-sucedido.

Permanecem por decidir:

- primeiro modelo e nível de qualidade aceitável;
- verificação independente das APIs confidenciais e das máquinas confidenciais, além da disponibilidade em jurisdições com forte proteção de dados pessoais, como a União Europeia com o RODO;
- tempo de resposta;
- regras de chaves e memória;
- escopo mínimo dos dados de cobrança;
- obrigações legais do operador diante de relatos de abusos;
- forma de financiar a continuidade.

O [whitepaper de princípios da fundação](whitepaper-zasady-fundacji.md) descreve orçamento, cobrança e responsabilidade, e o [whitepaper de materiais e benchmark](whitepaper-materialy-i-benchmark.md), a avaliação do comportamento dos modelos.

Fundação Novus Ignis, Poznań, KRS 0001269575. Site e manifesto: novusignis.org. Observações: salve@novusignis.org.

## Notas

[^teefail]: [TEE.fail: Breaking Trusted Execution Environments via DDR5 Memory Bus Interposition](https://tee.fail/). Estudo da Georgia Tech, Purdue University e Synkhronix, publicado em 28/10/2025: extração de chaves de atestação Intel TDX e SGX e AMD SEV-SNP por conexão física ao barramento de memória DDR5, com consequências para a computação confidencial da NVIDIA. Exige acesso físico ao servidor; a Intel e a AMD consideram esses ataques fora do escopo da proteção. Análise: [The Hacker News](https://thehackernews.com/2025/10/new-teefail-side-channel-attack.html). Acesso em 28/10/2026.

[^local-first]: [Kleppmann, Wiggins, van Hardenberg e McGranaghan (2019): Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/). Estudo. Princípios do armazenamento da cópia principal nos dispositivos do usuário e do papel de apoio dos servidores, incluindo cópias criptografadas.

[^apple-pcc]: [Apple: Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/). Descrição da arquitetura. Exemplo de vínculo entre confidencialidade, controle do software e transparência do sistema.

[^ohttp]: [RFC 9458: Oblivious HTTP](https://www.rfc-editor.org/rfc/rfc9458.html). Especificação. Separação do conhecimento do remetente e da solicitação em um modelo de confiança específico; não é anonimato pleno.

[^weiss-keylogging]: [Weiss, Ayzenshteyn, Amit e Mirsky (2024): What Was Your Prompt? A Remote Keylogging Attack on AI Assistants](https://www.usenix.org/conference/usenixsecurity24/presentation/weiss). Publicação científica (USENIX Security 2024; versão preliminar arXiv 2403.09751). A partir do tamanho dos pacotes criptografados de um fluxo de resposta, um observador da rede reconstrói o tema e, parcialmente, o conteúdo da resposta do assistente. Acesso em 30/10/2026.

[^whisper-leak]: [McDonald e Bar Or (2025): Whisper Leak: a side-channel attack on Large Language Models](https://arxiv.org/abs/2511.03675) e [análise da Microsoft (7/11/2025)](https://www.microsoft.com/en-us/security/blog/2025/11/07/whisper-leak-a-novel-side-channel-cyberattack-on-remote-language-models/). Publicação de pesquisa e descrição do fabricante. O tamanho e o ritmo dos pacotes em um fluxo de resposta criptografado permitem identificar o tema da conversa; alguns fornecedores adicionaram preenchimento aleatório aos pacotes. Acesso em 30/10/2026.

[^nvidia-platformy]: [NVIDIA: plataformas compatíveis com contêineres confidenciais](https://docs.nvidia.com/datacenter/cloud-native/confidential-containers/latest/supported-platforms.html). Documentação do fabricante. Requisitos da configuração completa de processador, placas e software.

[^nvidia-ppcie-v2]: [NVIDIA: Protected PCIe v2, Introduction](https://docs.nvidia.com/attestation/attestation-client-tools-ppcie-sdk-cpp/latest/ppcie_introduction.html). Documentação do fabricante. No modo PPCIe v2, a rede NVLink e NVSwitch pertence à parte confiável do sistema; a proteção PCIe não significa criptografia de todo o tráfego entre placas.

[^nvidia-blackwell]: [NVIDIA: Trusted Computing Solutions 595](https://docs.nvidia.com/595trd1-trusted-computing-solutions-release-notes.pdf). Documentação do fabricante. Modo de computação confidencial em várias placas Blackwell, incluindo proteção das conexões; exige uma configuração compatível.

[^osi]: [OSI: Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition). Definição. Pesos abertos não determinam o cumprimento de toda a definição de um sistema aberto.

[^deepseek]: [DeepSeek-V4.1-Flash: ficha do modelo](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash). Documentação do fabricante. Arquitetura, licença MIT e capacidades declaradas do modelo; não é uma medição do desempenho da Suveria.

[^dpga]: [Digital Public Goods Alliance: padrão](https://www.digitalpublicgoods.net/standard). Padrão. Critérios de avaliação de um bem público digital; uma orientação do projeto não é um reconhecimento obtido da DPGA.

[^lambda-cennik]: [Lambda: tabela de preços das instâncias](https://lambda.ai/pricing). Tabela de preços do fornecedor. NVIDIA B200 SXM6 180 GB: 6,79 USD por hora de placa em uma instância com quatro placas e 6,69 USD em uma instância com oito; H100 SXM 80 GB: 3,99 USD; preços sob demanda, sem impostos, sem modo confidencial. Acesso em 29/10/2026.

[^lambda-v41]: [Lambda: DeepSeek-V4.1-Flash, resultados de medição do desempenho](https://lambda.ai/inference-models/deepseek-ai/deepseek-v4.1-flash). Medição do fornecedor. 4 × B200, vLLM, paralelismo de tensores 4, decodificação especulativa, cerca de 8.192 tokens de entrada e 1.024 de saída por solicitação; com 64 solicitações simultâneas, um total de 3.713,9 tokens de saída por segundo e uma média de 66,8 tokens por segundo por conversa. Sem data da medição. Acesso em 28/10/2026.

[^azure-ncc]: [Azure: preço da máquina NCC40ads H100 v5](https://prices.azure.com/api/retail/prices?$filter=armSkuName%20eq%20%27Standard_NCC40ads_H100_v5%27%20and%20priceType%20eq%20%27Consumption%27) e [descrição da série](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/nccadsh100v5-series). Tabela de preços do fornecedor. Máquina confidencial com uma placa H100 NVL 94 GB; de 6,98 USD por hora (East US 2) a 8,90 USD (West Europe), Linux, pagamento pelo uso. Acesso em 28/10/2026.

[^deepseek-cennik]: [DeepSeek: tabela de preços da API (versão chinesa)](https://api-docs.deepseek.com/zh-cn/quick_start/pricing). Tabela de preços do fornecedor. Modelo deepseek-flash (V4.1-Flash-1017): entrada sem acerto no cache, 1 CNY fora do pico e 2 CNY no pico; saída, 4 e 8 CNY por milhão de tokens. Conversão para USD segundo a [compilação da eesel](https://www.eesel.ai/blog/deepseek-v4-1-flash-pricing), fonte auxiliar. Acesso em 28/10/2026.

[^abonamenty]: Preços das assinaturas: [ChatGPT Plus](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus), [Claude Pro](https://claude.com/pricing), [Google AI Pro](https://gemini.google/subscriptions/), [Kimi Plus (compilação da geotoolbox)](https://geotoolbox.ai/blog/kimi-pricing); o chat da DeepSeek é gratuito ([descrição](https://en.wikipedia.org/wiki/DeepSeek_(chatbot))). Preços mensais em USD, sem impostos; Kimi Plus, 19 USD. Acesso em 28–29/10/2026.

[^kimi-k31]: [Moonshot: lançamento do Kimi K3.1 Pro](https://forum.moonshot.ai/t/kimi-k3-1-pro-has-launched-start-exploring-now/629) e [Kimi: descrição do K3.1 Pro (24/10/2026)](https://www.kimi.com/news/kimi-k3-1-pro). Documentação do fabricante. Versão do Kimi K3 com treinamento adicional, cerca de 3 trilhões de parâmetros, contexto de 1 milhão de tokens, pesos anunciados para antes de 4/11/2026; licença não anunciada. Preços da API segundo a OpenRouter: 2 / 10 USD por milhão de tokens.

[^kimi-k3]: [Kimi K3: ficha do modelo](https://huggingface.co/moonshotai/Kimi-K3). Documentação do fabricante. 2,8 trilhões de parâmetros, 104 bilhões ativos, contexto de cerca de 1 milhão, MXFP4, licença Kimi K3 License.

[^spheron-kimi]: [Spheron: implantação do Kimi K3 (19/10/2026)](https://www.spheron.network/blog/deploy-kimi-k3-gpu-cloud/). Guia do fornecedor. Arquivos de pesos de 1.560,94 GB, configurações que comportam o modelo. Capacidade de cerca de 1.000–1.600 tokens por segundo em 8 × B300 segundo uma compilação de medições de terceiros de 29/10/2026; grande variação.

[^aa]: [Artificial Analysis: Kimi K3.1 Pro e DeepSeek V4.1 Flash 1017](https://artificialanalysis.ai/models/comparisons/kimi-k3-1-pro-vs-deepseek-v4-1-flash-1017). Comparação independente. Índice v5 de 28/10/2026: 46 e 32; velocidade de cerca de 36 e 178 tokens por segundo. Acesso em 29/10/2026.

[^tinfoil]: [Tinfoil: tabela de preços](https://tinfoil.sh/pricing). Tabela de preços do fornecedor. DeepSeek-V4.1-Flash, 0,65 USD de entrada e 1,45 USD de saída por milhão de tokens; descrição dos limites de gastos. Acesso em 29/10/2026.

[^phala-api]: [Phala: modelos confidenciais](https://phala.com/confidential-ai-models). Tabela de preços do fornecedor. DeepSeek V4.1 Flash 1017: 0,75 / 1,60 USD; Kimi K3: 3 / 15 USD por milhão de tokens; atestação da porta de entrada e confirmações das respostas segundo o fornecedor. Acesso em 29/10/2026.

[^near]: [NEAR AI: tabela de preços](https://near.ai/pricing). Tabela de preços do fornecedor. Kimi K3: 3,30 / 16,50 USD por milhão de tokens; preços diferentes na página inicial, divergência a esclarecer. Acesso em 29/10/2026.

[^phala-gpu]: [Phala: placas de vídeo confidenciais](https://phala.com/gpu-tee) e [tabela de preços](https://cloud.phala.com/about/pricing). Tabela de preços do fornecedor. 8 × H200: 44,20 USD por hora sob demanda, 32,20 USD com compromisso de 180 dias; 8 × B300: 65,60 USD (30 dias), 62,40 USD (180 dias); Intel TDX com computação confidencial NVIDIA; sem máquinas na Europa. Acesso em 29/10/2026. Compromisso pago antecipadamente, sem reembolso por encerramento antecipado.

[^privatemode]: [Privatemode (Edgeless Systems)](https://www.privatemode.ai/). Oferta do fornecedor. API confidencial com servidores na União Europeia e atestação remota; seleção de modelos abertos menor do que a dos fornecedores dos EUA; preços não divulgados publicamente. Confidencialidade declarada pelo fornecedor, não verificada por nós. Acesso em 30/10/2026.

[^katalog]: [Confidential Inference Directory: metodologia e observações](https://confidentialinference.net/attestation). Catálogo independente, patrocinado por uma empresa que oferece inferência confidencial. 0 de 95 rotas verificadas de ponta a ponta na observação de 29/10/2026, 14:00:19 UTC.

[^supermicro]: [Supermicro: servidor AS-8126GS-NB3RT-01-G2](https://store.supermicro.com/us_en/8u-gpu-gold-series-as-8126gs-nb3rt-01-g2.html) e [GPU Per Hour: preços dos servidores NVIDIA](https://gpuperhour.com/blog/nvidia-gpu-prices). Oferta do fabricante e compilação de preços. Servidor completo com oito placas B300: 662.845,95 USD (21/9/2026).

[^semianalysis]: [BigGo Finance sobre a análise da SemiAnalysis (7/10/2026)](https://finance.biggo.com/news/173039423dab79be). Análise do setor. Um plano de 200 USD oferece, com trabalho intenso, cerca de 12 mil USD pelos preços de tabela das APIs; estimativas de margem, e não dados da empresa.

[^sglang-k3]: [SGLang: receita para o Kimi K3](https://github.com/sgl-project/sglang/blob/main/docs/cookbook/autoregressive/Moonshotai/Kimi-K3.mdx). Documentação do mecanismo. Configuração verificada do Kimi K3 em 8 × B300; não se refere ao Kimi K3.1 nem ao modo confidencial.

[^phala-cvm]: [Phala: tabela de preços das máquinas confidenciais](https://phala.com/pricing). Tabela de preços do fornecedor. tdx.large (4 processadores virtuais, 8 GB de memória): 0,23 USD por hora; disco, 0,000139 USD por GB por hora. Acesso em 29/10/2026.

[^itu]: [ITU: Facts and Figures 2025, uso da internet](https://www.itu.int/itu-d/reports/statistics/2025/10/15/ff25-internet-use). Estatística internacional. Percentual de pessoas que usam a internet nas regiões do mundo em 2025 (cerca de 6 bilhões de pessoas, 74% da população); as participações regionais no nosso cálculo são uma aproximação: percentual × população da região.

[^cai]: [Confidential AI: tabela de preços](https://confidential.ai/pricing). Tabela de preços do fornecedor, valores de 26/10/2026. DeepSeek V4.1 Flash: 0,30 USD de entrada, 0,03 USD de entrada do cache, 1,20 USD de saída por milhão de tokens; máquina 8 × B300, 60 USD por hora, mínimo de três meses, alocação em alguns dias. Confidencialidade declarada pelo fornecedor, não verificada por nós.

[^voltage]: [VoltageGPU: tabela de preços](https://voltagegpu.com/pricing) e [escopo das provas](https://voltagegpu.com/). Tabela de preços e declarações do fornecedor. 8 × H200, 64,62 USD por hora com cobrança por segundo; as provas publicadas não incluem a atestação dessa configuração nem dos switches NVSwitch.

[^epoch]: [The Decoder sobre os dados da Epoch AI (8/1/2026)](https://the-decoder.com/global-ai-compute-hits-15-million-h100-equivalents-epoch-ai-finds/) e [Epoch AI: AI Chip Users](https://epoch.ai/data/ai-chip-users). Compilação de um centro de pesquisa independente. Capacidade computacional para inteligência digital instalada superior a 15 milhões de equivalentes NVIDIA H100, demanda superior a 10 GW. Estimativa, e não medição.

[^confidentialinference]: [confidentialinference.net](https://confidentialinference.net): comparação de fornecedores que executam modelos em ambientes de execução confiáveis, com verificações datadas de atestação; site patrocinado pela empresa Enclava, com onze fornecedores no momento do acesso. Acesso em 31/10/2026.
