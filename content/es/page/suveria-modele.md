---
tytul: Modelos de inteligencia digital en Suveria
opis: De dónde obtenemos los modelos para Suveria, cómo los elegimos, qué sucede al cambiar de modelo y qué principios públicos ha de seguir el asistente
grupa: suveria
kolejnosc: 4
menu: Modelos
---
# Modelos de inteligencia digital en Suveria

Un modelo de inteligencia digital es un programa que lee tus palabras y elabora una respuesta; el asistente de Suveria ha de funcionar con ese modelo. Esta página explica de dónde obtenemos los modelos, cómo los elegimos, qué sucede cuando cambia el modelo y qué principios públicos ha de seguir el asistente.

Hoy Suveria es un proyecto. El registro de resultados del whitepaper (estado al 29 de octubre de 2026) lo dice claramente: aún no hemos ejecutado ningún modelo en Suveria ni realizado ninguna de las pruebas descritas. Lo que sigue describe intenciones y candidatos, no un servicio en funcionamiento.

Más información: [whitepaper de Suveria, capítulo 9](../whitepaper-suveria.md#s9).

## Por qué modelos abiertos

La base del proyecto son modelos abiertos, es decir, publicados en condiciones que permiten ejecutarlos por cuenta propia. Así la fundación puede ponerlos a disposición de las personas prácticamente a precio de costo y centrar el trabajo en un entorno privado para usar modelos existentes, con la posibilidad de desarrollar también modelos propios en el futuro.

Para empezar queremos usarlos a través de proveedores de computación confidencial y, si el cálculo y las condiciones lo justifican, en servidores propios. El manifiesto señala que Suveria es «nuestro mejor camino hacia el trabajo privado con la inteligencia digital, y no un fin en sí mismo»: si los modelos llegan a caber en el propio dispositivo o surge una forma mejor de protección, parte de ese camino dejará de ser necesaria.

Más información: [manifiesto, apartado 3.1](../manifest.md#s3-1) y [whitepaper de Suveria, capítulo 6](../whitepaper-suveria.md#s6).

## Cómo elegimos un modelo

Suveria ha de estar al alcance de personas de todo el mundo, en sus propios idiomas. Por eso, al elegir un modelo, tenemos en cuenta:

- la calidad en muchos idiomas;
- la comprensión de las intenciones;
- la fiabilidad;
- la licencia, es decir, las condiciones en las que quien crea el modelo permite usarlo;
- el costo;
- si se puede ejecutar en el entorno protegido que describimos en la página [Privacidad y seguridad](suveria-prywatnosc.md).

Solo elegimos un modelo más grande cuando realiza claramente mejor las tareas importantes para las personas. El benchmark de la fundación ha de ayudar en ello: es un conjunto de tareas y reglas de evaluación que permite comprobar cómo se comportan los modelos; hoy es un programa de investigación sin resultados.

El whitepaper menciona dos candidatos. Son candidatos por comprobar, no una decisión: el primer modelo y el nivel de calidad aceptable siguen pendientes de resolver.

- **DeepSeek-V4.1-Flash.** Un modelo con licencia MIT, que permite usarlo también para prestar servicios. El desarrollador indica 552 mil millones de parámetros en la parte principal (los parámetros son números ajustados durante el entrenamiento del modelo) y una memoria adicional llamada Engram de 196 mil millones de parámetros. En cada palabra solo trabajan 8–16 mil millones de ellos, por lo que responde rápido y a bajo costo, aunque ejecutarlo requiere al menos cuatro tarjetas gráficas modernas. Los parámetros están guardados en una forma abreviada (cuantización). Esto ahorra memoria, pero puede reducir la calidad, por lo que lo comprobaremos con nuestras propias tareas.
- **Kimi K3.1 Pro.** Un modelo de la empresa Moonshot AI. A 9 de noviembre de 2026, sus pesos completos, es decir, sus parámetros, son públicos. La licencia permite usarlo también para servicios; las condiciones adicionales solo afectan a servicios con ingresos muy altos o con muchísimos usuarios, así que con la escala actual de la fundación no nos afectan (es nuestra lectura, no una opinión jurídica). Para ejecutarlo hacen falta al menos ocho tarjetas gráficas de última generación. Su coste y su velocidad en el entorno protegido están por medir; DeepSeek-V4.1-Flash sigue siendo el primer candidato.

Más información: [whitepaper de Suveria, capítulo 6](../whitepaper-suveria.md#s6) y [whitepaper de materiales y benchmark, capítulo 1](../whitepaper-materialy-i-benchmark.md#s1).

## Qué sucede cuando cambia el modelo

Anunciamos con antelación el cambio o la retirada de un modelo. El historial de conversaciones se queda contigo: puedes elegir un nuevo modelo, exportar los datos o dejar de trabajar.

En la conversación ha de verse el momento del cambio de modelo, y trasladar el contexto privado al nuevo modelo requiere tu decisión. Cambiar de modelo también puede exigir volver a verificar la protección, porque una actualización no puede debilitar silenciosamente las protecciones acordadas.

Más información: [whitepaper de Suveria, capítulo 6](../whitepaper-suveria.md#s6) y [capítulo 9](../whitepaper-suveria.md#s9).

## Los principios del asistente han de ser públicos

Publicaremos íntegramente, junto con cada versión, los principios según los cuales responde el asistente. En Suveria siempre has de poder leer la instrucción completa de tu asistente, es decir, los principios escritos según los cuales responde, y la descripción de su forma de trabajar: cómo divide la tarea en pasos, usa la memoria y comprueba las respuestas.

La infraestructura compartida ha de ofrecer solo modelos y configuraciones que superen las pruebas públicas del benchmark. Por encima de ese mínimo, tú eliges el estilo de trabajo, desde ordenar tus ideas con calma hasta una conversación exigente en la que el asistente señala las lagunas del razonamiento.

Queremos mantener una biblioteca abierta de instrucciones comprobadas, que los participantes mejoran en OmniForum (el espacio compartido de conversación y decisiones) y verifican en el benchmark. Esa biblioteca todavía no existe.

Más información: [whitepaper de Suveria, capítulo 4](../whitepaper-suveria.md#s4) y [apartado 4.1](../whitepaper-suveria.md#s4-1).

## El asistente, el Canon Personal y el Telescopio del Pensamiento

La memoria de conversaciones anteriores ha de funcionar con tu consentimiento y ser editable de forma transparente: puedes borrar o corregir cada entrada y ver su origen. El asistente distingue claramente su propia sugerencia de la postura que una persona ha reconocido conscientemente como suya.

El Canon Personal es un conjunto de principios y valores que has puesto por escrito y reconoces como tuyos. El Telescopio del Pensamiento ha de permitir ver el registro de tus propias reflexiones de distintos momentos y cómo han cambiado con el tiempo, así como contrastar una situación que señales con el Canon. La idea nació de la ventana de Overton, es decir, el conjunto de ideas que se consideran aceptables en una sociedad en un momento dado. Para una persona es el conjunto de pensamientos que considera admisibles para sí en ese momento; el Telescopio ha de ser esa ventana para una sola persona y solo para ella.

El modelo muestra las posibles conexiones junto con la fuente del principio invocado, y su interpretación se puede corregir o rechazar. No creamos puntuaciones de moralidad ni un ranking público. En la primera versión, el Telescopio trabaja solo con una situación que señales y no hace un seguimiento continuo de tu vida.

Más información: [whitepaper de Suveria, capítulo 6](../whitepaper-suveria.md#s6) y [apartado 6.1](../whitepaper-suveria.md#s6-1).

## Límites: qué hace el modelo y qué no

- **Crisis.** Cuando una conversación trata sobre un peligro para la vida o la salud, el asistente ha de dar información sobre la ayuda disponible, por ejemplo números de emergencia, sin enviar nada fuera del entorno privado.
- **Mensajes ajenos.** Un mensaje de otra persona, por ejemplo de un buzón de correo conectado, puede contener instrucciones ocultas; por eso separamos el contenido externo de tus instrucciones: al ordenarlo, el asistente no puede enviar mensajes, abrir direcciones de red ni modificar el Canon Personal por su cuenta sin tu confirmación.
- **Las elecciones de quien lo creó.** El propio modelo también lleva consigo las elecciones de quien lo creó, por ejemplo temas que evita; las comprobamos en el benchmark y las describimos al elegir el modelo.
- **Sin accesos ocultos.** Queremos prevenir los abusos sin leer las conversaciones privadas. No creamos accesos ocultos a los contenidos privados.

Más información: [whitepaper de Suveria, capítulo 4](../whitepaper-suveria.md#s4), [capítulo 3](../whitepaper-suveria.md#s3) y [capítulo 6](../whitepaper-suveria.md#s6).

## Lee y dinos qué piensas

Encontrarás las cifras, las notas al pie y la lista de cuestiones por resolver en el [whitepaper de Suveria](../whitepaper-suveria.md), y la forma de evaluar los modelos, en el [whitepaper de materiales y benchmark](../whitepaper-materialy-i-benchmark.md). Si algo te plantea dudas o te parece incorrecto, selecciona ese fragmento y usa el botón «Tengo un comentario» o escribe a salve@novusignis.org.
