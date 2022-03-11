import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

import mainLogo from '../../assets/shared/logo.svg'
import closeIcon from '../../assets/shared/icon-close.svg'
import menuIcon from '../../assets/shared/icon-hamburger.svg'

export default function Header(props) {

   // * State that shows or hides burger menu
   const [showBurger, setShowBurger] = React.useState(false)

   // * Function that toggles showBurger state
   const toggleBugrer = () => setShowBurger(!showBurger)
   
   // * Detects Header component (ref={ref})
   const ref = React.useRef(null);

   // * Detects click outside Header component
   React.useEffect(() => {
      const checkIfClickedOutside = e => {
         if (showBurger && ref.current && !ref.current.contains(e.target)) {
            toggleBugrer()
         }
      }
      document.addEventListener("mousedown", checkIfClickedOutside)
      return () => {
         document.removeEventListener("mousedown", checkIfClickedOutside)
      }
   }, [showBurger])

   // * Toggles menu icon
   const styles = {
      backgroundImage: showBurger ? `url(${closeIcon})` : `url(${menuIcon})`
   }

   // * Function that undelines the chosen link (try to make it with navlink)
   const activeTab = tabLink => window.location.pathname === `/${tabLink}` ? "active" : ""

   // * Header rendering
   return (
      <header className="primary-header flex">
         <div>
            <Link to="/"><img src={mainLogo} alt="space tourism logo" className="logo"></img></Link>
         </div>
         <nav ref={ref}>
            <button className="mobile-nav-toggle" onClick={toggleBugrer} style={styles}><span className="sr-only" >Menu</span></button>
            <ul data-visible={showBurger} className="primary-navigation underline-indicators flex">
               <li className={activeTab("")} >
                  <Link className="primary-navigation--link ff-sans-cond uppercase text-white letter-spacing-2" to="/" onClick={toggleBugrer}>
                     <span aria-hidden="true">00</span>Home
                  </Link>
               </li>
               <li className={activeTab("Destination")} >
                  <Link className="primary-navigation--link ff-sans-cond uppercase text-white letter-spacing-2" to="/Destination" onClick={toggleBugrer}>
                     <span aria-hidden="true">01</span>Destination
                  </Link>
               </li>
               <li className={activeTab("Crew")} > 
                  <Link className="primary-navigation--link ff-sans-cond uppercase text-white letter-spacing-2" to="/Crew" onClick={toggleBugrer}>
                     <span aria-hidden="true">02</span>Crew
                  </Link>
               </li>
               <li className={activeTab("Technology")} >
                  <Link className="primary-navigation--link ff-sans-cond uppercase text-white letter-spacing-2" to="/Technology" onClick={toggleBugrer}>
                     <span aria-hidden="true">03</span>Technology
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   )
}