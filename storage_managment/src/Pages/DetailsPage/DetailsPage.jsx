import { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Container, Typography, Box, Button, Avatar, Card } from "@material-ui/core"

import Context from '../../Context/context';

import Loader from '../../Components/Loader/Loader';
import OrderItemCard from '../../Components/OrderItemCard/OrderItemCard';
import SelectInput from '../../Components/Inputs/SelectInput/SelectInput';

import { getOrderById, updateOrder } from "../../Actions/orders";

import useStyles from './styles';
import { Add, Remove } from "@material-ui/icons";

const DetailsPage = ({ header }) => {
    const { darkMode } = useContext(Context);
    const { item, couriers, isLoading } = useSelector(state => state?.data)
    const { total } = useSelector(state => state?.data?.item)
    const [blockButton, setBlockButton] = useState(true)
    const [courierToAdd, setCourierToAdd] = useState('')
    const orderItems = useSelector(state => state?.data?.item?.goods)
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getOrderById(id))
    },[dispatch, id])

    const confirmOrder = async (e) => {
        e.preventDefault();

        dispatch(updateOrder({ goods: item.goods, total: item.total, status: 'Передан_курьеру',  courier: {...courierToAdd} }, id, history))
    }

    if (isLoading) {
        return <Loader/>
    }

    return (
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
                        variant="h2">{'Курьер'}</Typography>
            <Container maxWidth={false} disableGutters={true}>
                <SelectInput value={courierToAdd || ''} items={couriers} label="Выберите курьера" handleChange={(e) => setCourierToAdd(e.target.value)}/>
            </Container>
            <Typography className={classes.detailsPageHeader}
                        variant="h2">{'Товары'}</Typography>
            <Container maxWidth={false} disableGutters={true} className={classes.detailsPageOrderItems}>
                {orderItems?.map((item, i) => (
                    <OrderItemCard key={item._id} 
                                   item={item} 
                                   darkMode={darkMode}
                                   number={i} 
                                   setBlockButton={setBlockButton}/>
                ))}
            </Container>
            <Container maxWidth={false} disableGutters={true} className={classes.detailsPageButtons}>
                <Button variant="contained"
                        className={classes.actionButton}
                        disabled={blockButton}
                        type="submit"
                        onClick={confirmOrder} 
                        style={darkMode ? {color: '#fff', backgroundColor: 'rgb(26, 32, 46)'} : {color: '#000'}}>Подтвердить</Button>
                <Button variant="contained"
                        className={classes.actionButton} 
                        style={darkMode ? {color: '#fff', backgroundColor: 'rgb(26, 32, 46)'} : {color: '#000'}}>Отменить</Button>
            </Container>
        </Container>        
    )
}

export default DetailsPage