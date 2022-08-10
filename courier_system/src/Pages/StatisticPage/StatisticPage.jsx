import { useContext } from "react";
import { Box, Container, Typography} from "@material-ui/core";

import Context from '../../Context/context';

import useStyles from './styles';

const Home = () => {
    const { darkMode } = useContext(Context);
    const classes = useStyles();

    return (
        <Container className={classes.dataPageContainer} maxWidth={false} disableGutters={true}>
            <Typography className={classes.dataPageHeader} 
                        variant="h2" 
                        style={darkMode ? {color: '#fff'} : {color: '#000'}}>Статистика</Typography>
        </Container>
    )
}

export default Home;