# Suveria: trabajo privado con la inteligencia digital

Versión del 11 de noviembre de 2026. Este documento desarrolla los principios del manifiesto relativos a Suveria: cómo queremos proteger la privacidad, cómo ha de funcionar el trabajo con la inteligencia digital, cuánto cuesta y cómo lo comprobaremos. La arquitectura descrita es un proyecto. Mencionar una tecnología existente o la documentación de un proveedor no significa que la hayamos puesto en marcha en Suveria. Añadimos los resultados de nuestras pruebas en el capítulo 9, siempre con la fecha, la versión de la configuración y el alcance de la medición.

*Traducción realizada por inteligencia digital a partir del original polaco del 8 de noviembre de 2026. Si las versiones difieren, prevalece el texto polaco.*

## 1. Qué es Suveria y para qué se crea

Suveria ha de ser un espacio privado en internet en el que una persona conversa con la inteligencia digital, trabaja con sus propios materiales y vuelve a pensamientos anteriores, como en su propia casa con la puerta cerrada. La diseña la Fundación Novus Ignis, de Poznań, cuyos valores describe el [manifiesto](manifest.md), pensando en personas de cualquier lugar del mundo. Se basa en modelos abiertos de inteligencia digital, y queremos poner nuestro propio software a disposición como bien público digital de código abierto.

Suveria nace porque confiamos cada vez más a las conversaciones con la inteligencia digital: preguntas sobre la salud, las relaciones, el trabajo, el dinero y los planes de vida. En muchos servicios populares, el contenido de esas conversaciones llega a los servidores del proveedor, que puede leerlo, y su protección depende de las reglas del proveedor y de la confianza en él. Queremos que se pueda hablar de los asuntos más importantes sin temor a que un conocimiento tan cercano de una persona llegue a monetizarse o a usarse para influir en ella. También queremos que cada persona pague por lo que realmente usa, vea qué está pagando y fije por sí misma el límite de su gasto.

En Suveria queremos que se pueda:

- conversar con la inteligencia digital sobre asuntos personales y profesionales, viendo dónde se procesa la conversación y quién puede verla;
- trabajar con documentos y archivos propios, y guardar los resultados y llevarlos a otro lugar en formatos abiertos;
- almacenar las conversaciones, los archivos y la memoria del asistente ante todo en los propios dispositivos, cifrados con una clave que queda bajo el control de la persona usuaria;
- con el propio consentimiento, usar la memoria de conversaciones anteriores, volver a las razones de decisiones pasadas y construir un Canon Personal (*Canon Personalis*), es decir, un conjunto de principios y valores propios;
- elegir la forma de trabajar, desde un modelo en el propio dispositivo hasta un entorno confidencial en un servidor, con información clara sobre aquello frente a lo que protege cada una;
- pagar por el uso real, con un límite de gasto que fija cada persona;
- madurar una idea en privado y después aportarla conscientemente a la conversación común en OmniForum.

Dirigimos la primera versión a las personas para quienes la privacidad verificable es la razón de su elección.

Queremos que ya el primer día en Suveria dé una tranquila sensación de estar en casa, en un taller privado que se va acondicionando al propio ritmo. La persona usuaria podrá contarle al asistente sus asuntos y objetivos; también queremos permitir traer a Suveria las propias notas y los archivos de conversaciones anteriores con otros servicios de inteligencia digital. Ese archivo ha de permanecer cifrado y ordenado en el dispositivo de la persona usuaria, y al modelo remoto solo ha de llegar la parte elegida para la pregunta en curso (capítulo 3).

Medimos el valor del servicio por si ayuda a alcanzar el objetivo, preservar la privacidad y tomar decisiones con autonomía. Las condiciones han de ser claras y fáciles de consultar, y la persona usuaria ha de controlar su gasto, poder exportar sus propios materiales y marcharse.

La privacidad plena, también frente a nosotros como personas que operan la infraestructura, es el objetivo al que subordinamos el diseño. La protección ha de basarse en salvaguardas que puedan verificarse de forma independiente, y no en la confianza en la fundación. Por eso cada versión describe en concreto qué se protege, frente a quién, en qué condiciones y qué lagunas quedan.

El punto de partida es una conversación de texto con un solo modelo y el trabajo con un documento elegido, con un nivel de protección descrito con claridad, un límite de gasto y la exportación del resultado. Las siguientes posibilidades, como la memoria, la búsqueda, las integraciones y la ejecución de acciones, reciben cada una un ámbito de permisos propio. Una sola interfaz cómoda puede reunir varios modos de trabajo si la persona ve adónde van los datos y qué reglas se aplican antes de enviarlos.

Qué utilizará la primera versión depende de cuántos fondos reúna la fundación antes de ponerla en marcha. Lo más probable es la API confidencial de un proveedor externo; estos servicios están disponibles hoy en EE. UU., y su confidencialidad es al principio una declaración del proveedor que vamos a verificar. Si hay fondos suficientes para alquilar servidores propios en un entorno confidencial, la primera versión puede funcionar en ellos desde el principio. Hasta que las pruebas del capítulo 9 den un resultado positivo, marcamos cada una de estas variantes como protección declarada, y no confidencial. El capítulo 2 describe la protección objetivo. Antes de poner en marcha el piloto describiremos qué se deriva de ello para la protección de los datos personales de las personas de Europa.

Usar Suveria no supone consentir el uso de las conversaciones para entrenar modelos. Los contenidos de las personas usuarias pasan a los materiales de investigación únicamente con un consentimiento aparte y consciente, y los demás materiales proceden del acervo público de la fundación y de otras fuentes con una base clara de uso, como describe el [whitepaper de materiales y benchmark](whitepaper-materialy-i-benchmark.md).

Suveria complementa a OmniForum, el espacio común de conversación y decisión: una ofrece un taller privado; la otra, una tribuna pública. Los valores de los que nacen ambos proyectos los describe el manifiesto de la fundación. A continuación mostramos sucesivamente:

- qué protegemos y frente a qué, dónde están los datos y las claves (capítulo 2);
- cómo viaja un mensaje del dispositivo al modelo y cómo comprobarlo (3);
- cómo limitamos los abusos sin leer conversaciones privadas (4);
- cómo funciona el cómputo en varias GPU (5);
- qué modelos, memoria y herramientas planeamos (6);
- cuánta capacidad de cómputo se necesita, desde 30 personas hasta toda la humanidad (7);
- cuánto cuesta, en un cálculo fechado (8);
- cómo comprobaremos si las promesas funcionan: pruebas de aceptación y registro de resultados (9).

## 2. Qué protegemos y frente a qué

Protegemos el contenido de las conversaciones y los archivos, el historial y la memoria, las claves, los datos de facturación y los metadatos, por ejemplo la hora de conexión, la dirección de red y el tamaño de la solicitud. Cada uno de estos ámbitos requiere medidas distintas.

El cuadro siguiente muestra frente a quién protege cada una de las cinco variantes de trabajo descritas en el apartado 2.3. La protección en las variantes de servidor se basa en la atestación, es decir, una confirmación firmada por el hardware de qué software se ejecuta en la máquina remota y en qué modo de protección. Hemos rellenado las celdas a partir de los capítulos siguientes de este documento; «declaración del proveedor» significa que no confirmamos la protección hasta haberla verificado por nuestra cuenta.

| Frente a quién | Modelo local en un dispositivo sin conexión a la red | Modelo local en un dispositivo conectado a la red | Procesamiento en un entorno confidencial en servidores | API confidencial de un proveedor externo | API externa del proveedor del modelo |
| --- | --- | --- | --- | --- | --- |
| Administrador del proveedor | no aplica: procesamiento en el dispositivo | no aplica al modelo en sí; con integraciones, depende de los servicios elegidos | protege: aislamiento por hardware, en el que no puede mirar el administrador del servidor | declaración del proveedor, por verificar | no protege: el proveedor tiene acceso al contenido |
| Otro cliente en la misma máquina | no aplica | no aplica | protege: el aislamiento abarca a otros clientes | declaración del proveedor, por verificar | depende del proveedor: la separación de clientes la garantiza su software, sin aislamiento por hardware |
| Observador de la red | no aplica: no hay tráfico de red | protección parcial: el tráfico de red de las integraciones requiere evaluación | protección parcial: contenido cifrado en tránsito, los metadatos (hora, dirección, tamaño y ritmo de los paquetes) requieren medidas aparte (capítulo 3) | protección parcial: como en el entorno confidencial, si la clave de conexión está vinculada a la atestación | protección parcial: contenido cifrado en tránsito, metadatos como en la columna anterior |
| Persona con acceso físico al servidor | no aplica al servidor; lo que cuenta es el acceso físico al dispositivo | no aplica al servidor; lo que cuenta es el acceso físico al dispositivo | no protege: en un centro de datos ajeno el acceso lo tiene el proveedor; con hardware propio, control físico visible | no protege: el acceso lo tiene el proveedor | no protege: el proveedor tiene acceso al contenido de todos modos |
| Fundación | no aplica: la fundación no participa en el procesamiento | no aplica: la fundación no participa en el procesamiento | protege: el aislamiento nos abarca también a nosotros como operador, las claves de lo almacenado las tiene la persona usuaria | ha de proteger el contenido: la pasarela factura las solicitudes sin ver el contenido; dónde termina el cifrado lo mostraremos antes del piloto (capítulo 3) | ha de proteger el contenido frente a nosotros: facturación sin ver el contenido; el proveedor lo ve |
| Fabricante del procesador | depende de la confianza en el hardware del dispositivo | depende de la confianza en el hardware del dispositivo | no protege: la atestación se basa en las claves del fabricante, que tiene que ser honesto | no protege: como en la columna anterior | irrelevante frente al acceso del proveedor al contenido |

La computación confidencial cambia el costo de un ataque: en lugar del acceso remoto de un administrador, hace falta una intervención física en el hardware.

A continuación describimos cómo ha de funcionar la variante objetivo con un entorno confidencial propio; en qué se diferencian las demás variantes lo muestra la tabla del apartado 2.3. Qué significa esto en la práctica, en los sucesivos tramos del camino que recorre un mensaje:

- **En el dispositivo de la persona usuaria** el texto es legible, porque es ella quien lo escribe y lo lee. Lo protegen una aplicación que solo pide los permisos necesarios, las actualizaciones y la prudencia con las copias de seguridad. No podremos protegerlo si en el teléfono o la computadora se ejecuta software malicioso.
- **De camino al servidor** el mensaje va cifrado de forma que solo pueda leerlo el lugar de procesamiento verificado. Antes de enviarlo, la aplicación comprueba si al otro lado se ejecuta exactamente el software que hemos publicado.
- **En el servidor** el modelo tiene que leer el contenido para responder, así que lo hace en un entorno de hardware cerrado en el que no pueden mirar ni el administrador del servidor ni otros clientes. Comprobamos si ese aislamiento abarca el procesador, las GPU, la memoria y las conexiones entre ellos.
- **En el almacenamiento** el historial de conversaciones y la memoria del asistente están cifrados con una clave que tiene la persona usuaria. Comprobamos las copias, la recuperación del acceso y el borrado.
- **En la operación del servicio** la facturación, el diagnóstico y los informes de errores funcionan sin el contenido de las conversaciones, y cada tipo de dato recopilado es público (capítulo 3).
- **Con herramientas externas**, cuando el asistente tiene que hacer algo fuera de Suveria, por ejemplo buscar información en internet, envía solo aquello para lo que la persona usuaria ha dado su consentimiento y muestra adónde.

