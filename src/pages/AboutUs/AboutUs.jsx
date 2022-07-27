import "./AboutUs.scss";
import '../../assets/scss/styles.scss';
import bakery from '../../assets/img/bakery.jpg'
import bakery2 from '../../assets/img/bakery2.jpeg'
import bakery3 from '../../assets/img/bakery3.jpeg'
import bakery4 from '../../assets/img/bakery4.jpeg';
import Newsletter from "../../components/Newsletter/Newsletter";

import Newsletter from '../../components/Newsletter/Newsletter';

const About = () => {
  return (
    <section>

      <div className="bg-green">
        <div className="title-container">
          <h2>Sobre Nosotras</h2>
        </div>
      </div>

      <div className="main-container-fullwidth">
        
        <div className="col-2-aboutus"> 
          <div className="col">
            <figure><img src={bakery} alt="bakery"></img></figure>
          </div>
          <div className="col fullwidht">
            <h3>El Origen </h3>
            <p>
              Hola somos Anny's Bakery y te queremos contar cómo inició nuestra
              aventura dentro del mundo de la repostería.
              Dentro de nuestra familia era tradicional hacer las tartas para cada
              cumpleaños, así que el tema de batir bizcochos y hornearlos era una
              tarea fácil.
            </p>
          </div>
        </div>

        <div className="col-2-aboutus"> 
          <div className="col fullwidht">
            <h3>Los Inicios</h3>
            <p>
              Hace aproximadamente 11 años un día decidimos probar decorando unos
              cupcakes con fondant. Nuestra primera vez fue todo un éxito, todos querían
              nuestras tartas decoradas. Fue todo un reto conseguir de manera empírica decorar tartas, 
              los cupcakes al ser
              más pequeños son más fáciles de decorar, pero para una tarta debíamos ser
              mucho más cuidadosas. Aunque el sabor parece lo más importante la presentación lo és más.
            </p>
          </div>
          <div className="col">
            <figure><img src={bakery2} alt="bakery"></img></figure>
          </div>
        </div>

        <div className="col-2-aboutus"> 
          <div className="col">
            <figure><img src={bakery3} alt="bakery"></img></figure>
          </div>
          <div className="col fullwidht">
            <h3>Las Mejores Tartas</h3>
            <p>
              Poco a poco con la práctica conseguimos hacer tartas más
              bonitas y más deliciosas, mejoramos la receta familiar y
              empezamos a combinar sabores. Esto poco a poco dejó de ser un hobbie
              para convertirse en un negocio familiar, donde ya no solo hacíamos
              tartas para la familia, sino que llegamos a hornear y
              decorar hasta 5 tartas para entregar un mismo fin
              de semana. Sin duda esto no hubiera sido posible sin la organización y 
              la pasión de madre e hija.
            </p>
          </div>
        </div>
        
        <div className="col-2-aboutus"> 
          <div className="col fullwidht">
            <h3>Nuestros Productos</h3>
            <p>
              Con el paso del tiempo fuimos actualizándonos y aprendiendo nuevas
              técnicas de decoración. A dia de hoy hacemos las mejores tartas decoradas 
              con una crema mucho más suave y agradable.
              Nuestro objetivo es crear momentos especiales, únicos y deliciosos.
              Con mucho amor, os invito a ver todos nuestros productos. 
            </p>
          </div>
          <div className="col">
            <figure><img src={bakery4} alt="bakery"></img></figure>
          </div>
        </div>

        <Newsletter />

      </div>
      <Newsletter />
    </section>
  );
};

export default About;
