import { Box, Container } from "@material-ui/core"
import { Link } from "react-router-dom";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ item }) => {
    const classes = useStyles()

    let avatar = `data:image/jpg;base64,${item?.avatar}`;

    avatar = avatar.replace(/^(javascript\:)/,"");

    return (
        <Container className={classes.productContainer} maxWidth={false} disableGutters={true}>
            <Box className={classes.productImageContainer}>
                <img className={classes.productImage} src={avatar} alt=""/>
            </Box>
            <Box className={classes.productInfo}>
                <Box className={classes.productInfoText} component="span">
                    <b>{item.name}</b>
                </Box>
                <Box className={classes.productInfoText} component="span">
                    <b>{item.price}₽</b>
                </Box>
                <Box className={classes.productIcons}>
                    <Box className={classes.productIconBlock}>
                        <ShoppingCartOutlined/>
                    </Box>
                    <Box className={classes.productIconBlock}>
                        <Link to={`/product/${item._id}`} className={classes.productLink}>
                            <SearchOutlined style={{ color: '#000' }}/>
                        </Link>
                    </Box>
                    <Box className={classes.productIconBlock}>
                        <FavoriteBorderOutlined/>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Product