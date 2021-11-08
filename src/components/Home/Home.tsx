import { makeStyles, Box, Grid, Paper, Typography, Card, CardContent} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import tree from '../../assets/images/tree.jpeg';
import socrates from '../../assets/images/socrates.jpeg';
import binary from '../../assets/images/binary.png';
import 'bootstrap/dist/css/bootstrap.min.css';


interface Props{
    title: string;
}

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
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '25%',
        color: 'white'
    },
    main_text_h1:{
        fontSize: '3.5rem'
    },
    main_text_h2:{
        fontSize: '2rem'
    },
    main_text_img:{
        width: '150px',
        height: 'auto',
        borderRadius: '50%'
    },



});


export const Home = (props:Props) =>{

    const classes = useStyles();

    return (
        
        <div className={classes.root}>

            

            <main className={classes.main}>
                
                <div className={classes.main_text}>
                    <img src={socrates} alt="" className={classes.main_text_img}/>
                    <h1 className={classes.main_text_h1}>Matthew Katz</h1>
                    <h2 className={classes.main_text_h2}>Full Stack Engineer</h2>
                </div>

            </main>
            
        </div>
    )
}