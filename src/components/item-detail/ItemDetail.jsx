import '../item-detail/ItemDetail.css'
import ItemCount from '../item-count/ItemCount.jsx'

const ItemDetail = ({id, nombre, precio, img, categoria, detalles, stock})=>{
    return(
        <article>
            <div className='text-center mt-5'>
                <h2 >{nombre}</h2>
            </div>
            <div className='d-flex'>
                <picture className='text-center'>
                    <img src={img} className='image-detail' alt={nombre} />
                </picture>
                <section className='m-5'>
                    <p className='fs-3' >Catagoria: {categoria}</p>
                    <p className='fs-6' >Descripcion: {detalles}</p>
                    <p className='fs-3 text-center'>Precio: $ {precio}</p>
                    <div className='text-center'>
                        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("cantidad del producto", quantity)}/>
                    </div>
                </section>
            </div>
        </article>
    )
}

export default ItemDetail