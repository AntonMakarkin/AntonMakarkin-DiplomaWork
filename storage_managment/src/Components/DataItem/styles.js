import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    dataItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '0%',
        cursor: 'pointer'
    },
    dataItemBlock: {
        width: '20%',
        height: '100%',
        //flex: '1',
        padding: '5px',
        wordWrap: 'break-word'
    },
    dataItemButtons: {
        display: 'flex',
        alignItems: 'center'
    },
    openDetailsButton: {
        marginRight: '10px'
    }
}));

export default useStyles;