import Recomend from "./Recomend";
import "./style.scss";

const index = () => {
    return (
        <section className="mt-[60px]">
            <div className="container mx-auto">
                <h3 className="text-[24px] font-semibold mb-[24px]">
                    Recommended items
                </h3>
                <Recomend/>
            </div>
        </section>
    );
};

export default index;
