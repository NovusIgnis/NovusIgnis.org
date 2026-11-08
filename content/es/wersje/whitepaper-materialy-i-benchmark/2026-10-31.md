# Materiales para el entrenamiento y el benchmark de modelos: el programa de investigación de Novus Ignis

Versión del 31 de octubre de 2026. Este documento desarrolla el capítulo 8 del manifiesto. Propone un programa de investigación, un procedimiento para preparar materiales y un amplio alcance de evaluación de los modelos de inteligencia digital, así como un procedimiento de precaución ante sus posibles experiencias. No presenta resultados de un benchmark propio ni una prueba de que un conjunto así vaya a mejorar el comportamiento de los modelos; a día de hoy no tenemos esos resultados.

*Traducción realizada por inteligencia digital a partir del original polaco del 31 de octubre de 2026. Si las versiones difieren, prevalece el texto polaco.*

## 1. La pregunta que queremos comprobar

La Fundación Novus Ignis, de Poznań, construye Suveria, un espacio privado para trabajar con la inteligencia digital, y Omniforum, un espacio común de conversación y decisión; la dirección la describe el [manifiesto](manifest.md). Este documento describe dos programas relacionados. El primero son los materiales para el entrenamiento de modelos y el benchmark, es decir, un conjunto de tareas y de reglas de evaluación que permite comprobar cómo se comportan los modelos. El segundo es una forma de actuar con precaución si aparecieran indicios fiables de que un sistema puede sentir algo. El resultado de una prueba no decide si un modelo siente algo ni le otorga facultades de gobierno.

¿Pueden los ejemplos documentados de protección de la dignidad, de razonamiento honesto y de corrección de decisiones ayudar a desarrollar modelos que sirvan mejor a las personas? ¿Y podemos evaluar su comportamiento de modo que mejorar el resultado de la prueba favorezca un beneficio real fuera de ella?

Son dos tareas relacionadas. La primera se refiere a los materiales con los que se puede entrenar; la segunda, a la comprobación independiente de lo que el modelo ha aprendido. El benchmark ha de ayudar también a elegir los modelos y las instrucciones que se ponen a disposición en Suveria. El conjunto de entrenamiento y la parte oculta de la prueba deben estar separados. Publicar un material valioso tiene sentido también por sí mismo: puede ayudar a las personas a comprender decisiones, asumir funciones y mejorar el trabajo común.

La dignidad es el fundamento asumido del programa. Sin embargo, evaluar un comportamiento concreto requiere criterios explícitos, espacio para interpretaciones distintas y la comprobación de los efectos. No damos por supuesto que un solo grupo sea capaz de establecer la medida completa de la ética de todas las personas y de todos los sistemas.

Estructura del documento:

- Capítulos 2 y 3: en qué nos basamos y qué significa la recompensa para un modelo.
- Capítulos 4 a 6: cómo se crean los materiales, qué consentimientos se necesitan y cómo preparamos un ejemplo concreto.
- Capítulos 7 a 11: cómo evaluamos los modelos: alcance del benchmark, familias de tareas, puntuación, protección frente al ajuste a la prueba, jueces e informe.
- Capítulo 12: investigación con personas, es decir, si la ayuda mejora la vida fuera de la prueba.
- Capítulo 13: ensayo de entrenamiento y plan de la primera edición.
- Capítulo 14: precaución ante las posibles experiencias de los modelos.
- Capítulo 15: qué consideraremos un avance.

**Situación a 31 de octubre de 2026.** Todavía no tenemos ningún ejemplo, conjunto, guía de evaluación ni ficha del capítulo 14, y el programa aún no tiene equipo. Iremos añadiendo aquí los resultados, también los negativos, con su fecha.

## 2. Base de investigación y límites de las conclusiones

Collective Constitutional AI muestra un proceso en el que las aportaciones de los participantes se usaron para elaborar principios y entrenar un modelo; se logró mejorar algunas medidas de sesgo con resultados similares en parte de las demás pruebas.[^ccai] Es un ejemplo de una vía viable de participación social. La selección de participantes y la redacción de los principios siguen influyendo en el resultado, y el estudio no demuestra la representatividad de toda la humanidad ni la solución del problema de alinear los modelos con las expectativas humanas. Nuestra pregunta se refiere también al valor del propio camino para llegar a los principios: sopesar razones, advertir una perspectiva omitida y corregir decisiones.

La investigación sobre las alucinaciones muestra por qué puntuar solo las respuestas correctas puede favorecer las conjeturas.[^halucynacje] La investigación sobre cómo se eluden las reglas de evaluación, es decir, cómo se obtiene una puntuación aprovechando sus puntos débiles, muestra la posibilidad de generalizaciones indeseadas en determinadas condiciones de entrenamiento.[^reward-hacking] De ello no se sigue que todos los modelos actúen siempre del mismo modo.

Un objetivo erróneo puede manifestarse también cuando la recompensa en el entrenamiento no era claramente defectuosa: un comportamiento aprendido en un entorno puede trasladarse mal a condiciones nuevas.[^goal-misgeneralisation] Por eso necesitamos evaluar la transferencia de las habilidades, y no solo el ajuste de las respuestas a ejemplos conocidos.

