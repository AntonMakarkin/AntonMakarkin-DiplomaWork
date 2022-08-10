import { Box, CircularProgress } from "@material-ui/core"

import useStyles from './styles';

const Loader = ({ fullPage }) => {
    const classes = useStyles();
    return (
        <Box className={classes.loaderContainer} style={fullPage ? { width: '100vw', height: '100vh'} : null}>
            <CircularProgress style={{ color: '#000' }} size={80}/>
        </Box>
    )
}

export default Loader