import { Container, Row, Col } from 'react-bootstrap'
import { API } from '../config/api'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navigation from '../components/Navbar'

export default function Detail(){
    
    const { id } = useParams()
    const [product, setProduct] = useState({})

    const getProduct = async(id) => {
        try {
            const response = await API.get("/product/" + id)
            setProduct(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct(id);
      }, [])

    return (
        <div>
            <Navigation class1={"text-reset"}  class2={"text-reset"}  class3={"text-reset"}/>
            <Container>
                <Row className="mt-5">
                    <Col>
                        <img style={{maxWidth : "500px", maxHeight : "500px", minWidth : "500px", minHeight : "500px"}} src={product.image} alt={product.image} />
                    </Col>

                    <Col style={{textAlign : "left"}}>
                        <h3>Detail Product</h3>
                        <br />
                        <h4 className="mb-4">Nama Product : {product.productName}</h4>
                        <h4 className="mb-4">Harga Product : Rp.{product.harga}</h4>
                        <h4>Description : <span className="fw-light fs-5">{product.description}</span></h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}