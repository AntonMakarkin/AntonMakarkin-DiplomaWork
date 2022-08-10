import { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button, Container } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons'
import clsx from 'clsx'
import Announcement from '../../Components/Announcement/Announcement'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import { sendOrder } from '../../Actions/cart';

import useStyles from './styles';

const Order = () => {
    const { goods, quantity, total } = useSelector(state => state.cart)
    const [personalData, setPersonalData] = useState({ name: '', email: '', phone: '' })
    const [address, setAddress] = useState({ street: '', house: '', apartment: '' })
    const dispatch = useDispatch();
    const classes = useStyles();

    console.log(total);

    const handleSendOrder = async (e) => {
        e.preventDefault();

        dispatch(sendOrder({ ...personalData, goods, total, address }))
    }

    return (
        <Container maxWidth={false} disableGutters={true}>
            <Navbar/>
            <Announcement/>
            <Box className={classes.cartWrapper}>
                <Box component='span' variant='h1' className={classes.orderTitle}>
                    ОФОРМЛЕНИЕ ЗАКАЗА
                </Box>
                <Box className={classes.orderPersonalData}>
                    <Box className={classes.orderPersonalDataFormBlock}>
                        <Box component="span" className={classes.orderPersonalDataHeader}>
                            1) ВАШИ ДАННЫЕ
                        </Box>
                        <form>
                            <input className={classes.orderInput} 
                                   value={personalData.name || ''} onChange={(e) => setPersonalData({ ...personalData, name: e.target.value })} 
                                   type="text" name="name" placeholder="ФИО"/>
                            <input className={classes.orderInput}
                                   value={personalData.email || ''} onChange={(e) => setPersonalData({ ...personalData, email: e.target.value })}
                                   type="email" name="email" placeholder="Email"/>
                            <input className={classes.orderInput} 
                                   value={personalData.phone || ''} onChange={(e) => setPersonalData({ ...personalData, phone: e.target.value })}
                                   type="tel" name="phone" placeholder="Телефон"/>
                        </form>
                        <Box component="span" className={classes.orderPersonalDataHeader}>
                            2) АДРЕС ДОСТАВКИ (Г. МОСКВА)
                        </Box>
                        <form>
                            <input className={classes.orderInput}
                                   value={address.street || ''} onChange={(e) => setAddress({ ...address, street: e.target.value })}  
                                   type="text" name="street" placeholder="Улица"/>
                            <input className={classes.orderInput}
                                   value={address.house || ''} onChange={(e) => setAddress({ ...address, house: e.target.value })}
                                   type="text" name="house" placeholder="Дом"/>
                            <input className={classes.orderInput} 
                                   value={address.apartment || ''} onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
                                   type="text" name="apartment" placeholder="Квартира"/>
                        </form>
                    </Box>
                    <Box className={classes.cartSummary}>
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
                            <Button type="submit" onClick={handleSendOrder} className={classes.cartSummeryButton}>ОФОРМИТЬ ЗАКАЗ</Button>
                        </Link>
                    </Box>
                </Box>
                <Box className={classes.orderList}>
                    <Box component="span" className={classes.orderPersonalDataHeader}>
                        3) СОСТАВ ЗАКАЗА
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
                    </Box>
                </Box>
            </Box>
            <Footer/>
        </Container>
    )
}

export default Order