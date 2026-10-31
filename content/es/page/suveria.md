---
tytul: Qué es Suveria
opis: El espacio privado para trabajar con la inteligencia digital que diseña la fundación: qué ha de permitir, frente a qué ha de proteger y en qué etapa se encuentra hoy
grupa: suveria
kolejnosc: 1
menu: Qué es Suveria
---
# Qué es Suveria

Esta página explica brevemente qué ha de ser Suveria, para quién se crea y en qué etapa se encuentra. En cada parte encontrarás un enlace al whitepaper de Suveria, por si quieres saber más.

Suveria ha de ser un espacio privado en internet en el que cada persona converse con la inteligencia digital, trabaje con sus propios materiales y vuelva a pensamientos anteriores, como en su propia casa con la puerta cerrada. Lo diseña la Fundación Novus Ignis pensando en personas de cualquier lugar del mundo.

Hoy Suveria es un proyecto. Se crea para que se pueda conversar con la inteligencia digital sobre la salud, las relaciones, el trabajo, el dinero y los planes de vida sin temor a que un conocimiento tan cercano de una persona llegue a monetizarse o a usarse para influir en ella. Dirigimos la primera versión a las personas para quienes la privacidad verificable es un motivo de elección.

Más información: [whitepaper de Suveria, capítulo 1](../whitepaper-suveria.md#s1).

## Qué queremos que sea posible

En Suveria queremos que se pueda:

- conversar sobre asuntos personales y profesionales, viendo dónde se procesa la conversación y quién puede verla;
- trabajar con documentos y archivos propios, guardar los resultados y trasladarlos a otro lugar en formatos abiertos;
- guardar las conversaciones, los archivos y la memoria del asistente, cifrados con una clave bajo tu control, principalmente en dispositivos propios;
- con el propio consentimiento, usar la memoria de conversaciones anteriores y construir un Canon Personal, es decir, un conjunto de principios y valores propios;
- elegir una forma de trabajar, desde un modelo en el propio dispositivo hasta un entorno confidencial en un servidor, sabiendo frente a qué protege cada una;
- pagar por el uso real, con un límite de gasto fijado por cada persona;
- pulir un pensamiento en privado y después aportarlo conscientemente a la conversación común en Omniforum, el espacio público de conversación y decisiones.

Desde el primer día ha de ofrecer la tranquilidad de sentirse en casa. También queremos permitir el traslado de notas propias y archivos de conversaciones desde otros servicios de inteligencia digital. Usar Suveria no equivale a consentir el uso de las conversaciones para entrenar modelos.

Más información: [whitepaper de Suveria, capítulo 1](../whitepaper-suveria.md#s1).

## Frente a qué protege y qué falta todavía

La protección ha de basarse en salvaguardas que puedan comprobarse de forma independiente, y no en la confianza en la fundación, tampoco en nosotros como personas que atienden la infraestructura. A día de hoy no se ha realizado ninguna comprobación de ese tipo.

Comparamos varias formas de trabajar, porque cada una protege frente a algo distinto:

- **Un modelo en tu dispositivo.** La conversación no sale del teléfono ni de la computadora, salvo que el asistente use integraciones con servicios en la red; importan el estado del dispositivo, los permisos de la aplicación y quién tiene acceso físico a él.
- **Un entorno confidencial en servidores.** El servidor tiene una zona aislada por hardware a la que ni siquiera puede acceder su administrador; allí el modelo lee el contenido. El hardware ha de confirmarlo con una firma digital (es la atestación: una confirmación de qué software se ejecuta en una máquina remota y en qué modo de protección). Para ello hay que confiar en el fabricante del procesador. Es la variante a la que aspiramos.
- **Una API confidencial de un proveedor externo.** Una API es la conexión por la que nuestra aplicación envía la conversación a un modelo de otro proveedor. Lo más probable es que la primera versión use una API confidencial; si antes de ponerla en marcha reunimos fondos suficientes para alquilar nuestros propios servidores en un entorno confidencial, puede funcionar en ellos desde el principio. Al empezar, la confidencialidad es aquí una declaración del proveedor que comprobaremos; hasta que las pruebas den un resultado positivo, marcamos esta variante como protección declarada, y no confidencial.
- **Una API normal del proveedor del modelo.** El proveedor tiene acceso al contenido; esta no es la variante predeterminada de la Suveria privada.

La computación confidencial no repara una computadora infectada ni protege frente a cualquier persona con acceso físico al servidor. Ninguna variante recibe la etiqueta «privacidad plena» antes de que se compruebe la configuración concreta. En cada conversación ha de verse en qué variante trabajas, y cambiar de variante requiere tu decisión consciente.

Más información: [whitepaper de Suveria, capítulo 2](../whitepaper-suveria.md#s2) y [apartado 2.3](../whitepaper-suveria.md#s2-3). Mira también: [Privacidad y seguridad](suveria-prywatnosc.md).

## Modelos

La base del proyecto son los modelos abiertos que se pueden ejecutar por cuenta propia. Al elegir un modelo tenemos en cuenta, entre otras cosas, la calidad en muchos idiomas, la fiabilidad, la licencia, el costo y la posibilidad de ejecutarlo en la arquitectura de protección requerida.

Anunciamos con antelación el cambio o la retirada de un modelo, y el historial de conversaciones se queda contigo: puedes elegir un modelo sucesor, exportar los datos o dejar de trabajar. El momento del cambio de modelo ha de ser visible en la conversación.

Más información: [whitepaper de Suveria, capítulo 6](../whitepaper-suveria.md#s6).

## Cuánto cuesta

El manifiesto plantea la hipótesis de que la infraestructura compartida puede ofrecer más capacidad de cómputo e inteligencia digital por cada dólar que los servicios cerrados. El whitepaper lo calcula con fecha del 29 de octubre de 2026: con el perfil de uso adoptado, una API confidencial con confidencialidad declarada cuesta unos 0,70–1,25 USD por persona al mes solo por el cómputo. A esto se suma el costo fijo del entorno privado, que tiene más peso cuando hay pocas personas: con 30 participantes, unos 6–11 USD por persona al mes.

Es una estimación sobre el papel, y no la tarifa de Suveria: el cálculo no incluye el trabajo de las personas, las revisiones de seguridad, los pagos ni una reserva para fallos. Estado de la hipótesis a esa fecha: el cálculo nos acerca a ella, pero no la confirma.

Más información: [whitepaper de Suveria, capítulo 8](../whitepaper-suveria.md#s8). Mira también: [Cuánto cuesta](suveria-koszty.md).

## Estado del trabajo

El whitepaper lleva un registro de resultados. Su estado a 29 de octubre de 2026: todavía no hemos realizado ninguna de las pruebas descritas, no hemos alquilado GPU ni hemos ejecutado un modelo en Suveria. Planeamos la primera medición en una sola GPU confidencial con un modelo más pequeño.

La prueba más importante: un equipo con permisos de operador intenta leer las conversaciones de cuentas de prueba en las que se han ocultado cadenas secretas de caracteres. Si alguien las extrae, incluidos nosotros, la prueba ha fallado.

Queremos realizar las pruebas de forma abierta. Si te dedicas a la seguridad, la criptografía, la infraestructura o las aplicaciones, o quieres examinar el proyecto con una mirada crítica, escribe a salve@novusignis.org con el asunto «[Dołącz] Próby Suverii».

Más información: [whitepaper de Suveria, capítulo 9](../whitepaper-suveria.md#s9) y [apartado 8.2](../whitepaper-suveria.md#s8-2).

## Por qué Suveria es un camino y no un fin

El manifiesto lo dice claramente:

> Hoy Suveria es nuestro mejor camino hacia el trabajo privado con la inteligencia digital, y no un fin en sí mismo. Si los modelos llegan a caber en el propio dispositivo o surge una forma mejor de protección, parte de ese camino dejará de ser necesaria, y lo consideraremos una buena noticia.

Más información: [manifiesto, apartado 3.1](../manifest.md#s3-1).

## Lee y dinos qué piensas

Encontrarás la descripción completa, con la tabla de variantes de protección, el cálculo de costos y la lista de asuntos por resolver, en el [whitepaper de Suveria](../whitepaper-suveria.md). Si algo te hace pensar o te parece erróneo, selecciona ese fragmento del documento y usa el botón «Tengo un comentario», o escribe a salve@novusignis.org.
