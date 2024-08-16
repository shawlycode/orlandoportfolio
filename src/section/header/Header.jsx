import "./header.css"
import video from '../../assets/video.mp4';
import { TypeAnimation } from 'react-type-animation';
import data from '../header/data'



const Header = () => {

  return (
    <section id="header">
      <div className="container header__container">
        <div className="left__container">
          <p className="intro_p">Hello I'm</p>
          <h2>Kutina Thaddaeus <span> Orlando</span></h2>
          <div className="animated_text">
            <p>I am </p>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                ' a Software Developer',
                1000,
                'a  Freelancer',
                1000,
                'an Entrepreneur',
                1000,
              ]}
              speed={40}
              style={{ fontSize: '3em', fontFamily: "Righteous", fontWeight: "600" }}
              repeat={Infinity}
            />
          </div>
          <p className="header-text"> A dedicated software Developer with a strong foundation in modern web technologies and specialize in creating dynamic, responsive, and user-friendly web applications, with a passion for delivering high-quality and innovative solutions. Let's build something great together.</p>
          <div className="btn__container">
            <button className="btn"><a href="#contact">Hire Me</a></button>
            <button className="btn btn__white">Let's Collaborate</button>
          </div>
        </div>
        <div className="header__right-profile">
          <video src={video} loop={Infinity} autoPlay={true} width="100%" controls={false}
          />
        </div>
        <div className="header__socials">
          {data.map(item => <a href={item.link} key={item.id}>{item.icon}</a>)}
        </div>
      </div>
    </section >
  )
}

export default Header
