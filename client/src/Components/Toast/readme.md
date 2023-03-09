# Para usar la función de notificaciones en tu proyecto, debes seguir los siguientes pasos:

- Copia el código JavaScript de la función en tu proyecto.
- Crea un archivo CSS y copia el código CSS proporcionado para dar estilo a la notificación.
- Agrega un enlace al archivo CSS en la sección head de tu archivo HTML.
- Llama a la función MostrarNotificacion() en tu código JavaScript, pasando los parámetros necesarios. La - - función acepta cuatro parámetros: tipo de notificación, título de notificación, mensaje de notificación y duración de notificación.
- La función de notificación utiliza la creación de elementos HTML dinámicos y su eliminación mediante - JavaScript, así que no es necesario añadir elementos de notificación en el HTML.

La función de notificación también utiliza Flexbox para crear un diseño más limpio y responsive.

## Los cuatro tipos de notificaciones válidos son:

- success (éxito): para notificaciones de éxito.
- warning (advertencia): para notificaciones de advertencia.
- error (error): para notificaciones de error.
- info (información): para notificaciones de información.
- El tiempo de duración de notificación se define en milisegundos (por ejemplo, 3000 milisegundos equivale a 3 segundos).

### Ejemplo de uso:

- MostrarNotificacion("success", "Título de la notificación", "Este es el mensaje de la notificación.", 3000);
