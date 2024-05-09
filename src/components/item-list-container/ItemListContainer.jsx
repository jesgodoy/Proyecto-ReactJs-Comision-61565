import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../products.jsx"; 
import ItemList from "../item-list/ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [categoryId]);

    return (
        <div>
            <h1 className="fs-3 text-center mt-5 greeting">{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
