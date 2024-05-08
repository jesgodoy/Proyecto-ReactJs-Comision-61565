import './ItemDetailContainer.css'
import { useStat, useEffect, useState } from 'react'
import { getProductById } from '../../products.jsx'
import ItemDetail from '../item-detail/ItemDetail.jsx'

const ItemDetailContainer =()=>{
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById("1")
            .then(response => {
                setProduct(response)
            })
            .catch(error=>{
                console.error(error)
            })
    },[])
    
    return(
        <div className='container container-detail m-5 border border-primary'>
            <ItemDetail {...product}/>
        </div>
        
    )
}
export default ItemDetailContainer