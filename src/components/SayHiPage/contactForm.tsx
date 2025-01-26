import emailjs from "@emailjs/browser";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const NAME = process.env.NAME;

export default function ContactForm() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [sentStatus, setSentStatus] = useState(false);

  function resetFields() {
    if (sentStatus) {
      // reset all fields if the message was sent
      setSenderName("");
      setSenderEmail("");
      setMessage("");
    }
  }

  const handleClose = () => {
    setShowAlert(false);
    resetFields();
    if (!showAlert) {
      // so that the falsy message does not show while the dialog is visible
      setSentStatus(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

      const templateParams = {
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
          setSentStatus(true);
          setShowAlert(true);
        },
        (error) => {
          console.log("failed to send email.", error);
          setSentStatus(false);
          setShowAlert(true);
        }
      );
    }
  };
  return (
    <div id="contactLeft">
      <h2>say hi.</h2>
      <form onSubmit={handleSubmit} className="contactForm">
        <div className="form-row row-top">
          <input
            type="text"
            minLength={3}
            className="forminput"
            placeholder="your name"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            required
          ></input>
          <input
            type="email"
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
            minLength={3}
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

      <Modal id="submittedPopup" show={showAlert}>
        {sentStatus ? (
          <>
            <Modal.Header>
              <p>Message Sent</p>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
          </>
        ) : (
          <Modal.Header>
            <p>Message Not Sent</p>
          </Modal.Header>
        )}
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