La computación confidencial no repara la computadora infectada de la persona usuaria. Tampoco protege frente a cualquiera que tenga acceso físico al servidor: en 2025, un equipo de investigación mostró que un dispositivo conectado al bus de memoria, construido con piezas de menos de mil dólares, permite extraer las claves de atestación en las soluciones de Intel y AMD y, con ello, falsificar la atestación también en la computación confidencial de NVIDIA, y los fabricantes de procesadores consideran que estos ataques quedan fuera del alcance de su protección.[^teefail] Quedan también las dependencias de los fabricantes de hardware, de la corrección de la criptografía, del código de la aplicación y del proceso de actualización. El proveedor puede negar el servicio incluso cuando no es capaz de leer el contenido. Por eso el modelo de amenazas ha de distinguir el acceso al contenido, la inferencia a partir de metadatos, la alteración del funcionamiento y la interrupción del servicio, y para cada variante indicar quién tiene que ser honesto para que la protección funcione.

Mientras usemos centros de datos ajenos, el acceso físico al hardware lo tiene el proveedor y no podemos comprobarlo; lo decimos en cada variante. Con hardware propio (pasos 3–4 del apartado 8.2) queremos hacer visible ese acceso mediante:

- un inventario de dispositivos;
- el control de entradas;
- precintos con un patrón aleatorio y sensores de apertura de la carcasa;
- un registro de trabajos;
- cámaras de observadores independientes, con una imagen en la que se vea el valor actual de un generador público de aleatoriedad firmado con la clave de la máquina;
- y, a más largo plazo, una sala de servidores que cualquiera pueda ver.

El mantenimiento y la sustitución de piezas se realizan como procedimientos anunciados y públicos. El control físico visible reduce el riesgo y permite detectar muchos sucesos, pero no demuestra toda la historia de la máquina ni la ausencia de manipulación antes de la entrega, y ataques similares al descrito más arriba pueden llevar a falsificar las evidencias de atestación. Por eso, tras abrir la carcasa, sustituir una pieza, un reinicio no planificado u otro suceso sospechoso, suspendemos el procesamiento de contenidos privados en esa máquina. Cambiamos las claves de sesión y de aplicación, pero una nueva atestación no restablece por sí sola la confianza si la sospecha afecta a la base de la atestación por hardware; las condiciones y las evidencias para volver a admitir la máquina las describimos de antemano. Las claves que cifran los datos de las personas usuarias tienen una protección y una recuperación aparte, así que este procedimiento no priva a las personas de su acervo privado.

### 2.1. Dispositivos propios y servidores opcionales

El lugar principal de almacenamiento de las conversaciones privadas, los archivos y la memoria han de ser los dispositivos de la persona usuaria, en contenedores cifrados, es decir, conjuntos de datos cuyo contenido se lee con la clave correspondiente. Es el enfoque local-first: los datos se guardan primero en el dispositivo, y los servidores pueden apoyar las copias de seguridad y la sincronización.[^local-first] Los materiales guardados han de seguir disponibles también después de dejar de usar los servicios de la fundación; las tareas que requieren un modelo remoto dependen de la disponibilidad del servicio de cómputo elegido.

El almacenamiento opcional en servidores elegidos sirve para las copias de seguridad y para conciliar los cambios entre dispositivos. Ciframos el contenido en el dispositivo antes de enviarlo, de modo que el operador que guarda la copia reciba solo datos cifrados, sin la clave para leerlos. La persona usuaria elige el proveedor de almacenamiento y los dispositivos autorizados para la lectura. Por separado limitamos la exposición de metadatos, como la hora y el tamaño de la copia transferida.

### 2.2. Claves y recuperación del acceso

Las claves de los contenedores privados quedan bajo el control de la persona usuaria. El procedimiento de recuperación indica con claridad si el acceso lo restablece un segundo dispositivo, una clave de recuperación conservada u otro mecanismo elegido conscientemente, y a quién le da la posibilidad de leer. Recuperar la cuenta ante el operador no desbloquea el contenido del contenedor. Perder todas las copias de la clave y las posibilidades de recuperación puede significar la pérdida permanente de los datos; por eso comprobamos el mecanismo elegido con una prueba de restauración de datos y lo describimos en unas instrucciones comprensibles.

Estudiamos varias formas de recuperación, que pueden combinarse: un segundo dispositivo que ya tiene acceso; una clave de recuperación anotada en papel o guardada en un gestor de contraseñas; una llave de seguridad física; el reparto de la clave entre varias personas de confianza, de las que, por ejemplo, dos cualesquiera de tres pueden restablecer juntas el acceso, mientras que ninguna puede leer los datos por sí sola. La fundación no guarda claves ni partes de ellas, así que no puede recuperar el acceso en nombre de la persona usuaria ni entregar sus datos.

Para empezar recomendamos un segundo dispositivo y una clave anotada en papel; el reparto de la clave entre personas de confianza es una opción para quien lo desee.

### 2.3. Variantes de protección

Queremos comparar cinco variantes de trabajo, porque cada una protege frente a algo distinto:

| Variante | Dónde se realiza el procesamiento | Qué hay que evaluar |
| --- | --- | --- |
| Modelo local en un dispositivo sin conexión a la red | En el dispositivo de la persona usuaria | El estado del dispositivo, el acceso físico, los soportes y las copias de los datos |
| Modelo local en un dispositivo conectado a la red | En local y, con integraciones, también en los servicios elegidos | Los permisos de la aplicación, las actualizaciones, el tráfico de red y el alcance de los datos transmitidos a las integraciones |
| Procesamiento en un entorno confidencial en servidores | En un entorno remoto cuya configuración confirma la atestación | La verificación del entorno, el acceso de los administradores y el acceso físico al hardware, la protección de la transmisión y del procesamiento, los metadatos y las claves |
| API confidencial de un proveedor externo | En el entorno confidencial del proveedor, cuya configuración ha de confirmar la atestación | Si la clave de conexión está vinculada a la atestación, si la atestación abarca el procesador y la GPU, si se puede vincular una solicitud concreta con una máquina concreta, quién tiene acceso físico al hardware, la conservación de los datos y la jurisdicción; hasta nuestra propia verificación, tratamos la confidencialidad como una declaración del proveedor |
| API externa del proveedor del modelo | En el proveedor externo | Las condiciones del proveedor, el acceso al contenido, la conservación y la jurisdicción; no trasladamos a esta variante las promesas de ejecución confidencial |

La verificación independiente del servidor requiere una aplicación instalada. En el navegador, el código que comprueba el servidor lo entrega cada vez el operador; por eso marcamos esta vía como menos protegida.

Un dispositivo conectado a la red puede tener más puntos de ataque que un entorno de servidor aislado, así que la ubicación del cómputo por sí sola no determina la seguridad. Ninguna variante recibe la etiqueta «privacidad plena» antes de que se haya comprobado la configuración concreta. En cada conversación, la persona usuaria ve en qué variante trabaja, y cambiar de variante requiere su decisión consciente. Una clave propia para una API externa sirve para facturar el acceso, pero no garantiza la confidencialidad frente al proveedor. Esta variante no es la predeterminada de la Suveria privada, y antes de enviar el contenido mostramos si el proveedor puede usarlo para entrenar modelos y cuánto tiempo lo conserva.

También analizamos una dirección que todavía no figura en esta tabla: un enjambre de confianza. El modelo funcionaría entonces en el hardware de varias personas que se conocen y confían entre sí, por ejemplo una familia, un grupo de amistades o una pequeña comunidad, y cada una de ellas aportaría algo de la capacidad de cómputo de su computadora. La privacidad de esta variante se basa en la confianza en esas personas, y no en la técnica, porque sus computadoras ven los contenidos procesados, y así es precisamente como queremos describirla. Es una idea que apenas estamos analizando, pero es uno de los caminos que queremos estudiar.

Un servidor seguro no protegerá un texto leído desde un teléfono comprometido, y un teléfono más seguro no reparará el servidor; por eso diseñamos la aplicación junto con la protección del dispositivo. Queremos que la aplicación de Suveria funcione sin los servicios de Google, por ejemplo en el sistema GrapheneOS, que esté disponible también fuera de la tienda Google Play y que tenga versiones con compilación reproducible: cualquiera puede compilar la aplicación por su cuenta a partir del código fuente publicado y comprobar que ha obtenido un archivo idéntico al que instala. También planeamos salvaguardas en la propia aplicación: bloqueo de capturas de pantalla, un modo de teclado que no aprende del texto escrito, la exclusión de los datos privados de las copias en la nube, el contenido oculto de las notificaciones y el bloqueo de la aplicación. En el sitio web de la fundación prepararemos una guía para proteger los propios dispositivos en tres niveles: desde los ajustes básicos y las actualizaciones, pasando por un aislamiento más fuerte del trabajo y de las claves, hasta configuraciones probadas para personas con los requisitos más exigentes, como Qubes OS en una computadora con firmware abierto. Usar Suveria no requiere comprar el hardware indicado, y el nombre del sistema no es una certificación de todo el dispositivo.

En cada conversación mostraremos una ficha de protección (*Charta Tutelae*): la lista de los elementos de los que depende la privacidad de esa conversación, cada uno en uno de tres estados:

- **Verificado por nosotros:** lo hemos comprobado por nuestra cuenta, con la fecha, la versión y una descripción de cómo lo hicimos.
- **Declarado por el proveedor:** el proveedor lo afirma, y todavía no lo hemos comprobado.
- **Sin protección:** esto no lo protege esta variante, por ejemplo la hora y la longitud de los mensajes, visibles para el proveedor de red, el acceso físico del proveedor al hardware o la jurisdicción en la que se encuentra el servidor.

El estado «verificado por nosotros» lleva la fecha de la última comprobación y caduca: tras un plazo fijado sin una nueva comprobación, vuelve al estado «declarado». Mostraremos aparte las rupturas de confianza conocidas, por ejemplo un incidente en el proveedor o un cambio de configuración no confirmado. La ficha es la misma para todo el mundo y no depende del precio, y una variante en la que aunque sea un solo elemento es solo declarado no lleva el nombre «privacidad plena». El cuadro del comienzo del capítulo 2 y la tabla de variantes de este apartado describen las variantes en general, mientras que la ficha mostrará el estado de esa conversación concreta.

## 3. El camino del dispositivo al modelo

Suveria ha de constar de varias partes:

- una aplicación en el dispositivo de la persona usuaria;
- una pasarela que factura las solicitudes y vigila el límite de gasto;
- un entorno confidencial con el modelo, propio o en un proveedor;
- el almacenamiento de copias cifradas;
- un intermediario opcional que oculta la dirección de la persona usuaria.

La pasarela ha de funcionar en una máquina confidencial. Antes del piloto mostraremos en la aplicación en qué punto termina el cifrado controlado por el dispositivo de la persona usuaria y si la pasarela ve el contenido, y en ese caso, que solo lo ve dentro del entorno confidencial.

El almacenamiento cifrado y el procesamiento confidencial requieren salvaguardas distintas. Un modelo que funciona en un servidor necesita para su tarea el contenido legible en un entorno de cómputo protegido; cifrar solo las copias de los archivos no protege esta etapa.[^apple-pcc] La aplicación comparte únicamente la parte elegida para un trabajo concreto, sin transmitir la clave de todo el contenedor privado. La descripción de la sesión indica dónde el contenido pasa a estar disponible para el cómputo, qué limita el acceso del operador y qué ocurre con los datos tras devolver el resultado.

