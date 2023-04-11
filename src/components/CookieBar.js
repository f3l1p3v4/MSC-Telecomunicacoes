import React, { useEffect } from "react"
import styled from "styled-components"
import CookieConsent from "react-cookie-consent"
//import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import { motion, useAnimation } from "framer-motion"

const StyledCookieBar = styled(motion.div)`
  position: fixed;
  left: 0;
  bottom: 1rem;
  width: 100%;
  z-index: 999;
  .CookieConsent {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    background: var(--_background);
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: var(--color-text);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    
    @media (max-width: 992px) {
        padding: 2rem;
    }
    @media (max-width: 768px) {
    flex-direction: column;
      display: grid;
      width: 80%;
      padding: 1rem;
      margin: 0 0 0 20px;
    }
  }
  
  .CookieConsent p {
    font-size: 1rem;
    margin-right: 5px;
  }

  .CookieConsent button {
    outline: none;
    width: 8rem;
    height: 2.4rem;
    background-color: var(--_color_3) !important;
    color: var(--_color_1);
    border: none;
    padding: 0.4rem 1rem;
    margin: 0 1rem 0 0;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    &:hover,
    &:focus,
    &:active {
      cursor: pointer;
      outline: none;
    }
    @media (max-width: 768px) {
      margin-top: 1rem;
    }
  }
  .CookieConsent button#confirm {
    background: -webkit-linear-gradient(#1cffb3, #5996f0);
    color: var(--color-background);
    border: none;
    margin: 0;
    @media (max-width: 768px) {
      margin-top: 1rem;
    }
  }
  & .cookieMessage {
    font-size: 0.8rem;
    margin: 0;
    font-weight: 400;
  }
`

const CookieBar = () => {
  const controls = useAnimation()
  const isIntroDone = true

  // Display cookie bar after the splashScreen sequence is done
  useEffect(() => {
    if (isIntroDone) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: 1 },
      })
    }
  }, [controls])

  if (!isIntroDone) return null

  return (
    <StyledCookieBar initial={{ opacity: 0, y: 20 }} animate={controls}>
      <CookieConsent
        //cookieName="gatsby-gdpr-google-analytics"
        //buttonId="confirm"
        //buttonText="Aceitar"
        //declineButtonId="decline"
        //declineButtonText="Negar"
        //enableDeclineButton={true}
        //disableStyles={true}
        //onAccept={() => initializeAndTrack(location)}
        location="bottom"
        buttonText="Aceitar"
        declineButtonText="Decline"
        disableStyles={true}
        cookieName="gatsby-gdpr-google-analytics"
      >
        <p className="cookieMessage">
          Utilizamos cookies 🍪 para fornecer uma melhor experiência para nossos usuários!!!.
        </p>
      </CookieConsent>
    </StyledCookieBar>
  )
}

export default CookieBar