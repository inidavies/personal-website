export default function ContactForm() {
  return (
    <div id="contactLeft">
      <h2>contact me.</h2>
      <form className="contactForm">
        <div className="form-row row-top">
          <input className="forminput" placeholder="your name"></input>
          <input className="forminput" placeholder="your email"></input>
        </div>
        <div className="form-row row-bottom">
          <label className="messageLabel">your message</label>
          <textarea className="forminput"></textarea>
        </div>
        <button className="formbtn btn btn-primary" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
