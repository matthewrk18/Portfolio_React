import react from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core';
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
    card_header:{
        backgroundColor: 'black',
        color: 'white',
        fontSize: '3vh',
        fontWeight: 'bold'
        
    },
    card_body:{
        backgroundColor: 'black',
        color: 'white',
        opacity: 0.5,
        
    },
    
})

export const Resume = () => {

    const classes = useStyles();

    return (

        <div className={classes.root}>

            <main className={classes.main}>

                <Container>

                    <Row className="justify-content-center">
                        <Col md="auto">
                            <Card className="text-center mx-5 my-5" style={{ width: '18rem', opacity: 0.75 }}>
                                <Card.Header className="mx-3 my-3" as="h1">Matthew Katz</Card.Header>
                                <Card.Title as="h3" className="mb-2 text-muted">Full Stack Developer</Card.Title>
                            
                            </Card>
                        </Col>
                        <Col md="auto">
                            <Card className="text-center mx-5 my-5" style={{ width: '18rem', opacity: 0.75 }}>
                                <Card.Header className="mx-3 my-3" as="h2">Contact</Card.Header>
                                <Card.Text as="h5" className="mb-2 text-muted">646.523.0685</Card.Text>
                                <Card.Text as="h5" className="mb-2 text-muted">matthewrk18@gmail.com</Card.Text>
                                <a href="https://github.com/matthewrk18" style={{ textDecoration: 'none' }}><Card.Text as="h5" className="mb-2 text-muted" >github.com/matthewrk18</Card.Text></a>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col md="auto">
                            <Card className="text-center mx-5 my-5" style={{ width: '18rem' , opacity: 0.75}}>
                            <Card.Header className="mx-3 my-3" as="h2">Technical Skills</Card.Header>
                            </Card>
                        </Col>
                    </Row>

                </Container>
                
            </main>

        </div>
    )
}