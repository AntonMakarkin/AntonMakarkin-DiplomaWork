import { Container, Box, Typography } from '@material-ui/core'
import { Facebook, Instagram, MailOutline, Phone, Twitter } from '@material-ui/icons';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <Container disableGutters={true} maxWidth={false}>
            <Container disableGutters={true} className={classes.footerContainer}>
                <Box className={classes.footerLeftBlock}>
                    <Typography variant="h2" className={classes.footerLogo}>
                        GamePark
                    </Typography>
                    <Typography className={classes.footerDesc}>
                        Занимаемся продажей цифровых развлечений с 1995 года. У нас широкий ассортимент видеоигр, игровых консолей и аксессуаров к ним
                    </Typography>
                    <Box className={classes.footerSocialContainer}>
                        <Box className={classes.footerSocialIcon} style={{ backgroundColor: '#3b5999' }}>
                            <Facebook/>
                        </Box>
                        <Box className={classes.footerSocialIcon} style={{ backgroundColor: '#e4405f' }}>
                            <Instagram/>
                        </Box>
                        <Box className={classes.footerSocialIcon} style={{ backgroundColor: '#55acee' }}>
                            <Twitter/>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.footerCenterBlock}>
                    <Typography className={classes.footerTitle}>
                        Полезные ссылки
                    </Typography>
                    <ul className={classes.footerList}>
                        <li className={classes.footerListItem}>Главная</li>
                        <li className={classes.footerListItem}>Корзина</li>
                        <li className={classes.footerListItem}>Игры</li>
                        <li className={classes.footerListItem}>Консоли</li>
                        <li className={classes.footerListItem}>Аксессуары</li>
                        <li className={classes.footerListItem}>Мой аккаунт</li>
                        <li className={classes.footerListItem}>Заказы</li>
                        <li className={classes.footerListItem}>Желаемое</li>
                        <li className={classes.footerListItem}>Условия</li>
                    </ul>
                </Box>
                <Box className={classes.footerRightBlock}>
                    <Typography className={classes.footerTitle}>
                        Контакты
                    </Typography>
                    <Box className={classes.footerContactItem}>
                        <Phone style={{ marginRight: '10px' }}/>
                        8 (800) 700-44-48
                    </Box>
                    <Box className={classes.footerContactItem}>
                        <MailOutline style={{ marginRight: '10px' }}/>
                        support@gamepark.ru
                    </Box>
                </Box>
            </Container>
        </Container>
    )
}

export default Footer