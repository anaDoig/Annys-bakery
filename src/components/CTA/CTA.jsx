import "./CTA.scss";
import '../../assets/scss/styles.scss';
import bakery from '../../assets/img/bakery.jpg'

const CTA = () => {
  return (
    <section>
    
      <div className="main-container-fullwidth">
        
        <div className="col-2-aboutus"> 
          <div className="col">
            <figure><img src={bakery} alt="bakery"></img></figure>
          </div>
          <div className="col fullwidht">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
