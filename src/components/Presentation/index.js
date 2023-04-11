import * as React from "react"

import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";

import './styles.css'

const Presentation = () => {
  return (
    <div className="presentation">
      <div className="presentation-content">
        <div className="presentation-text">
          <h1 className="presentation-title">Construindo conexões</h1>
          <p className="presentation-description">Conectando você ao mundo, sempre com a melhor qualidade e eficiência.</p>
          <a href="#type-service" className="presentation-button"><Whatsapp />FALE CONOSCO</a>
        </div>
      </div>
    </div>
  )
}

export default Presentation