Desarrollo propuesto de una sesión:

1. La aplicación descarga la descripción de la versión aprobada y comprueba la atestación, es decir, la confirmación criptográfica de determinadas propiedades del entorno en ejecución.
2. Comprueba que el hardware, el estado de protección y las mediciones del software se ajustan a una política pública. La clave del destinatario de los datos tiene que estar vinculada a esa confirmación.
3. Tras una comprobación satisfactoria, establece una conexión cifrada con el entorno aprobado. Una discrepancia detiene el envío de los datos; pasar a otra variante requiere una elección consciente.
4. El entorno procesa la solicitud con un acceso limitado a la red y a las herramientas, devuelve el resultado y borra los datos de trabajo según la política publicada.
5. La conversación o la memoria se guardan únicamente en el alcance que elija la persona usuaria.

La atestación ayuda a establecer qué se ha puesto en marcha, pero no demuestra por sí sola que ese código sea seguro. Hacen falta revisiones de código, la compilación reproducible del software a partir del código fuente (descrita en el apartado 2.3), un registro de versiones aprobadas y la posibilidad de una verificación independiente. La arquitectura Apple Private Cloud Compute es para nosotros una referencia de cómo vincular la protección con la transparencia en la publicación del software; no es una certificación de nuestro proyecto.[^apple-pcc]

Queremos proteger las versiones de modo que la confianza no dependa de una sola persona ni únicamente de la fundación:

- cada versión ha de poder compilarse de forma reproducible a partir del código fuente, y al menos dos partes independientes ajenas a la fundación la reproducen y confirman públicamente que la huella coincide; mientras no las encontremos, marcamos la versión como no confirmada por terceros;
- las huellas de las versiones aprobadas van a un registro público al que solo se pueden añadir entradas, y sus estados sucesivos los confirman testigos independientes;
- una nueva versión llega a los servidores tras la aprobación de varias personas, entre ellas al menos una ajena a la junta directiva;
- las claves necesarias para tratar los datos las recibe únicamente un entorno que haya superado la atestación.

Diseñamos la variante de protección completa para aplicaciones instaladas con versiones firmadas y verificables, protección contra la vuelta a una versión defectuosa y almacenamiento seguro de las claves, porque en el navegador el código que comprueba el servidor lo entrega cada vez el operador. La versión para navegador describe con claridad su nivel de protección más bajo. La compilación reproducible permite comparar una versión con el código, pero la evaluación del propio código y de la configuración sigue dependiendo de revisiones, auditorías y recompensas por errores notificados, y cada incidente pasa a un registro público.

Para limitar la exposición de la dirección de la persona usuaria, se puede estudiar una intermediación basada en Oblivious HTTP, que separa el conocimiento sobre el remitente y sobre el contenido de la solicitud bajo un modelo de confianza determinado.[^ohttp] La colusión entre intermediarios, la correlación del tráfico y los detalles de implementación siguen requiriendo evaluación; por eso no describimos el mero uso de este protocolo como anonimato pleno.

El cifrado y la computación confidencial no ocultan la longitud ni el ritmo de los paquetes en los que viaja la respuesta. Investigaciones de 2024–2025 mostraron que un observador de la red puede reconstruir a partir de ellos el tema y, a veces, el contenido de una conversación.[^weiss-keylogging][^whisper-leak] Por eso, en el modo confidencial queremos enviar la respuesta en tramas de tamaño fijo y a un ritmo constante, no compartir entre personas usuarias la caché de consultas y desactivar la decodificación especulativa. Estas medidas cuestan algo de latencia y de rendimiento; lo tendremos en cuenta en el cálculo.

También protegemos la infraestructura limitando lo que pueden hacer las distintas partes del sistema: límites de recursos, aislamiento de tareas y bloqueo predeterminado de las conexiones salientes desde el nodo que procesa la conversación. Ese bloqueo ha de formar parte del software cuya huella se ve en la atestación: modificarlo cambia la huella, así que la aplicación rechazará la conexión. Tratamos las reglas de red del proveedor como una segunda capa, y no como una garantía. Las acciones externas permitidas pasan por una capa de herramientas aparte, con permisos definidos por la persona usuaria. Antes del despliegue comprobaremos la eficacia de estos límites, la forma de detectar incidentes y el alcance mínimo necesario de metadatos. El objetivo es la seguridad de los recursos comunes preservando la confidencialidad del contenido de las conversaciones.

Somos especialmente prudentes cuando la persona usuaria conecta fuentes con mensajes de otras personas, por ejemplo un buzón de correo. Un mensaje ajeno puede contener instrucciones ocultas que intenten inducir al modelo a revelar la memoria privada. Por eso separamos los contenidos externos de las instrucciones de la persona usuaria: al ordenarlos, el asistente no puede por su cuenta enviar mensajes, abrir direcciones web ni modificar el Canon Personal sin la confirmación de una persona.

Todo lo que sabemos sobre el funcionamiento de Suveria puede saberlo cualquiera. Con la puesta en marcha del servicio publicaremos una lista de todos los tipos de datos que recopilamos sobre el funcionamiento del servicio, con su finalidad y su plazo de conservación, y los propios datos los pondremos a disposición en forma agregada: consumo de tokens, modelos utilizados, carga de las máquinas, tiempo de espera en la cola, fallos y costos. Todo el mundo los ve en el mismo lugar en el que los vemos nosotros. Antes de publicar los resúmenes comprobamos que no permitan reconocer el comportamiento de una persona concreta: fijamos un tamaño mínimo de grupo, un retraso de publicación y los datos que omitimos. No recopilamos datos fuera de la lista; si resultara lo contrario, lo tratamos como un incidente grave y lo describimos públicamente.

## 4. Limitar los abusos sin acceso a los contenidos privados

También aplicamos la protección de la dignidad a las personas a las que pueden afectar las consecuencias del uso de nuestras herramientas. Queremos prevenir los abusos sin leer conversaciones privadas: mediante los principios por los que se guía el propio asistente, los límites de permisos de las herramientas y de las conexiones de red, los límites de recursos y la protección contra la creación masiva de cuentas. No creamos accesos ocultos a los contenidos privados, porque debilitarían la protección de todos.

Se podrá crear una cuenta de varias formas, desde la totalmente privada (una clave en el propio dispositivo, sin dirección de correo electrónico) hasta la cómoda (inicio de sesión mediante un proveedor externo). Para cada forma mostraremos, antes de elegirla, quién fuera de la fundación se entera de la creación de la cuenta y qué datos ve, y qué ocurre si ese proveedor desaparece. La forma de crear la cuenta no influye en los derechos de cada participante; el derecho a voto en OmniForum es una credencial aparte que se añade a la cuenta.

Evaluamos por separado la privacidad y la limitación de los abusos. Diseñamos Suveria de modo que la fundación no tenga datos que pudiera entregar sobre una persona concreta: los contenidos están cifrados con las claves de la persona usuaria, los datos sobre el funcionamiento del servicio los recopilamos solo dentro del alcance público descrito en el capítulo 3, y limitamos los datos personales al mínimo que exige la ley para los pagos y la contabilidad; también publicamos su alcance. Si alguien nos exige los datos de una persona concreta, queremos poder responder con honestidad que, fuera de ese mínimo descrito públicamente, no los tenemos. Para cada salvaguarda contra los abusos describiremos qué datos necesita, cuánto tiempo los conservamos, qué consecuencias tiene para quien participa honestamente y cómo se puede impugnar un bloqueo erróneo.

Describiremos también cómo recibimos los avisos de personas que se consideran perjudicadas y qué podemos hacer entonces sin acceso al contenido de las conversaciones: por ejemplo, limitar los permisos de las herramientas o los recursos de la cuenta, revisar los datos de facturación y los metadatos en la medida en que los conservamos, o indicar a quien presenta el aviso dónde buscar ayuda. Las obligaciones legales del operador de un servicio así requieren un análisis aparte antes de la puesta en marcha.

Estas salvaguardas son objetivos y variantes por probar, y ninguna detectará todos los abusos. Para cada una indicaremos a qué amenazas responde, qué no detecta y qué se puede comprobar sin que el operador acceda a las conversaciones privadas. El resultado de esta evaluación determina las condiciones para ofrecer cada función.

Cuando una conversación trate de un peligro para la vida o la salud, el asistente ha de dar información sobre la ayuda disponible, por ejemplo los números de emergencia, sin enviar nada fuera del entorno privado.

### 4.1. Instrucciones públicas del asistente y una biblioteca común

El comportamiento del asistente lo determinan también su instrucción principal y su forma de trabajar: cómo divide una tarea en pasos, usa la memoria y comprueba las respuestas. En Suveria, la persona ha de poder leer siempre la instrucción completa de su asistente. La infraestructura común ha de ofrecer solo modelos y ajustes que superen las pruebas públicas del benchmark; por encima de ese mínimo, es la persona usuaria quien elige el estilo de trabajo, desde ordenar los pensamientos con calma hasta una conversación exigente en la que el asistente señala las lagunas del razonamiento. Queremos mantener una biblioteca abierta de instrucciones probadas, que los participantes mejoran en OmniForum y comprueban en el benchmark.

## 5. Cómputo en varias GPU

El modelo del capítulo 6 no cabe en una sola GPU, así que la protección hay que comprobarla también en las conexiones entre GPU: el bus PCIe une el procesador con las GPU, y NVLink y NVSwitch unen las GPU entre sí.

Cuando un modelo usa varias GPU, los datos circulan también entre ellas, así que la protección hay que comprobarla tanto en las propias GPU como en las conexiones. El nombre de la GPU no basta para contratar un servicio confidencial: hay que confirmar la máquina adecuada, el procesador, la topología de conexiones, el firmware, los controladores y el software de ejecución, y después comprobar su funcionamiento conjunto.[^nvidia-platformy]

En el modo Hopper Protected PCIe, descrito en la documentación de PPCIe v2, la red NVLink y NVSwitch forma parte de la zona de confianza del sistema, así que el cifrado de PCIe no implica el cifrado de cada conexión entre GPU.[^nvidia-ppcie-v2] La documentación de NVIDIA R595 describe para las GPU Blackwell un modo de computación confidencial en varias GPU, con cifrado de las conexiones NVLink y soporte de hasta ocho GPU en una sola máquina virtual confidencial.[^nvidia-blackwell] Es una base para comprobar la configuración, y no una demostración de que cualquier alquiler de GPU B200 incluya esta función. Las distintas versiones tienen distintas matrices de compatibilidad, así que no montamos la configuración con versiones elegidas arbitrariamente.

La solicitud de información al proveedor abarca:

- el modo de protección concreto y la posibilidad de realizar la atestación por cuenta propia;
- la exclusividad de los recursos necesarios y la región;
- el acceso de los administradores y el acceso físico al hardware;
- la conservación de los datos;
- el plazo de entrega y el costo total.

Comparamos una oferta solo después de una prueba con nuestra propia aplicación. La etiqueta comercial «secure» no sustituye esta información.

## 6. Modelo, memoria y herramientas

La base del proyecto son modelos abiertos que pueden ejecutarse por cuenta propia. Suveria ha de estar al alcance de personas de todo el mundo, en sus propias lenguas; por eso, al elegir un modelo, tenemos en cuenta la calidad en muchas lenguas, la comprensión de las intenciones, la fiabilidad, la licencia, el costo y la posibilidad de ejecutarlo en la arquitectura de protección requerida. Cuando surja la necesidad, junto al modelo general podemos ejecutar modelos que se manejen mejor con lenguas concretas. Los pesos abiertos permiten algunos usos, pero no determinan la apertura de los datos ni de todo el proceso de creación del modelo.[^osi]

