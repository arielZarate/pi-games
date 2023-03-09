

import  {ShowNotification} from "./ShowNotification";
//mostrarNotificacion("success","Videogames",'Te recordamos que debes actualizar tus datos.', 3000,'top-right')
/* 
// Ejemplo de notificación de éxito
MostrarNotificacion("success", "Operación completada", "Los cambios se han guardado correctamente.", 3000);

// Ejemplo de notificación de advertencia
MostrarNotificacion("warning", "¡Cuidado!", "Esta acción no se puede deshacer.", 5000);

// Ejemplo de notificación de error
MostrarNotificacion("error", "Error de conexión", "No se ha podido establecer conexión con el servidor.", 0);

// Ejemplo de notificación de información
MostrarNotificacion("info", "¡Atención!", "Se requiere la actualización de la aplicación.", 8000);


*/
    function MiComponente() {
      return (
        <div>

           <button onClick={()=>ShowNotification("success", "Operación completada", "Los cambios se han guardado correctamente.", 3000)}>
            Mostrar notificación sucess
          </button>
           <button onClick={()=>ShowNotification("warning", "¡Cuidado!", "Esta acción no se puede deshacer.", 3000)}>
            Mostrar notificación warning
          </button>
           <button onClick={()=>ShowNotification("error", "Error de conexión", "No se ha podido establecer conexión con el servidor.", 3000)}>
            Mostrar notificación error
          </button>
           <button onClick={()=>ShowNotification("info", "¡Atención!", "Se requiere la actualización de la aplicación.", 3000)}>
            Mostrar notificación info
          </button>



         
        </div>
      );
    }
    
    export default MiComponente;