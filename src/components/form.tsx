const Form = () => (
<section id="form">
  <div>
    I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
    </div>
  <div>
<form action="https://formspree.io/f/xlezzzkn" method="POST" id="contact-form">
  <input type="text" name="name" required placeholder="Write your Name"/>
  <input type="email" name="email" required placeholder="Write your Email"/>
  <textarea name="message" placeholder="Write your Message"/>
  <button type="submit">Get in Touch</button>
</form>
  </div>
</section>
)

export default Form