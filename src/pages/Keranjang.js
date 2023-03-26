import { Row, Col, Container, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios"; 
import { API_URL } from "../utils/constants";
import KeranjangComponent from "../components/KeranjangComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Keranjang({}){
    const [dataKeranjang, setDataKeranjang] = useState([]);

    const getDataKeranjang = () => {
        axios
      .get(`${API_URL + "/keranjangs"}`)
      .then((res) => setDataKeranjang(res.data));
    } 

    useEffect(() => {
        getDataKeranjang()
    }, [])

    return(
        <div>
            <Container>
                <Row>
            <Col>
            <FontAwesomeIcon icon={faShoppingCart} />
              <h4>
                <strong>List Keranjang</strong>
              </h4>
              <hr />
              <Row>
                
                   {
                    dataKeranjang && (
                      dataKeranjang.map((product) => {
                        <KeranjangComponent
                        product={product}
                        key={product.id}
                        />
                      })
                    )
                   }
                  
              </Row>
            </Col>
            {/* <Result keranjang={keranjang} getKeranjang={getKeranjang} /> */}
          </Row>
            </Container>
        </div>
    )
}
export default Keranjang;