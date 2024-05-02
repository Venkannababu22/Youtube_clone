import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    //The useSelector hook is a feature provided by the React-Redux library 
    //that allows React components to access the state stored in a Redux store.

    // we are subscribing he store here which we created.

    // when we clicked the sidebarmenu, an action is dispatched => calls a reducer functon =>
    // which modifies the slice of our redux store => sidebar component hasbeen subscribed to our redux store ==> automatically updated 
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    // Early return pattern
    if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-32'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Vedio</li>
            <li>Live</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Songs</li>
            <li>Movies</li>
            <li>Sports</li>
            <li>Gaming</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Layer</h1>
        <ul>
            <li>Songs</li>
            <li>Movies</li>
            <li>Sports</li>
            <li>Gaming</li>
        </ul>
    </div>
  )
}

export default Sidebar