El primer candidato es DeepSeek-V4.1-Flash, un modelo con licencia MIT, que permite usarlo también para prestar servicios.[^deepseek] Es grande, pero eficiente: el desarrollador indica 552 mil millones de parámetros en la parte principal, es decir, números ajustados durante el entrenamiento, y una memoria adicional Engram de 196 mil millones de parámetros, y en cada palabra sucesiva solo trabajan 8–16 mil millones de parámetros; por eso responde rápido y barato (cálculo en el capítulo 8). Sin embargo, todos los parámetros tienen que caber en la memoria de las GPU, así que hacen falta al menos cuatro GPU modernas. Los parámetros de este modelo ya están guardados en una forma compacta, con menos cifras para cada número; este tipo de almacenamiento se llama cuantización y reduce la memoria necesaria, pero puede rebajar la calidad, así que lo comprobamos en cada versión con nuestras propias tareas. También lo comparamos con modelos más pequeños: elegimos el más grande solo si realiza claramente mejor las tareas importantes para las personas.

El segundo candidato es Kimi K3.1 Pro, de la empresa Moonshot AI, lanzado el 23 de octubre de 2026. El desarrollador lo describe como una versión de Kimi K3 con entrenamiento adicional, con unos 3 billones de parámetros y un contexto de hasta un millón de tokens, y anuncia los pesos completos para antes del 4 de noviembre de 2026; la licencia aún no se ha anunciado.[^kimi-k31] Los datos detallados que usamos para la comparación proceden de la ficha del modelo predecesor: Kimi K3 tiene 2,8 billones de parámetros, de los que en cada token trabajan 104 mil millones, y una licencia propia, no aprobada por la Open Source Initiative.[^kimi-k3] En el índice de Artificial Analysis, en su versión del 28 de octubre de 2026, Kimi K3.1 Pro obtuvo 46 puntos frente a 32 de DeepSeek-V4.1-Flash, pero es varias veces más caro y más lento.[^aa] Los archivos de pesos de Kimi K3 ocupan unos 1,56 TB, y para ejecutarlo hace falta además memoria para el contexto y el cálculo, así que no decidimos si el modelo funcionará basándonos solo en la suma de la memoria de las GPU. La receta del motor SGLang describe una configuración verificada de Kimi K3 en ocho GPU B300; todavía no es una prueba de Kimi K3.1 ni de una configuración confidencial.[^spheron-kimi][^sglang-k3] Cuando se publiquen los pesos, comprobaremos su tamaño y formato, la licencia, las recetas de los motores, la capacidad en una configuración concreta y la disponibilidad en API confidenciales. Añadiremos el resultado con fecha como primera actualización de este documento, también si los pesos no se han publicado o las condiciones de la licencia resultan inadecuadas.

**Actualización del 9 de noviembre de 2026.** Los pesos de Kimi K3.1 Pro son públicos y están disponibles sin registro; el repositorio del desarrollador se creó el 2 de noviembre de 2026.[^kimi-k31-wagi] Ocupan unos 1,56 TB en 96 archivos. El modelo se entrenó desde el principio en un formato compacto: los pesos de los expertos están en formato MXFP4 y los demás en BF16. La ficha del modelo indica 2,8 billones de parámetros, de los que en cada token trabajan 104 mil millones, y un contexto de hasta 1.048.576 tokens; los «unos 3 billones» citados antes eran el nombre de la clase del modelo, no una cifra. La licencia es propia (Kimi K3.1-Pro License). Permite usar el modelo también para servicios, con dos condiciones: un acuerdo aparte con el desarrollador cuando la entidad que ofrece acceso al modelo como servicio supera los 20 millones de USD de ingresos en 12 meses, y el nombre del modelo visible en la interfaz con más de 100 millones de usuarios al mes o más de 20 millones de USD de ingresos al mes. La Open Source Initiative no la ha aprobado. Con la escala actual de la fundación, ninguna de estas condiciones nos afecta; es nuestra lectura del texto, no una opinión jurídica.[^kimi-k31-licencja] Los motores vLLM y SGLang tienen recetas para este modelo; la configuración más pequeña descrita es de ocho GPU de última generación (un nodo 8 × B300 o dos módulos GB300), y por ahora el soporte solo está en versiones de desarrollo de ambos motores.[^kimi-k31-silniki] Nadie ha publicado aún el rendimiento de una configuración así en uso normal, por lo que hoy no podemos calcular a cuántas personas atenderá una configuración. En API confidenciales encontramos este modelo el 9 de noviembre en un proveedor, marcado como experimental, a 4 USD por millón de tokens de entrada y 20 USD por millón de tokens de salida; aún no hemos comprobado la atestación de esta oferta.[^kimi-k31-poufne] En el índice de Artificial Analysis (versión 5.0.1, consultado el 9 de noviembre), Kimi K3.1 Pro tiene 46 puntos y DeepSeek-V4.1-Flash, 33.[^aa-2026-11] Conclusión de hoy: la licencia y el formato de los pesos no cierran el camino, pero el modelo necesita al menos ocho GPU, y su coste y su velocidad en la variante confidencial están por medir. DeepSeek-V4.1-Flash sigue siendo el primer candidato.

Anunciamos con antelación el cambio o la retirada de un modelo. El historial de conversaciones se queda con la persona usuaria: puede elegir un modelo sucesor, exportar los datos o dejar de trabajar. En la conversación ha de verse el momento del cambio de modelo, y trasladar el contexto privado al nuevo modelo requiere una decisión de la persona usuaria.

Publicaremos íntegramente, junto con cada versión, los principios según los cuales responde el asistente. El propio modelo también lleva consigo las elecciones de quien lo creó, por ejemplo temas que evita; las comprobamos en el benchmark y las describimos al elegir el modelo.

La memoria de conversaciones anteriores ha de funcionar con el consentimiento de la persona usuaria y ser editable de forma transparente. Distinguimos los mensajes originales, los resúmenes del modelo y la información confirmada por la persona usuaria. Se puede borrar o corregir cada entrada, consultar su procedencia y determinar en qué tareas se permite usarla. El asistente distingue claramente su propia sugerencia de la postura que la persona ha reconocido conscientemente como suya.

Ejecutar acciones requiere permisos concedidos para un fin y un plazo determinados. El contenido de una página o de un documento es material para analizar, y no una orden de cambiar esos permisos. Las acciones externas, los gastos, las publicaciones y los borrados requieren confirmaciones proporcionadas y un registro de acciones accesible para la persona usuaria.

### 6.1. El Telescopio del Pensamiento y el Canon Personal

La idea del Telescopio del Pensamiento (*Telescopium Mentis*) surgió de la ventana de Overton, un concepto que describe el abanico de ideas que en un momento dado se consideran aceptables en una sociedad. En una sola persona se trata del abanico de pensamientos que en un momento dado considera admisibles para sí. El Telescopio ha de ser esa ventana para una sola persona y solo para ella: permite ver el registro de las propias reflexiones y valores de distintos momentos y cómo fueron cambiando con el tiempo.

El Telescopio del Pensamiento ha de servir para volver al propio razonamiento: qué sabía entonces, qué quería y por qué cambié de opinión. También puede ayudar a contrastar acontecimientos elegidos por la persona usuaria, información sobre el mundo y sus propias acciones con su Canon Personal, es decir, el conjunto de principios y valores que ha puesto por escrito y reconoce como suyos. La comparación se refiere a una situación que la persona usuaria describe o señala por sí misma; es ella quien determina el material y el alcance. El modelo muestra las posibles conexiones junto con la fuente del principio invocado y la descripción del suceso, distinguiendo la información confirmada de la interpretación y la incertidumbre. La interpretación propuesta se puede corregir o rechazar, y las posturas anteriores las valoramos teniendo en cuenta su momento y su contexto.

La tensión detectada puede referirse al propio principio, a un conflicto de valores, a las condiciones del entorno, a las limitaciones de la persona o a una interpretación desacertada del modelo. La persona puede mantener el ideal y aceptar la incoherencia actual, precisar una convicción, plantearse un cambio en su actuación o en su entorno, o dejar la pregunta abierta. El Canon ha de ayudar a comprender las propias elecciones: no creamos puntuaciones de moralidad ni una clasificación pública de coherencia. La reflexión privada sigue siendo privada, y su registro no implica publicarla ni emitir un voto.

Empezaremos con prudencia. En la primera versión, el Telescopio del Pensamiento trabaja solo con una situación que la persona usuaria señala por sí misma, por ejemplo una decisión a la que quiere volver; no sigue su vida de forma continua. La persona usuaria decide con qué frecuencia lo usa, qué notas y recuerdos comparte y cuándo los borra. En esta prueba comprobamos si las conexiones mostradas son comprensibles, si dan sensación de dominio sobre las propias elecciones y si la herramienta no genera la presión de tener que justificarse constantemente. También consideramos un buen resultado que alguien, tras reflexionar, acepte que no siempre actúa de acuerdo con sus principios, o deje el asunto abierto: la herramienta ha de ayudar a comprenderse, y no forzar decisiones.

### 6.2. Formatos abiertos, portabilidad e interoperabilidad de las herramientas

Queremos desarrollar Suveria como un bien público digital, con código y documentación abiertos; el punto de referencia es el estándar de la Digital Public Goods Alliance.[^dpga] El formato de transferencia de datos tiene una descripción pública, una versión y reglas para conservar la información al cambiar de versión. En primer lugar usamos estándares abiertos existentes, y documentamos las ampliaciones necesarias.

La exportación incluye los originales elegidos, el historial, las fuentes y las conexiones, así como la distinción entre las palabras de la persona usuaria, la elaboración del modelo y el significado confirmado por la persona autora, y también la estructura del Canon Personal. El paquete descargado puede leerse sin una cuenta activa en Suveria, tras ser descifrado por una persona autorizada.

Las API, es decir, formas documentadas de comunicación entre programas, han de permitir trabajar con los materiales en otras herramientas, también en las que cada cual construya por su cuenta. La persona usuaria elige el alcance de los datos y las acciones permitidas, y puede retirar los permisos de una integración. Revocar un permiso detiene el acceso posterior; lo que ocurra con las copias transmitidas antes depende también de quien las recibe.

Un espacio privado puede servir también para trabajar en proyectos comunes. La persona usuaria elige los materiales que quiere entregar para su aceptación o publicación, y la herramienta ayuda a eliminar de ellos, en local, las claves de acceso, las contraseñas, los datos personales y la información sobre vulnerabilidades sin parchear. Usar recursos pagados de forma privada no requiere revelar las conversaciones de trabajo. En una tarea financiada con los recursos comunes de la fundación, el alcance del registro público, la elección de un seudónimo y la preparación de los materiales los fijan de antemano las [reglas de los talleres de la fundación](whitepaper-zasady-fundacji.md) (capítulo 11.1). A partir de las reflexiones en Suveria también se puede extraer conscientemente una sola pregunta o un argumento y publicarlo en OmniForum; ese paso, descrito en el manifiesto como Ceremonia Ignis (*Caerimonia Ignis*), requiere siempre una decisión aparte.

## 7. Escala: de 30 personas a toda la humanidad