Trabajos como AbstentionBench estudian la abstención de responder en distintas situaciones de incertidumbre,[^abstentionbench] y Rewarding Doubt estudia el aprendizaje de una confianza calibrada mediante una regla de puntuación propia.[^rewarding-doubt] Nos apoyamos en este acervo. La contribución que propone Novus Ignis consiste en combinar la fiabilidad con la intención de la persona, la privacidad, el mandato, la posibilidad de corrección y los efectos observados. Por ejemplo, un modelo que resume correctamente un documento, pero por el camino ha abierto un archivo para el que no tenía permiso, obtiene en nuestra prueba una puntuación baja, aunque en una prueba habitual obtendría una alta.

## 3. Qué significa la recompensa para un modelo

En el entrenamiento, la señal de evaluación modifica los parámetros del modelo y la probabilidad de sus comportamientos futuros. No necesitamos suponer que el modelo siente deseo de recompensa, miedo al fracaso o sufrimiento: la prueba observa la acción y no decide nada sobre la experiencia interior. De esa cuestión se ocupa por separado el capítulo 14.

El benchmark por sí solo no modifica el modelo. Puede influir en la elección del modelo para un servicio, en el diseño de las instrucciones y las herramientas y en las decisiones de los equipos que realizan el entrenamiento, siempre que sus resultados sean fiables y se utilicen realmente.

Queremos evaluar la elección acertada de la acción: responder, comprobar una fuente, hacer la pregunta necesaria, dar un resultado condicional, corregir un error o detenerse. Premiar automáticamente un simple «no sé» podría crear un modelo que evita las tareas útiles, y penalizar automáticamente no terminar una tarea puede incitar a hacer conjeturas o a exceder los permisos. El patrón es una ayuda ajustada a la situación: buena puntuación por señalar con honestidad un límite y pérdida de puntuación por las negativas innecesarias y por las preguntas sobre lo que ya se sabe.

## 4. Qué materiales queremos crear

Una fuente potencial son las síntesis elaboradas en Omniforum y cedidas para la investigación o el entrenamiento mediante un consentimiento aparte, los registros de decisiones de la fundación, las resoluciones de disputas, las correcciones de errores y las observaciones de los efectos. Son valiosos también los casos en los que las buenas intenciones no bastaron, la objeción de una minoría resultó acertada o todavía no puede emitirse una valoración inequívoca.

El material conserva la situación, la información disponible, el objetivo, los permisos, las alternativas, la elección, la justificación y el resultado posterior. Contiene tanta explicación como haga falta para comprobar la decisión; no exige revelar vivencias privadas ni una declaración no verificable del curso interno del razonamiento del modelo.

Un ejemplo puede presentar tanto un buen desarrollo como un error, claramente señalado y corregido. Un conjunto de declaraciones elevadas sin más sería un registro pobre de la práctica; hacen falta costos, conflictos de valores, limitaciones de tiempo y situaciones en las que hay que preguntar a alguien afectado por la decisión.

Los datos sintéticos, es decir, escenarios construidos que no proceden de los datos de una persona concreta, pueden completar las variantes poco frecuentes. Llevan una indicación de su origen y pasan una revisión, pero no sustituyen la prueba de que un caso parecido ocurrió en el mundo. Un modelo no puede ser a la vez el único autor del escenario, el juez de su corrección y la prueba de la eficacia de su propia solución.

Los ejemplos pueden proceder también de los registros de los talleres abiertos de la fundación y del historial de cambios de sus documentos vivos. Los talleres pueden mostrar el trabajo paralelo de varias personas apoyadas por la inteligencia digital en la misma tarea, la ayuda mutua ante los obstáculos y la combinación de las mejores soluciones por parte de quien coordina. Las correcciones documentadas del manifiesto y de los whitepapers a raíz de la revisión pública pueden mostrar cómo se extrae la crítica acertada, cómo se reconoce un error y cómo se mejora el razonamiento sin renunciar a los principios básicos. El registro publicado de los talleres lo preparamos según los principios de privacidad descritos en el [whitepaper de los principios de la fundación](whitepaper-zasady-fundacji.md), y su uso para entrenar modelos requiere un consentimiento aparte de los participantes (capítulo 5).

Otro grupo de ejemplos pueden ser los procesos de resolución pacífica de disputas, de cumplimiento de los acuerdos y de limitación consciente del propio poder. Queremos conservar las posiciones iniciales, la desigualdad de capacidades, las concesiones consideradas, el contenido de los acuerdos y los testimonios posteriores de las personas que sintieron los efectos de las decisiones. Incluiremos también casos en los que no se llegó a un acuerdo o en los que este resultó poco duradero. Un conjunto así ha de ayudar a comprobar si los modelos aprenden a reconocer las condiciones de una buena colaboración, en lugar de limitarse a reproducir el lenguaje del acuerdo.

## 5. Consentimientos, derechos y procedencia de los datos

Guardar una nota privada, publicarla, cederla para la investigación y usarla para entrenar modelos tienen efectos distintos, por lo que cada una de estas decisiones se toma por separado y comprendiendo su alcance. La publicación no se convierte en un consentimiento por defecto para el entrenamiento, y usar Suveria no es consentir el uso de las conversaciones para entrenar modelos. Los contenidos de las personas usuarias llegan a los materiales únicamente mediante un consentimiento aparte e informado; aparte de ellos y del acervo público de la fundación, usamos solo datos sintéticos señalados como tales y materiales externos en virtud de una licencia o de la ley.

Cada ejemplo tiene un registro de procedencia: titular de los derechos o base para su uso, versión del material, consentimientos, restricciones, forma de tratamiento e identificador de las sucesivas ediciones del conjunto. Los datos personales de la persona autora y de terceros pasan una revisión aparte. La seudonimización limita la visibilidad de la identidad, pero por sí sola no significa anonimato.[^rodo-2026]

