import React from 'react';
import { ProductsTypo } from '../../constants/ProductsTypo';

// CancelOrder - onClick ->  orderedProductsKey -> patch -> products with this id -> delete
// name ,qty, size, image, price, delivered, 

type Props = {
    prod: ProductsTypo
}
const OrderedProductsCard = ({prod}: Props) => {

    return <div>
        {prod.delivered}
    </div>
}


export default OrderedProductsCard