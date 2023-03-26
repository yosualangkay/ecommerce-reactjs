import React from "react";
import { Col, Card,  } from "react-bootstrap";
import { numberWithFormat } from "../utils/utils";

const KeranjangComponent = ({ product, masukKeranjang }) => {
  return (
    <Col md={4} xm={6} className="mb-4">
      <Card className="shadow">
        <Card.Img variant="top" src={"assets/baju/"+product.gambar} />
        <Card.Body>
          <Card.Title>{product.nama}</Card.Title>
          <Card.Text>
            Rp. {numberWithFormat(product.harga)}
            </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default KeranjangComponent;