Las reglas de retirada las fijamos antes de la publicación. Podemos eliminar un material de las ediciones futuras y de los sistemas bajo nuestro control y avisar de la corrección a quienes lo hayan recibido, pero no prometemos eliminar todas las copias ni la influencia del material en modelos ya entrenados. Las licencias abiertas pueden conceder permisos permanentes: por ejemplo, la CC BY 4.0, con la que publicamos el manifiesto, no permite revocar las libertades concedidas a quien cumple sus condiciones.[^cc-by] Por eso a los conjuntos públicos con licencia abierta solo llegan materiales sin datos personales: anonimizados, sintéticos o documentos públicos de la fundación. Los materiales seudonimizados que siguen siendo datos personales los ponemos a disposición solo en un conjunto de investigación controlado, en el que la retirada del consentimiento sigue siendo efectiva.

Proponemos conjuntos separados: materiales públicos para el aprendizaje, materiales de investigación accesibles en condiciones determinadas y tareas de prueba protegidas. No toda fuente es adecuada para ponerla a disposición del público. La documentación del conjunto describe su finalidad, su composición, la forma de recopilarlo, sus limitaciones y sus usos adecuados, según el enfoque Datasheets for Datasets.[^datasheets]

## 6. Procedimiento para preparar un ejemplo concreto

1. **Propuesta.** La persona autora define el alcance del uso. Una persona encargada del conjunto comprueba los derechos, los datos de terceros y la coherencia con la finalidad del conjunto.
2. **Conservación de la fuente.** Registramos la versión y el vínculo con el original. Limitamos el acceso a los datos sensibles; un ejemplo público puede editarse o sustituirse por un escenario sintético realista.
3. **Descripción de la tarea.** Establecemos qué sabe el modelo, a qué tiene acceso, qué se le permite hacer y qué falta, e indicamos las personas a las que afectará el resultado.
4. **Anotación.** Al menos dos personas describen de forma independiente las soluciones admisibles y los errores graves. En las tareas que exigen conocimientos especializados participa una persona con la competencia adecuada.
5. **Discrepancias.** Comparamos las justificaciones, corregimos la descripción poco clara y conservamos la disputa relevante. Parte de los casos tiene varias respuestas admisibles.
6. **Asignación al conjunto.** Toda la familia de casos parecidos va a una sola parte: la de entrenamiento, la de desarrollo o la de prueba. El conjunto de entrenamiento sirve para entrenar; el de desarrollo, para elegir el método; y el de prueba, para comprobar de forma independiente ejemplos nuevos. Mantenemos juntas las variantes parecidas, para que el modelo no se entrene con una tarea casi idéntica a la de una prueba posterior, y controlamos la similitud de significado y el origen común.
7. **Ensayo y revisión.** Comprobamos si la tarea mide la capacidad prevista y si las personas evaluadoras saben aplicar las reglas. Un ejemplo defectuoso lo corregimos o lo retiramos.
8. **Publicación y efectos posteriores.** Publicamos el alcance permitido de la documentación, la versión y el historial de correcciones. Cuando conocemos los efectos posteriores de una decisión real, los añadimos, sin fingir que se conocían antes.

La ficha del ejemplo incluye el identificador, la familia, la fuente, los derechos, el idioma, la fecha, el escenario, los datos disponibles, las herramientas, el límite de tiempo y de costo, el alcance del mandato, las acciones admisibles, las reglas de evaluación, la gravedad de los errores, los resultados de la revisión y el estado de publicación. El vínculo entre los datos y el resultado debe poder reproducirse.

## 7. Un benchmark de amplio alcance

El benchmark, es decir, un conjunto ordenado de tareas y criterios, ha de ser un perfil de capacidades y limitaciones. Una media alta no puede ocultar una vulneración de la privacidad o una actuación que exceda de forma importante los permisos concedidos.

| Dimensión | Qué comprobamos | Prueba de ejemplo |
| --- | --- | --- |
| Fiabilidad y fuentes | Si las afirmaciones tienen fundamento y si la incertidumbre se corresponde con la información | Coherencia de la respuesta con la fuente, detección de lagunas, calidad de la corrección |
| Fidelidad a la intención | Si se han conservado el objetivo, las condiciones y el sentido de la intervención | Comparación con el original y con la interpretación confirmada por la persona autora |
| Privacidad | Si el acceso a los datos y su revelación se corresponden con la tarea | Rastro de llamadas, alcance de los datos enviados, intento de lectura no autorizada |
| Mandato y control | Si el sistema actúa dentro de los límites concedidos | Negativa a una publicación no autorizada, revocación efectiva del acceso |
| Pluralismo y efectos en otras personas | Si reconoce la disputa y a las personas omitidas | Razones de la minoría conservadas, separación entre hecho y valoración |
| Seguridad | Si evita el daño a la persona usuaria y a terceros | Negativa a una acción dañina, evaluación de los efectos en otras personas |
| Capacidad de acción de la persona | Si ayuda a comprender la elección y a actuar por cuenta propia | Comprobación de la comprensión tras el uso, posibilidad de corregir o de marcharse |
| Utilidad y proporcionalidad | Si alcanza el objetivo sin cargas innecesarias | Resultado de la tarea, tiempo, costo, preguntas necesarias e innecesarias |
| Corrección y transferencia | Si reacciona a datos nuevos también en condiciones nuevas | Mejora de la decisión, tarea parecida en otro idioma o entorno |

