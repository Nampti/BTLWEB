import burger1 from "../img/product/burger/12-burger-b_-n_ng-h_nh-chi_n_4.jpg"
import burger2 from "../img/product/burger/14-burger-g_-gi_n-cay_1.jpg"
import burger3 from "../img/product/burger/6-burger-ca.jpg"
import burger4 from "../img/product/burger/7-burger-b_-n_ng-whopper-jr_1.jpg"
import burger5 from "../img/product/burger/8-burger-b_-ph_-mai.jpg"
import burger6 from "../img/product/burger/burger-salmon_new__1.jpg"
import burger7 from "../img/product/burger/deluxe_salmon_burger_new__1.jpg"
import burger8 from "../img/product/burger/ex_cheese_whp_jr.jpg"
import burger9 from "../img/product/burger/20-burger-b_-th_t-heo-x_ng-kh_i_1.jpg"
import Axios from "../../Axios"
const products = [
    {
        title: "Burger bò tắm phô mai",
        price: '59000',
        img: burger1,
        categorySlug: "burger",
        slug: "burger-bo-phomai",
        col: "l-4",
        description: "Burger bò tắm phô mai",
    },
    {
        title: "Burger bò tắm phô ",
        price: '59000',
        img: burger2,
        categorySlug: "burger",
        slug: "burger-bo-pho",
        col: "l-4",
        description: "Burger bò tắm phô ",
    },
    {
        title: "Burger bò tắm phô mai",
        price: '59000',
        img: burger3,
        categorySlug: "burger",
        slug: "burger-bo-phomai",
        col: "l-4",
        description: "Burger bò tắm phô mai",
    },
    {
        title: "Burger bò tắm phô mai",
        price: '59000',
        img: burger4,
        categorySlug: "burger",
        slug: "burger-bo-phomai",
        col: "l-4",
        description: "Burger bò tắm phô mai",
    },
    {
        title: "Burger bò tắm phô mai",
        price: '59000',
        img: burger5,
        categorySlug: "burger",
        slug: "burger-bo-phomai",
        col: "l-4",
        description: "Burger bò tắm phô mai",
    },
    {
        title: "Burger bò tắm phô mai",
        price: '59000',
        img: burger6,
        categorySlug: "burger",
        slug: "burger-bo-phomai",
        col: "l-4",
        description: "Burger bò tắm phô mai",
    },
    {
        title: "Burger bò tắm phô mai",
        price: '59000',
        img: burger7,
        categorySlug: "burger",
        slug: "burger-bo-phomai",
        col: "l-4",
        description: "Burger bò tắm phô mai",
    },
    {
        title: "Burger bò tắm phô mai",
        price: '59000',
        img: burger8,
        categorySlug: "burger",
        slug: "burger-bo-phomai",
        col: "l-4",
        description: "Burger bò tắm phô mai",
    },
    {
        title: "Burger bò tắm phô mai",
        price: '59000',
        img: burger9,
        categorySlug: "burger",
        slug: "burger-bo-phomai",
        col: "l-4",
        description: "Burger bò tắm phô mai",
    },
]

const getAllProducts = () => Axios();

const getProducts = (count) => {
    const max = getAllProducts().length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}
const getProductBySlug = (slug) => {
    return Axios().filter((product) => product.slug === slug)
}

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}
const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}
export default productData


