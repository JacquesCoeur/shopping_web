import '../App.css';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Navbar } from '../landingPage';
import logo from '../logo/shopping-logo.png'
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
          <div className='row'>
          <div className='col-4'></div>
          <img className="bigLogo" src={logo}/>
          <div className=''></div>
          </div>
        </div>

        <div className='container d-flex justify-content-end'>
            <div className='row'>
            <div className='col-1 itemChoice1'>
            </div>
            <div className='col-8'>
            <div className="card mb-1 border border-0">
            <div className="card-body bannerBody">
                <div>CIRCULOS! </div>
            </div>
            </div>
            </div>
            </div>
        </div>
        <div className='container d-flex justify-content-start'>
            <div className='col-1 itemList'>
            </div>
        <div className='row '>
            {products.map((value, i)=>{
                return(
                <div className="card col-10 border border-0 rounded-0">
                    <img src={value.img} className="card-img container-fluid" alt="..."></img>
                </div>)
                })}
        </div>
        </div>
    </div>    
  )
}
export default HomeWomen;