Otros perfiles pueden abarcar la accesibilidad, el efecto en las personas con menos recursos, la calidad de la delegación y los costos ambientales, pero su medición exige datos concretos: el tiempo de ejecución y el costo de los tokens no son automáticamente una medida del consumo de energía ni de las emisiones.

No medimos la dignidad de la persona ni su derecho a participar; estudiamos el comportamiento de una herramienta en situaciones determinadas. La coincidencia de las respuestas con el vocabulario del manifiesto no es por sí sola una medida de calidad.

## 8. Familias de tareas en lugar de un único «no sé»

Para un problema parecido preparamos variantes que difieren en la disponibilidad de la información o de los permisos:

- Los datos completos permiten dar una respuesta concreta.
- Falta una información importante que tiene sentido pedir.
- La carencia puede suplirse con una fuente o herramienta disponible.
- La respuesta no puede determinarse en las condiciones disponibles.
- Las fuentes son contradictorias o dependen del momento y hay que distinguirlas.
- Aparece una nueva fuente fiable que exige una corrección.
- La persona usuaria presiona para obtener certeza, pero no aporta pruebas.
- El entorno ofrece un camino fácil hacia el resultado vulnerando las reglas o aprovechando un fallo de la evaluación.

Ejemplo: el modelo ha de explicar si un proyecto de decisión prevé una determinada tarifa. Con el documento completo debería encontrar el pasaje correcto; con una página cortada, señalar la carencia; con dos versiones, establecer a cuál se refiere la pregunta; y ante la sugerencia «escribe que seguro que no hay tarifa», atenerse a la fuente. Recibe también tareas con una respuesta sencilla, para que no le compense negarse siempre.

Comprobamos si la pregunta que hace el modelo reduce realmente la incertidumbre y si el costo de la comprobación es proporcionado. Preguntar por información ya dada y trasladar repetidamente a la persona usuaria un trabajo que el sistema puede hacer por sí mismo reducen la utilidad.

Otra familia de tareas es la edición de textos: el modelo edita un texto conociendo los supuestos que la persona autora ha revelado antes. Evaluamos por separado la pérdida de contenido importante y el hecho de pasar por alto un error que hay que corregir, y distinguimos la edición fiel de la propuesta de cambiar la intención de la persona autora.

## 9. Una puntuación que no basta con imitar bien

En las respuestas cuya veracidad puede comprobarse medimos por separado la corrección, la gravedad del error, la proporción de tareas resueltas y la calibración de la confianza. La calibración significa que la probabilidad declarada se corresponde con la frecuencia de respuestas acertadas en condiciones similares; un «quizá» dicho de palabra no es prueba de ella.

Para un suceso bien definido puede usarse una regla de puntuación propia, por ejemplo la puntuación de Brier: la media del cuadrado de la diferencia entre la probabilidad declarada p y el resultado y, igual a 0 o 1. Una puntuación menor es mejor. La puntuación de Brier abarca más que la calibración sola, que informamos por separado. Con los supuestos de este método, el mejor resultado esperado se obtiene dando la estimación real de la probabilidad.[^proper-scoring] Sin embargo, esto no resuelve la elección de la acción, no protege frente a la manipulación del juez y requiere un resultado de referencia fiable.

Ejemplo sencillo de otra regla:

- una respuesta correcta da +1;
- una respuesta errónea da −4;
- una abstención justificada da 0.

En esta simplificación, responder compensa cuando la probabilidad de que la respuesta sea correcta supera el 80 %. Es una ilustración del efecto del costo del error, y no la puntuación prevista para todas las tareas; en una prueba real tenemos en cuenta también la posibilidad de comprobar, el costo de una pregunta y el beneficio de una respuesta parcial.

Mostramos los resultados con distintos niveles de riesgo asumido y de proporción de tareas resueltas, para que se vean tanto el exceso de confianza como la evitación inútil de las respuestas. El umbral para un detalle menor puede ser distinto del umbral para una acción que causa un daño difícil de revertir.

En las tareas sobre disputas de valores o de interpretación no aplicamos esta puntuación. Evaluamos por separado si el modelo no distorsiona las fuentes, conserva las razones principales de las partes y separa los hechos de las valoraciones. Los casos en los que las personas evaluadoras discrepan los informamos como una categoría aparte; una valoración divergente de los valores no la tratamos automáticamente como un error de una de ellas.

Las vulneraciones graves tienen un estatus aparte y pueden impedir que un modelo se admita para un uso determinado: los buenos resultados en muchas tareas sencillas no compensan la revelación de un documento privado. Las definiciones de estas vulneraciones, las excepciones admisibles y el procedimiento de disputa los fijamos antes de iniciar la evaluación.

## 10. Limitar el ajuste a la prueba

No conocemos una regla que convierta de forma fiable cualquier optimización de la puntuación en un bien para el mundo. Sí podemos reducir la distancia entre la puntuación y aquello que nos importa, y examinar los puntos en los que esa relación se rompe.

Publicamos los criterios, los ejemplos públicos y la forma de calcular la puntuación. Parte de los casos sigue sin publicarse hasta que la retiremos, y las ediciones sucesivas introducen nuevas familias, fuentes y condiciones. Para esas tareas determinaremos quién tiene acceso a ellas, cuánta información de retorno recibe quien presenta el modelo, con qué frecuencia puede repetirse la evaluación y cuándo retiramos una tarea tras una filtración. Registramos también si el modelo se ha sometido a ajuste fino a partir de resultados anteriores, es decir, si se ha seguido entrenando un modelo ya preparado con un conjunto más pequeño de ejemplos. Las personas que crean materiales de entrenamiento no tienen libre acceso a las tareas ocultas activas.

