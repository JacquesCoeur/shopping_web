import '../App.css';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Products from './Products';
import Favourites from './Favourites';


const Blazers = () => {
    const [products,setProducts] = useState([])
    const [favProd, setFavProd] = useState([])

    const addFavProd = (products) => {
        const newFavProd = [...favProd, products]
        setFavProd(newFavProd)
        saveToLocalStorage(newFavProd)
        console.log(favProd)
    }
    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-shopping-app-favourites', JSON.stringify(items))
    }
    useEffect(() => {
        console.log(products)
        console.log(favProd)
        fetch("http://localhost:8080/women/blazers")
            .then(response => response.json())
            .then(result => setProducts(result))
            .catch(error => console.log('ERROOOOOOR!', error));
    },[])
  return (
    <div>
        <div className='container d-flex justify-content-end'>
            <div className='row'>
            <div className='col-2 itemChoice1'>
                <Link><ul>Women</ul></Link>
                <Link><ul>Casual-Chic</ul></Link>
                <Link><ul>Kids</ul></Link>
                <Link><ul>Men</ul></Link>
                <Link><ul>Beauty</ul></Link>
            </div>
            <div className='col-8'>
            <div className="card mb-1 border border-0">
            <div className="card-body bannerBody">
                <h1 className="card-title pageTittleProduct">WOMEN'S BLAZERS</h1>
                <p className="card-text pageTextProduct">A blazer is bound to be one of the most understated pieces in your wardrobe, adding just the right level of sophistication to any outfit. Whether you opt for a classic cut in black or navy or a trendy oversized blazer in cosy tweeds or checks, it's an easy garment to dress up or down. Smarten up your work look or throw it on with jeans for the weekend – a blazer is perfect for any occasion.</p>
            </div>
            </div>
            </div>
            </div>
        </div>
        <div className='container d-flex justify-content-end'>
            <div className='col-2 itemList'>
            <Link to="/"><ul className='itemsTitle'><h5>Women</h5></ul></Link>
            <Link><ul>Blazers</ul></Link>
            <Link to="/jackets"><ul>Jackets & Coats</ul></Link>
            <Link to="/boots"><ul>Boots</ul></Link>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    fill="red"
                    className="favHeart"
                    viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
            </div>
            </div>
            <Products 
                products={products} 
                favProd={addFavProd}
            />
        </div>
    </div>    
  )
}
export default Blazers;