import React from "react";
import { Col, Card,  } from "react-bootstrap";
import { numberWithFormat } from "../utils/utils";

const BajuComponents = ({ menu, masukKeranjang }) => {
  return (
    <Col md={2} xm={6} className="mb-4">
      <Card className="img-product shadow" onClick={() => masukKeranjang(menu)}>
        <Card.Img className="img-product" variant="top" src={"assets/"+menu.gambar} />
        <Card.Body>
          <Card.Title className="title-card">{menu.nama}</Card.Title>
          <Card.Text>
            Rp. {numberWithFormat(menu.harga)}
            </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BajuComponents;
