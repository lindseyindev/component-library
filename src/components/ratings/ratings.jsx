import './ratings.css'
import {ReactComponent as StarSvg} from './assets/icon-star.svg';



 const Ratings = (props) => {






return (

<div class="darkest-blue-background wrapper">

{/* <!-- Rating state start --> */}
<section className="white-text rating-wrapper">
<div className="star-container"><StarSvg /></div>
  <h3 className=""> How did we do?</h3>
  <p className="grey-text"> Please let us know how we did with your support request. All feedback is appreciated
    to help us improve our offering!</p>

  <p className="rating-bubble-wrapper"><span className="grey-text rating-bubble"> 1</span>
    <span className="grey-text rating-bubble"> 2</span>
    <span className="grey-text rating-bubble">3</span>
    <span className="grey-text rating-bubble"> 4</span>
    <span className="grey-text rating-bubble"> 5</span>
  </p>

  <button className="submit-button">Submit</button>
{/* 
  <!-- Rating state end --> */}

  {/* <!-- Thank you state start --> */}

  <p>You selected</p>
  {/* <!-- Add rating here --> out of 5 */}

  <p>Thank you!</p>

  <p className="grey-text">We appreciate you taking the time to give a rating. If you ever need more support,
  don’t hesitate to get in touch!</p>

  {/* <!-- Thank you state end --> */}

</section>
<div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>
  Coded by <a href="https://lindseyin.dev" target="_blank">Lindsey in Dev</a>
</div>
</div>







)

}

export default Ratings