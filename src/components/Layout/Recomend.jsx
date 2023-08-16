import React, { useState, useEffect } from "react";
import productApi from "../../service/product";
import MultiCard from "../UI/Cards/MultiCard";

const Recomend = () => {
    const [cards, setCards] = useState([]);

    function getProductsss() {
        productApi
            .getProduct()
            .then((res) => {
                if (res.status === 200) {
                    setCards(res.data);
                }
            })
            .catch((e) => {
                console.log(e.message);
            });
    }

    useEffect(() => {
        getProductsss();
    }, []);

    console.log(cards);
    return (
        <div className="flex flex-wrap gap-[20px]">
            {cards.length &&
                cards.map((e) => {
                    return (
                        <>
                            <MultiCard
                                title={e.title}
                                image={e.image}
                                price={e.price}
                            />
                        </>
                    );
                })}
        </div>
    );
};

export default Recomend;
