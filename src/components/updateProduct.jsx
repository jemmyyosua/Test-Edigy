import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { API } from '../config/api'
import Navigation from './Navbar'

export default function Updateroduct(){

    const { id } = useParams()
    const navigate = useNavigate()

    const [product , setProduct] = useState({
        productName : "",
        harga : "",
        description : "",
        image : ""
    })

    const getProduct = async(id) => {
        try {
            const response = await API.get("/product/" + id)
            console.log(response);
            setPreview(response.data.data.image)
            setProduct({
                ...product,
                productName : response.data.data.productName,
                harga : response.data.data.harga,
                description : response.data.data.description,
            })
        } catch (error) {
            console.log(error)
        }
    }

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

    const handleUpdate = async(e) => {
        try {
            e.preventDefault() 

            const formData = new FormData()
            if (product.image) {
                formData.set("image", product?.image[0], product?.image[0]?.name)
              }
            formData.set("productName", product.productName)
            formData.set("harga", product.harga)
            formData.set("description", product.description)

            const config = {
                headers: {
                "Content-type": "multipart/form-data",
                },
            }

            await API.patch("/product/" + id, formData, config)
            navigate("/test2")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct(id)
    },[])

    return (
        <div>
            <Navigation class1={"text-reset"}  class2={"text-reset"}  class3={"text-reset"}/>
            <Container className="py-3">
                <Row>
                <Col xs="12">
                    <div className="text-header-category mb-4"><h3>Update Product</h3></div>
                </Col>
                <center>
                <Col xs="8" style={{textAlign : "left"}}>
                    <form onSubmit={handleUpdate}>
                        <Form.Group className="mb-2">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control value={product.productName} onChange={handleChange} name="productName" type="text" placeholder="Product Name" />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Harga</Form.Label>
                            <Form.Control value={product.harga} onChange={handleChange} name="harga" type="number" placeholder="Harga Product" />
                        </Form.Group>
                        
                        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control value={product.description} onChange={handleChange} name="description" as="textarea" rows={5} />
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
                            Update
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