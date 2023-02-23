import Pdf from "./../assets/documents/Resumen.pdf"
import '../styles/about.css'

const About = () => (
  <section id="about">
    <article id="presentation">
      <h2>About me</h2>
      <p>
        Hello I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
      </p>
      <button type="button" >
        <a href={Pdf} target="_blank">Download Pdf</a>
      </button>
    </article>
    <article>
      <ul>
        <h3>Language</h3>
        <li>Javascript</li>
        <li>Ruby</li>
        <li>Html</li>
        <li>Css</li>
        <li>TypeScript</li>
      </ul>
      <ul>
        <h3>Frameworks</h3>
        <li>Ruby on Rails</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>RSPec</li>
        <li>CapyBara</li>
        <li>Selenium</li>
      </ul>
      <ul>
        <h3>Skills</h3>
        <li>Codekit</li>
        <li>Github</li>
        <li>Codepen</li>
        <li>Gitlab</li>
        <li>Terminal</li>
      </ul>
    </article>
  </section>
)

export default About