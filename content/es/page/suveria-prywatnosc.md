---
tytul: Privacidad y seguridad de Suveria
opis: Frente a quién ha de proteger Suveria las conversaciones, cómo viaja un mensaje por el sistema, quién tiene las claves y cómo comprobaremos si la protección funciona
grupa: suveria
kolejnosc: 2
menu: Privacidad y seguridad
---
# Privacidad y seguridad de Suveria

Esta página es para quienes quieren saber en qué ha de consistir la protección de la privacidad en Suveria antes de confiarle sus conversaciones. Profundiza en la página [Qué es Suveria](suveria.md) y cada sección enlaza con el whitepaper.

Un principio ordena el conjunto: la privacidad no puede basarse en la confianza en las buenas intenciones de la fundación ni de quienes administran los servidores, sino en protecciones cuyo funcionamiento se pueda verificar de forma independiente. El manifiesto lo expresa así: «Toda promesa de seguridad debe tener su prueba en el código y en el silicio, y no solo en nuestras palabras». Tus propios dispositivos han de ser el lugar principal donde se guarden las conversaciones, y no creamos accesos ocultos a los contenidos privados.

Hoy Suveria es un proyecto. Todo lo que sigue describe cómo ha de funcionar; aún no hemos realizado ninguna de las pruebas que han de confirmarlo.