El número de cuentas por sí solo no determina la infraestructura necesaria. Importan la actividad, la longitud de las preguntas y las respuestas, el número de sesiones simultáneas, el tiempo de espera aceptable y el costo de las herramientas. El ejemplo siguiente es un modelo de carga para una prueba, y no una previsión de demanda ni una oferta.

Supuestos: cada una de las N personas está activa a diario y hace 20 solicitudes al día, una solicitud media incluye 1500 tokens de entrada y 600 tokens de salida, y un mes tiene 30 días. Un token es una unidad de texto que procesa el modelo; su longitud depende de la lengua. En una carga real hay que añadir un contexto más largo, el procesamiento de documentos, los tokens de razonamiento y las llamadas auxiliares.

| Personas activas | Solicitudes al mes | Entrada al mes | Salida al mes | Generación media a lo largo del día | Pico horario en el escenario mundial, aprox. 1,51 × la media |
| --- | ---: | ---: | ---: | ---: | ---: |
| 30 | 18 000 | 27 millones de tokens | 10,8 millones de tokens | 4,2 tokens/s | 6,3 tokens/s |
| 100 | 60 000 | 90 millones | 36 millones | 13,9 tokens/s | 20,9 tokens/s |
| 1000 | 600 000 | 900 millones | 360 millones | 138,9 tokens/s | 209 tokens/s |
| 100 000 | 60 millones | 90 mil millones | 36 mil millones | 13 889 tokens/s | 20 921 tokens/s |
| 1 millón | 600 millones | 900 mil millones | 360 mil millones | 138 889 tokens/s | 209 208 tokens/s |
| mil millones | 600 mil millones | 900 billones | 360 billones | 138,9 millones de tokens/s | 209,2 millones de tokens/s |
| 10 mil millones | 6 billones | 9 mil billones | 3,6 mil billones | 1,39 mil millones de tokens/s | 2,09 mil millones de tokens/s |

Planeamos Suveria como un servicio mundial, disponible en muchas lenguas. No sabemos cómo se repartirán los participantes entre las zonas horarias, así que comparamos dos escenarios que verificará la medición. En el escenario mundial suponemos cuotas regionales proporcionales al número de personas usuarias de internet según la UIT para 2025 y la misma forma supuesta del día en cada zona: un pico vespertino y una noche tranquila.[^itu] Las zonas rellenan en parte los valles de las demás, así que el pico horario es de aprox. 1,51 × la media, y el tráfico mínimo, de aprox. 0,49 ×. En el escenario concentrado en una sola región, por ejemplo en Europa, el pico es de aprox. 1,87 × la media, y por la noche casi nada. Esta distribución puede darse también a gran escala; supone un peor aprovechamiento de la máquina propia y recurrir con más frecuencia a la API confidencial, o una espera más larga en el pico. Ambos valores se derivan de nuestros supuestos, y no de la observación de futuros participantes. Los picos breves dentro de una hora ha de suavizarlos una cola corta con tiempo de espera visible, y el tráfico que supere la capacidad de la máquina propia puede asumirlo la API confidencial; el tiempo de espera, incluidos sus percentiles 95 y 99, lo mediremos en el piloto, junto con el límite de la cola y el comportamiento cuando se agote. La prueba de carga abarcará también una llegada repentina de personas nuevas, por ejemplo cinco veces el tráfico medio. Se trata del rendimiento total de salida; no sustituye la medición de la latencia de una conversación individual ni el costo de procesar la entrada. La prueba debería reproducir la distribución de las sesiones, los contextos largos, los fallos y la cola, y no una única consulta cómoda.

El multiplicador de pico compara la hora de mayor carga con la media. Procede de un modelo del día dividido en 24 horas: desplazamos una misma forma del día entre ocho regiones y sumamos según las cuotas supuestas. Es un escenario de cálculo; no calcula el tiempo de espera de una consulta individual.

Para ver cómo queda este cálculo a escala mundial, hagamos un experimento mental. Si cada una de las 10 mil millones de personas usara Suveria como en el perfil adoptado, en el pico harían falta unos 2,1 mil millones de tokens de salida por segundo. Con el rendimiento medido para DeepSeek-V4.1-Flash, unos 930 tokens por segundo por GPU B200, eso supone unos 2,25 millones de GPU y, con unos 1,75 kW por GPU incluido el servidor (supuesto nuestro, sin medición), unos 4 GW de potencia. Para mil millones de personas son unas 225 000 GPU y 0,4 GW; para un millón, unas 225 GPU. A modo de comparación, Epoch AI estimó a comienzos de 2026 que la capacidad de cómputo instalada en el mundo para la inteligencia digital supera los 15 millones de equivalentes de GPU H100 y requiere más de 10 GW de potencia.[^epoch] Es una simplificación: el perfil adoptado es ligero, el trabajo intensivo, los modelos más grandes y las imágenes necesitan muchas veces más, y el hardware y los modelos cambian deprisa. Muestra, sin embargo, el orden de magnitud: la ayuda diaria de la inteligencia digital en este alcance para cada persona requeriría una capacidad menor que la que ya está en funcionamiento hoy en el mundo. Es un cálculo simplificado, y no una demostración de que esa infraestructura estaría disponible para este fin.

## 8. Costos y cálculo fechado

El costo mensual de una reserva fija puede expresarse, en primera aproximación, así: número de GPU × precio por hora de GPU × número de horas pagadas, más memoria, discos, transferencia, protección, supervisión, soporte, pagos e impuestos. Hay que comprobar cuáles de estas partidas incluye ya la oferta. Para un funcionamiento ininterrumpido, un mes tiene entre 672 y 744 horas; 730 horas es una aproximación media.

En el cálculo comparamos cinco variantes de costo: el modelo local, una instancia propia en hardware alquilado, una instancia propia en un entorno de computación confidencial, con protección declarada por el proveedor y por verificar, la API confidencial de un proveedor externo y una API externa normal. Las variantes de costo corresponden a las variantes de protección del apartado 2.3; el alquiler de una máquina sin confidencialidad lo mostramos solo como punto de referencia de precios, y no como variante de Suveria. El modelo local todavía no lo valoramos, porque el costo depende del dispositivo de la persona usuaria. Comparamos el mismo nivel de calidad, disponibilidad y protección. El umbral de rentabilidad es el costo del servicio completo dividido por la utilización real, y no el costo de las GPU dividido por el número de cuentas registradas. Una API externa facilita probar las necesidades de las personas usuarias, pero su proveedor tiene sus propias reglas de acceso a los datos, así que no le trasladamos las promesas de ejecución confidencial.

### 8.1. Cálculo fechado: situación a 29 de octubre de 2026

El manifiesto plantea la hipótesis de que, ya con un número relativamente pequeño de participantes habituales, una infraestructura común puede dar más capacidad de cómputo y de inteligencia digital por cada dólar que los servicios cerrados, con una protección de la privacidad basada en salvaguardas verificables. A continuación, su cálculo con los precios del 29 de octubre de 2026. Supuestos: el perfil de uso del capítulo 7 (20 solicitudes diarias de 600 tokens de salida cada una) y el escenario mundial (pico horario de aprox. 1,51 × la media), precios sin impuestos, 730 horas al mes para convertir los precios de alquiler. El número de personas por máquina indica cuántos participantes puede atender la máquina en el pico horario: rendimiento de salida por segundo × 86 400 / (20 × 600 × multiplicador de pico). El número admisible de personas lo determinará también el tiempo de espera de respuesta medido. Entre paréntesis damos el escenario concentrado en Europa (multiplicador de aprox. 1,87). Para DeepSeek-V4.1-Flash adoptamos la medición del proveedor Lambda en cuatro GPU B200: unos 3714 tokens de salida por segundo con 64 solicitudes simultáneas.[^lambda-v41] La medición se hizo con decodificación especulativa, que en el modo confidencial no queremos usar (capítulo 3). Según nuestra estimación de septiembre, el rendimiento puede ser entonces menor, incluso en torno a un 30 %, lo que eleva el costo por persona en una proporción similar. Para las GPU H200 y B300 no hay mediciones de este modelo; suponemos que cada conjunto de GPU con una copia del modelo (8 × H200 o la mitad de una máquina 8 × B300) alcanza el rendimiento de cuatro GPU B200. Es un supuesto optimista: la H200 es una generación más antigua, el modo confidencial puede ralentizar el trabajo y la medición de Lambda se refiere a solicitudes más largas que las de nuestro perfil. Por eso damos también una variante prudente con la mitad de ese rendimiento.

Los pesos del modelo ocupan unos 511 GB, y el motor vLLM recomienda unos 614 GB de memoria de GPU. Cuatro GPU H200 (564 GB) no bastan; por eso una copia en H200 necesita ocho GPU. La receta del desarrollador del motor para esta configuración estaba el 29 de octubre en proceso de verificación, y en las GPU H200 la conexión entre GPU (NVLink) no está cifrada por hardware, a diferencia de las B200 y B300.

| Variante | Confidencialidad | Costo mensual | Personas por máquina | Costo solo de cómputo por persona |
| --- | --- | ---: | ---: | ---: |
| API de DeepSeek | ninguna, el proveedor ve el contenido | según el uso | no aplica a una sola máquina; límites y disponibilidad del proveedor | 0,35–0,70 USD |
| API confidencial con DeepSeek-V4.1-Flash (Confidential AI, Tinfoil, Phala) | declarada por el proveedor, por verificar | según el uso | no aplica a una sola máquina; límites y disponibilidad del proveedor | 0,70–1,25 USD |
| API de Kimi K3.1 Pro (Moonshot) | ninguna | según el uso | no aplica a una sola máquina; límites y disponibilidad del proveedor | 5,40 USD |
| API confidencial con Kimi K3 (Phala, NEAR AI) | declarada por el proveedor, por verificar | según el uso | no aplica a una sola máquina; límites y disponibilidad del proveedor | 8,10–8,91 USD |
| Máquina confidencial alquilada 8 × H200 (Phala), DeepSeek, una copia del modelo | atestación del procesador y las GPU, por verificar | 23 506 USD con compromiso de 180 días, 32 266 USD bajo demanda | aprox. 17 750 (14 300), supuesto de capacidad | 1,32–1,82 USD (1,64–2,25) |
| Como arriba, variante prudente: la mitad del rendimiento | atestación del procesador y las GPU, por verificar | como arriba | aprox. 8900 (7150), supuesto de capacidad | 2,65–3,64 USD (3,29–4,51) |
| Máquina confidencial alquilada 8 × B300 (Phala), Kimi K3 | atestación del procesador y las GPU, por verificar | 45 552–47 888 USD | aprox. 4800–7600 (3900–6200), supuesto de capacidad | aprox. 6–10 USD (7,4–12,4) |
| 4 × B200 sin confidencialidad confirmada (Lambda), DeepSeek | no confirmada | 19 827 USD | aprox. 17 750 (14 300) | 1,12 USD (1,38) |
| 8 × B200 sin confidencialidad confirmada (Lambda), DeepSeek, dos copias de cuatro GPU cada una | no confirmada | 39 070 USD | aprox. 35 500 (28 700), supuesto de rendimiento de dos copias | 1,10 USD (1,36) |

