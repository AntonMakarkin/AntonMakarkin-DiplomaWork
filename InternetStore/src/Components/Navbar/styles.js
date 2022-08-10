import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainNavBarContainer: {
        maxWidth: '1440px'
    },
    navBarContainer: {
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            height: '50px',
            padding: '10px 5px'
        }
    },
    navBarLink: {
        textDecoration: 'none',
        color: '#000'
    },
    leftSide: {
        display: 'flex',
        alignItems: 'center',
        flex: '1',
        fontSize: '14px',
    },
    centerSide: {
        flex: '1'
    },
    rightSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: '1',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            flex: '2'
        }
    },
    languageButton: {
        flex: '1',
        fontSize: '14px',
        cursor: 'pointer'
    },
    searchBox: {
        display: 'flex',
        alignItems: 'center',
        border: '0.5px solid lightgray',
        marginLeft: '25px',
        padding: '5px',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0px'
        }
    },
    searchInput: {
        border: 'none',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '50px',
        }
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '30px',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '24px'
        }
    },
    menuItem: {
        fontSize: '14px',
        marginLeft: '25px',
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            marginLeft: '10px'
        }
    }
}));

export default useStyles;