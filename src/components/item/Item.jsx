import "./Item.css"

const Item = ({id, nombre, img, precio, stock}) =>{
    return(
        <div className="card mt-5">
            <div className="text-center">
                <img src={img} className="card-img-top p-3 img" alt={nombre}/>
            </div>
            <div className="card-body text-center">
                <h5 className="card-title">{nombre}</h5>
                <h6 className="card-price">${precio}</h6>
                <a href="#" className="btn btn-primary">Ver Detalles</a>
            </div>
        </div>
    )
  

}
export default Item