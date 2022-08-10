import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    categoriesContainer: {
        display: 'flex',
        padding: '20px',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            padding: '0px',
            flexDirection: 'column'
        }
    }
}));

export default useStyles;