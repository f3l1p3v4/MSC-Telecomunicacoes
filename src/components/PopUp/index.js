import React, { useState } from "react";

import "./styles.css";

const PopUp = (props) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  if (name === "" || service === "") {
    alert("Favor complete todos os campos ☺️");
    setName("");
    setService("");
  } else {
    let message = encodeURI(
      `Olá, meu nome é ${name}, gostaria de solicitar um orçamento do serviço: ${service}`
    );

    //Padrão
    window.location.replace(`https://wa.me/+5567981697900?text=${message}`);

    setName("");
    setService("");
  }
}


  let popUpClasses = "close";
  if (props.showPopUp) {
    popUpClasses = "pop-info";
  }

  return (
    <div className={popUpClasses}>
      <div className="header-text">
        <span>Fale conosco!</span>
      </div>
      <section>
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="name" 
            placeholder="Qual é o seu Nome?" 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input 
            type="text" 
            name="serviço" 
            placeholder="Qual serviço você precisa?" 
            value={service}
            onChange={(e) => setService(e.target.value)}
        />
          <button type="submit" className="btn-send">Enviar</button>
          <button onClick={props.click} className="btn-cancel">
            Cancelar
          </button>
        </form>
      </section>
    </div>
  );
};

export default PopUp;
