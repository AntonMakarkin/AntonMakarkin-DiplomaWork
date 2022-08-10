import { useState } from 'react';
import clsx from 'clsx';
import img from '../../Images/ps5.png'
import { Box, Button, Container, Typography } from '@material-ui/core'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

import useStyles from './styles';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    let translateX = slideIndex * -100;
    console.log(translateX)
    const classes = useStyles();

    const sliderItems = [
        {
            image: img,
            title: 'РАСПРОДАЖА',
            desc: 'НЕ ПРОПУСТИТЕ! СКИДКИ НА НОВИНКИ ДО 30%'
        },
        {
            image: img,
            title: 'РАСПРОДАЖА',
            desc: 'НЕ ПРОПУСТИТЕ! СКИДКИ НА НОВИНКИ ДО 40%'
        },
        {
            image: img,
            title: 'РАСПРОДАЖА',
            desc: 'НЕ ПРОПУСТИТЕ! СКИДКИ НА НОВИНКИ ДО 50%'
        }
    ]
    
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    //transform: `translateX(${slideIndex} * -100vw)`

    return (
        <Container 
            disableGutters={true}
            maxWidth={false}
            className={classes.sliderContainer}>
                <ArrowLeftOutlined className={clsx(classes.sliderArrow, classes.leftSliderArrow)} onClick={() => handleClick('left')}/>
                <Box className={classes.sliderWrapper} style={{ backgroundColor: '#f5fafd', transform: `translate(${translateX}vw)`}}>
                    {sliderItems.map((item, i) => (
                        <Box key={i} className={classes.slide}>
                            <Box className={classes.slideImgContainer}>
                                <img src={item.image} alt="" className={classes.slideImg}/>
                            </Box>
                            <Box className={classes.slideInfoContainer}>
                                <Typography variant="h1" className={classes.slideTitle}>{item.title}</Typography>
                                <Typography className={classes.slideDesc}>{item.desc}</Typography>
                                <Button className={classes.slideButton}>ПОКАЗАТЬ</Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <ArrowRightOutlined className={clsx(classes.sliderArrow, classes.rightSliderArrow)} onClick={() => handleClick('right')}/>
        </Container>
    )
}

export default Slider