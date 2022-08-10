import { Box, Button, Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from './styles';

const CategoryItem = ({ item }) => {
    const classes = useStyles();
    let avatar = item?.avatar;

    if (avatar === undefined) {
        avatar = ''
    } else {
        avatar = `data:image/jpg;base64,${item?.avatar}`;
        avatar = avatar.replace(/^(javascript\:)/,"");
    }

    return (
        <Container className={classes.categoryContainer} disableGutters={true} maxWidth={false}>
            <Link to={`/products/${item.link}`}>
                <img className={classes.categoryImage} src={avatar} alt=""/>
                <Box className={classes.categoryInfo}>
                    <Typography variant="h1" className={classes.categoryHeader}>
                        {item.name}
                    </Typography>
                    <Button className={classes.categoryButton}>КУПИТЬ</Button>
                </Box>
            </Link>
        </Container>
    )
}

export default CategoryItem