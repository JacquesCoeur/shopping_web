import '../App.css';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Navbar } from '../landingPage';
import logo from '../logo/shopping-logo.png'
import Cercles from './Cercles';
import { Banners1, Banners2 } from './Banners';

const HomeWomen = () => {
    const [products,setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080")
            .then(response => response.json())
            .then(result => setProducts(result))
            .catch(error => console.log('ERROOOOOOR!', error));
    },[])
  return (
    <div>
        <Navbar/>
        <div className='container'>
        <div className='container w-75'>
          <div className='row'>
          <div className='col-4'></div>
          <img className="bigLogo " src={logo}/>
          <div className=''></div>
          </div>
        </div>
        </div>

        <div className='justify-content-center'>
            <div className='row'>
            <div className='col-1 itemChoice1'>
            </div>
            <div className='col-10'>
            <div className="card mb-1 border border-0">
            <div className="card-body">
                <Banners2/>
            </div>
            </div>
            </div>
            </div>
        </div>
        <div className='container d-flex justify-content-center'>
            <div className='col-10'>
            <div className='row'>

            {products.map((value, i)=>{
                return(
                        
                        <div className='col-4 pe-0 ps-0 img__wrap'>
                            <Link to={value.to}><img src={value.img} className="card-img-top container-fluid img__img zoom" alt="..."/></Link>
                            <p className='img__description'>{value.name}</p>
                        </div>)
                })}
            </div>
            </div>
        </div>
    </div>    
  )
}
export default HomeWomen;