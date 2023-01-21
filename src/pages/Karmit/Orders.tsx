import React, { useEffect } from 'react'
import OrderedProductsCard from '../../components/Order/OrderedProductsCard'
import { getProfile } from '../../redux/actions/ProfileAction'
import { useAppDispatch, useAppSelector } from '../../redux/store'

type Props = {}

const Orders = (props: Props) => {
  const dispatch: any = useAppDispatch()
  const {profile} = useAppSelector(store => store.profileManager)
  console.log(profile)

  useEffect(() => {
    dispatch(getProfile("amaansidp@gmail.com", "Aman!234"))
  }, [])
  return (
    <div>
      <div></div>
      <div>
      {
        profile[0].orderedProducts?.map((prod) => {
          return <OrderedProductsCard key={prod.id} prod={prod} />
        })
      }

      </div>
    </div>
  )
}

export default Orders