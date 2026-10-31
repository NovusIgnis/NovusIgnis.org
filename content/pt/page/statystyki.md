---
tytul: Estatísticas do site
opis: Quantas vezes nosso site e documentos são lidos, em contagem agregada a partir dos registros do servidor, sem scripts de análise nem cookies
grupa: skroty
kolejnosc: 11
menu: Estatísticas do site
---
# Estatísticas do site

Queremos saber como muda o interesse pela fundação e quais textos são lidos com mais frequência, e queremos mostrar isso publicamente. Contamos da forma mais simples: a partir dos registros do servidor, que já registra cada carregamento de página. O site não tem scripts de análise, cookies nem nada que reconheça você na próxima visita.

**Situação em 31 de outubro de 2026.** O site está migrando para um plano de hospedagem que disponibiliza os registros do servidor. Começamos a contar as estatísticas a partir de novembro de 2026; os princípios abaixo se aplicam desde o primeiro mês contado.

## O que contamos

- **Visualizações de páginas:** quantas vezes cada página e cada documento foi carregado, separadamente em polonês e em inglês.
- **Downloads de arquivos:** por exemplo, de `llms-full.txt`, ou seja, do manifesto e dos whitepapers em um único arquivo.
- **Acessos de robôs** em quatro grupos: mecanismos de busca; robôs de empresas que desenvolvem modelos de inteligência digital; modelos que leem o site a pedido de uma pessoa, por exemplo, quando alguém pede ao seu chat que leia o manifesto; outros robôs.
- **Arquivos para modelos:** quantas vezes os robôs de modelos baixaram `llms.txt` e `llms-full.txt`.

## O que não registramos

- Endereços IP, descrições completas dos navegadores nem qualquer outra coisa que permita reconhecer uma pessoa individual.
- O histórico de acessos de uma pessoa: não reunimos visualizações em visitas nem em perfis.
- Dados de outros sites e serviços.

Por isso, não sabemos quantas pessoas nos visitaram, apenas quantas vezes as páginas foram carregadas. Uma pessoa pode abrir uma página várias vezes, e alguns robôs se apresentam como navegadores comuns, portanto os números são aproximados.

## Como contamos

Toda semana, baixamos o registro do servidor pelo painel da Infomaniak, a empresa que hospeda o site, pois os registros só são guardados lá por alguns dias. No final do mês, o script `tools/statystyki.mjs` conta a partir deles apenas os totais listados acima e os salva sem endereços IP nem descrições dos navegadores. Guardamos as cópias baixadas dos registros no máximo até o fim do mês e as removemos assim que a contagem termina. A página [Seus dados](twoje-dane.md) descreve os princípios do tratamento de dados.

## Resultados

{{statystyki}}