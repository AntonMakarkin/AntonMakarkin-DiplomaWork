import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        display: 'flex',
        paddingLeft: '50px',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '0'
        }
    },
    footerLeftBlock: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'
    },
    footerCenterBlock: {
        flex: '1',
        padding: '20px'
    },
    footerRightBlock: {
        flex: '1',
        padding: '20px',
        [theme.breakpoints.down('xs')]: {
            backgroundColor: '#fff8f8'
        }
    },
    footerLogo: {
        fontSize: '30px',
        fontWeight: 'bold'
    },
    footerDesc: {
        margin: '20px 0px'
    },
    footerSocialContainer: {
        display: 'flex'
    },
    footerSocialIcon: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '20px'
    },
    footerTitle: {
        marginBottom: '30px',
        fontWeight: 'bold'
    },
    footerList: {
        margin: '0',
        padding: '0',
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
    },
    footerListItem: {
        width: '50%',
        marginBottom: '10px'
    },
    footerContactItem: {
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
    }
}));

export default useStyles;