import { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Paper, Container, TextField, Box, Typography } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

import Context from '../../Context/context'

//import Modal from '../../Modals/Modal';
import Loader from '../../Components/Loader/Loader';
//import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import DataItems from '../../Components/DataItems/DataItems';
import Pagination from '../../Components/Pagination/Pagination';

import useStyles from './styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const DataPage = ({ header, modal, modalHeader, getAllAction, searchAction, deleteAction, collectionName, statusName }) => {
    //const { isAuth } = useSelector((state) => state.user);
    const { isLoading, isError, errorMessage } = useSelector((state) => state.data);
    const { darkMode } = useContext(Context);
    const [modalActive, setModalActive] = useState(false);
    const [itemId, setItemId] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();
    const query = useQuery();
    //const match = useRouteMatch();
    const page = query.get('page') || 1;
    const status = query.get('orderStatus') || statusName;
    const searchQuery = query.get('searchQuery');

    const [search, setSearch] = useState('');
    //const history = useHistory();

    const searchPost = () => {
        if (search.trim()) {
            dispatch(searchAction({ search }, collectionName))
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    }

    const deletePersonal = () => {
        dispatch(deleteAction(collectionName, itemId));
        setModalActive(false)
    }

    /*if (isError) {
        return (
            <ErrorMessage message={errorMessage}/>
        )
    }*/
    
    return (
        <Container className={classes.dataPageContainer}>
            <Typography className={classes.dataPageHeader} 
                        variant="h2" 
                        style={darkMode ? {color: '#fff'} : {color: '#000'}}>{header}</Typography>
                <Box className={classes.dataPageButtonsPanel}>
                    <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Поиск" fullWidth value={search} onChange={(e) => setSearch(e.target.value)}/>
                </Box>
                <Paper className={classes.dataTableHeader} 
                           style={ darkMode ? {backgroundColor: 'rgb(26, 32, 46)', color: '#fff'} : {backgroundColor: 'lightgray', color: '#000'}}>
                        <Box style={ darkMode ? { borderRight: '1px solid #fff' } : { borderRight: '1px solid #000'}} 
                             className={classes.dataTableColumn}>ID</Box>
                        <Box style={ darkMode ? { borderRight: '1px solid #fff' } : { borderRight: '1px solid #000'}}
                             className={classes.dataTableColumn}>Дата</Box>
                        <Box style={ darkMode ? { borderRight: '1px solid #fff' } : { borderRight: '1px solid #000'}} 
                             className={classes.dataTableColumn}>Стоимость</Box>
                        <Box style={ darkMode ? { borderRight: '1px solid #fff' } : { borderRight: '1px solid #000'}} 
                             className={classes.dataTableColumn}>Клиент</Box>
                        <Box className={classes.dataTableColumn}>Статус</Box>
                </Paper>
                <Container className={classes.dataItemsContainer} disableGutters maxWidth={false}>
                    {isLoading ? <Loader/> :  <DataItems/>}
                    <Paper>
                        <Pagination page={page} collection={collectionName} getAllItems={getAllAction} status={status}/>
                    </Paper>
                </Container>
            {/*<Modal active={modalActive} setActive={setModalActive} header={'Вы действительно хотите удалить сотрудника из базы данных?'}>
               <Button onClick={() => setModalActive(false)}>Нет</Button>
               <Button onClick={deletePersonal}>Да</Button>
                                                        </Modal>*/}
        </Container>
    )
}

export default DataPage