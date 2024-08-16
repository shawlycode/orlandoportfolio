import './portfolio.css'
import pronet from '../../assets/pronetNorth.jpg'
import doing from '../../assets/doingchristain.jpg'
import intuit from '../../assets/intuit.jpg'
import tinkcode from '../../assets/tinkcode.jpg'
import dopel from '../../assets/dopel.jpg'
import kliq from '../../assets/kliq.jpg'
import { FaLink } from "react-icons/fa6";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Portfolio</h5>
      <h2>Latest <span>Projects</span></h2>

      <div className="portfolio-content">
        <div className="row">
          <img src={dopel} alt="" />
          <div className="layer">
            <h2>
              A web app to create a  portfolio. A collaborated project by Team DOPEL still in progress
            </h2>
            <div className="link">
              <a href="https://dopel.netlify.app/"><FaLink /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={pronet} alt="" />
          <div className="layer">
            <h2>
              Pronet North an NGO for sustainable development
            </h2>
            <div className="link">
              <a href="https://pronetnorthgh.org/"><FaLink /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={doing} alt="" />
          <div className="layer">
            <h2>
              A christian E-commence website to get all christian books
            </h2>
            <div className="link">
              <a href="https://doingchristian.com/"><FaLink /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={intuit} alt="" />
          <div className="layer">
            <h2>
              A digital agency platform that offers services on web development
            </h2>
            <div className="link">
              <a href="https://intuittech.io/"><FaLink /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={tinkcode} alt="" />
          <div className="layer">
            <h2>
              TinkCode Africa A codding Hub to empower youth in rural areas with tech skills
            </h2>
            <div className="link">
              <a href="https://tinkcodeafrica.netlify.app/"><FaLink /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={kliq} alt="" />
          <div className="layer">
            <h2>
              A  random color code generator for developers. Still in progress but usable.
            </h2>
            <div className="link">
              <a href="https://kliqrandomcolorcode.netlify.app/"><FaLink /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
