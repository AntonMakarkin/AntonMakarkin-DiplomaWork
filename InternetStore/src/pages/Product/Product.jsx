import { Box, Button, Container, Typography } from "@material-ui/core"
import { Add, Remove } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { getGoodsById } from "../../Actions/goods"
import { addProductInCart } from "../../Actions/cart"

import Announcement from "../../Components/Announcement/Announcement"
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import Newsletter from "../../Components/Newsletter/Newsletter"

import useStyles from './styles';

const Product = () => {
    const { name, description, price, avatar } = useSelector(state => state.goods.goodsById)
    const { goodsById } = useSelector(state => state.goods);
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();
    const { id } = useParams();
    const classes = useStyles();
    console.log(goodsById)

    let img = `data:image/jpg;base64,${avatar}`;

    useEffect(() => {
        dispatch(getGoodsById('goods', id))
    },[dispatch, id])

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1)
        }
    }

    const handleAddToCart = () => {
        dispatch(addProductInCart({ ...goodsById, quantity }))
    }

    return (
        <Container maxWidth={false} disableGutters={true}>
            <Navbar/>
            <Announcement/>
            <Container disableGutters={true} maxWidth={false} className={classes.productContainer}>
                <Box className={classes.productWrapper}>
                    <Box className={classes.productImgContainer}>
                        <img className={classes.productImg} src={img} alt="" />
                    </Box>
                    <Box className={classes.productInfoContainer}>
                        <Typography variant="h1" className={classes.productTitle}>
                            {name}
                        </Typography>
                        <Typography className={classes.productDesc}>
                            {description}
                        </Typography>
                        <Box component="span" className={classes.productPrice}>
                            {price}₽
                        </Box>
                        <Box className={classes.addContainer}>
                            <Box className={classes.amountContainer}>
                                <Remove onClick={() => handleQuantity('dec')}/>
                                <Box className={classes.amountNumber} component="span">{quantity}</Box>
                                <Add onClick={() => handleQuantity('inc')}/>
                            </Box>
                            <Button onClick={handleAddToCart} className={classes.addButton}>Добавить в корзину</Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Footer/>
        </Container>
    )
}

export default Product