import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {API} from "./api"
import { useState, useEffect } from 'react';
import { Table, Col, Row, Container } from 'react-bootstrap'
import { Icon } from '@iconify/react';

export default function App() {

  const [data, setData] = useState([])
  const getData = async() => {
    try {
        const response = await API.get("/data")
        setData(response.data.data)
    } catch (error) {
        console.log(error)
    }
}

const nilaiLength = data.length
const totalNilai = data.map(item => item.nilai).reduce((prev, curr) => prev + curr, 0)
const averageNilai = totalNilai / nilaiLength

const nilai = data.map((i) => {return i.nilai})
const max = Math.max.apply(Math, nilai)
const min = Math.min.apply(Math, nilai)

useEffect(() => {
  getData()
}, [])

  return (
    <div className="App">
       <header className="fw-bold py-2 mb-5" style={{backgroundColor : "navy", color: "white"}}>Technical Test Edigy</header>
      <Container>
      <Row>
      <Col md={6}>
      <h3>Sort berdasarkan Nilai Tertinggi</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Waktu</th>
            <th>Nilai</th>
          </tr>
        </thead>
        <tbody>
          {data.sort((a,b) => {return b.nilai - a.nilai}).map((item,i) => (
            <tr key={i}>
            <td>{i+1}</td>
            <td>{item.nama}</td>
            <td>{item.waktu}</td>
            <td>{item.nilai}</td>
          </tr>
          ))}
        <tr>
          <td className='fw-bold' colSpan={3}>Average</td>
          <td>{averageNilai}</td>
        </tr>
        <tr>
          <td className='fw-bold' colSpan={3}>Nilai Min</td>
          <td>{min}</td>
        </tr>
        <tr>
          <td className='fw-bold' colSpan={3}>Nilai Max</td>
          <td>{max}</td>
        </tr>
        </tbody>
      </Table>
      </Col>

      <Col md={6}>
      <h3>Sort berdasarkan Waktu terkecil</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Waktu</th>
            <th>Nilai</th>
          </tr>
        </thead>
        <tbody>
          {data.sort((a,b) => {return a.waktu - b.waktu}).map((item,i) => (
            <tr key={i}>
            <td>{i+1}</td>
            <td>{item.nama}</td>
            <td>{item.waktu}</td>
            <td>{item.nilai}</td>
          </tr>
          ))}
           <tr>
          <td className='fw-bold' colSpan={3}>Average</td>
          <td>{averageNilai}</td>
          </tr>
          <tr>
            <td className='fw-bold' colSpan={3}>Nilai Min</td>
            <td>{min}</td>
          </tr>
          <tr>
            <td className='fw-bold' colSpan={3}>Nilai Max</td>
            <td>{max}</td>
          </tr>
        </tbody>
      </Table>
      </Col>
      </Row>
      </Container>

      <footer className="py-2" style={{backgroundColor: "black", color:"white"}}>
               <h5><Icon className="mb-1 me-1" icon="logos:react" /> 2022 Created By Jemmy Yosua Alie</h5>
      </footer>
    </div>
  );
}

