import React from 'react'
import {BrowserRouter as Link} from 'react-router-dom';
import Home from '../pages/home'
import About from '../pages/about'
import Store from '../pages/store'
import Contact from '../pages/contact'


class Navbar extends React.Component{
    render(){
    return(
        <div>
        <nav>
            <ul>
                <Link to = '/'>
                <li><a href ='/'>Home</a></li></Link>
                <Link to = '/about'>
                <li><a href ="/about">About</a></li></Link>
                <Link to = '/store'>
                <li><a href ="/store">Store</a></li></Link>
                <Link to = '/contact'>
                <li><a href ="/contact">Contact</a></li></Link>

            </ul>
        </nav>
        </div>
    )
}
}
export default Navbar;