import { useContext } from "react"
import { useLocation } from 'react-router';
import { useHistory, Route, useRouteMatch, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Grid, Container, Button, AppBar, Box, IconButton, Switch as SwitchButton } from '@material-ui/core';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import NightsStay from '@material-ui/icons/NightsStay';
import LightMode from '@material-ui/icons/WbSunny';

import { logout } from "../../Actions/user";
import { getOrders } from "../../Actions/orders";

import Context from '../../Context/context';

import SideBar from '../../Components/Sidebar/Sidebar';

import useStyles from './styles';
import StatisticPage from '../StatisticPage/StatisticPage';
import DataPage from "../DataPage/DataPage";
import DetailsPage from '../DetailsPage/DetailsPage';


const MainPage = () => {
    const { darkMode, setDarkMode } = useContext(Context);
    const dispatch = useDispatch();
    const location = useLocation();
    const match = useRouteMatch();
    const history = useHistory();
    const classes = useStyles();

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
        localStorage.setItem('darkTheme', !darkMode);
    }

    const handleLogout = () => {
        dispatch(logout(history));
    }

    const orderslinksArray = [{link: 'assembly_orders', name: 'Заказы на сборку', getAllAction: getOrders,
    statusName: 'Собирается', detailsName: 'Данные о заказе' }];

    return (
        <Container className={classes.mainContainer} disableGutters maxWidth={false}>
            <SideBar/>
            <Container className={classes.secondaryContainer} disableGutters maxWidth={false} style={darkMode ? {backgroundColor: '#232b3e'} : {color: '#f0f3fb'}}>
                <AppBar position="static" className={classes.appBar} style={!darkMode ? {backgroundColor: '#fff'} : {backgroundColor: '#1A202E', boxShadow: 'none'}}>
                    <IconButton className={classes.appBarButton}>
                        <ArrowBackIosIcon/>
                    </IconButton>
                    <Box className={classes.appBarButtonBox}>
                        <Box className={classes.darkThemeButton}>
                            <LightMode style={darkMode ? {color: '#fff'} : {color: '#000'}}/>
                            <SwitchButton color="default" checked={darkMode} onChange={handleDarkMode}/>
                            <NightsStay style={darkMode ? {color: '#fff'} : {color: '#000'}}/>
                        </Box>
                        <IconButton className={classes.appBarButton} onClick={handleLogout}>
                            <LogoutIcon style={darkMode ? {color: '#fff'} : {color: '#000'}} className={classes.logoutButtonIcon}/>
                        </IconButton>
                    </Box>
                </AppBar>
                <Switch>
                    <Route exact path={`${match.path}`} component={StatisticPage}/>
                    {orderslinksArray.map((item, i) => (
                        <Route key={i} exact path={`${match.path}/${item.link}`} 
                               render={props => (<DataPage {...props} header={item.name}
                                                           getAllAction={item.getAllAction}
                                                           statusName={item.statusName}/>)}/> 
                               ))}
                    {orderslinksArray.map((item, i) => (
                        <Route key={i} exact path={`${match.path}/${item.link}/:id`} 
                               render={props => (<DetailsPage {...props} header={item.detailsName}/>)}/> 
                    ))}
                </Switch>
            </Container>
        </Container>
    )
}

export default MainPage