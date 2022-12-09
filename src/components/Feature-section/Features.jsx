import React from "react";
import { Container } from "reactstrap";
import "./features.css";
import img from '../../assets/teacher.jpg'
import o from '../../assets/o.png';
import t from '../../assets/t.png';
import th from '../../assets/th.jpg';


const Features = () => {
  return (
    <section>
      <Container className="features">

        <h1>Why Choose Us</h1>
        <div className='cardrow'>
          <div className='card' >
            <img src={th} alt="" className="first" />
            <h3>Greats Teacher</h3>
            <span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aut saepe voluptatum earum delectus  deserunt id iste,
              quas officiis et repellat!</span>
          </div>
          <div className='card'>
            <img src={t} alt="" className="second" />

            <h3>Great Teacher</h3>
            <span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aut saepe voluptatum earum delectus  deserunt id iste,
              quas officiis et repellat!</span>
          </div> <div className='card'>
            <img src={o} alt="" className="third" />
            <h3>Great Teacher</h3>
            <span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aut saepe voluptatum earum delectus  deserunt id iste,
              quas officiis et repellat!</span>
          </div> <div className='card' >
            <img src={img} alt="" className="fourth" />
            <h3>Great Teacher</h3>
            <span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aut saepe voluptatum earum delectus  deserunt id iste,
              quas officiis et repellat!</span>
          </div>
        </div>

      </Container>
    </section>
  );
};


export default Features;
