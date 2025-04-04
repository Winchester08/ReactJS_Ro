import './Card.css';
import react_image from '../assets/react.svg';
let ancho = '200px';
let alto = '150px';
function Card() {
  return (
    <>
    <p><img src={react_image} className="card-img-top" width={ancho} height={alto}/></p>
    
    <div className="card">
     
        <div className="card-body">
          <h5 className="card-title">Tarjeta</h5>
          <p className="card-text">Ejemplo de como es una Tarjeta con BootStrap y React</p>
          <a href="#" className="btn btn-primary">Enlace</a>
        </div>
    </div>
    </>
  );
}
export default Card;