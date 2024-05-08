import { useState, useEffect } from "react"
import {getProducts} from "../../products.jsx"
import ItemList from "../item-list/ItemList.jsx"

const ItemListContainer = ({ greeting }) =>{
    const [products, setProducts] = useState([])
    useEffect(()=>{
        getProducts()
            .then(response =>{
                setProducts(response)
            })
            .catch(error=>{
                console.error(error)
            })
    }, [])

    return(
        <div>
            <h1 className="fs-3 text-center mt-5 greeting ">{greeting}</h1>
            <ItemList products ={products}/>
        </div>
    )
}
export default ItemListContainer