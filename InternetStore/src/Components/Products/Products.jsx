import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import img from '../../Images/ps5.png'
import Product from "../Product/Product";

import useStyles from './styles';

const Products = () => {
    const { lastGoods } = useSelector(state => state.goods)
    const classes = useStyles();
    console.log(lastGoods)

    return (
        <Container className={classes.productsContainer} disableGutters={true} maxWidth={false}>
            {lastGoods.map(item => (
                <Product key={item._id} item={item}/>
            ))}
        </Container>
    )
}

export default Products