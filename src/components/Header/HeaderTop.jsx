// import React from 'react';
// import Logo from "../../assets/icons/Logo.svg"
// import { Input, Select,Button } from "antd";


// const onChange = (value) => {
//   // console.log(selected  ${value});
// };
// const onSearch = (value) => {
//   console.log("search:", value);
// };



// const HeaderTop = () => {
//   return (
// 		<div>
// 			<div className="wrapper flex ">
// 				<ul className="mt-[22px]">
// 					<li className="flex items-center justify-between">
// 						<img src={Logo} alt="" />
// 						<div className="flex items-center border-2 border-blue-500 rounded-md ml-[46px]">
// 							<Input
// 								className=" rounded-none outline-none border-none w-[421px]"
// 								placeholder="Search"
// 							/>
// 							<Select
// 								bordered={false}
// 								// showSearch
// 								placeholder="Select"
// 								optionFilterProp="children"
// 								onChange={onChange}
// 								onSearch={onSearch}
// 								filterOption={(input, option) =>
// 									(option?.label ?? "")
// 										.toLowerCase()
// 										.includes(input.toLowerCase())
// 								}
// 								options={[
// 									{
// 										value: "Clothes",
// 										label: "Clothes",
// 									},
// 									{
// 										value: "Phones",
// 										label: "Phones",
// 									},
// 									{
// 										value: "Fruits",
// 										label: "Fruits",
// 									},
// 								]}
// 							/>
// 							<Button
// 								default
// 								className=" bg-blue-500 text-white border-none rounded-none"
// 							>
// 								Search
// 							</Button>
// 						</div>
// 					</li>
// 				</ul>

// 				<ul className="flex items-center gap-4 ml-[96px]">
// 					<li className="flex flex-col justify-end items-center h-[44px] gap-2 ">
// 						<i class="bx bx-user"></i> 						
// 						<p className="text-[12px]">Profile</p>
// 					</li>
// 					<li className="flex flex-col justify-end items-center h-[44px] gap-2 ">
// 						<i class="bx bxs-message-detail"></i>
// 						<p className="text-[12px]">Message</p>
// 					</li>
// 					<li className="flex flex-col justify-end items-center h-[44px] gap-2 ">
// 						<i class="bx bxs-heart"></i>
// 						<p className="text-[12px]">Orders</p>
// 					</li>
// 					<li className="flex flex-col justify-end items-center h-[44px] gap-2 ">
// 						<i class="bx bxs-cart"></i>
// 						<p className="text-[12px]">My cart</p>
// 					</li>
// 				</ul>
// 			</div>
// 		</div>
// 	);
// };

// export default HeaderTop;


import React from 'react';
// import Logo from "../../assets/images/logo.svg";
// import User from "../../assets/images/user.svg";
// import Message from "../../assets/images/message.svg";
// import Likely from "../../assets/images/heart.svg";
// import Cart from "../../assets/images/karzina.svg";
import { Input, Select,Button } from "antd";
import Logo from "../../assets/icons/Logo.svg"

const onChange = (value) => {
  // console.log(selected ${value});
};
const onSearch = (value) => {
  console.log("search:", value);
};



const HeaderTop = () => {
  return (
		<div>
			<ul className="flex items-center justify-between h-[86px] pt-[22px] pb-[24px]">
				<li>
					<img src={Logo} alt="" />
				</li>
				<li>
					<div className="flex items-center border border-blue-500 rounded-md overflow-hidden">
						<Input
							className=" rounded-none border border-blue-500 w-[421px] h-[45px] pl-[10px] pr-[5px] text-[16px] font-normal"
							placeholder="Search"
						/>
						<Select
							// className='border border-blue-500'
							bordered={false}
							placeholder="All Category"
							optionFilterProp="children"
							onChange={onChange}
							onSearch={onSearch}
							filterOption={(input, option) =>
								(option?.label ?? "")
									.toLowerCase()
									.includes(input.toLowerCase())
							}
							options={[
									{
										value: "Clothes",
										label: "Clothes",
									},
									{
										value: "Phones",	
										label: "Phones",
									},
									{
										value: "Fruits",
										label: "Fruits",
									},
								]}
						/>
						<Button
							default
							className=" bg-blue-500 text-white border-none rounded-none h-[45px] px-[23px]"
						>
							Search
						</Button>
					</div>
				</li>
				<li>
					<ul className="flex items-center gap-4">
						<li className="flex flex-col justify-end items-center h-[44px] gap-2 ">
							<i class="bx bx-user"></i>
							<p className="text-[12px] font-normal text-[#8B96A5]">Profile</p>
						</li>
						<li className="flex flex-col justify-end items-center h-[44px] gap-2 ">
							<i class="bx bxs-message-detail"></i>
							<p className="text-[12px] font-normal text-[#8B96A5]">Message</p>
						</li>
						<li className="flex flex-col justify-end items-center h-[44px] gap-2 ">
							<i class="bx bxs-heart"></i>
							<p className="text-[12px] font-normal text-[#8B96A5]">Orders</p>
						</li>
						<li className="flex flex-col justify-end items-center h-[44px] gap-2 ">
							<i class="bx bxs-cart"></i>
							<p className="text-[12px] font-normal text-[#8B96A5]">My cart</p>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};

export default HeaderTop;