Más información: [manifiesto, apartado 2.2](../manifest.md#s2-2) y [apartado 3.1](../manifest.md#s3-1).

## Frente a quién ha de proteger y frente a quién no

Protegemos el contenido de las conversaciones y los archivos, el historial y la memoria del asistente, las claves (es decir, cadenas secretas de caracteres que abren los datos cifrados), los datos de facturación y los metadatos, es decir, información sobre la conexión misma: su hora, la dirección de red y el tamaño de la solicitud.

Un entorno confidencial es una parte del servidor aislada por hardware, en la que ni siquiera quien lo administra puede mirar. La atestación ha de confirmar si esto es realmente así: es una confirmación firmada por el hardware de qué software funciona en el servidor y en qué modo de protección. Una API confidencial es un entorno así en un proveedor externo, al que se conecta nuestra aplicación (una API es una conexión entre programas). La tabla describe el funcionamiento previsto, aún sin comprobar en una prueba:

| Frente a quién ha de proteger | Modelo en tu dispositivo | Entorno confidencial en servidores | API confidencial de un proveedor externo |
| --- | --- | --- | --- |
| Quien administra los servidores del proveedor | no aplica: procesamiento en el dispositivo | ha de proteger: aislamiento por hardware | declaración del proveedor, por verificar |
| Quien observa la red | no aplica sin red; el tráfico de las integraciones requiere evaluación | protección parcial: contenido cifrado, los metadatos requieren medidas aparte | protección parcial, si la clave de conexión está vinculada a la atestación |
| Persona con acceso físico al servidor | no aplica; lo que cuenta es el acceso al dispositivo | no protege: en un centro de datos ajeno, el proveedor tiene acceso; en hardware propio, control físico visible | no protege: el proveedor tiene acceso |
| Fundación | no aplica: la fundación no participa en el procesamiento | ha de proteger: el aislamiento también nos abarca y tú tienes las claves para guardar los datos | ha de proteger el contenido: la pasarela, es decir, nuestra parte que factura las solicitudes, sin acceso al contenido; mostraremos dónde termina el cifrado antes del piloto |

Leyenda: «ha de proteger» es la protección prevista; «protección parcial» protege el contenido, pero no todo lo que lo rodea; «no protege» expresa directamente un límite; y «declaración del proveedor, por verificar» significa que no confirmamos la protección hasta haberla verificado por nuestra cuenta. Quien administra los servidores del proveedor gestiona aquellos en los que funciona el modelo; quien observa la red ve el tráfico entre tu dispositivo y el servidor, pero el contenido está cifrado en tránsito; una persona con acceso físico puede abrir la carcasa del servidor; la fundación somos nosotros como operador del servicio.

Conviene conocer tres límites desde el principio. La computación confidencial no repara un teléfono ni una computadora infectados. No protege frente a cualquiera que tenga acceso físico al servidor: en 2025, un equipo de investigación construyó por menos de mil dólares un dispositivo que, con acceso físico al servidor, permite falsificar la confirmación del hardware. La protección en los servidores también se apoya en las claves del fabricante del procesador, que debe ser honesto.

Más información: [whitepaper de Suveria, capítulo 2](../whitepaper-suveria.md#s2) y [apartado 2.3](../whitepaper-suveria.md#s2-3).

## Cómo viaja un mensaje por el sistema

Suveria ha de constar de una aplicación en tu dispositivo, una pasarela (nuestra parte del sistema, que factura las solicitudes y controla el límite de gasto), un entorno confidencial con el modelo, almacenamiento de copias cifradas y un intermediario opcional que oculta tu dirección.

En la variante objetivo, cada mensaje ha de seguir este recorrido:

1. La aplicación descarga la descripción de la versión aprobada y comprueba la atestación del servidor.
2. Compara esa confirmación con una política pública. La clave con la que cifra el mensaje debe estar vinculada a esa confirmación.
3. Solo tras una comprobación satisfactoria establece una conexión cifrada. Una discrepancia detiene el envío de datos; pasar a otra variante requiere que elijas conscientemente.
4. El entorno procesa la solicitud con acceso limitado a la red y las herramientas, devuelve el resultado y elimina los datos de trabajo según la política publicada.
5. La conversación o la memoria solo se guarda en la medida que elijas.

La atestación ayuda a determinar qué se ha ejecutado, pero por sí sola no demuestra que ese código sea seguro; hacen falta revisiones del código y la posibilidad de verificarlo de forma independiente. Antes del piloto mostraremos en la aplicación dónde termina el cifrado controlado por tu dispositivo y si la pasarela ve el contenido.

Actuamos con especial cautela cuando conectas fuentes con mensajes de otras personas, por ejemplo un buzón de correo. Un mensaje ajeno puede contener instrucciones ocultas que intentan inducir al modelo a revelar la memoria privada. Por eso el asistente no puede enviar mensajes, abrir direcciones de red ni modificar el Canon Personal (tu conjunto de principios y valores) por su cuenta sin la confirmación de una persona.

Al poner en marcha el servicio, publicaremos una lista de todos los tipos de datos sobre el funcionamiento del servicio que recopilamos, con su finalidad y plazo de conservación. No recopilamos datos fuera de esa lista.

Más información: [whitepaper de Suveria, capítulo 3](../whitepaper-suveria.md#s3).

## Tus claves

Las claves de los contenedores privados, es decir, conjuntos de datos cifrados, permanecen bajo tu control. La fundación no guarda las claves ni partes de ellas, por lo que no puede recuperar el acceso por ti ni entregar tus datos. Recuperar la cuenta con el operador no desbloquea el contenido.

Perder todas las copias de la clave puede significar perder los datos para siempre. Por eso consideramos métodos de recuperación que se pueden combinar: un segundo dispositivo con acceso, una clave escrita en papel o guardada en un gestor de contraseñas, una clave de hardware o dividir la clave entre varias personas de confianza, ninguna de las cuales puede leer los datos por sí sola. Para empezar recomendamos un segundo dispositivo y la clave escrita en papel. Comprobamos cada mecanismo mediante una prueba de restauración de datos.

Más información: [whitepaper de Suveria, apartado 2.2](../whitepaper-suveria.md#s2-2).

## Lo que no se ve, pero revela información: el ritmo de transmisión

La respuesta te llega en paquetes, es decir, porciones de datos. El cifrado oculta su contenido, pero no su longitud ni su ritmo. Es un canal lateral: la información se filtra por la forma de transmitirla, no por el contenido. Las investigaciones de 2024–2025 mostraron que quien observa la red puede reconstruir a partir de ello el tema y, a veces, el contenido de la conversación. Por eso, en el modo confidencial queremos enviar la respuesta en porciones de tamaño constante y a un ritmo constante; esto tiene un pequeño costo en latencia y capacidad de transmisión.

Más información: [whitepaper de Suveria, capítulo 3](../whitepaper-suveria.md#s3).

## Versiones que se pueden verificar

La confianza en el software no ha de depender de una sola persona ni únicamente de la fundación. Cualquiera puede compilar la aplicación por su cuenta a partir del código publicado y comprobar que el resultado es idéntico al que instala. Al menos dos partes independientes de fuera de la fundación han de reproducir la versión y confirmar públicamente la coincidencia; hasta que las encontremos, marcamos la versión como no confirmada por terceros.

Diseñamos la protección completa para la aplicación instalada. En el navegador, el operador entrega cada vez el código que verifica el servidor, por lo que la versión de navegador describirá con claridad su menor nivel de protección.

Más información: [whitepaper de Suveria, capítulo 3](../whitepaper-suveria.md#s3).

## Varias tarjetas gráficas

El modelo que queremos ejecutar no cabe en una sola tarjeta gráfica, por lo que los datos también circulan entre tarjetas. Hay que comprobar la protección tanto de las propias tarjetas como de las conexiones entre ellas; la etiqueta comercial «secure» no sustituye esa comprobación. Solo comparamos la oferta de un proveedor después de una prueba con nuestra propia aplicación.

Más información: [whitepaper de Suveria, capítulo 5](../whitepaper-suveria.md#s5).

## Cómo comprobaremos si funciona

La prueba más importante: un equipo con facultades de operador fuera del entorno confidencial (pasarela, discos, red, registros) intenta leer las conversaciones de cuentas de prueba en las que se han ocultado cadenas secretas de caracteres. Si alguien las extrae, incluso nosotros, la prueba ha fallado.

Antes de llamar confidencial a cualquier versión, documentaremos, entre otras cosas, la atestación correcta, la negativa a enviar datos tras sustituir el código o la clave, la ausencia de contenido en los registros y la eliminación y recuperación. Los resultados, también los fallidos, se incorporan al registro de resultados. Estado al 29 de octubre de 2026: aún no hemos realizado ninguna de las pruebas descritas.

Queremos realizar las pruebas abiertamente. Si trabajas en seguridad, criptografía, infraestructura o aplicaciones, o quieres examinar el proyecto con una mirada crítica, escribe a salve@novusignis.org con el asunto «[Dołącz] Próby Suverii».

Más información: [whitepaper de Suveria, capítulo 9](../whitepaper-suveria.md#s9).

## Lee y dinos qué piensas

Encontrarás la comparación completa de variantes y amenazas, las protecciones de la aplicación y la lista de cuestiones por resolver en el [whitepaper de Suveria](../whitepaper-suveria.md). Si algo te plantea dudas o te parece incorrecto, selecciona el fragmento del documento y usa el botón «Tengo un comentario» o escribe a salve@novusignis.org.
