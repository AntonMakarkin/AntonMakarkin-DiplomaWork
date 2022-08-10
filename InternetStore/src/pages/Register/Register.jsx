import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@material-ui/core'

import { register } from '../../Actions/user';

import useStyles from './styles';

const Register = () => {
    const [postData, setPostData] = useState({ name: '', email: '', phone: '', password: ''});
    const isRegisterError = useSelector(state => state.user.registerError)
    const dispatch = useDispatch();
    const history = useNavigate();
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(register(postData, history))
    }

    return (
        <Container className={classes.registerContainer} maxWidth={false} disableGutters={true}>
            <Box className={classes.registerWrapper}>
                <Typography variant="h1" className={classes.registerTitle}>
                    ЗАРЕГИСТРИРОВАТЬСЯ
                </Typography>
                <Typography style={isRegisterError ? {opacity: '1'} : {opacity: '0'}} className={classes.registerError}>
                    Пользователь с данным логином или телефоном уже существует
                </Typography>
                <form onSubmit={handleSubmit} className={classes.registerForm}>
                    <input name="name" value={postData.name} className={classes.registerInput} placeholder="Имя" onChange={(e) => setPostData({ ...postData, name: e.target.value})}/>
                    <input name="email" value={postData.email} className={classes.registerInput} placeholder="Email" onChange={(e) => setPostData({ ...postData, email: e.target.value})}/>
                    <input name="phone" value={postData.phone} className={classes.registerInput} placeholder="Телефон" onChange={(e) => setPostData({ ...postData, phone: e.target.value})}/>
                    <input name="password" value={postData.password} className={classes.registerInput} placeholder="Пароль" onChange={(e) => setPostData({ ...postData, password: e.target.value})}/>
                    <Box component="span" className={classes.registerAgreement}>
                        Создавая аккаунт, вы соглашаетесь с <b>политикой конфиденциальности и обработкой персональных данных</b>
                    </Box>
                    <Button type="submit" className={classes.registerButton}>Регистрация</Button>
                </form>
            </Box>
        </Container>
    )
}

export default Register