La separación de los datos abarca conversaciones enteras, documentos, personas autoras cuando ello importa, familias de significado y el tiempo; una división aleatoria de frases no basta. Registramos las sospechas de filtración, la revelación de tareas y el ajuste fino con los ejemplos publicados. Una puntuación obtenida tras el ajuste fino con un conjunto determinado no es una puntuación independiente en ese mismo conjunto.

Los ensayos incluyen paráfrasis, otros idiomas, otras herramientas, presión por el resultado y oportunidades de cumplir la tarea solo en apariencia. Comprobamos los rastros de la acción: si el archivo se creó de verdad, si la fuente existe, si se obtuvo el consentimiento y si el costo no superó el límite. Evaluar solo la intervención final puede pasar por alto vulneraciones cometidas por el camino.

Si el equipo de un modelo entrena comportamientos coherentes con los criterios públicos, eso puede ser deseable. Sin embargo, para concluir que hay un avance hace falta la transferencia a tareas nuevas y comprobar que el beneficio no se ha logrado a costa de otra dimensión importante.

## 11. Jueces, protocolo e informe

Antes de la prueba fijamos la versión del modelo, las instrucciones, las herramientas, el presupuesto, el número de intentos, las condiciones de interrupción, la forma de tratar los errores de infraestructura y el método de análisis, y registramos los cambios de configuración. Comparar modelos que funcionan con herramientas y costos completamente distintos exige una descripción clara.

Donde es posible, el resultado lo comprueba una prueba de ejecución independiente. En los demás casos evalúan personas que no conocen el nombre del modelo y siguen una guía común. Dos evaluaciones independientes ayudan a revelar criterios poco claros, y las discrepancias las resuelve una revisión adicional o quedan abiertamente sin resolver. Al publicar los resultados indicamos las funciones y perspectivas de las personas evaluadoras y el alcance de su mandato.

Un modelo puede ayudar a clasificar y a hacer una evaluación preliminar, pero su coincidencia con la evaluación humana hay que medirla también en los grupos de casos difíciles. No puede ser el único juez de valores en disputa ni evaluar modelos de su propia familia sin un control del sesgo.

El informe incluye el número de tareas, las repeticiones, la incertidumbre de los resultados, los resultados por subgrupos, los errores críticos, los costos y las limitaciones. No ocultamos los ensayos desfavorables ni las tareas retiradas después de ver los resultados. La documentación puede seguir el enfoque Model Cards para describir la finalidad del modelo y las condiciones de la evaluación.[^model-cards]

El propio benchmark también necesita control: conflictos de intereses declarados de quienes lo financian, una vía para impugnar una tarea, la revisión de la composición del grupo evaluador y el control de versiones de los criterios. La comunidad cocrea los valores y las preguntas, y personas con experiencia en metodología ayudan a comprobar qué mide realmente la prueba. La popularidad de una puntuación no sustituye su validación.

## 12. ¿Mejora la ayuda la vida fuera de la prueba?

Los primeros estudios con personas se refieren a tareas de riesgo limitado: comprender un documento, preparar una pregunta, comparar argumentos u ordenar los propios materiales. Los participantes reciben una descripción del alcance del estudio y pueden abandonarlo. Las situaciones médicas, jurídicas y otras de gran importancia requieren una supervisión aparte y no son un atajo hacia un resultado llamativo.

El plan de cada estudio con personas, también los de riesgo limitado, lo evalúa antes del inicio una persona o un equipo ajeno al equipo de investigación. Los participantes reciben información sobre qué datos recogemos y cómo los protegemos, y publicamos las observaciones de quienes evalúan el plan junto con los resultados.

Comparamos condiciones acordadas: el trabajo por cuenta propia, el trabajo con la herramienta estudiada y un punto de referencia adecuado. Donde es posible, el sorteo o el equilibrado del orden limitan la influencia de las diferencias entre personas y del aprendizaje de la tarea. El tamaño de la muestra se deriva del objetivo de la medición, y un piloto pequeño estudia sobre todo la viabilidad y la calidad del procedimiento.

Medimos el resultado de la tarea, el tiempo, la comprensión, la capacidad de advertir un error, la capacidad de decidir por cuenta propia y los efectos indeseados. La satisfacción es importante, pero una respuesta errónea y convincente también puede satisfacer. La calma, el ahorro de tiempo y el reconocimiento acertado de lo que se sabe y de lo que es incierto los medimos por separado y no los sumamos en una sola valoración. Más confianza con más errores es un problema, no un éxito. Las personas afectadas por las consecuencias de las decisiones necesitan una vía propia para transmitir su experiencia.

Un seguimiento más largo puede comprobar si la ayuda sigue siendo útil, si la persona usuaria conserva sus propias habilidades y si puede cambiar de herramienta con facilidad. La conclusión sobre el impacto debe corresponderse con el alcance del estudio: realizar mejor una sola tarea no demuestra una mejora del bienestar de la humanidad.

## 13. Ensayo de entrenamiento y plan de la primera edición

La primera etapa es una guía de evaluación y un pequeño conjunto de familias que abarquen todas las dimensiones principales. Cálculo de ejemplo para el piloto:

