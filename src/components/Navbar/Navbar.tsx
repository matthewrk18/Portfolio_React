import { makeStyles } from '@material-ui/core';
import binary from '../../assets/images/binary.png';
import {Nav, Navbar, Container} from 'react-bootstrap' 

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0',
    },
    nav_link:{
        color: 'white',
        textTransform: 'uppercase',
    },
    nav_logo:{
        width: '100px',
        paddingLeft: '10%'
    },
})

export const Navigation = () => {

    const classes = useStyles();

    return(
        <Navbar bg="black" variant="dark" >
                <Container>
                    <Nav.Link href="/" className={classes.nav_link}>Home</Nav.Link>
                    <Nav.Link href="/contact" className={classes.nav_link}>Contact</Nav.Link>
                    <Navbar.Brand href="/"><img src={binary} alt="" className={classes.nav_logo} /></Navbar.Brand>
                    <Nav.Link href="/portfolio" className={classes.nav_link}>Portfolio</Nav.Link>
                    <Nav.Link href="/resume" className={classes.nav_link}>Resume</Nav.Link>
                </Container>
        </Navbar>


    )
} 
