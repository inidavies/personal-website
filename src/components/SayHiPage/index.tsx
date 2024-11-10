import ContactForm from "./contactForm";
import ContactLinks from "./contactLinks";

function SayHiPage() {
  return (
    <div id="sayHi" className="mypage alternate-page">
      <ContactForm />
      <ContactLinks />
    </div>
  );
}
export { SayHiPage };
