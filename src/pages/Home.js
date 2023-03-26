import { Row, Col, Container, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import BajuComponents from "../components/BajuComponents";
import axios from "axios"; 
import swal from "sweetalert";
import { API_URL } from "../utils/constants";

function Home({}){
    const [dataProduct, setDataProduct] = useState([]);
    const [categorySelected, setCategorySelected] = useState("Baju");
    const [keranjang, setKeranjang] = useState([]);

    const getBaju = () => {
        axios
      .get(`${API_URL + "/products"}`)
      .then((res) => setDataProduct(res.data));
    } 

    useEffect(() => {
        getBaju()
    }, [])

    const masukKeranjang = (value) => {
    axios
      .get(API_URL + "/keranjangs?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };
          axios
            .post(API_URL + "/keranjangs", keranjang)
            .then((res) => {
              
              swal({
                title: "Masuk Keranjang",
                text:
                  keranjang.product.nama + " berhasil dimasukan ke keranjang",
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };

          axios
            .put(API_URL + "/keranjangs/" + res.data[0].id, keranjang)
            .then((res) => {
              swal({
                title: "Masuk Keranjang",
                text:
                  keranjang.product.nama + " berhasil dimasukan ke keranjang",
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }

    return(
        <div>
            <Container className="mt-2">
                <Row >
            <Col>
              <h4 className="">
                <strong>Daftar Product</strong>
              </h4>
              <hr />
              <Row>
                {dataProduct &&
                  dataProduct.map((menu) => (
                    <BajuComponents
                      menu={menu}
                      key={menu.id}
                      masukKeranjang={masukKeranjang}
                    />
                  ))}
              </Row>
            </Col>
            {/* <Result keranjang={keranjang} getKeranjang={getKeranjang} /> */}
          </Row>
            </Container>
        </div>
    )
}
export default Home;