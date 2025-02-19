import ContactForm from "../../components/contact/ContactForm.tsx";
import bg from "../../assets/bg.webp"

function ContactPage() {
    return (
        <>
            <div>
                <img src={bg}/>
                <ContactForm/>
            </div>
        </>
    )
}

export default ContactPage;