
function Alerta(){
    return (
        <>
  <div className="toast-body">
    Prueba
    <ToastBody/>
  </div>
        </>
    );
}

export function ToastBody(){
    return(
        <>
<p>Este es un parrafo</p>
<div>Ahora un Div</div>
<p>Lista de Opciones
    <ul>
        <li>Opcion 1</li>
        <li>Opcion 2</li>
        <li>Opcion 3</li>
    </ul>
</p>
</>
    );
}

export default Alerta;