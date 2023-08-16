import axios from "../axios";
const productApi = {
    getProduct: async function () {
        return axios.get("/products");
    },
};
export default productApi;
