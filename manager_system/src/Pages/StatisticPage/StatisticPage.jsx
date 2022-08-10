import { useContext } from "react";
import { Box } from "@material-ui/core";

import Context from '../../Context/context';

const Home = () => {
    const { darkMode } = useContext(Context);

    return (
        <Box>
            <h2 style={!darkMode ? {color: '#000'} : {color: '#fff'}}>Статистика</h2>
        </Box>
    )
}

export default Home;