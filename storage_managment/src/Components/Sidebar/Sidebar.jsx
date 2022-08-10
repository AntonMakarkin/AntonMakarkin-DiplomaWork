import { useEffect, useState, useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Avatar, Typography, Container } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import DescriptionIcon from '@material-ui/icons/DescriptionTwoTone'
import FormatListBulletedSharpIcon from '@material-ui/icons/FormatListBulletedSharp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

//import { refresh } from '../../Actions/user';
//import { clearData } from '../../Actions/controllers';

import Context from '../../Context/context';

import useStyles from './styles';

const SideBar = () => {
    //const data = useSelector(state => state.data.items);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const { darkMode } = useContext(Context);
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const classes = useStyles();

    let avatar = `data:image/jpg;base64,${user?.avatar}`;
    avatar = avatar.replace(/^(javascript\:)/,"");

    return (
        <aside className={classes.sidebar} style={darkMode ? {backgroundColor: '#1A202E', boxShadow: 'none'} : {backgroundColor: '#fff'}}>
            <Container disableGutters>
                <span className={classes.logo} style={darkMode ? {color: '#fff'} : {color: '#000'}}>UniShop</span>
                <Container disableGutters>
                    <Avatar className={classes.sidebarAvatar} variant="rounded" src={avatar} />
                    <Typography className={classes.sidebarUserName} align='center' style={darkMode ? {color: '#fff'} : {color: '#000'}}>
                        {!user ? <Skeleton/> : user?.name}
                    </Typography>
                    <Typography className={classes.sidebarUserPosition} align='center' style={darkMode ? {color: '#fff'} : {color: '#000'}}>
                        {!user ? <Skeleton/> : user?.role}
                    </Typography>
                </Container>
                <Container className={classes.sidebarLinksContainer} disableGutters>
                    <Link className={classes.sidebarLinkContainer} style={darkMode ? {color: '#fff'} : {color: '#000'}} to={`${match.path}/assembly_orders`}>
                        <DescriptionIcon className={classes.sidebarLinkIcon}/>
                        <Typography className={classes.sidebarLinkText}>Заказы на сборку</Typography>
                    </Link>
                </Container>
            </Container>
        </aside>
    )
}

export default SideBar;