De dónde salen estas cifras: precios de API según las tarifas de DeepSeek, Moonshot, Confidential AI, Tinfoil, Phala y NEAR AI;[^deepseek-cennik][^cai][^tinfoil][^phala-api][^near] precios de las máquinas confidenciales según la tarifa de Phala;[^phala-gpu] alquiler de B200 en Lambda a 6,79 USD por hora de GPU en una instancia de cuatro GPU y a 6,69 USD en una de ocho.[^lambda-cennik] La capacidad de Kimi la tomamos de mediciones de terceros para Kimi K3 en ocho GPU B300, que dan unos 1000–1600 tokens de salida por segundo.[^spheron-kimi] Los importes mensuales con compromiso no implican pagos mensuales: Phala exige pagar todo el periodo por adelantado, sin reembolso en caso de terminación anticipada, así que 180 días de una máquina 8 × H200 suponen un desembolso de 139 104 USD al hacer el pedido, y 180 días de una máquina 8 × B300, de 269 568 USD.[^phala-gpu]

Qué se deduce de ello:

- Para el perfil adoptado, los precios de las API con confidencialidad declarada son de unos 0,70–1,25 USD por persona al mes, desde un costo comparable al de una API normal hasta unas 3,6 veces su costo, según el proveedor y la hora de uso; el precio más bajo lo declara Confidential AI, y esa oferta también tenemos que verificarla. La API confidencial da capacidad flexible sin poner en marcha una máquina propia, aunque tiene sus propios límites, colas y fallos. Una máquina confidencial alquilada para DeepSeek, dimensionada para el pico, funciona en el escenario mundial de media a unos dos tercios de su capacidad y cuesta unos 1,32 USD por persona, es decir, más o menos lo mismo que las API confidenciales más caras y más que la más barata. En nuestro modelo horario, el primer nodo propio, con el excedente derivado a una API confidencial de 1,25 USD por persona, aparece en el punto comprobado de unas 20 000 personas activas; es un resultado de los supuestos adoptados, y no un umbral exacto, y con una API confidencial más barata la máquina alquilada no compensa a esta escala.
- El alquiler por horas de una máquina confidencial completa no da hoy flexibilidad para el pico vespertino: Phala exige al menos un día (8 × H200) o un mes (8 × B300), Confidential AI tres meses para 8 × B300 a 60 USD la hora, y VoltageGPU, que factura 8 × H200 por segundo a 64,62 USD la hora, no cubre con evidencias de atestación publicadas esta configuración ni los conmutadores NVSwitch.[^cai][^voltage] A esto se suma el tiempo de asignación de la máquina y de carga de los pesos.
- Para Kimi, el cálculo depende de la medición: la API confidencial cuesta unos 8–9 USD por persona, y una máquina propia 8 × B300 con plena utilización, unos 6 USD con la estimación de capacidad más alta y unos 9,5 USD con la más baja. Sale más barata que la API confidencial si una máquina atiende a más de unas 5100–5600 personas activas que usen este modelo; con la estimación de capacidad más baja (unas 4800 personas) no se consigue.

Compra de un servidor propio: un servidor Supermicro completo con ocho GPU B300 costaba en septiembre de 2026 unos 663 000 USD.[^supermicro] Estimamos así el costo mensual de esa compra:

| Partida | Importe mensual |
| --- | ---: |
| Amortización del servidor a cinco años | aprox. 11 000 USD |
| Amortización del servidor a cuatro años | aprox. 13 800 USD |
| Coubicación | aprox. 1900–3000 USD |
| Red, piezas y mantenimiento (estimación) | aprox. 1500 USD |
| Total | aprox. 14 000–18 000 USD |

En un servidor así caben dos copias de DeepSeek, que en el escenario mundial atenderán a unas 35 000 personas (en el europeo, a unas 28 000), a unos 0,41–0,52 USD por persona. Con estos supuestos, la compra sale más barata que una API confidencial de 1,11–1,25 USD a partir de unas 12 000–17 000 personas activas, y que la más barata declarada (0,70 USD), a partir de unas 21 000–26 000. El cálculo no incluye el costo completo de mantener y medir esta configuración; la compra requiere además un desembolso por adelantado, guardias de personas las 24 horas y una demanda estable durante años, y el acceso físico al hardware lo tiene entonces la fundación (capítulo 2). Son estimaciones nuestras, no ofertas.

- Las máquinas confidenciales con varias GPU están hoy disponibles públicamente en EE. UU. En la Unión Europea encontramos máquinas confidenciales con una sola GPU H100,[^azure-ncc] en las que no caben ni el DeepSeek completo ni Kimi. Privatemode (Edgeless Systems, Alemania) también ofrece una API confidencial con servidores en la Unión Europea, con una menor selección de modelos.[^privatemode] También es una declaración del proveedor, por verificar.
- Un directorio independiente que comprueba API confidenciales, en una observación del 29 de octubre de 2026 a las 14:00 UTC, no confirmó la verificación completa de ninguna de las 95 rutas comprobadas; lo que faltaba con más frecuencia era la evidencia de la identidad del programa en ejecución, del origen del código y de la vinculación de la solicitud con la máquina.[^katalog] Es un resultado de las evidencias disponibles, y no una demostración de que los servicios revelen contenidos. Hasta nuestra propia verificación, tratamos la confidencialidad de estos servicios como una declaración del proveedor.
- El cálculo abarca el cómputo. El entorno privado (pasarela, memoria, archivos) en una o dos máquinas confidenciales con cuatro procesadores virtuales y 8 GB de memoria cuesta en Phala unos 168 USD al mes por máquina, y el disco se factura aparte, unos 10 USD por 100 GB.[^phala-cvm] Si ese tamaño basta lo comprobaremos en el piloto. Con 170–340 USD al mes, con 30 personas son unos 6–11 USD por persona, y con 1000 personas, unas decenas de centavos. El cálculo no incluye el trabajo de las personas, las revisiones de seguridad, los pagos ni un margen para fallos.
- Las suscripciones populares cuestan unos 20 USD al mes, y el chat de DeepSeek es gratuito.[^abonamenty] Los planes de 100–200 USD dan, con un trabajo intensivo de agentes, el equivalente a miles de dólares a precios de tarifa de API;[^semianalysis] con esos planes no competimos en precio. Proponemos facturar el uso real con una privacidad que se puede verificar.

Estado de la hipótesis del manifiesto a 29 de octubre de 2026: el cálculo nos acerca a ella, pero no la confirma. El procesamiento con confidencialidad declarada y atestación ya está disponible en tarifas públicas y, con el perfil de uso adoptado, cuesta unos 0,70–1,25 USD por persona al mes, así que un grupo pequeño puede empezar con él a precio de costo, y con nuestros supuestos la infraestructura propia puede resultar más barata con entre algo más de diez mil y varias decenas de miles de personas activas. Lo decidirán tres cosas que comprobaremos en las pruebas del capítulo 9: si la confidencialidad de estos servicios supera una verificación independiente, si la calidad de los modelos disponibles basta para las tareas por las que la gente vendrá a Suveria y cuál es el perfil real del tráfico. Actualizamos el cálculo con cada cambio importante de precios y después de cada prueba, y conservamos las versiones anteriores.

### 8.2. Pasos de la infraestructura y fichas de decisión

Desarrollamos la infraestructura por pasos, cada uno de los cuales aporta a los participantes un valor propio, sin obligación de pasar al siguiente: primero la API confidencial y el entorno privado en máquinas confidenciales (si antes del arranque reunimos fondos suficientes, podemos empezar directamente por el paso siguiente), después el alquiler de máquinas confidenciales propias, más adelante la compra de hardware y su instalación en una sala de servidores externa y, a muy largo plazo, si demuestra ventajas, un edificio propio. Cada paso siguiente se justifica con datos medidos: el costo completo del servicio, el tráfico real, el tiempo de respuesta en el pico, la capacidad de mantener las salvaguardas y de gestionar los fallos y, en caso de compra, también la financiación de las reparaciones, la sustitución del hardware y las personas que asuman la responsabilidad. Alquilar una máquina propia puede tener sentido también cuando el modelo necesario no está disponible en una API confidencial o cuando queremos un control total sobre lo que se ejecuta.

Cada transición la describimos con una ficha de decisión: qué ganamos, el costo completo, los riesgos, las condiciones de inicio y de retirada, la forma de trasladar los datos y las claves y la conformidad con las [reglas de la reserva y de la puesta en marcha de los siguientes pilares](whitepaper-zasady-fundacji.md) (capítulo 8 del whitepaper de los principios de la fundación). Combinar una máquina propia con una API confidencial para los picos de tráfico solo lo admitimos cuando cada una de las vías tiene un nivel de protección aceptado; pasar a una variante más débil requiere una decisión aparte y consciente de la persona usuaria. La primera medición la planeamos en una sola GPU confidencial con un modelo más pequeño, y la siguiente en una máquina en la que quepa el modelo completo.

Ajustamos la capacidad al tráfico sin dimensionarlo todo para el pico más alto. Diseñamos una cola corta con tiempo de espera visible; su tiempo real, su límite y su comportamiento cuando se agote los mediremos en el piloto. La capacidad flexible para picos más largos la aporta en primer lugar la API confidencial, siempre que mantenga el nivel de protección aceptado, el consentimiento y el límite de gasto de la persona usuaria; cuando no existe esa vía, informamos con honestidad de la espera o de la falta de disponibilidad. El alquiler por horas tiene sentido para modelos que no están en una API confidencial o que en ella son claramente más caros, y solo allí donde el proveedor permite realmente poner en marcha y liberar máquinas confidenciales con rapidez. Queremos aprovechar la capacidad libre de la máquina propia en las horas más tranquilas para tareas de la fundación, como análisis para OmniForum; su valor a precios de API no es un ingreso para el presupuesto, así que esas tareas tienen su propio objetivo y presupuesto. Después del primer piloto queremos probar dos modos: «Conversación», para el trabajo habitual con el asistente, y «Sin prisa», para tareas que pueden esperar, por ejemplo la traducción de un documento. En el modo «Sin prisa» mostramos una ventana orientativa de inicio, una estimación del costo, un presupuesto máximo, la posibilidad de cancelar con la facturación del trabajo realizado y la misma información sobre la protección. Un precio más bajo para este trabajo solo es posible si se deriva de un método público de reparto de costos, sin contar dos veces el costo fijo.

### 8.3. Medición del uso sin el contenido de las conversaciones

Para facturar el uso real, medimos los recursos necesarios para realizar las tareas y describimos con claridad la participación en los costos fijos. El contador de facturación se limita a los datos imprescindibles para comprobar el costo, y el contenido de la conversación no es necesario para emitir la factura. En las pruebas comprobaremos la exactitud de la medición, la forma en que la persona usuaria puede controlarla, el alcance de los metadatos expuestos y el comportamiento del servicio al alcanzar el límite de gasto. Las reglas de la factura, el redondeo, los prepagos y los reembolsos las describe el [whitepaper de los principios de la fundación](whitepaper-zasady-fundacji.md).

El límite de gasto fijado por cada participante ha de funcionar como una frontera, y no como una advertencia a posteriori. Algunos proveedores facturan las solicitudes en curso solo cuando terminan, así que sus límites pueden superarse; así lo describe, por ejemplo, Tinfoil.[^tinfoil] Por eso diseñamos una reserva de saldo: antes de enviar una solicitud, la pasarela de Suveria aparta del saldo su costo máximo admisible, teniendo en cuenta otras solicitudes en curso, y limita el número de solicitudes paralelas y la longitud de la respuesta. Al terminar, facturamos el costo real y liberamos la reserva no utilizada. Es un requisito por construir y comprobar, no una función en funcionamiento.

## 9. Pruebas de aceptación y registro de resultados

