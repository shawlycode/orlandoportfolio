import './about.css'
import profile from '../../assets/proo.png'
import myPDF from '../../assets/orlandoResume.pdf'




const About = () => {




  return (
    <section id="about">

      <div className="container about__container">

        <div className="about__img"><img src={profile} alt="" /></div>
        <div className="about__content">
          <h2>About <span>Me</span></h2>
          <h4>Software Developer and Entrepreneur</h4>
          <p>With a deep passion for technology and over three years of experience as a software developer, I have demonstrated a strong commitment to innovation, technical excellence, and business acumen. Throughout my career, I have successfully developed fully functional  websites, acquired technical proficiency with entrepreneurial spirit to create impactful solutions  and ready to learn and unlearn. This portfolio serves as a testament to my skills, achievements, and passion for building transformative web solutions. My passion for technology drives me to teach and empower others, while my commitment to solving social problems fuels my desire to build impactful solutions.

          </p>
          <button className=" btn read-more__btn" >
            <a href={myPDF} download="../../assets/orlandoResume.pdf"> Download Resume </a>
          </button>
        </div>

      </div>


    </section>
  )
}

export default About
