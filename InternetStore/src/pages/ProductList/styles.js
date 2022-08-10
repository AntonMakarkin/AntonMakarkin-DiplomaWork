import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    productListContainer: {

    },
    productListTitle: {
        margin: '20px',
        fontSize: '30px',
        fontWeight: 'bold'
    },
    productListFilterContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    productListFilter: {
        margin: '20px',
        [theme.breakpoints.down('xs')]: {
            margin: '0px 20px',
            display: 'flex',
            flexDirection: 'column'
        }
    },
    productListFilterText: {
        fontSize: '20px',
        fontWeight: '600',
        marginRight: '20px',
        [theme.breakpoints.down('xs')]: {
            marginRight: '0px'
        }
    },
    productListSelect: {
        padding: '10px',
        marginRight: '20px',
        [theme.breakpoints.down('xs')]: {
            margin: '10px 0px'
        }
    },
    productListOption: {

    }
}))

export default useStyles