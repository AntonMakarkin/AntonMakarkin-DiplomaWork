import { makeStyles } from "@material-ui/core";

import img from '../../Images/promo2_PS5.jpg'

const useStyles = makeStyles((theme) => ({
    loginContainer: {
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
    loginWrapper: {
        width: '25%',
        padding: '20px',
        backgroundColor: '#fff',
        [theme.breakpoints.down('xs')]: {
            width: '75%'
        }
    },
    loginTitle: {
        fontSize: '24px',
        fontWeight: '300'
    },
    loginForm: {
        display: 'flex',
        flexDirection: 'column'
    },
    loginInput: {
        flex: '1',
        //width: '100%',
        margin: '10px 0px',
        padding: '10px'

    },
    loginButton: {
        width: '50%',
        border: 'none',
        padding: '15px 20px',
        backgroundColor: '#336799',
        color: '#fff',
        '&:hover': {
            backgroundColor: 'lightblue'
        },
        marginBottom: '10px',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    loginLink: {
        display: 'flex',
        margin: '5px 0px',
        fontSize: '12px',
        textDecoration: 'underline',
        cursor: 'pointer'
    }
}));

export default useStyles;