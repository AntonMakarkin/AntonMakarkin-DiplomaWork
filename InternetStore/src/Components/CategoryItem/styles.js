import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    categoryContainer: {
        flex: 1,
        margin: '15px',
        height: '70vh',
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            margin: '0px',
            paddingLeft: '5px',
            paddingRight: '5px'
        }
    },
    categoryImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'contrast(70%)',
        [theme.breakpoints.down('xs')]: {
            height: '30vh'
        }
    },
    categoryHeader: {
        color: '#fff',
        marginBottom: '20px',
        fontSize: '30px'
    },
    categoryInfo: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    categoryButton: {
        padding: '10px',
        backgroundColor: '#fff',
        fontWeight: '600'
    }
}));

export default useStyles;