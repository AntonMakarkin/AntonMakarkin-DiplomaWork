import { Container } from '@material-ui/core'
import { useSelector } from 'react-redux';
import img from '../../Images/ps5.png'
import CategoryItem from '../CategoryItem/CategoryItem'

import useStyles from './styles'; 

const Categories = () => {
    const categories = useSelector(state => state.goods.categories);
    const classes = useStyles()

    return (
        <Container className={classes.categoriesContainer} disableGutters={true} maxWidth={false}>
            {categories.map(item => (
                <CategoryItem key={item._id} item={item}/>
            ))}
        </Container>
    )
}

export default Categories