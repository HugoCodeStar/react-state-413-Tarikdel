import {useState} from 'react';
//import Button from 'react-bootstrap/Button';
import {Button, Col, Container, Row} from "react-bootstrap";

function Clicker(){
    let cpt=0;
    const [compteur, setCompteur] = useState(cpt);

    return (
        <div>
            <Container fluid="md">
                <Row>

                    <Col md="auto">The count is {compteur}{' '} </Col>
                    <Col md="auto"><Button onClick={() => setCompteur(compteur+1)}>Click</Button>{' '} </Col>
                    <Col md="auto"><Button onClick={() => setCompteur(0)}>Reset</Button> </Col>

                </Row>
            </Container>
        </div>
    );
}


export default Clicker;