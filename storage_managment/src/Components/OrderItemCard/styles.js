import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    orderProduct: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        paddingRight: '20px',
        marginBottom: '10px'
    },
    orderProductDetails: {
        padding: '10px',
        display: 'flex',
        flex: '2'
    },
    orderProductImage: {
        width: '100px',
        height: '100px',
        marginRight: '20px'
    },
    productDetails: {
        maxWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    orderProductsAmount: {
        paddingTop: '14px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    orderProductAmountContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    orderProductAmmount: {
        fontSize: '24px',
        margin: '5px'
    }
}))

export default useStyles;