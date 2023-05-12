import { Link, useLocation } from 'react-router-dom';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import Rating from "../../../Rating"
const cx = classNames.bind(styles);
const menuNav = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Hướng dẫn",
        path: "/intro"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    },
    {
        display: "Tuyển dụng",
        path: "/recruit"
    }
]
function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer__container', 'grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-6', 'footer__container--copyright')}>
                        Copyright 2023 Burger King Corporation.All Rights Reserved.
                    </div>
                    <div className={cx('col', 'l-4')}>
                        <div className={cx('footer__container--menu')}>
                            {menuNav.map((item, index) => (
                                <p key={index} className={cx('footer__container--menu-item')}>
                                    <Link to={item.path}>
                                        {item.display}
                                    </Link>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className={cx('col', 'l-2')}>
                        <div className={cx('footer__container--social')}>
                            <a href='/'>
                                <img src="https://burgerking.vn/skin/frontend/bk2/default/images/instagram-icon.png"></img>
                            </a>
                            <a href='/'>
                                <img src="https://burgerking.vn/skin/frontend/bk2/default/images/icon-facebook.png"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;