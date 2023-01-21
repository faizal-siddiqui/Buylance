import React from 'react';
import { ProductsTypo } from '../../constants/ProductsTypo';
import "./order.css";
// CancelOrder - onClick ->  orderedProductsKey -> patch -> products with this id -> delete
// name ,qty, size, image, price, delivered, 

type Props = {
    prod: ProductsTypo,
    handleCancelOrder: (id: number) => void
}
const OrderedProductsCard = ({prod, handleCancelOrder}: Props) => {


   

    return <div>
        {
            <div className='order-summary-card'>
            <img className='order-image' src={prod.images[0]} alt="alt_img" />

            <h2 className='order-name'>{prod.name}</h2>
            <p className='quantity'>Quantity: {prod.qty}</p>
            <p className='size'>Size: {prod.sizes}</p>
            <p className='price'>Price: {prod.price}</p>
            <h1 className='order-status'>Delivery status: {prod.delivered===true?"Delivered":"Pending"}</h1>
<h1 className='cancel-order' onClick={() =>handleCancelOrder(prod.id)}>Cancel Order</h1>

            </div>
        }
    </div>
}


export default OrderedProductsCard