import ContactForm from "./contactForm";
import ContactLinks from "./contactLinks";
import Footer from "./pageFooter";

function SayHiPage() {
  return (
    <div id="sayHiContainer">
      <div id="sayHi" className="mypage alternate-page">
        <ContactForm />
        <ContactLinks />
      </div>
      <Footer />
    </div>
  );
}
export { SayHiPage };
