import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { ChevronRightCircle } from "@styled-icons/boxicons-solid/ChevronRightCircle"

import image1 from "../../images/1.png"
import image2 from "../../images/2.png"
import image3 from "../../images/3.png"

import './styles.css'

const About = () => {
  return (
    <div id="about">
        <div className="about-text">
            <h1 className="about-title">NOSSOS SERVIÇOS</h1>
            <div className="about-image">
              <StaticImage
                src="../../images/bottom.png"
                alt="Logo Vop"
                layout="fullWidth"
              />
            </div>
        </div>
        <section className="about-content">
          <div className="about-card-1">
            <h3 className="about-card-title-1">Mais de <strong className="about-card-title-1" style={{color: "#ec731f"}}>14 anos</strong> fazendo acontecer</h3 >
          </div>
          <section className="about-cards-2">
          <div className="about-card" style={{backgroundImage: `url('${image1}')`}}> 
              <h3 className="about-card-title">Solução em Torres Estaiadas e Autoportantes:</h3 >
              <p className="about-card-description"><ChevronRightCircle />Especificação técnica para aquisição da torre adequada para o seu sistema de transmissão</p >
              <p className="about-card-description"><ChevronRightCircle />Levantamento e análise física de anomalias de Torres em operação</p >
              <p className="about-card-description"><ChevronRightCircle />Levantamento e análise computadorizada da estabilidade de Torres em operação</p >
              <p className="about-card-description"><ChevronRightCircle />Elaboração de Laudo Estrutural com indicação das correções necessárias</p >
              <p className="about-card-description"><ChevronRightCircle />Elaboração de Projeto de Reforço Estrutural</p >
              <p className="about-card-description"><ChevronRightCircle />Especificação de serviços de manutenção com indicação das técnicas de restauração</p >
              <p className="about-card-description"><ChevronRightCircle />Execução de remanejamento de Torres, contemplando a desmontagem, montagem, reforço e restauração de elementos estruturais de Torres Estaiadas e Autoportantes</p >
              {/*<button onClick={() => handleSubmit("Vigilância Armada")}><Whatsapp />Faça orçamento agora</button>*/}
            </div>
            <div className="about-card" style={{backgroundImage: `url('${image2}')`}}>
              <h3 className="about-card-title">Solução em Instalação de Sites:</h3 >
              <p className="about-card-description"><ChevronRightCircle />Realização de Site Survey - TSSR Technical Site Survey Report</p >
              <p className="about-card-description"><ChevronRightCircle />Realização de Vistorias de sites para adequação, reforma ou ampliação</p >
              <p className="about-card-description"><ChevronRightCircle />Instalação de equipamentos de Radiofrequência de Baixa, Média e Alta Capacidade, com MW de todas as Tecnologias e fabricantes, Radiocomunicação Crítica VHF, UHF e Repetidoras</p >
              <p className="about-card-description"><ChevronRightCircle />Construção de Sites, contemplando todos os serviços – do Padrão de Entrada de Energia, Rede Elétrica, Cercamento/Alambrado, Aterramento, até as Bases de Concreto para equipamentos de pequeno, médio e grande porte.</p >
              <p className="about-card-description"><ChevronRightCircle />Montagem de Rede Elétrica de média e baixa tensão</p >
              <p className="about-card-description"><ChevronRightCircle />Instalação, Ampliação e Desmontagem de sistemas GSM, UMTS, LTE, 5G, e Sistemas Irradiantes.</p >
              {/*<button onClick={() => handleSubmit("Vigilância Armada")}><Whatsapp />Faça orçamento agora</button>*/}
            </div>
            <div className="about-card" style={{backgroundImage: `url('${image3}')`}}>
              <h3 className="about-card-title">Solução em Manutenção:</h3 >
              <p className="about-card-description"><ChevronRightCircle />Rede Elétrica com substituição ou ampliação de Quadros Elétricos, tais como: QDG, QTM, QDCA, QDCC, Fontes Retificadoras AC/DC, Inversores e Nobreaks.</p >
              <p className="about-card-description"><ChevronRightCircle />Rede de Telecomunicações com manutenção de equipamentos de Ar Condicionado de Centrais, Análise de
                falhas, redimensionamento de cargas elétricas AC/DC, Estudo de Viabilidade, Retrofit de Fontes AC/DC, Medições de Aterramento, Adequações de Aterramento, Análise e manutenção de sistema irradiante com instrumentos de RF e Análise e manutenção de redes MW.</p >
              {/*<button onClick={() => handleSubmit("Vigilantes em eventos")}><Whatsapp />Faça orçamento agora</button>*/}
            </div>
          </section>
        </section>
    </div>
  )
}

export default About