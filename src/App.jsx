import { Button, DatePicker } from "antd";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Offers from "./components/Offers";
import OrderForm from "./components/OrderForm/OrderForm";
import MultiCard from "./components/UI/Cards/MultiCard";
import Layout from "./components/Layout";

const App = () => {
    return (
        <div>
            <Header />

            <Intro />
            <Offers />
            <OrderForm />
            <Layout />
        </div>
    );
};

export default App;
