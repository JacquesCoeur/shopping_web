import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Banners1 = () => {
    const [products,setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/cercles")
            .then(response => response.json())
            .then(result => setProducts(result))
            .catch(error => console.log('ERROOOOOOR!', error));
    },[])
  return (
    <div className='banner1'>
        <div className='startLinks'><Link to="/jackets">Women</Link><Link>Men</Link><Link>Divided</Link><Link>Kids</Link><Link>Baby</Link><Link>HOME</Link><Link>Beauty</Link></div>
    </div>
  )
}

export const Banners2 = () => {
    return(
    <div className='banner2'>
        <div>SALE IS ON <br/>Up to 50% off!</div>
    </div>
    )
}


