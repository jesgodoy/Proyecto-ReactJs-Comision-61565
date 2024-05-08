import "./ItemList.css"
import Item from "../item/Item.jsx"

const ItemList =({products})=>{
    return(
        <div className="container">
            <div className="group">
                {products.map(prod=> <Item key ={prod.id} {...prod}/>)}
            </div>
        </div>
        
    )
}
export default ItemList