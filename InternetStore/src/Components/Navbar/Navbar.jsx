import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

import { refresh } from "../../Actions/user";

import useStyles from './styles';

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const { quantity } = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const history = useNavigate();
    const classes = useStyles()

    /*useEffect(() => {
        dispatch(refresh(history));
    }, [dispatch, history])*/

    return (
        <Container disableGutters={true} className={classes.mainNavBarContainer}>
            <Container disableGutters={true} maxWidth={false} className={classes.navBarContainer}>
                <Box className={classes.leftSide}>
                    <Box className={classes.searchBox}>
                        <input placeholder="Поиск" className={classes.searchInput}/>
                        <Search style={{ color: 'gray', fontSize: '16px'}}/>
                    </Box>
                </Box>
                <Box className={classes.centerSide}>
                    <Typography variant="h1" aligh="center" className={classes.logo}>
                        GamePark
                    </Typography>
                </Box>
                <Box className={classes.rightSide}>
                    {user ? <Box className={classes.menuItem}>{user.name}</Box> : 
                    <>
                        <Link to="/register" className={classes.navBarLink}>
                            <Box className={classes.menuItem}>Регистрация</Box>
                        </Link>
                        <Link to="/login" className={classes.navBarLink}>
                            <Box className={classes.menuItem}>Войти</Box>
                        </Link>
                    </>
                    }
                    <Link to="/cart" className={classes.navBarLink}>
                        <Box className={classes.menuItem}>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </Box>
                    </Link>
                </Box>
            </Container>
        </Container>
    )
}

export default Navbar