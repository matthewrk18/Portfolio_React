import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import tree from '../../assets/images/tree.jpeg';
import weather from '../../assets/images/weather.webp';
import comicbook from '../../assets/images/comicbook.png';
import dealership from '../../assets/images/dealership.jpeg';
import creeks from '../../assets/images/creeks.jpeg';
import calc from '../../assets/images/calc.png';
import parking from '../../assets/images/parking.jpeg';
import ROI from '../../assets/images/ROI.png';
import binary from '../../assets/images/binary.png';
import { makeStyles, Button, styled } from '@material-ui/core';
import { Container, Row, Col, Card, Carousel} from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'


const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    main:{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${tree})`,
        width: '100%',
        height: 'auto',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute'
    },
    card_header:{
        backgroundColor: 'black',
        color: 'white',
        fontSize: '3vh',
        fontWeight: 'bold'
        
    },
    card_body:{
        backgroundColor: 'black',
        color: 'white',
    },
    calc:{
        width: '200px',
        paddingLeft: '45px'
    },
})

export const Portfolio = () => {

    const classes = useStyles();

    return (

        <div className={classes.root}>

            <main className={classes.main}>

            <Container>

                <Row className="justify-content-center">
                    <Col md="auto">
                        <Card className="text-center mx-5 my-5" style={{ width: '18rem' }}>
                            <Card.Header className={classes.card_header}>Web Developer Portfolio</Card.Header>
                            <Card.Img variant="top" src={binary} />
                            <Card.Body className={classes.card_body}>
                                
                                <Card.Text>
                                Personal portfolio website with form
                                </Card.Text>
                                <a href=""><FaGithub /></a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md="auto">
                        <Card className="text-center mx-5 my-5" style={{ width: '18rem' }}>
                            <Card.Header className={classes.card_header}>JavaScript Weather App</Card.Header>
                            <Card.Img variant="top" src={weather} />
                            <Card.Body className={classes.card_body}>
                                
                                <Card.Text>
                                A Weather App utilizing the Open Weather API
                                </Card.Text>
                                <a href="https://github.com/matthewrk18/Weather_App"><FaGithub /></a>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                <Row className="justify-content-center">

                    <Col md="auto">
                        <Card className="text-center mx-5 my-5" style={{ width: '18rem' }}>
                            <Card.Header className={classes.card_header}>Comicbook API</Card.Header>
                            <Card.Img variant="top" src={comicbook} />
                            <Card.Body className={classes.card_body}>
                                
                                <Card.Text>
                                A Full Featured CRUD RESTful Web API
                                </Card.Text>
                                <a href="https://github.com/matthewrk18/comicbook_api"><FaGithub /></a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md="auto">
                        <Card className="text-center mx-5 my-5" style={{ width: '18rem' }}>
                            <Card.Header className={classes.card_header}>Car Dealership ERD and Database</Card.Header>
                            <Card.Img variant="top" src={dealership} />
                            <Card.Body className={classes.card_body}>
                                
                                <Card.Text>
                                A Database Creation Project utilizing ERD. 
                                </Card.Text>
                                <a href="https://github.com/matthewrk18/car_dealership"><FaGithub /></a>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                <Row className="justify-content-center">
                    <Col md="auto">
                        <Card className="text-center mx-5 my-5" style={{ width: '18rem' }}>
                            <Card.Header className={classes.card_header}>Parking Garage Console App</Card.Header>
                            <Card.Img variant="top" src={parking} />
                            <Card.Body className={classes.card_body}>
                                
                                <Card.Text>
                                An Object Oriented Program written in Python that performs the functions of parking garage software
                                </Card.Text>
                                <a href="https://github.com/matthewrk18/garage_project"><FaGithub /></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="auto">
                        <Card className="text-center mx-5 my-5" style={{ width: '18rem' }}>
                            <Card.Header className={classes.card_header}>Real Estate ROI Calculator</Card.Header>
                            <Card.Img variant="top" src={calc} className={classes.calc}  />
                            <Card.Body className={classes.card_body}>

                                <Card.Text>
                                An Object Oriented Program written in Python that calculates ROI for real estate investment based on user input
                                </Card.Text>
                                <a href="https://github.com/matthewrk18/roi_calc"><FaGithub /></a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>

            </main>

        </div>
    )
}

/*


function rgba(arg0: number, arg1: number, arg2: number, arg3: number): string | import("@material-ui/styles").PropsFunc<{}, string | undefined> | undefined {
    throw new Error('Function not implemented.');
}
<Container>

                    <Row>

                        <Carousel className={classes.carousel}>
                            <Carousel.Item>
                                
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>

                            </Carousel.Item>
                        </Carousel>

                    </Row>

                </Container>
*/


