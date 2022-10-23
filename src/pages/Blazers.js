import '../App.css';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


const Blazers = () => {
    const [products,setProducts] = useState([])
    const [favProd, setFavProd] = useState([])

    const addFavProd = (products) => {
        const newFavProd = [...favProd, products]
        setFavProd(newFavProd)
        console.log(favProd)

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
            <Link><ul>Trousers & Leggings</ul></Link>
            <Link><ul>Jeans</ul></Link>
            <Link><ul>Shirts & Blouses</ul></Link>
            <Link><ul>Sweatshirts & Hoodies</ul></Link>
            <Link><ul>Skirts</ul></Link>
            <Link><ul>Loungewear</ul></Link>
            <Link><ul>Nightwear</ul></Link>
            </div>
        <div className='row '>
            {products.map((value, i)=>{
                
                return(
                <div key={i} className="card col-3 border border-0 rounded-0">
                    <img src={value.img} className="card-img-top container-fluid zoom" alt="..."></img>
                    <div className="card-body container row cardContainer">
                        <h6 className="card-title title col-10 cardTittle"><p className='cardTittleText' key={i}>{value.name}</p></h6>
                        <span className="likebutton col-2">
                            <svg onClick={()=> addFavProd(value)} xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            fill="currentColor" 
                            className="like bi bi-heart" 
                            viewBox="0 0 16 16">               
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                        </span>
                        <p className="card-text  price ">Price {value.price} €</p>

                    </div>
                </div>)
                })}
        </div>
        </div>
    </div>    
  )
}
export default Blazers;