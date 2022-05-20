import { Table, Container, Button, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { API } from '../config/api'
import { useNavigate, Link } from 'react-router-dom'
import Navigation from '../components/Navbar'
import DeleteData from '../components/modalDelete'

export default function Test2(){

    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [id, setId] = useState(null)
    const [confirmDelete, setConfirmDelete] = useState(null)

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleAdd = () => {
        navigate("/addProduct")
    }

    const handleUpdate = (id) => {
        navigate("/updateProduct/" + id)
      }

    const getProducts = async() => {
        try {
            const response = await API.get("/products")
            setProducts(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = (id) => {
        setId(id)
        handleShow()
      }
    
      // Create function for handle delete product here ...
      // If confirm is true, execute delete data
      const deleteById = async (id) => {
        try {
          await API.delete(`/product/${id}`)
          getProducts()
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(() => {
        if (confirmDelete) {
          handleClose()
          deleteById(id)
          setConfirmDelete(null)
        }
      }, [confirmDelete])


    useEffect(() => {
        getProducts()
    },[])

    return (
        <div>
        <Navigation active="/test2" class1={"text-reset"}  class2={"text-reset fw-bold fs-5"}  class3={"text-reset"} />
        <div className="mt-5">
            <Container>
            <Row>
          <Col xs="6" className="text-start">
            <div className="text-header-category ms-auto mb-4"><h3>List Product</h3></div>
          </Col>
          <Col xs="6" className="text-end">
            <Button onClick={handleAdd} className="btn-dark" style={{ width: "100px" }}>
                Add
            </Button>
          </Col>
          <Col xs="12">
                <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Nama Product</th>
                            <th>Harga</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.map((item,i) => (
                            <tr key={i}>
                            <td className="align-middle">{i + 1}</td>
                            <td> <Link to={"/detailProduct/" + item.id}><img
                          src={item.image}
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                          alt={item.image}
                        /></Link></td>
                            <td className="align-middle"><Link className="text-reset text-decoration-none" to={"/detailProduct/" + item.id}>{item.productName}</Link></td>
                            <td className="align-middle">{item.harga}</td>
                            <td className="align-middle"> 
                                <Button
                                onClick={() => {
                                    handleUpdate(item.id)
                                }}
                                className="btn-sm btn-success me-2"
                                style={{ width: "135px" }}
                                >
                                Edit
                                </Button>
                                <Button
                                onClick={() => {
                                    handleDelete(item.id)
                                }}
                                className="btn-sm btn-danger"
                                style={{ width: "135px" }}
                                >
                                Delete
                                </Button>
                            </td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                    <DeleteData setConfirmDelete={setConfirmDelete} show={show} handleClose={handleClose} />
                    </Col>
                    </Row>
                </Container>
            </div>
      </div>
    )
}