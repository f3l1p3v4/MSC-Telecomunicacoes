import React from "react";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";

import "./styles.css";

const ButtonMessage = (props) => {
    let messageClasses = "message";
    if (props.showPopUp) {
      messageClasses = "message-close";
    }
    return (
        <button className={messageClasses} onClick={props.click}>
            <Whatsapp />
        </button>
    );
};

export default ButtonMessage;