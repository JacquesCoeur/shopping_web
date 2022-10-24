import '../App.css';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Products from './Products';

const Boots = () => {
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
        fetch("http://localhost:8080/women/boots")
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
                <h1 className="card-title pageTittleProduct">BOOTS FOR WOMEN</h1>
                <p className="card-text pageTextProduct">It’s no secret that a decent pair of boots are essential for every woman’s shoe-drobe. Frosty winter mornings call for chunky platform boots, with skinny jeans or leggings tucked in and a cosy teddy coat over the top. A pair of brown knee high boots will add some glamour to your daytime outfit, worn over jeans, or paired with a midi skirt and leather jacket.</p>
            </div>
            </div>
            </div>
            </div>
        </div>
        <div className='container d-flex justify-content-end'>
            <div className='col-2 itemList'>
            <Link to="/"><ul className='itemsTitle'><h5>Women</h5></ul></Link>
            <Link to="/blazers"><ul>Blazers</ul></Link>
            <Link to="/jackets"><ul>Jackets & Coats</ul></Link>
            <Link><ul>Boots</ul></Link>
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
export default Boots;