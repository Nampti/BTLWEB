import productData from "../../assets/data/products";
import ProductCard from "../../components/ProductCard";
import InfinityList from "../../components/InfinityList";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cartcontext } from "../../context";
import classNames from 'classnames/bind';
import styles from "./Product.module.scss";
import numberWithCommas from "../../utils"
const cx = classNames.bind(styles);
function Product() {
    const { slug } = useParams();
    const items = JSON.parse(localStorage.getItem('items'));
    console.log(items)
    const product = items.filter((item) => item.slug === slug)[0];
    const [initialValues, setInitialValues] = useState({
        note: "",
    });
    product.buyQuantity = 1;
    product.note = initialValues;
    const relatedProducts = productData.getProducts(8);
    const productList = productData.getAllProducts();
    const [products, setProducts] = useState(productList);
    const [quantity, setQuantity] = useState(1);
    const Globalstate = useContext(Cartcontext);
    const dispatch = Globalstate.dispatch;
    return (
        <div className={cx('product')}>
            <div className={cx('product__container', 'row')}>
                <div className={cx('product-img', 'col', 'l-6')} >
                    <div className={cx('product-img--container')}>
                        <img src={`data:image/jpeg;base64,${product.image}`}></img>
                    </div>
                </div>
                <div className={cx('product-info', 'col', 'l-6')}>
                    <h2 className={cx('product-info--title')}>{product.productName}</h2>
                    <div className={cx('product-info--divide')}></div>
                    <div className={cx('product-info--note')}>
                        <label>Ghi chú:</label>
                        <input value={initialValues.note} type="text" onChange={(e) =>
                            setInitialValues({ ...initialValues, note: e.target.value })
                        }></input>

                    </div>
                    <p className={cx('product-info--price')}>{numberWithCommas(product.price)} đ</p>
                    <div className={cx('product-info--add')}>
                        <button onClick={() => {
                            alert("Thêm vào giỏ thành công")
                            dispatch({ type: "ADD", payload: product })
                        }}>Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
            <h1>Sản phẩm tương tự</h1>
            <div className={cx('shop-container')}>
                <InfinityList
                    data={relatedProducts} />
            </div>
        </div >

    )

};

export default Product;