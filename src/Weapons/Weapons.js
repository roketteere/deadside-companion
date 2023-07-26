import { useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import akmod from "../images/assault_rifles/akmod.png";
import assaultImages from "../images/assault_rifles/assaultImages";
import WeaponModal from "../WeaponModal/WeaponModal";
import "./style/weapons-style.css";

export default function Weapons() {
  const [show, setShow] = useState(false);
  const closeHandler = () => setShow(false);
  const openHandler = () => setShow(true);

  function renderImages() {
    return assaultImages.map((image, index) => (
      <div
        className="btn btn-secondary p-1 m-2"
        onClick={() => {
          openHandler();
        }}>
        <Image src={image} key={index} className="weapon-cover" />
        <WeaponModal
          show={show}
          onHide={closeHandler}
          title={`Title ${index}`}
          image={image}
          description={image}
        />
      </div>
    ));
  }

  return (
    <div className="image-container">
      <h2 className="title ms-3">Assault Rifles</h2>
      {renderImages()}
    </div>
    // <div>
    //   {() => {
    //     assaultImages.map((image, index) => <Image src={image} key={index} />);
    //   }}
    // </div>
    // <>
    //   <Button variant="primary" onClick={openHandler}>
    //     Weapons
    //   </Button>
    //   <Offcanvas show={show} onHide={closeHandler}></Offcanvas>
    // </>
  );
}
