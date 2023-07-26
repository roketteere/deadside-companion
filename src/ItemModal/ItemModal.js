import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./style/item-modal.css";

function ItemModal({
  show,
  onHide,
  title,
  image,
  rpm,
  damage,
  ammo,
  magazine,
  ttk,
  fullReload,
  tacticalReload,
  durability,
  szTrader,
  buy,
  sell,
  scope,
  muzzle,
  magazineMod,
  flashlight,
  description,
}) {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={image} style={{ width: 300, padding: 1 }} />
          <Container fluid className="responsive-table">
            <Row>
              <Col className="table-title border">RPM</Col>
              <Col className="table-title border">Damage</Col>
              <Col className="table-title border">Ammo</Col>
              <Col className="table-title border">Magazine</Col>
            </Row>
            <Row>
              <Col className="border">{rpm}</Col>
              <Col className="border">{damage}</Col>
              <Col className="border">{ammo}</Col>
              <Col className="border">{magazine}</Col>
            </Row>
            <Row>
              <Col className="table-title-secondary border bg-info">TTK</Col>
              <Col className="table-title-secondary border">Full Reload</Col>
              <Col className="table-title-secondary border">
                Tactical Reload
              </Col>
              <Col className="table-title-secondary border bg-warning">
                Durability
              </Col>
            </Row>
            <Row>
              <Col className="border">{ttk}</Col>
              <Col className="border">{fullReload}</Col>
              <Col className="border">{tacticalReload}</Col>
              <Col className="border">{durability}</Col>
            </Row>
            <Row>
              <Col className="table-title-secondary border">
                Available At SZ Trader
              </Col>
              <Col className="table-title-secondary border bg-success">Buy</Col>
              <Col className="table-title-secondary border bg-danger">Sell</Col>
            </Row>
            <Row>
              <Col className="border">{szTrader}</Col>
              <Col className="border">{buy}</Col>
              <Col className="border">{sell}</Col>
            </Row>
            <Row className="text-center">
              <Row>
                <Col className="table-title-secondary border bg-warning ">
                  Modifications
                </Col>

                <Row>
                  <Col className="table-title-secondary border">Scope</Col>
                  <Col className="table-title-secondary border">Muzzle</Col>
                  <Col className="table-title-secondary border">
                    Extended Mag
                  </Col>
                  <Col className="table-title-secondary border">Flashlight</Col>
                </Row>
                <Row>
                  <Col className="border">
                    {scope &&
                      scope.map((scope, index) => {
                        return (
                          <p className="m-0 border-bottom" key={index}>
                            {scope}
                          </p>
                        );
                      })}
                  </Col>
                  <Col className="border">
                    {muzzle &&
                      muzzle.map((muzzle, index) => {
                        return (
                          <p className="m-0 border-bottom" key={index}>
                            {muzzle}
                          </p>
                        );
                      })}
                  </Col>
                  <Col className="border">{magazineMod}</Col>
                  <Col className="border">
                    {flashlight &&
                      flashlight.map((flashlight, index) => {
                        return (
                          <p className="m-0 border-bottom" key={index}>
                            {flashlight}
                          </p>
                        );
                      })}
                  </Col>
                </Row>
              </Row>
            </Row>
          </Container>
          <br />
          <h2 className="p-1">Weapon Summary</h2>
          <p className="">{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ItemModal;
