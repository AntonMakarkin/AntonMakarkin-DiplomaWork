import { Container, Box, Typography, Button } from '@material-ui/core';

import useStyles from './styles';

const Login = () => {
    const classes = useStyles();

    return (
        <Container className={classes.loginContainer} maxWidth={false} disableGutters={true}>
            <Box className={classes.loginWrapper}>
                <Typography variant="h1" className={classes.loginTitle}>
                    АВТОРИЗОВАТЬСЯ
                </Typography>
                <form className={classes.loginForm}>
                    <input className={classes.loginInput} placeholder="Email"/>
                    <input className={classes.loginInput} placeholder="Пароль"/>
                    <Button className={classes.loginButton}>ВОЙТИ</Button>
                    <a className={classes.loginLink}>ЗАБЫЛИ ПАРОЛЬ?</a>
                    <a className={classes.loginLink}>СОЗДАТЬ НОВЫЙ АККАУНТ</a>
                </form>
            </Box>
        </Container>
    )
}

export default Login