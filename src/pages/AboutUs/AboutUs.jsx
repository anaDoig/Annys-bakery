import "./AboutUs.scss";
import aboutImg from "../../assets/img/about.jpg";

const About = () => {
  return (
    <section className='column-container' >
      <div className="main-container center">
        <h2>Te contamos nuestra historia </h2>
        <p>
          Hace mucho tiempo comenzó esta historia, en nuestra familia era
          tradicional hacer las tartas para cada cumpleaños, así que el tema de
          batir bizcochos y hornearlos era una tarea fácil.
        </p>
        <p>
          Hace aproximadamente 11 años un día decidimos (mi madre y yo) probar
          con decorar unos cupcakes con fondant, que para la época estaba muy de
          moda y queríamos ver qué tal nos iba para decorar las mesas de los
          cumpleaños de la familia. Pues nuestra primera vez fue todo un éxito y
          todos querían hasta las tartas decoradas, que no lo vamos a negar, fue
          todo un reto conseguir de manera empírica decorar tartas, porque los
          cupcakes al ser más pequeños eran muy fácil decorar, pero para una
          tarta debíamos ser mucho más cuidadosas para que quedase lo más
          impecable posible, porque aunque el sabor era casi lo más importante
          la presentación también lo era.
        </p>
        <p>
          Poco a poco con la práctica conseguimos hacer cada vez tartas más
          bonitas y sin duda más deliciosas, mejoramos la receta familiar y
          empezamos a combinar sabores, esto poco a poco dejó de ser un hobbie
          para convertirse en un negocio (familiar) donde ya no solo hacíamos
          tartas para la familia o una cada semana, sino que llegamos a hornear
          y decorar hasta 5 tartas para entregar decoradas con fondant un mismo
          fin de semana (que puede parecer sencillo pero toma unas horitas de
          dedicación), sin duda esto era posible para dos personas debido a la
          gran organización que debíamos tener para no quedar mal a ningún
          cliente, mientras mami horneaba yo estudiaba (porque además de ser una
          apasionada por la repostería, soy Bióloga y ahora desarrolladora
          Front-End).
        </p>
        <p>
          Con el paso del tiempo fuimos actualizándonos y aprendiendo nuevas
          técnicas de decoración hasta lo que hacemos en su mayoría actualmente
          que son tartas decoradas con una crema mucho más suave y menos dulce
          que el fondant.
        </p>
        <p>
          Así que los invito a ver un poco de lo que con mucho amor hacemos y
          podemos ofrecerles para sus celebraciones. porque estamos para
          hacerlas lo más especiales posible y que no solo el sabor sea
          delicioso sino que la decoración sea más de lo que esperan los
          agasajados
        </p>
      </div>
      <div>
      <img src={aboutImg} alt="about-img" className="about-img"/>
      </div>
    </section>
  );
};

export default About;
