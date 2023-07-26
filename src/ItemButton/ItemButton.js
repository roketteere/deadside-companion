import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";

export default function ItemButton({ icon, title, component }) {
  const [show, setShow] = useState(false);

  const closeHandler = () => setShow(false);

  const openHandler = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={openHandler}
        className="btn btn-secondary btn-lg m-3 ">
        <Image src={icon} style={{ width: 64 }} />
        {title}
      </Button>
      <Offcanvas show={show} onHide={closeHandler}>
        {component}
      </Offcanvas>
      <Container fluid className="bg-body-tertiary">
        <Card className="text-center" style={{ width: "18rem" }}></Card>
      </Container>
    </>
  );
}
