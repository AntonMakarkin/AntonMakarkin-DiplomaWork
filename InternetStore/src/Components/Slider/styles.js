import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    sliderContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    sliderWrapper: {
        height: '100%',
        display: 'flex',
        transition: 'all 1s ease'
    },
    slide: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
    },
    slideImgContainer: {
        height: '100%',
        flex: '1'
    },
    slideInfoContainer: {
        flex: '1',
        padding: '50px'
    },
    slideImg: {
        height: '80%'
    },
    slideTitle: {
        fontSize: '70px',
        fontWeight: 'bold'
    },
    slideDesc: {
        margin: '50px 0px',
        fontSize: '20px',
        fontWeight: '500',
        letterSpacing: '3px'
    },
    slideButton: {
        cursor: 'pointer',
        padding: '10px',
        fontSize: '20px',
        backgroundColor: 'transparent',
        border: '1px solid #000'
    },
    sliderArrow: {
        width: '40px',
        height: '40px',
        backgroundColor: '#fff7f7',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '0',
        bottom: '0',
        margin: 'auto',
        cursor: 'pointer',
        opacity: '0.5',
        zIndex: '2'
    },
    leftSliderArrow: {
        left: '10px'
    },
    rightSliderArrow: {
        right: '10px'
    }
}))

export default useStyles;