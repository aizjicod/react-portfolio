import Pdf from "./../assets/documents/Resumen.pdf"

const About = () => (
  <section id="about">
    <article>
      <h2>About me</h2>
      <p>
        Hello I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
      </p>
      <button type="button" >
        <a href={Pdf} target="_blank">Download Pdf</a>
      </button>
    </article>
  </section>
)

export default About