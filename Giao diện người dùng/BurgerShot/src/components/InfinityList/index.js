import PropTypes from 'prop-types';
import { useState, useCallback, useEffect, useRef } from 'react';
import ProductCard from "../../components/ProductCard";
import productData from '../../assets/data/products';
import classNames from 'classnames/bind';
import styles from "./InfinityList.module.scss";

const cx = classNames.bind(styles);
function InfinityList(props) {
    const num = productData.getAllProducts().length;
    const data1 = productData.getAllProducts();
    const perLoad = num // items each load
    const listRef = useRef(null)
    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
    const [index, setIndex] = useState(0)
    useEffect(() => {
        setData(props.data.slice(0, perLoad))
        setIndex(1)
    }, [props.data])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (listRef && listRef.current) {
                if (window.scrollY + window.innerHeight >= listRef.current.clientHeight + listRef.current.offsetTop + 200) {
                    setLoad(true)
                }
            }

        })
    }, [listRef])

    useEffect(() => {
        const getItems = () => {
            const pages = Math.floor(props.data.length / perLoad)
            const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1

            if (load && index <= maxIndex) {
                const start = perLoad * index
                const end = start + perLoad

                setData(data.concat(props.data.slice(start, end)))
                setIndex(index + 1)
            }
        }
        getItems()
        setLoad(false)
    }, [load, index, data, props.data])
    return (
        <div ref={listRef}>
            <div className={cx('row')}>
                {
                    data1.map((item, index) => (
                        <ProductCard
                            key={index}
                            img={item.image}
                            name={item.productName}
                            price={item.price}
                            slug={item.slug}
                            description={item.description}
                        />
                    ))
                }
            </div>
        </div>
    );
}
InfinityList.propTypes = {
    data: PropTypes.array.isRequired,

}
export default InfinityList;