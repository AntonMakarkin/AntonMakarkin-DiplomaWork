import { useContext } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Card, Box, Button, Typography } from '@material-ui/core';

import Context from '../../Context/context';

import useStyles from './styles';

const DataItem = ({ item, setItemId }) => {
    const { darkMode } = useContext(Context);
    const history = useHistory();
    const match = useRouteMatch();
    const classes = useStyles();

    let status = item.status.replace(/[^a-zа-яё\s]/gi, ' ');

    const months = ['Янв','Февр','Март','Апр','Май','Июнь','Июль','Авг','Сент','Окт','Нояб','Дек'];
    let createdTime = item.createdAt;
    const timeConvert = new Date(createdTime);
    const year = timeConvert.getFullYear();
    const month = timeConvert.getMonth();
    const day = timeConvert.getDate();
    const hours = timeConvert.getHours();
    let minutes = timeConvert.getMinutes();


    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    createdTime = `${day} ${months[month]} ${year} ${hours}:${minutes}`;

    const openDetails = () => {
        history.push(`${match.path}/${item._id}`)
    }
    
    return (
        <Card className={classes.dataItem}
              onClick={openDetails} 
              style={darkMode ? {backgroundColor: 'rgb(26, 32, 46)', color: '#fff'} : {backgroundColor: '#fff'}}>
            <Box className={classes.dataItemBlock} style={ darkMode ? { borderRight: '1px solid #fff' } : { borderRight: '1px solid #000'}}>
                {item._id}
            </Box>
            <Box className={classes.dataItemBlock} style={ darkMode ? { borderRight: '1px solid #fff' } : { borderRight: '1px solid #000'}}>
                {createdTime}
            </Box>
            <Box className={classes.dataItemBlock} style={ darkMode ? { borderRight: '1px solid #fff' } : { borderRight: '1px solid #000'}}>
                {item.total}₽
            </Box>
            <Box className={classes.dataItemBlock} style={ darkMode ? { borderRight: '1px solid #fff' } : { borderRight: '1px solid #000'}}>
                {item.name}
            </Box>
            <Box className={classes.dataItemBlock}>
                {status}
            </Box>
        </Card>
    )
}

export default DataItem