import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHomePageInfo } from '../../Actions/goods';

import Announcement from "../../Components/Announcement/Announcement";
import Categories from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Products from "../../Components/Products/Products";
import Slider from "../../Components/Slider/Slider";
import Loader from '../../Components/Loader/Loader';

const Home = () => {
  const { isLoading, isError } = useSelector(state => state.goods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomePageInfo())
  }, [dispatch])

  if (isLoading) {
    return (
      <Loader fullPage={true}/>
    )
  }

  if (isError) {
    return (
      <div>
        Ошибка. Перезагрузите страницу или зайдите позже
      </div>
    )
  }

  return (
      <>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Footer/>
      </>
  )
}

export default Home