import axios from "axios";

const MultiCard = ({ title, image, price }) => {
    return (
        <div className="w-[220px] h-[310px] border p-[10px] rounded-md">
            <div className="w-[200px] h-[200px] flex mb-[14px] items-center justify-center">
                <img className="h-[180px] w-[160px] " src={image} />
            </div>
            <div className="px-[15px] py-2.5">
                <h4 className="text-[16px] font-medium">${price}</h4>
                <p className="mt-[4px] text-[16px] text-[#8B96A5]">
                    {title.length > 20 ? title.slice(0, 20) + "..." : title}
                </p>
            </div>
        </div>
    );
};

export default MultiCard;
