import React, {useEffect, useState} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { getBook } from "../services/bookService";
 
function BookDetails(props) {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const result = await getBook(props.match.params.id);
            setData(result.data.data);
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
            props.history.replace("/not-found");
        }
    }

    useEffect(() =>{
        getData();
     }, []);



    let imageSrc = require(`../images/default.jpg`).default;
    if(data.isbn)
        imageSrc = require(`../images/${data.isbn}.jpg`).default;

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1
            }}
        />
    );

    const handelBackToBooks = () =>{
        props.history.push('/books')
    }

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item onClick={handelBackToBooks}>Books</Breadcrumb.Item>
                <Breadcrumb.Item active>{data.title}</Breadcrumb.Item>
            </Breadcrumb>

            <Row>
                <Col sm={5}>
                    <Image src={imageSrc} />
                    <p></p>
                    <Row>
                        <Col md={{ span: 3, offset: 3 }}>
                            <p>
                            <Button variant="primary" onClick={handelBackToBooks}>Back</Button>{''}
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={7}>
                <div>
                <h1>
                    {data.title}
                </h1>
                <p></p>
                <h5>
                    {data.subtitle}
                </h5>
                <h5>
                <ColoredLine color="black" />
                    <Row>
                        <Col sm={6}>
                        By <label style={{color:'green' }}>
                            {data.author}
                        </label>
                        </Col>
                        <Col sm={6} align="right">
                        <label style={{color:'red' }}>
                            Best Seller
                        </label>
                        </Col>
                    </Row>
                </h5>
                <ColoredLine color="black" />
                <h5>
                <Row>
                    <Col sm={6}>
                        <Badge pill bg="primary">
                            {data.type}
                        </Badge>
                    </Col>
                    <Col sm={6} align="right">
                        {data.format}
                    </Col>
                </Row>
                <p></p>

                
                </h5>
                <ColoredLine color="black" />
                <h6>
                Publisher RRP ${data.publisherRRP}
                </h6>
                <h2>
                <p style={{color:'red' }}>
                    Our price  ${data.price}
                </p>
                <p></p>
                </h2>
                <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Description</Accordion.Header>
                            <Accordion.Body>
                            {data.description}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <p></p>
                <Table striped borderless hover>
                <tbody>
                    <tr>
                        <td style={{fontWeight: "bold"}}>ISBN</td>
                        <td>{data.isbn}</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight: "bold"}}>No. Of Pages</td>
                        <td>{data.pages}</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight: "bold"}}>Dimensions</td>
                        <td>{data.dimensions}</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight: "bold"}}>On Sale Date</td>
                        <td>{data.releaseDate}</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight: "bold"}}>Publisher</td>
                        <td>{data.publisher}</td>
                    </tr>
                </tbody>
                </Table>
                </Col>
            </Row>
            <p></p>
            <Row>
                <Col>
                
                </Col>
            </Row>
        </div>
    )
}


export default BookDetails

