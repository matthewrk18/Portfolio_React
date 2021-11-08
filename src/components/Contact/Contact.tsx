import { makeStyles, } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container, Row, Col, Button} from 'react-bootstrap' 
import tree from '../../assets/images/tree.jpeg';


const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    main:{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${tree})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute'
    },
    formcontrol:{
        
        opacity: 0.5
    },
    formlabel:{
        color: 'white',
        fontSize: '1.2rem',
        
    },
    
})

export const Contact = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <main className={classes.main}>
                <Form>
                    <Container fluid>
                        <Row className="justify-content-center">
                            <Col className="text-center mt-5" xs="auto">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className={classes.formlabel}>Name</Form.Label>
                                    <Form.Control className={classes.formcontrol} type="name" placeholder="name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className={classes.formlabel}>Email</Form.Label>
                                    <Form.Control className={classes.formcontrol} type="email" placeholder="e-mail"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className={classes.formlabel}>Message</Form.Label>
                                    <Form.Control className={classes.formcontrol} as="textarea" rows={4} placeholder="message"/>
                                </Form.Group>
                                <Button variant="outline-light" size="lg" className="justify-content-center">Send</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </main>
        </div>
    )   
}
