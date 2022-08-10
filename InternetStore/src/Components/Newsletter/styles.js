import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    newsLetterContainer: {
        height: '60vh',
        backgroundColor: '#fcf5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    newsLetterTitle: {
        fontSize: '70px',
        marginBottom: '20px',
        fontWeight: 'bold'
    },
    newsLetterDesc: {
        fontSize: '24px',
        fontWeight: '300',
        marginBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        }
    },
    newsLetterInputContainer: {
        width: '50%',
        height: '40px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid lightgray',
        [theme.breakpoints.down('xs')]: {
            width: '80%'
        }
    },
    newsLetterInput: {
        border: 'none',
        flex: '8',
        paddingLeft: '20px'
    },
    newsLetterButton: {
        flex: '1',
        border: 'none',
        backgroundColor: '#336799',
        borderRadius: '0%',
        color: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s ease',

        '&:hover': {
            backgroundColor: 'lightblue'
        }
    }
}));

export default useStyles;