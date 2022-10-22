import '../App.css';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


const Cercles = () => {
    const [products,setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/cercles")
            .then(response => response.json())
            .then(result => setProducts(result),
            console.log(products))
            .catch(error => console.log('ERROOOOOOR!', error));
    },[])
  return (
    <div className='cerclesBar'>
        {products.map((value, i)=>{
            return(
                    <img src={value.img} className="img-thumbnail imgcercle" alt="..."/>)
            })}     
    </div>
  )
}

export default Cercles