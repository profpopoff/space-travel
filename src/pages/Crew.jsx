import React from 'react';

export default function Crew() {

   // * Import crew data from json file
   const crew = require('../assets/data.json').crew;
   //  * State that decides which crew info to show
   const [crewMember, setCrewMember] = React.useState(crew[0])

   // * Import crew images
   function importAll(r) {
      let images = {}
      r.keys().forEach(item => {images[item.replace('./', '')] = r(item)})
      return images
   }
   const images = importAll(require.context('../assets/crew', false, /\.(png|jpe?g|svg|webp)$/))

   // * Function that sets new crew
   const changeCrewMember = (newCrewMember) => setCrewMember(crew[newCrewMember])

   // * Radio button component
   const buttonElements = crew.map((crewMember, index) => (
      <div key={index}>
         <input 
            id={index}
            type="radio"
            name="crewMember"
            defaultChecked={crewMember.name === crew[0].name}
            onClick={() => changeCrewMember(index)}
         />
         <label htmlFor={index}><span className="sr-only">{`The ${crewMember.role}`}</span></label>
      </div>
   ))

   // * Crew page rendering
   return (
      <main className="grid-container grid-container--crew flow">
         <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>
  
         <div className="dot-indicators flex" role="tablist" aria-label="crew member list">
            {buttonElements}
         </div> 
         
         <article className="crew-details flow" id="crew-tab" role="tabpanel" tabIndex="0">
            <header className="flow flow--space-small">
            <h2 className="fs-600 ff-bell uppercase">{crewMember.role}</h2>
            <p className="fs-700 uppercase ff-bell">{crewMember.name}</p>
            </header>
            <p>{crewMember.bio}</p>
         </article> 
         
         <picture id="crew-image">
            <source srcSet={images[`image-${crewMember.name.replace(/ /g, '-').toLowerCase()}.webp`]} type="image/webp"></source>
            <img src={images[`image-${crewMember.name.replace(/ /g, '-').toLowerCase()}.png`]}></img>
         </picture>

      </main>
   )
}