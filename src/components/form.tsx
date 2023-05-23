import '../styles/form.css'

const Form = () => (
  <section id="contact">
    <p>
      I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
    </p>
    <form action="https://formspree.io/f/xlezzzkn" method="POST" id="contact-form">
      <input type="text" name="name" required placeholder="Write your Name" />
      <input type="email" name="email" required placeholder="Write your Email" />
      <textarea name="message" placeholder="Write your Message" />
      <div className="button-div">
        <button type="submit">
          <span />
          <span />
          <span />
          <span />
          Get in Touch
        </button>
      </div>
    </form>
  </section>
)

export default Form
