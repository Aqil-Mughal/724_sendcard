import { useState, useEffect } from "react";
import "./Sendcard.scss";
import { FaPlusCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { FaGift } from "react-icons/fa";
import gift from "./gift.jpg";
import images from "./images.jpeg";
import { BiDialpadAlt } from "react-icons/bi";
import { IoMailSharp } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import { BiMinusCircle } from "react-icons/bi";
// import onNext from "react"
function Sendcard() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const [elements, setElements] = useState([
    // List of elements to display
    { id: 1 },
  ]);
  const removeElement = (id) => {
    setElements((prevElements) =>
      prevElements.filter((element) => element.id !== id)
    );
  };
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedValues((prevSelectedValues) =>
      event.target.checked
        ? [...prevSelectedValues, value]
        : prevSelectedValues.filter((selectedValues) => selectedValues !== value)
    );
  };

  // const [selectedItems, setSelectedItems] = useState([]);
  // const [isOpen, setIsOpen] = useState(false);
  // const [data, setData] = useState({
  //   key: "",
  //   value: "",
  // });
  // //
  // const [values, setValues] = useState({
  //   Sms: "",
  //   email: "",
  //   location: "",
  // });
  // const inputs = [
  //   {
  //     id: 1,
  //     name: "name",
  //     // type: 'text',
  //     // placeholder: 'Name',
  //     required: true,
  //     pattern: "^[a-zA-Z]+$",
  //     errorMessage: "Only letters are allowed ",
  //   },
  // ];
  // const handleSubmit = (e) => {
  //   const formData = new FormData(e.currentTarget);
  //   e.preventDefault();
  //   for (let [key, value] of formData.entries()) {
  //     setData({
  //       key: key,
  //       value: value,
  //     });
  //   }
  //   setIsOpen(true);
  // };
  // const handledClose = () => {
  //   setIsOpen(false);
  // };

  // const onChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const handleCheckboxClick = (e, item) => {
  //   if (e.target.checked) {
  //     setSelectedItems([...selectedItems, item]);
  //   } else {
  //     setSelectedItems(selectedItems.filter((i) => i !== item));
  //   }
  // };
  //   const handleSelect = (selectedItems) => {
  //     setSelectedItems(item);
  //     setShow(true);
  // };
  // const handleOnCloseModal = () => {
  //     setShow(false);
  //     setSelectedItems(undefined);
  // };
  const toggleList = () => {
    setShow(!show);
  };

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
            <FaPlusCircle onClick={() => setOpen(true)} />
          </div>
        </div>

        <input type="text" name="uname" required></input>

        <div className="Subject">
          From
          <div className="Plus_icon2">
            <FaPlusCircle onClick={() => setOpen(true)} />
            {open && (
              <div className="modal">
                <div className="modal_content">
                  <div className="Send_modal_card">
                    Send To
                    <RxCross2
                      className="close"
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  <div className="accordion" onClick={toggleList}>
                    <img src={images} className="img_logo"></img>
                    <span className="name">Asfand Butt</span>
                    <div className="panel">
                      <IoIosArrowDropdown
                        className="drop_icon"
                        onClick={toggleList}
                      />
                    </div>
                  </div>
                  {show && (
                    <div className="Data_Selecting">
                      <div className="Select_checkbox">
                        <BiDialpadAlt className="Three_icons" />
                        <label className="Number" htmlFor="phone">
                          +927845693465384
                        </label>
                        <input
                          className="Select_checkbox1"
                          type="checkbox"
                          id="1"
                          name="phone"
                          value="Num"
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <div className="Select_checkbox">
                        <IoMailSharp className="Three_icons1" />
                        <label className="Number" htmlFor="Email">
                          724@gmail.com
                        </label>
                        <input
                          className="Select_checkbox1"
                          type="checkbox"
                          id="2"
                          // name="Email"
                          // value="Email"
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <div className="Select_checkbox">
                        <ImLocation2 className="Three_icons2" />
                        <label className="Number" htmlFor="address">
                          Lahore
                        </label>
                        <input
                          className="Select_checkbox1"
                          type="checkbox"
                          id="3"
                          // name="address"
                          // value="Lahore"
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className="Next_button1"
                    onClick={() => setOpen(false)}
                  >
                    Next & Preview
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="box">
          {selectedValues.map((selectedValues, index) => (
            <div
              className="inner_box"
              // key={element.id }
              key={index}
            >
            1:
              <img src={images} className="mini_img_logo"></img>
              <div className="selected_number">{selectedValues}</div>
              <div className="selected_email"></div>
              <div className="selected_location"></div>
              {/* {element.text} */}
              <BiMinusCircle
                className="Delete_data"
                // onClick={() => removeElement(element.id)}
              />
            </div>
          ))}
        </div>
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
