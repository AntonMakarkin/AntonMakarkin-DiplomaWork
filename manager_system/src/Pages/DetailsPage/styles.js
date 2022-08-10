import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    detailsPageContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1'
    },
    detailsPageHeader: {
        fontSize: '1.5em',
        marginBlockStart: '0.83em',
        marginBlockEnd: '0.83em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        fontWeight: 'bold',
        lineHeight: '1.43'
    },
    detailsDescription: {
        marginRight: '10px'
    },
    detailsPageInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flex: '1'
    },
    detailsBlock: {
        display: 'flex',
        width: '50%',
        height: '20px'
    },
    detailsPageOrderItems: {
        display: 'flex',
        flexDirection: 'column',
        flex: '2',
        marginBottom: '20px',
        overflow: 'auto'
    },
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
    },
    detailsPageButtons: {
        marginBottom: '20px'
    },
    actionButton: {
        //marginBottom: '20px'
    }
}))

export default useStyles;