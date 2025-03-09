import ContactForm from "./contactForm";
import ContactLinks from "./contactLinks";

function SayHiPage() {
  return (
    <div id="sayHi" className="mypage alternate-page">
      <div className="sayHi_inner">
        <ContactForm />
        <ContactLinks />
      </div>
    </div>
  );
}
export { SayHiPage };
