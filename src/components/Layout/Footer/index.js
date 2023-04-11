import React from "react";
import { StaticImage } from "gatsby-plugin-image"

//import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { ArrowUpSquareFill as ArrowUp } from "@styled-icons/bootstrap/ArrowUpSquareFill"
import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt"
import { Phone } from "@styled-icons/heroicons-solid/Phone";
import { Location } from "@styled-icons/icomoon/Location"

import "./styles.css";

const Footer = () => {
  return (
    <div>
      <div class="elementor-shape elementor-shape-bottom" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path class="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
          c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
          c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
        </svg>
      </div>
      <div id="contact">
        <div className="footer">
          <div className="footer-container">
            <div>
              <span
                title="Início"
                role="button"
                tabindex="0"
                onKeyDown={() => {
                  window.scroll({ top: 0, behavior: "smooth" });
                }}
                onClick={() => {
                  window.scroll({ top: 0, behavior: "smooth" });
                }}
              >
                <StaticImage
                  src="../../../images/logo-title.png"
                  alt="Logo MSC Telecomunicações"
                  layout="fixed"
                  width={110}
                  height={40}
                />
              </span>
            </div>
          </div>
          <div className="footer-container">
            <h3>INSTITUCIONAL</h3>
            <div className="footer-content">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span
                        title="Início"
                        role="button"
                        tabindex="0"
                        onKeyDown={() => {
                          window.scroll({ top: 0, behavior: "smooth" });
                        }}
                        onClick={() => {
                          window.scroll({ top: 0, behavior: "smooth" });
                        }}
                      >INÍCIO</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/#about" title="Nossos Serviços">NOSSOS SERVIÇOS</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
              </div>
          <div className="footer-container">
            <h3>CELTRAL DE ATENDIMENTOS</h3>
            <div className="phone">
              <Location />
              <ul>
                <li>Rua Teste teste teste, 000 – teste teste TS</li>
              </ul>
            </div>
            <div className="phone">
              <Phone />
              <ul>
                <li>(12) 3456-7890</li>
              </ul>
            </div>
            <div className="phone">
              <EmailOutline />
              <ul>
                <li>teste@gmail.com</li>
              </ul>
            </div>
            <div className="phone">
              <a 
                href="https://www.instagram.com/teste/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-icons"
              >
                <InstagramAlt />
              </a>
              <ul>
                <li>@msctelecomunicacoes</li>
              </ul>
            </div>
            {/*<div className="phone">
              <a 
                href="https://www.instagram.com/vopseguranca/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-icons"
              >
                <FacebookCircle />
              </a>
              <ul>
                <li>teste</li>
              </ul>
              </div>*/}         
          </div>
        </div>
        <footer className="footer-copy">
          <div>
            <p>© {new Date().getFullYear()} - MSC Telecomunicações. Todos os direitos reservados.</p>
          </div>
          <div className="footer-button-up">
            <span
              title="Ir para o Topo"
              role="button"
              tabindex="0"
              onKeyDown={() => {
                window.scroll({ top: 0, behavior: "smooth" });
              }}
              onClick={() => {
                window.scroll({ top: 0, behavior: "smooth" });
              }}
            >
              <ArrowUp />
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer