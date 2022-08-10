import { Container } from "@material-ui/core"

import useStyles from './styles';

const Announcement = () => {
    const classes = useStyles();

    return (
        <Container disableGutters={true} 
                   maxWidth={false} 
                   className={classes.announcementContainer}>
            Игровые консоли по скидке в 10%
        </Container>
    )
}

export default Announcement