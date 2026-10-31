---
tytul: Cuánto cuesta Suveria
opis: Qué se ha de pagar en Suveria, qué muestra el cálculo fechado y por qué es una estimación y no una lista de precios
grupa: suveria
kolejnosc: 3
menu: Cuánto cuesta
---
# Cuánto cuesta Suveria

Esta página trata de tu dinero: qué se ha de pagar en Suveria, cómo se compone la factura y qué muestran nuestros cálculos. Hoy Suveria es un proyecto. El servicio todavía no existe, por lo que tampoco hay un precio. Las cifras siguientes proceden de un cálculo fechado el 29 de octubre de 2026 (salvo la fila «Total», que sumamos nosotros). Es un cálculo sobre el papel, no una lista de precios.

Más información: [whitepaper de Suveria, capítulo 8](../whitepaper-suveria.md#s8).

## Qué incluye el pago

El principio es sencillo: pagas por lo que realmente usas, incluida una parte de los costos comunes calculada de forma justa (los que no se pueden atribuir a una sola persona, por ejemplo, la seguridad o la contabilidad), ves qué estás pagando y tú fijas tu límite de gasto. La tarifa cubre los costos y nada más. Todo lo que la supera es una donación voluntaria, que se muestra por separado.

La factura tiene dos partes:

- **el uso real** en cada ciclo: cómputo, memoria y transferencia de datos;
- **una parte asignada públicamente de los costos fijos** que mantienen la infraestructura preparada: seguridad, pagos, contabilidad, atención, desgaste y sustitución del hardware.

Queremos repartir los costos comunes según una regla pública elegida en el piloto: en proporción al uso o por igual entre las cuentas activas. El costo estimado de una tarea ha de poder consultarse siempre, y anunciaremos tu parte de los costos comunes antes del ciclo de facturación; siempre queda dentro de tu límite. Anunciaremos cada cambio de precio con su motivo y su efecto sobre las personas usuarias.

Más información: [whitepaper de los principios de la fundación, capítulo 3](../whitepaper-zasady-fundacji.md#s3) y [apartado 3.1](../whitepaper-zasady-fundacji.md#s3-1); [manifiesto, apartado 6.1](../manifest.md#s6-1).

## Qué muestra el cálculo

Para los cálculos tomamos una persona usuaria de ejemplo: 20 preguntas al día, cada respuesta de unos 600 tokens (un token es un fragmento de texto, aproximadamente una palabra corta), todos los días durante 30 días. Es un modelo de carga para una prueba, no una previsión. Los precios proceden de listas públicas, sin impuestos.

La primera versión probablemente usará una API confidencial (si reunimos fondos suficientes, puede funcionar desde el principio en servidores propios alquilados): el modelo de inteligencia digital funciona en un proveedor externo que declara que no lee el contenido de las conversaciones, y nosotros verificaremos esa declaración. A ello se suma el entorno privado: una o dos máquinas confidenciales con la pasarela, la memoria y los archivos de las personas usuarias. Este costo es fijo, por lo que pesa más en un grupo pequeño.

| Costo mensual por persona según el número de personas que usaran Suveria (cálculo del 29.10.2026) | 30 personas | 100 personas | 1000 personas |
| --- | --- | --- | --- |
| Solo el cómputo en la API confidencial | 0,70–1,25 USD | 0,70–1,25 USD | 0,70–1,25 USD |
| Costo fijo del entorno privado (170–340 USD al mes) | unos 6–11 USD | unos 1,70–3,40 USD | unas decenas de centavos |

Es una estimación sobre el papel: no incluye el trabajo de las personas, las revisiones de seguridad, los pagos ni una reserva para fallos; comprobaremos en el piloto si las máquinas de ese tamaño son suficientes. Queremos mostrar el costo fijo por separado y cubrirlo con el presupuesto de apoyo al piloto, por ejemplo con donaciones destinadas a Suveria. No damos por hecho que ya tengamos esos fondos.

Más información: [whitepaper de Suveria, capítulo 7](../whitepaper-suveria.md#s7) y [apartado 8.1](../whitepaper-suveria.md#s8-1); [whitepaper de los principios de la fundación, apartado 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## De 30 personas a toda la humanidad

La misma persona usuaria de ejemplo permite calcular cuánto trabajo tendría el modelo con distintos números de personas. En la tabla, «pico» es la hora del día con más carga cuando usan Suveria personas de distintas zonas horarias (aproximadamente 1,51 × el promedio).

| Personas activas | Preguntas al mes | Texto de las respuestas en el pico |
| --- | ---: | ---: |
| 30 | 18 000 | 6,3 tokens por segundo |
| 100 | 60 000 | 20,9 tokens por segundo |
| 1000 | 600 000 | 209 tokens por segundo |
| 100 mil | 60 millones | 20 921 tokens por segundo |
| 1 millón | 600 millones | 209 208 tokens por segundo |
| 1000 millones | 600 mil millones | 209,2 millones de tokens por segundo |
| 10 mil millones | 6 billones | 2,09 mil millones de tokens por segundo |

¿Cuánto hardware supone eso? El whitepaper plantea un experimento mental. Si cada una de 10 mil millones de personas usara Suveria de esta manera, con el rendimiento medido para el modelo DeepSeek-V4.1-Flash harían falta unos 2,25 millones de tarjetas B200 y unos 4 GW de potencia. Para mil millones de personas serían unas 225 mil tarjetas y 0,4 GW, y para un millón, unas 225 tarjetas. Como comparación, a principios de 2026 Epoch AI estimó que en el mundo trabajaban para la inteligencia digital más de 15 millones de equivalentes de tarjetas H100, que necesitaban más de 10 GW de potencia. Es una simplificación: la persona usuaria de ejemplo hace un uso moderado, y el trabajo intensivo, los modelos más grandes y las imágenes necesitan muchas veces más.

No damos un costo por persona para millones de personas: a esa escala cambiarían el hardware, los precios y la forma de mantener el servicio, por lo que esa cifra sería una conjetura. El cálculo del 29.10.2026 solo dice que, bajo nuestros supuestos, la infraestructura propia puede llegar a ser más barata que una API confidencial con entre algo más de diez mil y varias decenas de miles de personas activas.

Más información: [whitepaper de Suveria, capítulo 7](../whitepaper-suveria.md#s7).

## Por qué calculamos en dólares

Daremos los precios de los servicios en dólares, porque en esa moneda se compra la capacidad de cómputo. Queremos aceptar pagos también en otras monedas, al tipo de cambio que se muestre en la factura. Llevamos la contabilidad de la fundación en eslotis.

Más información: [whitepaper de los principios de la fundación, apartado 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Pago anticipado, devolución y redondeo

- **Pago anticipado.** Introduces una cantidad y exactamente esa cantidad llega a tu saldo, independientemente del método de pago. Los pagos anticipados han de estar en una cuenta bancaria separada; no cubrimos con ellos los costos de la fundación antes de prestar el servicio.
- **Límite.** Al ingresar dinero, fijas cuánto quieres gastar como máximo. El límite ha de actuar como una frontera, no como una advertencia después de los hechos. Es un requisito por construir y comprobar, no una función en funcionamiento.
- **Devolución.** El saldo sin usar ha de poder recuperarse en cualquier momento, con el objetivo de hacerlo con un solo botón; el reglamento definirá el plazo de devolución, sus posibles costos, el ingreso mínimo y los demás detalles. Tras cancelar la cuenta o cerrar el servicio, el saldo se devuelve automáticamente por la misma vía. El saldo no reclamado no pasa al presupuesto de la fundación.
- **Redondeo.** Al crear una cuenta preguntamos si quieres redondear cada factura al dólar entero siguiente o a un equivalente aproximado en la moneda local; la diferencia pasa como donación al presupuesto común. Preguntamos en vez de marcar la opción por alguien, y la decisión se puede cambiar en cualquier momento con un solo ajuste.

La factura muestra por separado la tarifa del servicio y el importe de la donación. El reglamento, que prepararemos antes de aceptar el primer pago anticipado, definirá el plazo de devolución, el ingreso mínimo y los demás detalles.

Más información: [whitepaper de los principios de la fundación, apartado 3.2](../whitepaper-zasady-fundacji.md#s3-2) y [apartado 3.3](../whitepaper-zasady-fundacji.md#s3-3); [whitepaper de Suveria, apartado 8.3](../whitepaper-suveria.md#s8-3).

## Cómo se compara con las suscripciones

El precio de una suscripción en las plataformas comerciales suele reunir en un solo importe el costo del uso con el mantenimiento de las cuentas gratuitas, el marketing, la gestión y las ganancias de los inversores, sin que la persona usuaria vea la parte de cada componente. El manifiesto plantea la hipótesis de que, sin ese recargo oculto, ya con un número relativamente pequeño de participantes habituales, la infraestructura compartida puede ofrecer más capacidad de cómputo e inteligencia digital por cada dólar gastado que los servicios cerrados, con una privacidad basada en protecciones verificables.

Estado de la hipótesis al 29 de octubre de 2026: el cálculo nos acerca a ella, pero no la confirma. El procesamiento con confidencialidad declarada ya está disponible en listas públicas de precios, por lo que un grupo pequeño puede empezar con él a precio de costo, y bajo nuestros supuestos la infraestructura propia puede llegar a ser más barata con entre algo más de diez mil y varias decenas de miles de personas activas. No competimos en precio con planes de 100–200 USD que, con un trabajo intensivo con agentes, ofrecen el equivalente a miles de dólares a los precios de catálogo de las API. Proponemos facturar el uso real con una privacidad que se pueda verificar.

Más información: [manifiesto, apartado 2.4](../manifest.md#s2-4); [whitepaper de Suveria, apartado 8.1](../whitepaper-suveria.md#s8-1).

## Qué cambiará el cálculo

Actualizamos el cálculo con cada cambio importante de precios y después de cada prueba, y conservamos las versiones anteriores. Serán decisivas tres cosas que comprobaremos en las pruebas:

- si la confidencialidad de esos servicios supera una verificación independiente;
- si la calidad de los modelos disponibles es suficiente para las tareas por las que las personas vendrán a Suveria;
- cuál es el perfil real del tráfico.

Queremos desarrollar la infraestructura por pasos: primero, una API confidencial y un entorno privado en máquinas confidenciales; después, alquilar máquinas confidenciales propias; luego, comprar hardware para un centro de datos externo; y en un horizonte lejano, si demuestra una ventaja, un edificio propio. Cada paso se justifica con datos medidos y una ficha de decisión con el costo completo, los riesgos y las condiciones para dar marcha atrás. Hoy calculamos la compra de un servidor solo como una estimación, no como una oferta.

Más información: [whitepaper de Suveria, apartado 8.1](../whitepaper-suveria.md#s8-1) y [apartado 8.2](../whitepaper-suveria.md#s8-2).

## Lee y dinos qué piensas

Encontrarás el cálculo completo con la tabla de variantes y las fuentes de los precios en el [whitepaper de Suveria](../whitepaper-suveria.md#s8), y las reglas de facturación, pagos anticipados y devoluciones, en el [whitepaper de los principios de la fundación](../whitepaper-zasady-fundacji.md#s3). Si algo en las cifras o los supuestos no te cuadra, selecciona ese fragmento del documento y usa el botón «Tengo un comentario» o escribe a salve@novusignis.org.
