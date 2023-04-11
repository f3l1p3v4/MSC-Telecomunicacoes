import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image"

import "./styles.css";

class Support extends Component {
  render() {
    return (
      <div className="support">
        <div className="support-section">
          <div className="support-text">
              <h1 className="support-title">APOIO TÉCNICO E TECNOLÓGICO:</h1>
              <div className="support-image">
                <StaticImage
                  src="../../images/bottom.png"
                  alt="Logo Vop"
                  layout="fullWidth"
                />
              </div>
          </div>
          <div className="support-item">
            <div className="support-card-image">
              <StaticImage
                src="../../images/support.png"
                alt="Logo Vop"
                layout="fullWidth"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Support;