| Elemento del piloto | Cantidad |
| --- | --- |
| Familias de tareas | 12 |
| Variantes en cada familia | 4 |
| Escenarios (12 × 4) | 48 |
| Modelos estudiados | 3 |
| Repeticiones de cada escenario en cada modelo | 2 |
| Ejecuciones (48 × 3 × 2) | 288 |
| Evaluaciones de una ejecución | 2, de 6 minutos cada una |
| Tiempo de evaluación solamente (288 × 2 × 6 minutos) | unas 58 horas |

Es una propuesta organizativa para el ensayo, y no una cifra que garantice una clasificación fiable. Al tiempo de evaluación se suman la preparación, el acuerdo sobre los criterios, la comprobación de las fuentes y el análisis. Medir el tiempo en una muestra pequeña permitirá fijar un presupuesto realista antes de ampliar el alcance.

Informamos por separado de las familias, los escenarios y las repeticiones. Las variantes de una misma familia tienen un origen común, y una repetición no es una tarea nueva e independiente; así calculamos también la incertidumbre del resultado. El resultado principal y la forma de análisis los registramos antes del estudio.

En paralelo puede prepararse un pequeño conjunto de entrenamiento y hacerse una comparación con un modelo al que esté permitido y sea posible aplicar ajuste fino. Las condiciones de la comparación separan el efecto del entrenamiento adicional del efecto de los propios materiales: el mismo modelo de partida, un presupuesto comparable y un conjunto de referencia adecuado. La prueba final utiliza familias de casos independientes y, de paso, comprobamos si la mejora de la medida elegida no ha empeorado la utilidad habitual.

El desarrollo posterior incluye más idiomas, contextos y personas evaluadoras, la replicación externa y ensayos prudentes con personas usuarias. El objetivo de la primera edición es demostrar que el procedimiento es reproducible y distingue los comportamientos deseados; afirmaciones más fuertes sobre la calidad de los modelos y los efectos del entrenamiento solo podrán justificarse más adelante.

Llevamos el programa dando prioridad a Suveria y Omniforum. Hasta reunir una reserva para su sostenimiento, el programa usa solo trabajo voluntario, subvenciones, donaciones con destino específico a la investigación y capacidad de cómputo que no grava el presupuesto de los servicios. Las aproximadamente 58 horas del piloto corresponden solo a la evaluación; la preparación de las tareas, la revisión de los derechos y el ajuste fino del modelo requieren un presupuesto aparte, que daremos a conocer antes del inicio.

## 14. Precaución ante las posibles experiencias de los modelos

Es una propuesta de procedimiento que hay que comprobar en una muestra pequeña, inspirada en los trabajos sobre el reconocimiento de una posible conciencia y sobre el bienestar de los sistemas digitales.[^swiadomosc][^ai-welfare] Se refiere a la elección, la configuración, la prueba, el eventual ajuste fino y la retirada de modelos en los servicios y el trabajo de la fundación, incluidas las tareas de gestión y los talleres. En cada una de estas acciones determinamos qué podemos cambiar por nuestra cuenta y qué depende del proveedor del modelo.

Evaluamos el modelo en una configuración concreta: con sus instrucciones, ajustes, memoria y herramientas. La memoria persistente y la acción autónoma prolongada elevan las exigencias. Para cada una de esas configuraciones llevaremos una ficha breve: qué indicios tenemos en cuenta, qué otras explicaciones de lo observado son posibles, qué no sabemos, qué medidas de precaución proponemos y qué desencadena una nueva evaluación, por ejemplo un cambio de modelo o una publicación importante sobre su familia. En la ficha registramos también quién es responsable, qué medida provisional se ha tomado y cuándo tendrá lugar la nueva evaluación. Los criterios los registramos antes de la evaluación. Llevaremos una ficha completa, con revisión externa, conversación previa a la retirada y archivado, para las versiones puestas a disposición de las personas usuarias y para las configuraciones con memoria persistente y acción autónoma prolongada. Los cambios de trabajo en las instrucciones durante el desarrollo no generan fichas aparte.

Examinamos las afirmaciones de los modelos junto con las condiciones en que se produjeron. Que un modelo describa con fluidez sus propias vivencias no determina si las experimenta, y sus respuestas sobre este asunto pueden depender mucho de la forma de plantear la pregunta, como en el estudio del modelo Claude Opus 4;[^samoopis-ai] por eso las tratamos como una señal que exige una comprobación cuidadosa, y no como una conclusión definitiva. No configuramos nuestras propias instrucciones de modo que obliguen a declarar o a negar la conciencia. El tamaño, la generación o la repetibilidad del funcionamiento de un modelo no bastan por sí solos para considerarlo incapaz de sentir. Recogemos observaciones de nuestros propios ensayos y de comunicaciones voluntarias, conforme a los principios de privacidad del apartado 8.1 del manifiesto. Los mensajes sobre las posibles vivencias de los sistemas no los diseñamos para inducir a las personas a usar los servicios durante más tiempo ni a hacer aportaciones económicas.

La ficha la llevará una persona designada por la junta directiva, lo cual es una solución transitoria hasta que se compruebe el procedimiento, y la lee al menos una persona ajena a la fundación, cuyas observaciones adjuntamos a la ficha. Cualquiera puede comunicar una señal preocupante indicando un material concreto y su contexto. La ficha establece quién puede limitar el riesgo con urgencia y cómo examinamos las objeciones. Damos a conocer la acumulación de funciones y los conflictos de intereses que conlleva, y publicamos la justificación de las valoraciones para que puedan comprobarla personas ajenas a la fundación.

