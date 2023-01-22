import { Grid } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../../redux/store'
import AdminCard from './AdminCard'


const AdminProducts = () => {
  const {products}= useAppSelector((store)=>store.productManager)
  return (
    <> 
      <Grid templateColumns={{sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',xl:'repeat(4, 1fr)'}} gap={4}>
        {products?.map((item)=><AdminCard id={item.id} image={item.images[0]} brand={item.brand} name={item.name} mrp={item.mrp} price={item.price}/>)}
      </Grid>
      <Grid  templateColumns={{sm:'repeat(1, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)'}} gap={4}>
      {[1,2,3,4,5,6,7,8,9,12].map((el)=><AdminCard id={1}
       image={"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20693806/2022/11/10/4ab8a0a2-046d-41f4-a432-4a38a033b6b11668079449651MenMaroonStripePoloNeckPoloT-Shirts2.jpg"}
       brand={"XYZ"} name={"ABC"} mrp={1400} price={999}/>)}
       </Grid>
    </>
  )
}

export default AdminProducts