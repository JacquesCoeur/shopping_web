import React from 'react'

const Products = (props) => {
    const products = props.products;
    const addFavProd = props.favProd;

    
    
  return (
    <div>
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
  )
}

export default Products