import './ItemDetailContainer.css'
import { useStat, useEffect, useState } from 'react'
import { getProductById } from '../../products.jsx'
import ItemDetail from '../item-detail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'

const ItemDetailContainer =()=>{
    const [product, setProduct] = useState(null)

    const {itemId} = useParams ()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error=>{
                console.error(error)
            })
    },[itemId])
    
    return(
        <div className='container container-detail m-5 border border-primary'>
            <ItemDetail {...product}/>
        </div>
        
    )
}
export default ItemDetailContainer