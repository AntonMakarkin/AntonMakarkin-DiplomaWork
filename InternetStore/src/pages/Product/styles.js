import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    productContainer: {
        maxWidth: '1440px'
    },
    productWrapper: {
        padding: '50px',
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            padding: '10px',
            flexDirection: 'column'
        }
    },
    productImgContainer: {
        flex: '1'
    },
    productImg: {
        width: '100%',
        height: '50vh',
        objectFit: 'contain',
        [theme.breakpoints.down('xs')]: {
            height: '40vh'
        }
    },
    productInfoContainer: {
        flex: '1',
        padding: '0px 50px',
        [theme.breakpoints.down('xs')]: {
            padding: '10px'
        }
    },
    productTitle: {
        fontSize: '30px',
        fontWeight: '200'
    },
    productDesc: {
        margin: '20px 0px'
    },
    productPrice: {
        display: 'block',
        fontWeight: '100',
        fontSize: '40px',
        marginBottom: '20px'
    },
    addContainer: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    amountContainer: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: '700'
    },
    amountNumber: {
        width: '30px',
        height: '30px',
        borderRadius: '10px',
        border: '1px solid #336799',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0px 5px'
    },
    addButton: {
        padding: '15px',
        border: '2px solid #336799'
    }
}))

export default useStyles;