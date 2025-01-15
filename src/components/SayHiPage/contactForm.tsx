import emailjs from "@emailjs/browser";
import { useState } from "react";

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const NAME = process.env.NAME;

export default function ContactForm() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    // prevents default behavior like refreshing the whole page
    event.preventDefault();

    if (senderName !== "" && senderEmail !== "" && message !== "") {
      const options = {
        publicKey: PUBLIC_KEY,
        blockHeadless: true, // Do not allow headless browsers
        blockList: {},
        limitRate: {
          // Set the limit rate for the application
          id: "app",
          // Allow 1 request per 10s
          throttle: 10000,
        },
      };
      emailjs.init(options);

      var templateParams = {
        from_name: senderName,
        from_email: senderEmail,
        to_name: NAME,
        message: message,
      };

      emailjs.send("ini-davies", "personal-site-contact", templateParams).then(
        (response) => {
          console.log(
            "email sent successfully",
            response.status,
            response.text
          );
        },
        (error) => {
          console.log("failed to send email.", error);
        }
      );

      alert("Submitted");

      // reset all fields
      setSenderName("");
      setSenderEmail("");
      setMessage("");
    } else {
      alert("Not Submitted!");
    }
  };
  return (
    <div id="contactLeft">
      <h2>say hi.</h2>
      <form onSubmit={handleSubmit} className="contactForm">
        <div className="form-row row-top">
          <input
            className="forminput"
            placeholder="your name"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            required
          ></input>
          <input
            className="forminput"
            placeholder="your email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            required
          ></input>
        </div>
        <div className="form-row row-bottom">
          <label className="messageLabel">your message</label>
          <textarea
            className="forminput"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button className="formbtn btn btn-primary" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
