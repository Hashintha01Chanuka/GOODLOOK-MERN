import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const LatestCollection = () => {
 
     const { products } = useContext(ShopContext);
     const [latestProducts, setLatestProducts] = useState([]);

     useEffect(()=>{
       setLatestProducts(products.slice(0,10));
     },[] )
 
     
     
 
 return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={"LATEST"}  text2={"COLLECTION"} />
            <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>This is our new products</p>
        </div>
      
    </div>
  )
}

export default LatestCollection
