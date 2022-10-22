import './App.css';
import React, { useEffect, useState } from 'react'
import logo from './logo/shopping-logo.png'
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div>
        <div>
        <nav className="navbar navbar-light fixed-top">
        <div className="container-fluid">
            <img className="logo" src={logo}/>
            <div className='d-flex justify-content-end'>
            <a className='liked'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg> Favourites</a>
            <a className='bag'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg> Shopping Bag</a>
              </div>

        </div>
        </nav>


        </div>
    </div>
  )
}
export const Logo = () => {
  return(
      <div className='container'>
        <Link to="/">  <div className='row'>
          <div className='col-5'></div>
          <img className="bigLogo" src={logo}/>
          <div className=''></div>
          </div></Link>
    </div>
  )
}
export const BeMember = () => {
  return(
    <div className='container'>
    <div className='row'>
      <div className='col-2 saleIsOn'>SALE IS ON <br/>Up to 50% off!</div>
      <div className='col-10'>
      <div className="card mb-1 border border-0">
      <div className='banner'><h5 className='h5'>Members get free delivery and 10% on the first purchase.<br/>Not a member yet? Join now, it's free!</h5></div>
      </div>
      </div>
      </div>
    </div>
  )
}

export const PrincipalCard = () => {
  return (
    <div className='container d-flex justify-content-end'>
      <div className='row'>
        <div className='col-2 itemChoice1'>
          <ul>Women</ul>
          <ul>Casual-Chic</ul>
          <ul>Kids</ul>
          <ul>Men</ul>
          <ul>Beauty</ul>
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
  )
}

export const Footer = () => {
  return (
    <div>
        <footer className="text-muted py-5 footer">
        <div>
            <p className="float-end mb-2">
            <a href="#">Back to top</a>
            </p>
            <p className="mb-1">TEXT !!</p>
            <p className="mb-0">MORE TEXT <a href="/">We are under</a> OOOR <a href="/docs/5.0/getting-started/introduction/">and orr!</a>.</p>
        </div>
        </footer>
    </div>
  )
}


