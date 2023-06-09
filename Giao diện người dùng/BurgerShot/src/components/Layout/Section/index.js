import { useEffect } from 'react';
import ProductCard from "../../ProductCard";
import productData from "../../../assets/data/products";
import styles from './Section.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Section() {
    const products = productData.getAllProducts();
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(products));
    }, [products]);
    return (
        <div className={cx('section')}>
            <div className={cx('section__title')}>Sản phẩm nổi bật</div>
            <div className={cx('section__container')}>
                {/* <div className={cx('grid', 'wide')}> */}
                <div className={cx('grid', 'row')}>
                    {productData.getAllProducts().map((item, index) => (
                        <ProductCard
                            key={index}
                            img={item.image}
                            name={item.productName}
                            price={item.price}
                            slug={item.slug}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
            {/* </div> */}

        </div>
    );
}

export default Section;