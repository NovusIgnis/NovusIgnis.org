---
tytul: Estadísticas del sitio
opis: Cuántas veces se leen nuestro sitio y nuestros documentos, con recuentos agregados de los registros del servidor, sin scripts de análisis ni cookies
grupa: skroty
kolejnosc: 11
menu: Estadísticas del sitio
---
# Estadísticas del sitio

Queremos saber cómo cambia el interés por la fundación y qué textos se leen más, y queremos mostrarlo abiertamente. Lo contamos de la forma más sencilla: a partir de los registros del servidor, que ya guarda cada descarga de una página. El sitio no tiene scripts de análisis, cookies ni nada que te reconozca en la siguiente visita.

**Estado al 31 de octubre de 2026.** El sitio está pasando a un plan de alojamiento que da acceso a los registros del servidor. Empezamos a calcular las estadísticas a partir de noviembre de 2026; las reglas siguientes rigen desde el primer mes que contabilicemos.

## Qué contamos

- **Páginas vistas:** cuántas veces se ha descargado cada página y cada documento, por separado en polaco y en inglés.
- **Descargas de archivos:** por ejemplo, `llms-full.txt`, es decir, el manifiesto y los whitepapers en un solo archivo.
- **Visitas de robots**, en cuatro grupos: buscadores; robots de empresas que crean modelos de inteligencia digital; modelos que leen el sitio a petición de una persona, por ejemplo, cuando alguien pide a su chat que lea el manifiesto; otros robots.
- **Archivos para modelos:** cuántas veces los robots de los modelos han descargado `llms.txt` y `llms-full.txt`.

## Qué no guardamos

- Direcciones IP, descripciones completas de los navegadores ni nada más que permita reconocer a una persona concreta.
- El historial de visitas de una persona: no agrupamos las páginas vistas en visitas ni en perfiles.
- Datos de otros sitios y servicios.

Por eso no sabemos cuántas personas nos han visitado, sino cuántas veces se han descargado las páginas. Una persona puede abrir una página varias veces y algunos robots se hacen pasar por navegadores corrientes, por lo que las cifras son aproximadas.

## Cómo contamos

Cada semana descargamos el registro del servidor desde el panel de Infomaniak, la empresa que aloja el sitio, porque allí los registros se conservan solo unos días. Al final del mes, el script `tools/statystyki.mjs` calcula a partir de ellos únicamente los totales indicados arriba y los guarda sin direcciones IP ni descripciones de los navegadores. Conservamos las copias descargadas de los registros como máximo hasta final de mes y las eliminamos justo después del recuento. La página [Tus datos](twoje-dane.md) describe las reglas del tratamiento de datos.

## Resultados

{{statystyki}}
