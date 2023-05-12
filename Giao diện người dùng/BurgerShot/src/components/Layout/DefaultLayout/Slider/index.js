import BG1 from "./slider26.jpg";
import BG2 from "./slider28.jpg";
import img1 from "./imgslide13.png";
import img2 from "./imgslide22.png";
import sliderImg1 from "../../../../assets/img/slider/banner-web-trang-chu_1__2.jpg";
import sliderImg2 from "../../../../assets/img/slider/banner-web-trang-chu-2.jpg";
import sliderImg3 from "../../../../assets/img/slider/banner_home.jpg"
import sliderImg4 from "../../../../assets/img/slider/banner_home_1.jpg"
import bannerImg1 from "../../../../assets/img/sales/banner-web-trang-khuyen-mai_1__1.jpg";
import bannerImg2 from "../../Banner/banner34.jpg";
import bannerImg3 from "../../Banner/banner28.jpg";
import bannerImg4 from "../../Banner/banner35.jpg";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const sliderImg = [
    { src: sliderImg1, },
    { src: sliderImg2, },
    { src: sliderImg3, },
    { src: sliderImg4, },
]
const bannerImg = [
    { src: bannerImg1, },
    { src: bannerImg2, },
    { src: bannerImg3, },
    { src: bannerImg4, },
]
function Slider1() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: cx('slick-dots'),
    }
    return (
        <div className={cx('slider')}>
            <Slider {...settings}>
                {
                    sliderImg.map((item, index) => (
                        <div className={cx('slider-item')}>
                            <img src={item.src}></img>
                        </div>
                    ))
                }

            </Slider>
            {/* <div className={cx('grid', 'wide', 'banner__container')}>
                <div className={cx('row', 'no-gutters ')}>
                    {bannerImg.map((item, index) => (
                        <div className={cx('col', 'l-6', 'banner__container-item')}>
                            <div className={cx('banner__container-item-img')}>
                                <a href="/shop">
                                    <img key={index} src={item.src}></img>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
}

export default Slider1;