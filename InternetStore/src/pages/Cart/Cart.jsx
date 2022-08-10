import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button, Container } from '@material-ui/core'
import { Add, Remove } from '@material-ui/icons';
import clsx from 'clsx';
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'

import useStyles from './styles';

const Cart = () => {
    const { goods, quantity, total } = useSelector(state => state.cart)
    const classes = useStyles();

    return (
        <Container maxWidth={false} disableGutters={true}>
            <Navbar/>
            <Announcement/>
            <Box className={classes.cartWrapper}>
                <Box component='span' variant='h1' className={classes.cartTitle}>
                    ВАША КОРЗИНА
                </Box>
                <Box className={classes.cartTop}>
                    <Button className={clsx(classes.cartTopButton, classes.cartTopButtonUnfilled)}>ПРОДОЛЖИТЬ ПОКУПКИ</Button>
                    <Box className={classes.cartTopTexts}>
                        <Box component="span" className={classes.cartTopText}>
                            {`Ваша корзина (${quantity})`}
                        </Box>
                        <Box component="span" className={classes.cartTopText}>
                            Ваши пожелания (2)
                        </Box>
                    </Box>
                    <Link to="/order">
                        <Button className={clsx(classes.cartTopButton, classes.cartTopButtonFilled)}>ОФОРМИТЬ ЗАКАЗ</Button>
                    </Link>
                </Box>
                <Box className={classes.cartBottom}>
                    <Box className={classes.cartInfo}>
                        {goods.map(item => (
                            <Fragment key={item._id}>
                                <Box className={classes.cartProduct}>
                                    <Box className={classes.cartProductDetail}>
                                        <img className={classes.cartImage} src={`data:image/jpg;base64,${item.avatar}`} alt=""/>
                                        <Box className={classes.cartDetails}>
                                            <Box component="span" className={classes.cartProductName}>
                                                <b>Товар:</b> {item.name}
                                            </Box>
                                            <Box component="span" className={classes.cartProductId}>
                                                <b>Артикул:</b> {item._id}
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className={classes.cartPriceDetail}>
                                        <Box className={classes.cartProductAmountContainer}>
                                            <Add/>
                                            <Box className={classes.cartProductAmmount}>
                                                {item.quantity}
                                            </Box>
                                            <Remove/>
                                        </Box>
                                        <Box className={classes.cartProductPrice}>
                                            {item.price} ₽
                                        </Box>
                                    </Box>
                                </Box>
                                <hr className={classes.cartHr}/>
                            </Fragment>
                        ))}
                    </Box>
                    <Box className={classes.cartSummary}>
                        <Box component="span" className={classes.cartSummaryTitle}>ИТОГОВЫЙ ЗАКАЗ</Box>
                        <Box className={classes.cartSummaryItem}>
                            <Box component="span" className={classes.cartSummaryItemText}>Сумма</Box>
                            <Box component="span" className={classes.cartSummaryItemPrice}>{total} ₽</Box>
                        </Box>
                        <Box className={classes.cartSummaryItem}>
                            <Box component="span" className={classes.cartSummaryItemText}>Доставка</Box>
                            <Box component="span" className={classes.cartSummaryItemPrice}>0 ₽</Box>
                        </Box>
                        <Box className={classes.cartSummaryItem}>
                            <Box component="span" className={classes.cartSummaryItemText}>Скидка</Box>
                            <Box component="span" className={classes.cartSummaryItemPrice}>0 ₽</Box>
                        </Box>
                        <Box className={clsx(classes.cartSummaryItem, classes.cartSummaryItemTotal)}>
                            <Box component="span" className={classes.cartSummaryItemText}>Итого</Box>
                            <Box component="span" className={classes.cartSummaryItemPrice}>{total} ₽</Box>
                        </Box>
                        <Link to="/order">
                            <Button className={classes.cartSummeryButton}>ОФОРМИТЬ ЗАКАЗ</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Footer/>
        </Container>
    )
}

export default Cart