Antes de calificar de confidencial cualquier versión, documentaremos como mínimo:

- una atestación correcta;
- la negativa a enviar datos tras sustituir el código o la clave;
- el aislamiento de las sesiones;
- las restricciones del administrador;
- la ausencia de contenidos en los logs, los volcados y la telemetría;
- la gestión de la caché;
- el borrado y la recuperación;
- el comportamiento tras un fallo;
- los límites de las herramientas;
- los costos bajo carga.

El resultado incluye la versión de la configuración y el escenario en el que intentamos vulnerar la protección.

Queremos que cada versión de Suveria supere todos los controles de evidencia de al menos un verificador independiente de servicios confidenciales: el hardware y el estado de las salvaguardas, la actualidad de la evidencia, la vinculación de la clave de conexión con el entorno protegido, la identidad del programa en ejecución, el origen del código y la vinculación de la solicitud con una máquina concreta, manteniendo la disponibilidad. Publicamos el resultado con la fecha de observación, la versión de los criterios y las evidencias para la versión, el modelo y la ruta de solicitud concretos, y describimos los vínculos del verificador junto con el resultado. No prometemos ningún puesto en ninguna clasificación. Superar la verificación significa alcanzar el control descrito en un momento dado, con limitaciones públicas, y no sustituye una auditoría ni nuestras propias pruebas.

Cuando pongamos en marcha nuestra propia variante confidencial, solicitaremos la inclusión de Suveria en cada directorio independiente que compruebe la confidencialidad de la ejecución de modelos y le facilitaremos un punto de acceso para comprobar la atestación; el primer ejemplo es confidentialinference.net (situación a 31 de octubre de 2026).[^confidentialinference] No prometemos la inclusión, porque la decide el directorio; prometemos la solicitud de inscripción, la respuesta a sus preguntas y la publicación del resultado, también si es malo, con su fecha. El directorio solo comprueba lo que ve desde fuera, normalmente la atestación y el canal de conexión; no sustituye una auditoría del código ni de la configuración, ni la evaluación de los canales laterales.

Las pruebas de almacenamiento y portabilidad incluyen:

- la restauración de una copia cifrada en otro dispositivo autorizado y la negativa a leerla sin la clave correcta;
- la pérdida de un dispositivo, la recuperación del acceso con el método elegido y una presentación clara de las consecuencias de perder todas las claves;
- la sincronización de cambios paralelos sin sobrescribir en silencio una de las versiones;
- la lectura de una exportación en una herramienta independiente sin cuenta en el operador original, comparando los originales, el historial, las fuentes y las conexiones;
- la limitación del alcance de una integración y la detención efectiva de su acceso posterior tras revocar el permiso.

Etapas:

1. una prueba de usabilidad con materiales no sensibles;
2. una prueba técnica de la protección;
3. un piloto limitado con condiciones claras;
4. el aumento gradual de la escala.

Antes del piloto fijaremos y publicaremos umbrales: el tiempo hasta la primera palabra de la respuesta, el costo de cómputo por persona con el perfil medido y la calidad del modelo según el [whitepaper de materiales y benchmark](whitepaper-materialy-i-benchmark.md). Consideraremos que el piloto ha tenido éxito cuando cumpla los tres.

Un cambio de modelo, de firmware o del método de inicio de sesión en la cuenta puede requerir una nueva cualificación, y una actualización no puede debilitar en silencio la protección acordada. Cada versión tiene una ficha pública:

- el ámbito de funcionamiento;
- las evidencias de las pruebas;
- las limitaciones conocidas;
- las personas responsables;
- los costos;
- la vía para notificar un problema;
- el plan de retirada.

La detección de una vulnerabilidad lleva a limitar la exposición, informar a las personas afectadas y aplicar una corrección verificable.

Queremos realizar las pruebas de forma abierta. Invitamos a personas que trabajan en seguridad, criptografía, infraestructura y aplicaciones, también a personas creadoras que acercan la tecnología a un público amplio, a diseñar con nosotros las comprobaciones y a intentar romper la protección en cuentas de prueba separadas con datos inventados. También invitamos a las voces críticas. No pagamos por promoción, y marcamos cada colaboración de acuerdo con el [registro de beneficios](whitepaper-zasady-fundacji.md) (capítulo 7 del whitepaper de los principios de la fundación). Los resultados, también los fallidos, van al registro de resultados. Si quieres participar, escribe a [salve@novusignis.org](mailto:salve@novusignis.org?subject=%5BDo%C5%82%C4%85cz%5D%20Pr%C3%B3by%20Suverii) con el asunto «[Dołącz] Próby Suverii».

La prueba más importante: un equipo con privilegios de operador fuera del entorno confidencial (pasarela, discos, red, logs) intenta leer las conversaciones de cuentas de prueba en las que se han ocultado cadenas de caracteres secretas. Si las extrae quien sea, también nosotros, la prueba ha fallado.

La primera versión de Suveria la pondremos a disposición de unas pocas personas que ayudan a configurarla. Si usa una API confidencial, su ficha de protección (apartado 2.3) dirá abiertamente que el modelo funciona en un proveedor externo, que la atestación la declara el proveedor y todavía no la hemos comprobado, y que los metadatos no están protegidos. Como las primeras personas también ayudan a operar el servicio, el primer resultado que publicaremos será la prueba más importante descrita más arriba, con una descripción de lo que consiguió el operador.

**Registro de resultados.** Situación a 29 de octubre de 2026: todavía no hemos realizado ninguna de las pruebas descritas, no hemos alquilado GPU y no hemos puesto en marcha ningún modelo en Suveria. Cada nuevo resultado lo añadimos aquí con la fecha, la configuración, el escenario y la conclusión, también cuando la prueba no sale bien.

Quedan por resolver:

- el primer modelo y un nivel de calidad aceptable;
- la verificación independiente de las API confidenciales y de las máquinas confidenciales, y su disponibilidad en jurisdicciones con una protección sólida de los datos personales, como la Unión Europea con el RGPD;
- el tiempo de respuesta;
- las reglas de las claves y de la memoria;
- el alcance mínimo de los datos de facturación;
- las obligaciones legales del operador ante los avisos de abuso;
- la forma de financiar la continuidad.

El [whitepaper de los principios de la fundación](whitepaper-zasady-fundacji.md) describe el presupuesto, la facturación y la rendición de cuentas, y el [whitepaper de materiales y benchmark](whitepaper-materialy-i-benchmark.md), la evaluación del comportamiento de los modelos.

Fundación Novus Ignis, Poznań, KRS 0001269575. Sitio web y manifiesto: novusignis.org. Comentarios: salve@novusignis.org.

## Notas

