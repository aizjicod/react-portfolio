import '../styles/headline.css'

const Headline = () => (
  <section id="headlines">
    <div className="headlines-information">
      <h1 className='headlines-information__h1'>
        <div className='typying-block'>
        <span className='typying-effect' />
        <span className='h1-title'>Hey there!!</span>
        </div>
        I'm Alejandro Torres
      </h1>
      <p className='headline-para'>
        I'm a Software Developer
      </p>
      <p className="headline-para">
        I can help you build a product , feature or website Look through some of my work and
        experience! If you like what you see and have a project you need coded,
        don’t hestiate to contact me.</p>
    </div>
    <img src='#' alt='person animated coding' />
  </section>
)
export default Headline