import React from 'react';

export default function Technology() {

   // * Import technology data from json file
   const technology = require('../assets/data.json').technology;
   //  * State that decides which tech info to show
   const [tech, setTech] = React.useState(technology[0])
 
   // * Import technology images
   function importAll(r) {
      let images = {}
      r.keys().forEach(item => {images[item.replace('./', '')] = r(item)})
      return images
   }
   const images = importAll(require.context('../assets/technology', false, /\.(png|jpe?g|svg|webp)$/))

   // * Function that sets new technology
   const changeTech = (newTech) => setTech(technology[newTech])

   const buttonElements = technology.map((tech, index) => (
      <div key={index}>
         <input 
            id={index}
            type="radio"
            name="tech"
            defaultChecked={tech.name === technology[0].name}
            onClick={() => changeTech(index)}
         />
         <label className="fs-300 uppercase ff-bar-cond" htmlFor={index}>{index + 1}</label>
      </div>
   ))

   // * Technology page rendering
   return (
      <main className="grid-container grid-container--technology flow">
         <h1 className="numbered-title"><span aria-hidden="true">03</span> Space launch 101</h1>

         <div className="numbered-indicators flex" role="tablist" aria-label="technology list">
            {buttonElements}
         </div> 
         <article className="technology-info flow" id="technology-tab" role="tabpanel" tabIndex="0">
            <header className="flow flow--space-small">
            <h2 className="fs-300 uppercase ff-bar-cond letter-spacing-2 text-accent">The terminology...</h2>
            <p className="fs-700 uppercase ff-bell">{tech.name}</p>
            </header>
            <p> {tech.description}</p>
         </article>
         
         <picture id="technology-image">
            <img className="portrait" src={images[`image-${tech.name.replace(/ /g, '-').toLowerCase()}-portrait.jpg`]}></img>
            <img className="landscape" src={images[`image-${tech.name.replace(/ /g, '-').toLowerCase()}-landscape.jpg`]}></img>
         </picture>
        
      </main>
   )
}