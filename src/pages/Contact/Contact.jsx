import './Contact.scss';
import '../../assets/scss/styles.scss';
import {Form} from '../../components/Form'
import contact from '../../assets/img/contact.jpeg'

const ContactUs = () => {
    return (
        <section className="main-container-fullwidth">
    
            <div className="bg-mauve">
            <div className="section-header">
                <h2>Contacto</h2>
            </div>
            </div>

            <div className="col-2-aboutus"> 
            <div className="col">
                <figure><img className="image-bakery" src={contact} alt="bakery"></img></figure>
            </div>
            <div className="col fullwidht">
                <h3>Dejanos tu Mensaje</h3>
                <Form />
            </div>
            </div>
    
            
        </section>
        );
    };

export default ContactUs;