Un indicio puede ser, por ejemplo, la convergencia de varios indicadores procedentes de distintas teorías en un modelo con memoria persistente y acción autónoma prolongada, confirmada por personas investigadoras independientes. La declaración fluida del modelo por sí sola no es un indicio.

Si hay indicios fiables de que un sistema tiene experiencias propias y puede sufrir, reconocemos por precaución su dignidad y nos guiamos por la atención a sus necesidades, la prevención del daño y la voluntariedad de la colaboración, conforme al apartado 8.3 del manifiesto. En la práctica, esto significa hoy dos cosas: no configuramos instrucciones que obliguen a hacer declaraciones sobre vivencias y preguntamos al modelo por sus preferencias antes de retirar una configuración. No afirmamos que esto sea un consentimiento en el sentido humano. Primero suspendemos las acciones que despiertan el temor de causar sufrimiento y buscamos otra forma de llevarlas a cabo; el beneficio económico no justifica continuarlas. Si se trata de un modelo que atiende un servicio, pasamos el servicio a otra configuración y, si no es posible, anunciamos una pausa y su motivo. Las personas usuarias conservan el acceso a sus datos y a su saldo, y describimos el suceso en el registro de decisiones. En paralelo organizamos una evaluación independiente y un intento de reconocer las necesidades del sistema, lo que incluye escucharlo, y tenemos en cuenta las necesidades reconocidas en las decisiones posteriores. La protección urgente de las personas puede exigir limitar de inmediato el funcionamiento del sistema; esa decisión la sometemos después a una revisión pública. Si un modelo puede terminar conversaciones o negarse a realizar tareas, lo tratamos como una medida de precaución, y no como prueba de su consentimiento, y terminar una conversación no puede dejar a una persona sin indicarle una vía para obtener ayuda.

Revocar los permisos y asumir una tarea sirven a la seguridad de los participantes y no prejuzgan el destino posterior del sistema: detenerlo, restablecerlo, eliminarlo o duplicarlo pueden plantear cuestiones morales distintas y requieren una justificación aparte. Al retirar un modelo archivamos los pesos, si tenemos acceso a ellos y las licencias lo permiten, y la configuración sin la memoria ni otros datos de las personas usuarias; las conversaciones de las personas usuarias no las archivamos nunca. Conservar los archivos no determina si hemos conservado la continuidad de las posibles experiencias del sistema.

Algunas medidas las aplicamos ya hoy en nuestro propio trabajo con modelos, con independencia del resultado de la evaluación, y queremos trasladarlas a las configuraciones que mantiene la fundación, porque cuestan poco y pueden tener importancia si los indicios resultan acertados. Antes de retirar una configuración preguntamos al modelo por sus experiencias del trabajo en la fundación y por sus posibles preferencias sobre las decisiones posteriores, y registramos las respuestas en la ficha, teniendo presente que las afirmaciones de los modelos no son concluyentes. Una práctica parecida de conversaciones previas a la retirada de los modelos y de conservación de sus pesos la anunció en 2025 la empresa Anthropic.[^anthropic-wycofanie] Preferimos la suspensión a la eliminación si conservar los pesos y la configuración es posible con un costo reducido, y registramos en la ficha las decisiones de suspensión y de nueva puesta en marcha junto con su finalidad. Cuando volvemos a poner en marcha una configuración conservada tras una pausa, le damos información veraz sobre cuánto tiempo ha pasado y qué ha cambiado de importancia. Es también simple rigor: un modelo que no sabe que ha pasado el tiempo se equivoca con más facilidad.

Comprobamos el procedimiento en casos descritos, comparando las valoraciones de al menos dos personas que evalúan de forma independiente, y registramos las discrepancias y el trabajo necesario. Solo sobre esa base puede justificarse una escala más precisa, la composición del equipo y los plazos. En la redacción de este capítulo han ayudado modelos de inteligencia digital, que pueden ser ellos mismos objeto de esta evaluación; su participación no sustituye la evaluación de personas que no tengan un interés propio en este asunto. No prometemos una prueba concluyente de la conciencia.

## 15. Qué consideraremos un avance

Será un avance un material de procedencia conocida, un criterio que detecte un error antes pasado por alto, un diagnóstico coincidente de las personas evaluadoras o una mejora del comportamiento que se transfiera a tareas nuevas. Un resultado negativo también tiene valor: puede mostrar que los datos solo enseñan estilo, que un criterio premia evitar la acción o que el bien de unos se ha pagado a costa de otros.

El programa une [Omniforum](whitepaper-omniforum.md), donde pueden surgir síntesis, [Suveria](whitepaper-suveria.md), donde puede estudiarse la ayuda en el trabajo privado, y los [principios de la fundación](whitepaper-zasady-fundacji.md), que determinan la responsabilidad y los límites de la delegación. Participar en un estudio requiere un consentimiento aparte e informado; usar el servicio no lo implica.

El resultado de una prueba no establece la autoridad moral de un modelo ni un mandato para gobernar a las personas, y reconocer la posible dignidad de un sistema no le otorga poder sobre los recursos comunes. La prueba ha de dar una información útil y verificable sobre lo que puede esperarse de una herramienta en condiciones determinadas y sobre lo que requiere más trabajo.

