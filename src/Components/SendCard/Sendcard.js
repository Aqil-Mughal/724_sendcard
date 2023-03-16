import React from "react";
import "./Sendcard.scss";
import { FaPlusCircle } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import gift from "./gift.jpg";
function Sendcard() {
  return (
    <div className="sendcard">
      <h3 className="Upper_text_Confirm">Confirm Send Card</h3>
      {/* <div className="Selected_buttons">
        <button className="SMS">SMS Text</button>
        <button className="Mail">E-mail</button>
        <button className="Print">Print</button>
      </div> */}
      <div className="Container">
        <div className="Subject">Subject:</div>
        <input className="input" type="text" name="uname" required></input>
        <div className="Subject">
          To:
          <div className="Plus_icon1">
            <FaPlusCircle />
          </div>
        </div>
        <input type="text" name="uname" required></input>
        <div className="Subject">
          From
          <div className="Plus_icon2">
            <FaPlusCircle />
          </div>
        </div>
        <input type="text" name="uname" required></input>
      </div>
      <div className="img_container">
        <img src={gift}></img>
      </div>
      <div>
        <button className="Gift_text">
          <div className="gift_icon">
            <FaGift />
          </div>
          Add Gift Items
        </button>
      </div>
      <div>
        <button className="Next_button">Next & Preview</button>
      </div>
    </div>
  );
}

export default Sendcard;
