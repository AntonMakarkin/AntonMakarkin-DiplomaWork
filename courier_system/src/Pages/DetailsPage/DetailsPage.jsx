import { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Container, Typography, Box, Button, Avatar, Card } from "@material-ui/core"

import Context from '../../Context/context';

import Loader from '../../Components/Loader/Loader';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import OrderItemCard from '../../Components/OrderItemCard/OrderItemCard';
import Modal from '../../Components/Modals/Modal';

import { getOrderById, updateOrder } from "../../Actions/orders";

import useStyles from './styles';

const DetailsPage = ({ header }) => {
    const { darkMode } = useContext(Context);
    const { item, isLoading, isError } = useSelector(state => state?.data)
    const { total } = useSelector(state => state?.data?.item)
    const orderItems = useSelector(state => state?.data?.item?.goods)
    const [modalActive, setModalActive] = useState(false)
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getOrderById(id))
    },[dispatch, id])

    const confirmOrder = () => {
        dispatch(updateOrder({ status: 'Доставлен' }, id, history))
        setModalActive(false)
    }

    if (isLoading) {
        return <Loader/>
    }

    if (isError) {
        <ErrorMessage/>
    }

    return (
        <>
            <Container className={classes.detailsPageContainer} style={darkMode ? {color: '#fff'} : {color: '#000'}}>
                <Typography className={classes.detailsPageHeader}
                            variant="h2">{header}</Typography>
                <Container maxWidth={false} disableGutters={true} className={classes.detailsPageInfo}>
                    <Box className={classes.detailsBlock}>
                        <Typography className={classes.detailsDescription}>Клиент:</Typography>
                        <Typography>{item?.name}</Typography>
                    </Box>
                    <Box className={classes.detailsBlock}>
                        <Typography className={classes.detailsDescription}>Почта:</Typography>
                        <Typography>{item?.email}</Typography>
                    </Box>
                    <Box className={classes.detailsBlock}>
                        <Typography className={classes.detailsDescription}>Телефон:</Typography>
                        <Typography>{item?.phone}</Typography>
                    </Box>
                    <Box className={classes.detailsBlock}>
                        <Typography className={classes.detailsDescription}>Улица:</Typography>
                        <Typography>{item?.address?.street}</Typography>
                    </Box>
                    <Box className={classes.detailsBlock}>
                        <Typography className={classes.detailsDescription}>Дом:</Typography>
                        <Typography>{item?.address?.house}</Typography>
                    </Box>
                    <Box className={classes.detailsBlock}>
                        <Typography className={classes.detailsDescription}>Квартира:</Typography>
                        <Typography>{item?.address?.apartment}</Typography>
                    </Box>
                    <Box className={classes.detailsBlock}>
                        <Typography className={classes.detailsDescription}>Сумма:</Typography>
                        <Typography>{total}₽</Typography>
                    </Box>
                </Container>
                <Typography className={classes.detailsPageHeader}
                            variant="h2">{'Товары'}</Typography>
                <Container maxWidth={false} disableGutters={true} className={classes.detailsPageOrderItems}>
                    {orderItems?.map((item, i) => (
                        <OrderItemCard key={item._id} 
                                    item={item} 
                                    darkMode={darkMode}
                                    number={i}/>
                    ))}
                </Container>
                <Container maxWidth={false} disableGutters={true} className={classes.detailsPageButtons}>
                    <Button variant="contained"
                            className={classes.actionButton}
                            type="submit"
                            onClick={() => setModalActive(true)} 
                            style={darkMode ? {color: '#fff', backgroundColor: 'rgb(26, 32, 46)'} : {color: '#000'}}>Подтвердить доставку</Button>
                </Container>
            </Container>
            <Modal active={modalActive} setActive={setModalActive} header={'Вы действительно хотите завершить заказ? Вы привезли его по указанному адресу и отдали клиенту?'}>
                <Button onClick={() => setModalActive(false)}>Нет</Button>
                <Button onClick={confirmOrder}>Да</Button>
            </Modal>        
        </>
    )
}

export default DetailsPage