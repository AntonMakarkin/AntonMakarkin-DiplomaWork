import { Box, Container, Typography } from "@material-ui/core"
import Announcement from "../../Components/Announcement/Announcement";
import Footer from "../../Components/Footer/Footer";
import Navbar from '../../Components/Navbar/Navbar';
import Newsletter from "../../Components/Newsletter/Newsletter";
import Products from "../../Components/Products/Products";

import useStyles from './styles';

const ProductList = () => {
    const classes = useStyles();

    return (
        <Container maxWidth={false} disableGutters={true}>
            <Navbar/>
            <Announcement/>
            <Typography variant="h1" className={classes.productListTitle}>
                Игровые консоли
            </Typography>
            <Box className={classes.productListFilterContainer}>
                <Box className={classes.productListFilter}>
                    <Box className={classes.productListFilterText} component="span">
                        Фильтр:
                    </Box>
                    <select className={classes.productListSelect}>
                        <option className={classes.productListOption} selected>PS4</option>
                        <option className={classes.productListOption}>PS5</option>
                        <option className={classes.productListOption}>XONE</option>
                        <option className={classes.productListOption}>Xbox Series</option>
                    </select>
                </Box>
                <Box className={classes.productListFilter}>
                    <Box className={classes.productListFilterText} component="span">
                        Сортировать по:
                    </Box>
                    <select className={classes.productListSelect}>
                        <option className={classes.productListOption} selected>Дате поступления</option>
                        <option className={classes.productListOption}>Цене (сначала дешевые)</option>
                        <option className={classes.productListOption}>Цене (сначала дорогие)</option>
                    </select>
                </Box>
            </Box>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList