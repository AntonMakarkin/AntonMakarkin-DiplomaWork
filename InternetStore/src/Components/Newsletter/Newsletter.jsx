import { Box, Button, Container, Typography } from "@material-ui/core"
import { Send } from "@material-ui/icons";

import useStyles from './styles';

const Newsletter = () => {
    const classes = useStyles();

    return (
        <Container disableGutters={true} maxWidth={false} className={classes.newsLetterContainer}>
            <Typography variant="h2" className={classes.newsLetterTitle}>Рассылка</Typography>
            <Box className={classes.newsLetterDesc}>Получайте уведомления о ваших любимых продуктах</Box>
            <Box className={classes.newsLetterInputContainer}>
                <input placeholder="Ваша почта" className={classes.newsLetterInput}/>
                <Button className={classes.newsLetterButton}>
                    <Send/>
                </Button>
            </Box>
        </Container>
    )
}

export default Newsletter