import { useState, useEffect } from 'react'
import axios from 'axios'
function Axios() {
    const [data, setdata] = useState([]);
    const fetchData = async () => {
        const response = await axios.get("http://localhost:8080/api/products");
        setdata(response.data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return data;
}

export default Axios;
