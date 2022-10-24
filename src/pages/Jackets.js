import '../App.css';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Products from './Products';

const Jackets = () => {
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
        fetch("http://localhost:8080/women/jacketsandcoats")
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
                <h1 className="card-title pageTittleProduct">JACKETS & COATS FOR WOMEN</h1>
                <p className="card-text pageTextProduct">Stay stylish and stand up to cold weather with our edit of women’s coats and jackets. In search of something lightweight? Browse our biker, suede and denim jackets for an uber-cool, relaxed look. And when it comes to those wintery days, try on our practical parkas, trench and wool coats to stay warm. Whatever your style, layer up your look with neat, oversized, long or short options.</p>
            </div>
            </div>
            </div>
            </div>
        </div>
        <div className='container d-flex justify-content-end'>
            <div className='col-2 itemList'>
            <Link to="/"><ul className='itemsTitle'><h5>Women</h5></ul></Link>
            <Link to="/blazers"><ul>Blazers</ul></Link>
            <Link><ul>Jackets & Coats</ul></Link>
            <Link to="/boots"><ul>Boots</ul></Link>
            <Link><ul>Trousers & Leggings</ul></Link>
            <Link><ul>Jeans</ul></Link>
            <Link><ul>Shirts & Blouses</ul></Link>
            <Link><ul>Sweatshirts & Hoodies</ul></Link>
            <Link><ul>Skirts</ul></Link>
            <Link><ul>Loungewear</ul></Link>
            <Link><ul>Nightwear</ul></Link>
            </div>
            <Products 
                products={products} 
                favProd={addFavProd}
            />
        </div>
    </div>    
  )
}
export default Jackets;