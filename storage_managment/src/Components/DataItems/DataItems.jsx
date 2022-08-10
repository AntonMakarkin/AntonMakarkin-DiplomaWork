import { useSelector } from 'react-redux';

import DataItem from '../DataItem/DataItem';

import useStyles from './styles';

const DataItems = () => {
    const { items } = useSelector((state) => state.data);
    const classes = useStyles();
    
    return (
        <div className={classes.dataItemsBlocksContainer}>
            {items.map(item => (
                <DataItem key={item._id} 
                          item={item}/>
            ))}
        </div>
    )
}

export default DataItems;