import { makeStyles } from "@material-ui/core";

import img from '../../Images/promoPS5.jpg'

const useStyles = makeStyles((theme) => ({
    registerContainer: {
        width: '100vw',
        height: '100vh',
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("${img}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        //backgroundImage: 'url("https://www.iguides.ru/upload/medialibrary/5c4/5c4ce830697fc0b633db3a39ee9c9b20.jpg")',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    registerWrapper: {
        width: '40%',
        padding: '20px',
        backgroundColor: '#fff',
        [theme.breakpoints.down('xs')]: {
            width: '75%'
        }
    },
    registerTitle: {
        fontSize: '24px',
        fontWeight: '300',
        marginBottom: '10px'
    },
    registerError: {
        color: 'red',
        textAlign: 'center',
        fontSize: '12px'
    },
    registerForm: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    registerInput: {
        flex: '1',
        minWidth: '40%',
        margin: '20px 10px 0px 0px',
        padding: '10px'
    },
    registerAgreement: {
        display: 'block',
        fontSize: '12px',
        margin: '20px 0px'
    },
    registerButton: {
        width: '100%',
        border: 'none',
        padding: '15px 20px',
        backgroundColor: '#336799',
        color: '#fff',
        '&:hover': {
            backgroundColor: 'lightblue'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    }
}));

export default useStyles;