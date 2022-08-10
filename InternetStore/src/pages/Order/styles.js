import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cartContainer: {

    },
    cartWrapper: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        [theme.breakpoints.down('xs')]: {
            padding: '10px'
        }
    },
    orderTitle: {
        display: 'block',
        fontWeight: '300',
        textAlign: 'center',
        fontSize: '30px',
        marginBottom: '40px'
    },
    orderPersonalData: {
        //border: '1px solid lightgray',
        //padding: '20px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    orderPersonalDataFormBlock: {
        border: '1px solid lightgray',
        padding: '20px',
        borderRadius: '10px',
        marginRight: '20px',
        flex: '3'
    },
    orderPersonalDataHeader: {
        display: 'block',
        fontWeight: '300',
        textAlign: 'left',
        fontSize: '25px',
        marginBottom: '24px'
    },
    orderPersonalDataForm: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        flexWrap: 'wrap'
    },
    orderInput: {
        margin: '0px 10px 20px 0px',
        padding: '10px',
        minWidth: 'calc(50% - 35px)'
    },
    cartTop: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '10px',
            paddingRight: '10px'
        }
    },
    cartTopTexts: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    cartTopText: {
        textDecoration: 'underline',
        cursor: 'pointer',
        margin: '0px 10px'
    },
    cartTopButton: {
        padding: '10px',
        fontWeight: '300'
    },
    cartTopButtonUnfilled: {
        border: '1px solid #000'
    },
    cartTopButtonFilled: {
        backgroundColor: '#000',
        color: '#fff',

        "&:hover": {
            backgroundColor: 'gray'
        }
    },
    cartBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    cartInfo: {
        flex: '3'
    },
    cartProduct: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    cartProductDetail: {
        display: 'flex',
        flex: '2'
    },
    cartImage: {
        width: '200px',
    },
    cartDetails: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    cartHr: {
        backgroundColor: '#eee',
        border: 'none',
        height: '1px'
    },
    cartPriceDetail: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cartProductAmountContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    },
    cartProductAmmount: {
        fontSize: '24px',
        margin: '5px',
        [theme.breakpoints.down('xs')]: {
            margin: '5px 15px'
        }
    },
    cartProductPrice: {
        fontSize: '30px',
        fontWeight: '100',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '20px'
        }
    },
    cartSummary: {
        flex: '1',
        border: '1px solid lightgray',
        borderRadius: '10px',
        padding: '20px',
        height: '390px'
    },
    cartSummaryTitle: {
        fontWeight: '200',
        fontSize: '30px'
    },
    cartSummaryItem: {
        margin: '30px 0px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    cartSummaryItemTotal: {
        fontWeight: '500',
        fontSize: '24px'
    },
    cartSummaryItemText: {

    },
    cartSummaryItemPrice: {

    },
    cartSummeryButton: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#000',
        color: '#fff',
        fontWeight: '600',
        '&:hover': {
            backgroundColor: 'grey'
        }
    }
}));

export default useStyles;