import { Form, Col, Button, Container } from 'react-bootstrap'
import { useState } from 'react'
import Navigation from '../components/Navbar'

export default function Test3(){

  const [input , setInput] = useState({
    input1 : "",
    operator : "",
    input2 : "",
})

const [hasil, setHasil] = useState("")

const handleChange = (e) => {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })

}

  const kalkulator = (input1, operator ,input2) => {
    if(operator === "-"){
      const calc = Math.floor(input1) - Math.floor(input2)
      setHasil(calc)
    } else if(operator === "+"){
      const calc = Math.floor(input1) + Math.floor(input2)
      setHasil(calc)
    }  else if(operator === "*"){
      const calc = Math.floor(input1) * Math.floor(input2)
      setHasil(calc)
    }  else if(operator === "/"){
      const calc = Math.floor(input1) / Math.floor(input2)
      setHasil(calc)
    } else {
      setHasil("")
    }
  }

    return (
        <div>
        <Navigation active="/test3" class1={"text-reset"}  class2={"text-reset"}  class3={"text-reset fw-bold fs-5"} />
        <Container>
          <center>
          <Col className="mt-5" style={{textAlign : "left"}} xs={3}>
          <Form.Group className="mb-2">
              <Form.Label>Input 1</Form.Label>
              <Form.Control onChange={handleChange} name="input1" type="text" placeholder="Input 1" />
          </Form.Group>

          <Form.Group className="mb-2">
              <Form.Label>operator</Form.Label>
              <Form.Control onChange={handleChange} name="operator" type="text" placeholder="Operator" />
          </Form.Group>
          
          <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Input 2</Form.Label>
              <Form.Control onChange={handleChange} name="input2" type="text" placeholder="Input 2" />
          </Form.Group>

          <h2 style={{textAlign : "center"}}>{hasil}</h2>

          <div className="d-grid gap-2 mt-4">
              <Button onClick={() => kalkulator(input.input1,input.operator,input.input2)} size="md">
                  Hasil
              </Button>
          </div>
          </Col>
          </center>
        </Container>
      </div>
    )
}