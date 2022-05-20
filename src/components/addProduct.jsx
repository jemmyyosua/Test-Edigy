import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../config/api'
import Navigation from './Navbar'

export default function AddProduct(){

    const navigate = useNavigate()

    const [product , setProduct] = useState({
        productName : "",
        harga : "",
        description : "",
        image : ""
    })

    const [preview, setPreview] = useState(null)

    const handleChange = (e) => {
        setProduct({
          ...product,
          [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
        })
    
        if (e.target.type === "file") {
          let url = URL.createObjectURL(e.target.files[0]);
          setPreview(url);
        }
      }

    const handleSubmit = async(e) => {
        try {
            e.preventDefault() 

            const formData = new FormData()
            formData.set("productName", product.productName)
            formData.set("harga", product.harga)
            formData.set("description", product.description)
            formData.set("image", product.image[0], product.image[0].name)

            const config = {
                headers: {
                "Content-type": "multipart/form-data",
                },
            }

            await API.post("/product", formData, config)
            navigate("/test2")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navigation class1={"text-reset"}  class2={"text-reset"}  class3={"text-reset"}/>
            <Container className="py-3">
                <Row>
                <Col xs="12">
                    <div className="text-header-category mb-4"><h3>Add Product</h3></div>
                </Col>
                <center>
                <Col xs="8" style={{textAlign : "left"}}>
                    <form onSubmit={handleSubmit}>
                        <Form.Group className="mb-2">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control onChange={handleChange} name="productName" type="text" placeholder="Product Name" />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Harga</Form.Label>
                            <Form.Control onChange={handleChange} name="harga" type="number" placeholder="Harga Product" />
                        </Form.Group>
                        
                        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={handleChange} name="description" as="textarea" rows={12} />
                        </Form.Group>

                        {preview && (
                        <div>
                        <img
                            src={preview}
                            style={{
                            maxWidth: "360px",
                            maxHeight: "360px",
                            objectFit: "cover",
                            }}
                            alt="preview"
                        />
                        </div>
                    )}

                    <Col xs={5}>
                     <Form.Group  controlId="formFile" className="mb-2">
                        <Form.Label>Uploud File</Form.Label>
                        <Form.Control type="file" name="image" onChange={handleChange} />
                    </Form.Group>
                    </Col>
                   
                    <div className="d-grid gap-2 mt-4">
                        <Button type="submit" variant="success" size="md">
                            Add
                        </Button>
                    </div>
                    </form>
                </Col>
                </center>
                </Row>
            </Container>
        </div>
    )
}