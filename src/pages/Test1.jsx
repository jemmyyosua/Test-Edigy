import { Container, Table } from 'react-bootstrap'
import Navigation from '../components/Navbar'

export default function Test1(){

    const products = [
        {
            id : 1,
            nama : "Indomie",
            harga : 3000,
            rating : 5,
            likes : 150
        },
        {
            id : 2,
            nama : "Laptop",
            harga : 4000000,
            rating : 4.5,
            likes : 123
        },
        {
            id : 3,
            nama : "Aqua",
            harga : 3000,
            rating : 4,
            likes : 250
        },
        {
            id : 4,
            nama : "Smart TV",
            harga : 4000000,
            rating : 4.5,
            likes : 42
        },
        {
            id : 5,
            nama : "Headphone",
            harga : 4000000,
            rating : 3.5,
            likes : 90
        },
        {
            id : 6,
            nama : "Very Smart TV",
            harga : 4000000,
            rating : 3.5,
            likes : 87
        }

    ]

    const sortHarga = products.sort((i, j) => { 
        if(i.harga === j.harga){
            return j.rating - i.rating
        } else if (i.rating === j.rating) {
            return j.likes - i.likes
        } else {
            return i.harga - j.harga
        }
     })
    
    return (
      <div>
        <Navigation active="/test1" class1={"text-reset fw-bold fs-5"}  class2={"text-reset"}  class3={"text-reset"} />
            <div className="mt-5">
                <Container>
                <h3 style={{textAlign : "left"}}>Description Problem 1</h3>
                <p style={{textAlign : "left"}}>
                    Urutkan array di atas dengan prioritas sebagai berikut : 
                    <br />
                    1. harga terendah
                    <br />
                    2. jika harga sama maka urutkan berdasarkan rating tertinggi
                    <br />
                    3. jika rating sama maka urutkan berdasarkan likes terbanyak. 
                    <br />
                    Pastikan program yang anda buat dapat menghandle sekitar ratusan data.
                </p>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Rating</th>
                    <th>Likes</th>
                    </tr>
                </thead>
                <tbody>
                {sortHarga.map((item,i) => (
                    <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.nama}</td>
                    <td>{item.harga}</td>
                    <td>{item.rating}</td>
                    <td>{item.likes}</td>
                    </tr>
                    ))}
                </tbody>
                </Table>
                </Container>
            </div>
      </div>
    )
}