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
          <p>
            Passionate for technology with a growth mindset to persevere in the technology field, I have horn my skills  in building functional websites using the latest industry tools. I am dedicated to learning and adapting to new challenges.   This portfolio showcases my work and journey and highlighting skills. I am driven to teach and empower others, and my desire to use technology to solve social problems motivates me to keep building impactful projects.
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
