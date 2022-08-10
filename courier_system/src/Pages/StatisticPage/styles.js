import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    dataPageContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        overflow: 'auto'
    },
    dataPageHeader: {
        fontSize: '1.5em',
        marginBlockStart: '0.83em',
        marginBlockEnd: '0.83em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        fontWeight: 'bold',
        lineHeight: '1.43'
    }
}))

export default useStyles;