import Pdf from "./../assets/documents/Resumen.pdf"
import '../styles/about.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"

const About = () => {
  AOS.init();
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = () => setIsDesktop(!!mql.matches);

    mql.addListener(onChange);
    setIsDesktop(mql.matches);

    return () => mql.removeListener(onChange);
  }, []);

  return (
    <section id="about">
      <article id="presentation" data-aos={isDesktop ? "fade-up" : ""} data-aos-offset={isDesktop ? "300" : ""}
        data-aos-easing={isDesktop ? "ease-in-sine" : ""}>
        <h2>About me</h2>
        <p>
          I love building new and innovative solutions for the Web while solving all kinds of challenges that come along with the tasks.
          I've also spent much time completely immersed in remote development with people from different , developing from landing pages to using APIs.
        </p>
        <div className="button-div">
          <button type="button" >
            <a href={Pdf} target="_blank" rel="noreferrer">Get My Resume</a>
          </button>
        </div>
      </article>
      <article id="skills">
        <ul className="language" data-aos={isDesktop ? "flip-left" : ""} data-aos-duration={isDesktop ? "500" : ""} data-aos-offset={isDesktop ? "300" : ""}
          data-aos-easing={isDesktop ? "ease-in-sine" : ""}>
          <h3>Language</h3>
          <li>Javascript</li>
          <li>Ruby</li>
          <li>Html</li>
          <li>Css</li>
          <li>TypeScript</li>
        </ul>
        <ul className="frameworks" data-aos={isDesktop ? "flip-left" : ""} data-aos-duration={isDesktop ? "500" : ""} data-aos-offset={isDesktop ? "300" : ""}
          data-aos-easing={isDesktop ? "ease-in-sine" : ""} data-aos-delay={isDesktop ? "300" : ""}>
          <h3>Frameworks</h3>
          <li>Ruby on Rails</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>RSPec</li>
          <li>CapyBara</li>
          <li>Selenium</li>
        </ul>
        <ul className="skills" data-aos={isDesktop ? "flip-left" : ""} data-aos-duration={isDesktop ? "500" : ""} data-aos-offset={isDesktop ? "300" : ""}
          data-aos-easing={isDesktop ? "ease-in-sine" : ""} data-aos-delay={isDesktop ? "600" : ""}>
          <h3>Skills</h3>
          <li>Codekit</li>
          <li>Github</li>
          <li>Codepen</li>
          <li>Gitlab</li>
          <li>Terminal</li>
          <li>Pair-Programming</li>
          <li>Mentoring</li>
        </ul>
      </article>
    </section>
  )
}

export default About