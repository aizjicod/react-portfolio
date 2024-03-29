import '../styles/headline.css'
import imageToAdd from "./../assets/headline-img.png";
const Headline = () => (
  <section id="headlines">
    <div className="headlines-information">
      <h1 className="headlines-information__h1">
        <div className="typying-block">
          <span className="typying-effect" />
          <span className="h1-title">Hey there!!</span>
        </div>
        <span className="h1-title">I'm Alejandro</span>
      </h1>
      <p className="headline-para">
        I'm a Software Developer
      </p>
      <p className="headline-para">
      I can help you build a product, feature or website Look through some of my work and
        experience! If you like what you see and have a project you need coding,
        don’t hesitate to contact me.</p>
    </div>
    <div className="social-media">
      <ul className="social-icons">
        <li><a href="https://github.com/aizjicod" target="_blank"><i className="fa fa-github"></i></a></li>
        <li><a href="https://twitter.com/aizijijr" target="_blank"><i className="fa fa-twitter"></i></a></li>
        <li><a href="https://www.linkedin.com/in/aiziji/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
        <li><a href="https://medium.com/@aletv1501" target="_blank"><i className="fa fa-medium"></i></a></li>
        <li><a href="https://angel.co/u/aiziji" target="_blank"><i className="fa fa-angellist"></i></a></li>
      </ul>
      <img src={imageToAdd} alt="person animated coding" id="headline-img" />
    </div>
  </section>
)
export default Headline
