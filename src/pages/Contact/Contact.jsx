import './Contact.scss';
import '../../assets/scss/styles.scss';
import {Form} from '../../components/Form/Form'
import contact from '../../assets/img/contact.jpeg'
import Newsletter from '../../components/Newsletter/Newsletter';
import CTA from '../../components/CTA/CTA'

const ContactUs = () => {
    return (
        <section>
    
            <div className="bg-mauve">
            <div className="section-header">
                <h2>Contacto</h2>
            </div>
            </div>

            <div className="main-container-fullwidth">

                <div className="col-2-aboutus"> 
                    <div className="col">
                        <figure><img className="image-bakery" src={contact} alt="bakery"></img></figure>
                    </div>
                    <div className="col fullwidht">
                        <h3>Déjanos tu Mensaje</h3>
                        <Form />
                    </div>
                </div>

            <Newsletter />
            <CTA />

            </div>
    
        </section>
        );
    };

export default ContactUs;
