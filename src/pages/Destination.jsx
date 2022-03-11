import React from 'react';

export default function Destination() {

   // * Import destinations data from json file
   const destinations = require('../assets/data.json').destinations;
   //  * State that decides which planet info to show
   const [destination, setDestination] = React.useState(destinations[0])
   
   // * Import destinations images
   function importAll(r) {
      let images = {}
      r.keys().forEach(item => {images[item.replace('./', '')] = r(item)})
      return images
   }
   const images = importAll(require.context('../assets/destination', false, /\.(png|jpe?g|svg|webp)$/))

   // * Function that sets new destination
   const changeDestination = (newDestination) => setDestination(destinations[newDestination])

   // * Radio button component
   const buttonElements = destinations.map((destination, index) => (
      <div key={index}>
         <input 
            id={index}
            type="radio"
            name="destination"
            defaultChecked={destination.name === destinations[0].name}
            onClick={() => changeDestination(index)}
         />
         <label className="uppercase ff-bar-cond text-accent letter-spacing-2" htmlFor={index}>{destination.name}</label>
      </div>
   ))

   // * Destination page rendering
   return (
      <main className="grid-container grid-container--destination flow">
         <h1 className="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>
         
         <picture id="moon-image">
            <source srcSet={images[`image-${destination.name.toLowerCase()}.webp`]} type="image/webp"></source>
            <img src={images[`image-${destination.name.toLowerCase()}.png`]} alt="the moon"></img>
         </picture>
         
         <div className="tab-list underline-indicators flex" aria-label="destination list">
            {buttonElements}
         </div>

         <article className="destination-info flow" id="destination-tab" tabIndex="0" role="tabpanel">
            <h2 className="fs-800 uppercase ff-bell">{destination.name}</h2>

            <p>{destination.description}</p>
            
            <div className="destination-meta flex">
               <div>
                  <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
                  <p className="ff-bell uppercase">{destination.distance}</p>
               </div>
               <div>
                  <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
                  <p className="ff-bell uppercase">{destination.travel}</p>
               </div>
            </div>
         </article>
      </main>
   )
}