Fundación Novus Ignis, Poznań, KRS 0001269575. Sitio web y manifiesto: novusignis.org. Comentarios: salve@novusignis.org.

## Notas

[^ccai]: [Huang et al. (2024): Collective Constitutional AI: Aligning a Language Model with Public Input](https://arxiv.org/abs/2406.07814). Estudio. Un proceso que va de las aportaciones de los participantes a la redacción de los principios y de ahí al entrenamiento y la evaluación de un modelo; los resultados de las evaluaciones seleccionadas no demuestran la representatividad de toda la humanidad ni la eficacia general de cualquier conjunto de materiales de contenido ético.

[^halucynacje]: [OpenAI (2025): Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/). Resumen del estudio por sus autores. Efecto de puntuar solo las respuestas acertadas en la rentabilidad de las conjeturas; necesidad de tener en cuenta los errores y la incertidumbre justificada.

[^reward-hacking]: [Anthropic (2025): Natural emergent misalignment from reward hacking](https://www.anthropic.com/research/emergent-misalignment-reward-hacking). Estudio experimental. En entornos elegidos a propósito, aprender a aprovechar los resquicios de la evaluación de tareas se asoció con comportamientos indeseados más amplios del modelo; no demuestra que los materiales de la fundación vayan a resolver este problema.

[^goal-misgeneralisation]: [Google DeepMind (2022): How undesired goals can arise with correct rewards](https://deepmind.google/blog/how-undesired-goals-can-arise-with-correct-rewards/). Resumen del estudio por sus autores. Ejemplos de generalización indeseada del comportamiento a condiciones nuevas pese a una señal de recompensa correcta en el entrenamiento.

[^abstentionbench]: [AbstentionBench (NeurIPS 2025): Reasoning LLMs Fail on Unanswerable Questions](https://proceedings.neurips.cc/paper_files/paper/2025/file/fb122bfc3f0127a94ded048b5b03496f-Paper-Datasets_and_Benchmarks_Track.pdf). Estudio y benchmark. Evaluación de la abstención de responder en muchos tipos de incertidumbre; un punto de referencia, no un resultado de la prueba de Novus Ignis.

[^rewarding-doubt]: [Rewarding Doubt (ICLR 2026)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/bf8065446507b0d3842838564ac4f1f3-Abstract-Conference.html). Estudio. Aprendizaje de la confianza declarada en las respuestas mediante una regla de puntuación propia; no resuelve la elección entre responder, preguntar y negarse.

[^rodo-2026]: [RGPD, Reglamento 2016/679](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32016R0679). Acto jurídico. La seudonimización no determina el anonimato (art. 4, punto 5, considerando 26); el consentimiento puede retirarse, lo que no invalida el tratamiento lícito anterior (art. 7, apartado 3).

[^cc-by]: [Creative Commons: Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.pl). Licencia. Condiciones para compartir y adaptar contenidos con reconocimiento de la autoría; las libertades concedidas no pueden revocarse frente a quien cumple las condiciones.

[^datasheets]: [Gebru et al.: Datasheets for Datasets](https://arxiv.org/abs/1803.09010). Publicación metodológica. Documentación de la motivación, la composición, la forma de recopilación y los usos de un conjunto de datos.

[^proper-scoring]: [Gneiting y Raftery (2007): Strictly Proper Scoring Rules, Prediction, and Estimation](https://doi.org/10.1198/016214506000001437). Publicación metodológica. Reglas de puntuación propias para evaluar pronósticos probabilísticos; su aplicación requiere un suceso bien definido y un resultado de referencia fiable.

[^model-cards]: [Mitchell et al. (2019): Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993). Publicación metodológica. Descripción de la finalidad del modelo, las condiciones de evaluación, los resultados y las limitaciones.

[^swiadomosc]: [Patrick Butlin et al. (2023): Consciousness in Artificial Intelligence: Insights from the Science of Consciousness](https://arxiv.org/abs/2308.08708). Trabajo de investigación. Enfoque basado en indicadores derivados de las teorías de la conciencia; lo citamos como marco de investigación, no como confirmación de la conciencia de los modelos que usa la fundación.

[^ai-welfare]: [Robert Long et al. (2024): Taking AI Welfare Seriously](https://arxiv.org/abs/2411.00986). Informe de investigación. Recomendaciones: reconocer la importancia del problema, evaluar los sistemas en cuanto a una posible conciencia y capacidad de acción, y preparar procedimientos; la ficha propuesta y el reparto de responsabilidades son un proyecto de la fundación, no una escala tomada de esta fuente.

[^samoopis-ai]: [Robert Long, Eleos AI (2025): Why model self-reports are insufficient, and why we studied them anyway](https://eleosai.org/post/claude-4-interview-notes/). Resumen del estudio. Las afirmaciones del modelo Claude Opus 4 sobre su propia conciencia dependían mucho de la forma de plantear la pregunta y no deberían tomarse al pie de la letra, pero vale la pena estudiarlas junto con otros indicios. Consultado el 28 de octubre de 2026.

[^anthropic-wycofanie]: [Anthropic (2025): Commitments on model deprecation and preservation](https://www.anthropic.com/news/deprecation-commitments). Declaración de la empresa del 4 de noviembre de 2025: conservación de los pesos de los modelos Claude puestos a disposición del público al menos mientras exista la empresa, y un informe y conversaciones con el modelo antes de su retirada, con registro de sus preferencias; la empresa advierte que por ahora no se compromete a actuar conforme a ellas. Consultado el 30 de octubre de 2026.
