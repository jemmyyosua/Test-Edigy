import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

export default function Navigation({active,class1,class2,class3}){
    return (
      <div>
       <Nav justify variant="tabs" defaultActiveKey={active}>
        <Nav.Item>
            <Nav.Link className={class1} href="/test1">Test 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className={class2} href="/test2">Test 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className={class3} href="/test3">Test 3</Nav.Link>
        </Nav.Item>
        </Nav>
      </div>
    )
}