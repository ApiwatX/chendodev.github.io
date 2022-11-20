import React, { useContext } from "react"
import { Link } from 'react-router-dom';
import { GlobalContext } from '@context/GlobalContext';
import useMediaQuery from '@hooks/useMediaQuery';
import Menu from "@components/menu";
import Mapa from '@images/mapa.png';
import init from '@utils/fns-home';


const Home = () => {

  const { menuBtn } = useContext(GlobalContext);
  const matches = useMediaQuery("(max-width: 992px)");

  return(
    <main onLoad={init} className="container-menu">
      <div className="map"><img src={Mapa} alt="Background Image - @chendodev" /></div>
      <div style={{backgroundColor: menuBtn && matches ? "transparent" : null}} className="bartitle">
        <h1>Home</h1>
        <Menu />
      </div>
      <div className="grid-menu mb-4">
        <div className="col-md-6 pd-l">
          <div className="col-content">
            <div className="container-type"><br />
              <span className="hello">Hola,</span>
              <small>mi nombre es Chendo</small>
              <h2>I Am<span className="txt-type" data-wait="3000" data-words='["Developer", "Designer", "Freelancer"]'></span></h2>
              <p>Con más de 10 años de experiencia, puedo crear, diseñar y desarrollar tu presencia online, llevando tu proyecto al siguiente nivel.</p>
              <div className="btn_home">
                <Link to="/portfolio" className="btn btn-chendo btn-block mb-4">Portafolio</Link>
                <a href="https://enchufevirtual.com" target="_blank" className="btn btn-chendo btn-ev btn-block mb-4">Ev</a>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-6 pd-l">
            <div className="col-content">
              <div className="content__img">
                <div className="content-top-icon">
                  <div className="cirdown">
                      <a href="https://linkedin.com/in/chendodev" target="_blank"><i className="fab fa-linkedin-in icono"></i></a>
                  </div>
                  <div className="cirdown">
                      <a href="https://behance.net/chendo" target="_blank"><i className="fab fa-behance icono"></i></a>
                  </div>
                </div>
                <div className="content-med-icon">
                  <div className="cirdown">
                      <a href="https://twitter.com/chendodev" target="_blank"><i className="fab fa-twitter icono"></i></a>
                  </div>
                  <div className="cirdown">
                      <a href="https://github.com/chendodev" target="_blank"><i className="fab fa-github-alt icono"></i></a>
                  </div>
                  <div className="cirdown">
                      <a href="https://facebook.com/enchufevirtual" target="_blank"><i className="fab fa-facebook-f icono"></i></a>
                  </div>
                </div>
                <div className="content-bottom-icon mb-4">
                  <div className="cirdown">
                      <a href="https://tiktok.com/@chendodev" target="_blank"><i className="fab fa-tiktok icono"></i></a>
                  </div>
                  <div className="cirdown">
                      <a href="https://codepen.io/chendodev" target="_blank"><i className="fab fa-codepen icono"></i></a>
                  </div>
                </div>
                </div>
              </div>
          </div>
      </div>
    </main>
  );
}

export default Home;

