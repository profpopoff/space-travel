import { Link } from 'react-router-dom'

export default function Homepage() {
   return (
      <main id="main" className="grid-container grid-container--home">
         <div>
            <h1 className="text-accent fs-500 ff-bar-cond uppercase letter-spacing-1">So, you want to&nbsp;travel&nbsp;to
            <span className="d-block fs-900 ff-bell text-white">Space</span></h1>
            <p>Let&rsquo;s face&nbsp;it; if&nbsp;you want to&nbsp;go&nbsp;to&nbsp;space, you might as&nbsp;well genuinely go&nbsp;to outer space and not hover kind of&nbsp;on&nbsp;the edge of&nbsp;it. Well sit back, and relax because we&rsquo;ll give you a&nbsp;truly out of&nbsp;this world experience!</p>
         </div>
         <div>
            <Link to={process.env.PUBLIC_URL + '/destination'} className="large-button uppercase ff-bell text-dark bg-white">Explore</Link>
         </div>
      </main>
   )
}