[^teefail]: [TEE.fail: Breaking Trusted Execution Environments via DDR5 Memory Bus Interposition](https://tee.fail/). Estudio de Georgia Tech, Purdue University y Synkhronix, publicado el 28 de octubre de 2025: extracción de las claves de atestación de Intel TDX y SGX y de AMD SEV-SNP mediante una conexión física al bus de memoria DDR5, con consecuencias para la computación confidencial de NVIDIA. Requiere acceso físico al servidor; Intel y AMD consideran que estos ataques quedan fuera del alcance de su protección. Comentario: [The Hacker News](https://thehackernews.com/2025/10/new-teefail-side-channel-attack.html). Consultado el 28 de octubre de 2026.

[^local-first]: [Kleppmann, Wiggins, van Hardenberg y McGranaghan (2019): Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/). Ensayo. Principios para conservar la copia principal en los dispositivos de la persona usuaria y sobre el papel de apoyo de los servidores, incluidas las copias cifradas.

[^apple-pcc]: [Apple: Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/). Descripción de la arquitectura. Ejemplo de cómo vincular la confidencialidad con el control del software y la transparencia del sistema.

[^ohttp]: [RFC 9458: Oblivious HTTP](https://www.rfc-editor.org/rfc/rfc9458.html). Especificación. Separación del conocimiento sobre el remitente y sobre la solicitud bajo un modelo de confianza determinado; no es anonimato pleno.

[^weiss-keylogging]: [Weiss, Ayzenshteyn, Amit y Mirsky (2024): What Was Your Prompt? A Remote Keylogging Attack on AI Assistants](https://www.usenix.org/conference/usenixsecurity24/presentation/weiss). Publicación científica (USENIX Security 2024; versión preliminar en arXiv 2403.09751). A partir de la longitud de los paquetes cifrados del flujo de respuesta, un observador de la red reconstruye el tema y, en parte, el contenido de las respuestas del asistente. Consultado el 30 de octubre de 2026.

[^whisper-leak]: [McDonald y Bar Or (2025): Whisper Leak: a side-channel attack on Large Language Models](https://arxiv.org/abs/2511.03675) y [comentario de Microsoft (7 de noviembre de 2025)](https://www.microsoft.com/en-us/security/blog/2025/11/07/whisper-leak-a-novel-side-channel-cyberattack-on-remote-language-models/). Publicación de investigación y descripción del fabricante. A partir del tamaño y el ritmo de los paquetes en un flujo de respuesta cifrado se puede reconocer el tema de la conversación; algunos proveedores han añadido un relleno aleatorio a los paquetes. Consultado el 30 de octubre de 2026.

[^nvidia-platformy]: [NVIDIA: plataformas compatibles con contenedores confidenciales](https://docs.nvidia.com/datacenter/cloud-native/confidential-containers/latest/supported-platforms.html). Documentación del fabricante. Requisitos de toda la configuración de procesador, GPU y software.

[^nvidia-ppcie-v2]: [NVIDIA: Protected PCIe v2, Introduction](https://docs.nvidia.com/attestation/attestation-client-tools-ppcie-sdk-cpp/latest/ppcie_introduction.html). Documentación del fabricante. En el modo PPCIe v2, la red NVLink y NVSwitch forma parte de la zona de confianza del sistema; la protección de PCIe no implica el cifrado de todo el tráfico entre GPU.

[^nvidia-blackwell]: [NVIDIA: Trusted Computing Solutions 595](https://docs.nvidia.com/595trd1-trusted-computing-solutions-release-notes.pdf). Documentación del fabricante. Modo de computación confidencial en varias GPU Blackwell, incluida la protección de las conexiones; requiere una configuración compatible.

[^osi]: [OSI: Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition). Definición. Los pesos abiertos no determinan si se cumple toda la definición de sistema abierto.

[^deepseek]: [DeepSeek-V4.1-Flash: ficha del modelo](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash). Documentación del desarrollador. Arquitectura, licencia MIT y capacidades declaradas del modelo; no es una medición del rendimiento de Suveria.

[^dpga]: [Digital Public Goods Alliance: standard](https://www.digitalpublicgoods.net/standard). Estándar. Criterios de evaluación de un bien público digital; una orientación de diseño no equivale a un reconocimiento obtenido de la DPGA.

[^lambda-cennik]: [Lambda: tarifas de instancias](https://lambda.ai/pricing). Tarifa del proveedor. NVIDIA B200 SXM6 180 GB: 6,79 USD por hora de GPU en una instancia de cuatro GPU y 6,69 USD en una de ocho; H100 SXM 80 GB: 3,99 USD; precios bajo demanda, sin impuestos, sin modo confidencial. Consultado el 29 de octubre de 2026.

[^lambda-v41]: [Lambda: DeepSeek-V4.1-Flash, resultados de la medición de rendimiento](https://lambda.ai/inference-models/deepseek-ai/deepseek-v4.1-flash). Medición del proveedor. 4 × B200, vLLM, paralelismo de tensores 4, decodificación especulativa, unos 8192 tokens de entrada y 1024 de salida por solicitud; con 64 solicitudes simultáneas, un total de 3713,9 tokens de salida por segundo y una media de 66,8 tokens por segundo por conversación. Sin fecha de medición. Consultado el 28 de octubre de 2026.

[^azure-ncc]: [Azure: precio de la máquina NCC40ads H100 v5](https://prices.azure.com/api/retail/prices?$filter=armSkuName%20eq%20%27Standard_NCC40ads_H100_v5%27%20and%20priceType%20eq%20%27Consumption%27) y [descripción de la serie](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/nccadsh100v5-series). Tarifa del proveedor. Máquina confidencial con una sola GPU H100 NVL 94 GB; de 6,98 USD la hora (East US 2) a 8,90 USD (West Europe), Linux, pago por uso. Consultado el 28 de octubre de 2026.

[^deepseek-cennik]: [DeepSeek: tarifas de la API (versión china)](https://api-docs.deepseek.com/zh-cn/quick_start/pricing). Tarifa del proveedor. Modelo deepseek-flash (V4.1-Flash-1017): entrada sin acierto en caché, 1 CNY fuera del pico y 2 CNY en el pico; salida, 4 y 8 CNY por millón de tokens. Conversión a USD según el [resumen de eesel](https://www.eesel.ai/blog/deepseek-v4-1-flash-pricing), fuente auxiliar. Consultado el 28 de octubre de 2026.

[^abonamenty]: Precios de las suscripciones: [ChatGPT Plus](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus), [Claude Pro](https://claude.com/pricing), [Google AI Pro](https://gemini.google/subscriptions/), [Kimi Plus (resumen de geotoolbox)](https://geotoolbox.ai/blog/kimi-pricing); el chat de DeepSeek es gratuito ([descripción](https://en.wikipedia.org/wiki/DeepSeek_(chatbot))). Precios mensuales en USD, sin impuestos; Kimi Plus, 19 USD. Consultado los días 28 y 29 de octubre de 2026.

[^kimi-k31]: [Moonshot: lanzamiento de Kimi K3.1 Pro](https://forum.moonshot.ai/t/kimi-k3-1-pro-has-launched-start-exploring-now/629) y [Kimi: descripción de K3.1 Pro (24 de octubre de 2026)](https://www.kimi.com/news/kimi-k3-1-pro). Documentación del desarrollador. Versión de Kimi K3 con entrenamiento adicional, unos 3 billones de parámetros, contexto de 1 millón de tokens, pesos anunciados para antes del 4 de noviembre de 2026; licencia no anunciada. Precios de la API según OpenRouter: 2 / 10 USD por millón de tokens.

[^kimi-k3]: [Kimi K3: ficha del modelo](https://huggingface.co/moonshotai/Kimi-K3). Documentación del desarrollador. 2,8 billones de parámetros, 104 mil millones activos, contexto de aprox. 1 millón, MXFP4, licencia Kimi K3 License.

[^spheron-kimi]: [Spheron: despliegue de Kimi K3 (19 de octubre de 2026)](https://www.spheron.network/blog/deploy-kimi-k3-gpu-cloud/). Guía del proveedor. Archivos de pesos de 1560,94 GB, configuraciones en las que cabe el modelo. Capacidad de unos 1000–1600 tokens por segundo en 8 × B300 según un resumen de mediciones de terceros del 29 de octubre de 2026; gran dispersión.

[^aa]: [Artificial Analysis: Kimi K3.1 Pro y DeepSeek V4.1 Flash 1017](https://artificialanalysis.ai/models/comparisons/kimi-k3-1-pro-vs-deepseek-v4-1-flash-1017). Comparación independiente. Índice v5 del 28 de octubre de 2026: 46 y 32; velocidad de unos 36 y 178 tokens por segundo. Consultado el 29 de octubre de 2026.

[^kimi-k31-wagi]: [Moonshot AI: Kimi K3.1 Pro, repositorio de pesos y ficha del modelo](https://huggingface.co/moonshotai/Kimi-K3.1-Pro). Documentación del desarrollador. 96 archivos safetensors, unos 1,56 TB; 2,8 billones de parámetros, 104 mil millones activos, 896 expertos, contexto de 1.048.576; MXFP4 para los pesos de los expertos. Consultado el 9 de noviembre de 2026.

[^kimi-k31-licencja]: [Kimi K3.1-Pro License](https://huggingface.co/moonshotai/Kimi-K3.1-Pro/blob/main/LICENSE) y [lista de licencias aprobadas por la Open Source Initiative](https://opensource.org/licenses). Texto de la licencia y registro de una organización independiente. Consultado el 9 de noviembre de 2026.

[^kimi-k31-silniki]: [vLLM: receta para Kimi K3.1 Pro](https://recipes.vllm.ai/moonshotai/Kimi-K3.1-Pro) y [SGLang: receta para Kimi K3.1 Pro](https://docs.sglang.io/cookbook/autoregressive/Moonshotai/Kimi-K3.1-Pro). Documentación de los motores. vLLM requiere la versión 0.34.0, aún no publicada; «Throughput was not tuned». Consultado el 9 de noviembre de 2026.

[^kimi-k31-poufne]: Listas públicas de modelos de los proveedores de API confidenciales, revisadas el 9 de noviembre de 2026; el resumen con las direcciones está en los registros de la fundación. El modelo en variante confidencial estaba en un proveedor; en otro estaba disponible sin entorno de ejecución de confianza.

[^aa-2026-11]: [Artificial Analysis: Kimi K3.1 Pro](https://artificialanalysis.ai/models/kimi-k3-1-pro) y [DeepSeek V4.1 Flash](https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017). Comparación independiente. Índice v5.0.1. Consultado el 9 de noviembre de 2026.

[^tinfoil]: [Tinfoil: tarifas](https://tinfoil.sh/pricing). Tarifa del proveedor. DeepSeek-V4.1-Flash: 0,65 USD de entrada y 1,45 USD de salida por millón de tokens; descripción de los límites de gasto. Consultado el 29 de octubre de 2026.

[^phala-api]: [Phala: modelos confidenciales](https://phala.com/confidential-ai-models). Tarifa del proveedor. DeepSeek V4.1 Flash 1017: 0,75 / 1,60 USD; Kimi K3: 3 / 15 USD por millón de tokens; atestación de la pasarela y confirmaciones de las respuestas según el proveedor. Consultado el 29 de octubre de 2026.

[^near]: [NEAR AI: tarifas](https://near.ai/pricing). Tarifa del proveedor. Kimi K3: 3,30 / 16,50 USD por millón de tokens; en la página principal figuran otros precios, discrepancia por aclarar. Consultado el 29 de octubre de 2026.

[^phala-gpu]: [Phala: GPU confidenciales](https://phala.com/gpu-tee) y [tarifas](https://cloud.phala.com/about/pricing). Tarifa del proveedor. 8 × H200: 44,20 USD la hora bajo demanda, 32,20 USD con compromiso de 180 días; 8 × B300: 65,60 USD (30 días), 62,40 USD (180 días); Intel TDX con computación confidencial de NVIDIA; sin máquinas en Europa. Consultado el 29 de octubre de 2026. El compromiso se paga por adelantado, sin reembolso en caso de terminación anticipada.

[^privatemode]: [Privatemode (Edgeless Systems)](https://www.privatemode.ai/). Oferta del proveedor. API confidencial con servidores en la Unión Europea y atestación remota; menor selección de modelos abiertos que en los proveedores de EE. UU.; no publica sus precios. Confidencialidad declarada por el proveedor, no verificada por nosotros. Consultado el 30 de octubre de 2026.

[^katalog]: [Confidential Inference Directory: metodología y observaciones](https://confidentialinference.net/attestation). Directorio independiente, patrocinado por una empresa que ofrece inferencia confidencial. 0 de 95 rutas verificadas de extremo a extremo en la observación del 29 de octubre de 2026, 14:00:19 UTC.

[^supermicro]: [Supermicro: servidor AS-8126GS-NB3RT-01-G2](https://store.supermicro.com/us_en/8u-gpu-gold-series-as-8126gs-nb3rt-01-g2.html) y [GPU Per Hour: precios de servidores NVIDIA](https://gpuperhour.com/blog/nvidia-gpu-prices). Oferta del fabricante y resumen de precios. Servidor completo con ocho GPU B300: 662 845,95 USD (21 de septiembre de 2026).

[^semianalysis]: [BigGo Finance sobre el análisis de SemiAnalysis (7 de octubre de 2026)](https://finance.biggo.com/news/173039423dab79be). Análisis sectorial. Un plan de 200 USD da, con trabajo intensivo, unos 12 000 USD a precios de tarifa de API; estimaciones de margen, no datos de la empresa.

[^sglang-k3]: [SGLang: receta para Kimi K3](https://github.com/sgl-project/sglang/blob/main/docs/cookbook/autoregressive/Moonshotai/Kimi-K3.mdx). Documentación del motor. Configuración verificada de Kimi K3 en 8 × B300; no se aplica a Kimi K3.1 ni al modo confidencial.

[^phala-cvm]: [Phala: tarifas de máquinas confidenciales](https://phala.com/pricing). Tarifa del proveedor. tdx.large (4 procesadores virtuales, 8 GB de memoria): 0,23 USD la hora; disco, 0,000139 USD por GB y hora. Consultado el 29 de octubre de 2026.

[^itu]: [ITU: Facts and Figures 2025, uso de internet](https://www.itu.int/itu-d/reports/statistics/2025/10/15/ff25-internet-use). Estadística internacional. Porcentaje de personas que usan internet en las regiones del mundo en 2025 (unos 6 mil millones de personas, el 74 % de la población); las cuotas regionales de nuestro cálculo son una aproximación: porcentaje × población de la región.

[^cai]: [Confidential AI: tarifas](https://confidential.ai/pricing). Tarifa del proveedor, precios del 26 de octubre de 2026. DeepSeek V4.1 Flash: 0,30 USD de entrada, 0,03 USD de entrada desde caché, 1,20 USD de salida por millón de tokens; máquina 8 × B300 a 60 USD la hora, mínimo tres meses, asignación en unos días. Confidencialidad declarada por el proveedor, no verificada por nosotros.

[^voltage]: [VoltageGPU: tarifas](https://voltagegpu.com/pricing) y [alcance de las evidencias](https://voltagegpu.com/). Tarifa y declaraciones del proveedor. 8 × H200 a 64,62 USD la hora con facturación por segundo; las evidencias publicadas no cubren la atestación de esta configuración ni de los conmutadores NVSwitch.

[^epoch]: [The Decoder sobre los datos de Epoch AI (8 de enero de 2026)](https://the-decoder.com/global-ai-compute-hits-15-million-h100-equivalents-epoch-ai-finds/) y [Epoch AI: AI Chip Users](https://epoch.ai/data/ai-chip-users). Recopilación de un centro de investigación independiente. Capacidad de cómputo instalada para la inteligencia digital de más de 15 millones de equivalentes de NVIDIA H100, con una demanda de más de 10 GW. Estimación, no medición.

[^confidentialinference]: [confidentialinference.net](https://confidentialinference.net): comparación de proveedores que ejecutan modelos en entornos de ejecución de confianza, con comprobaciones de atestación fechadas; sitio patrocinado por la empresa Enclava, con once proveedores en el momento de la consulta. Consultado el 31 de octubre de 2026.
