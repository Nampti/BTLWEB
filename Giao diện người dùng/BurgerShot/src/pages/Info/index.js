import PageHeader from "../../components/PageHeader";
import PageInfo from "../../components/Layout/PageInfo";
import Banner from "../../components/Layout/Banner"
import bg from "../../assets/img/background/InfoBG.jpg"
function Info() {
    return (
        <>
            <PageHeader
                bg={bg}
                h1="Khuyến mại"
                a="Trang chủ"
                span="Khuyến mại"
            />
            <Banner />
        </>
    );
}

export default Info;