import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    productContainer: {
        flex: '1',
        margin: '15px',
        width: '350px',
        minWidth: '250px',
        minHeight: '350px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(245, 250, 253);',
        cursor: 'pointer',
        border: '1px solid #e1e6ec',

        '&:hover $productInfo': {
            opacity: '1'
        }
    },
    circle: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        position: 'absolute',
    },
    productImageContainer: {
        width: '100%',
        heigth: '300px',
        backgroundColor: '#fff',
        paddingTop: '15px'
    },
    productImage: {
        width: '100%',
        height: '13em',
        objectFit: 'contain',
    },
    /*productInfo: {
        opacity: '0',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        backgroundColor: 'rgba(0,0,0, 0.2)',
        zIndex: '3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.5s ease'

    },*/
    productInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px'
    },
    productInfoText: {
        display: 'block',
        textAlign: 'center',
        marginBottom: '10px'
    },
    productIcons: {
        display: 'flex'
    },
    productIconBlock: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px',
        transition: 'all 0.5s ease',
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: '#e9f5f5',
            transform: 'scale(1.1)'
        }
    },
    productLink: {
        textDecoration: 'none'
    }
}));

export default useStyles;