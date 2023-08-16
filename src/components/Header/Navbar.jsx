// import React from 'react';

// import {  Select } from "antd";

// // const onChange = (value) => {
// // 	// console.log(selected  ${value});
// // };
// // const onSearch = (value) => {
// // 	console.log("search:", value);
// // };

// const onChange = (value) => {
// 	// console.log(selected  ${value});
// };
// const onSearch = (value) => {
// 	console.log("search:", value);
// };

// const Navbar = () => {
//    const options = [
// 			{ value: "Russian , Rubl", label: "Russian , Rubl" },
// 			{ value: "Uzbek , Sum", label: "Uzbek , Sum" },
// 		];

// 		const handleOptionSelect = (option) => {
// 			console.log("English , USD", option);
// 			// You can perform any necessary actions based on the selected option
// 		};
//   return (
// 		<div>
// 			<div className="wrapper mt-[25px] flex">
// 				<ul className=" flex items-center gap-x-[25px]">
// 					<li className="flex items-center gap-2">
// 						<i class="bx bx-menu text-xl"></i> All category
// 					</li>

// 					<li>Hot offers</li>
// 					<li>Gift boxes</li>
// 					<li>Projects</li>
// 					<li>Menu item</li>
// 					<li>
// 						<Select
// 							className=" text-black"
// 							bordered={false}
// 							// showSearch
// 							placeholder="Help"
// 							optionFilterProp="children"
// 							onChange={onChange}
// 							onSearch={onSearch}
// 							filterOption={(input, option) =>
// 								(option?.label ?? "")
// 									.toLowerCase()
// 									.includes(input.toLowerCase())
// 							}
// 							options={[
// 								{
// 									value: "Consumer",
// 									label: "Consumer",
// 								},
// 								{
// 									value: "Admin",
// 									label: "Admin",
// 								},
// 								{
// 									value: "Teacher",
// 									label: "Teacher",
// 								},
// 							]}
// 						/>
// 					</li>
// 				</ul>

// 				<div className=" ml-[261px]">
// 					<ul className="flex gap-[32px]">
// 						<li>
// 							<Select
// 								className=" text-black"
// 								bordered={false}
// 								// showSearch
// 								placeholder="English, USD"
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
// 										value: "English, USD",
// 										label: "English, USD",
// 									},
// 									{
// 										value: "Russian , RUBL",
// 										label: "Russian , RUBL",
// 									},
// 									{
// 										value: "Uzbek , SUM",
// 										label: "Uzbek , SUM",
// 									},
// 								]}
// 							/>
// 						</li>
// 						<li>
// 							<Select
// 								bordered={false}
// 								className=" text-black"
// 								// showSearch
// 								placeholder="Ship to 🏴"
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
// 										value: "Ship to 🏴",
// 										label: "Ship to 🏴",
// 									},
// 									{
// 										value: "Ship to 🏴",
// 										label: "Ship to 🏴",
// 									},
// 									{
// 										value: "Ship to 🏴",
// 										label: "Ship to 🏴",
// 									},
// 								]}
// 							/>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Navbar;


import {Select} from "antd";

const onChange = (value) => {
  // console.log(selected ${value});
};
const onSearch = (value) => {
  console.log("search:", value);
};


const Navbar = () => {
  return (
		<div>
			<nav className="navbar flex items-center justify-between py-[17px] mt-[20px]">
				<ul className="flex items-center gap-[28px]">
					<li>
						<i class="bx bx-menu text-xl"></i>
					</li>
					<li>
						<p className="text-[16px] font-medium">All category</p>
					</li>
					<li>
						<p className="text-[16px] font-medium">Hot offers</p>
					</li>
					<li>
						<p className="text-[16px] font-medium">Gift boxes</p>
					</li>
					<li>
						<p className="text-[16px] font-medium">Projects</p>
					</li>
					<li>
						<p className="text-[16px] font-medium">Menu item</p>
					</li>
					<li>
						<Select
							className="select"
							bordered={false}
							placeholder="Help"
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
									value: "about us",
									label: "about us",
								},
								{
									value: "contact",
									label: "contact",
								},
							]}
						/>
					</li>
				</ul>
				<ul className="flex items-center gap-[32px]">
					<li>
						<Select
							// className='border border-blue-500'
							bordered={false}
							placeholder="English,USD"
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
									value: "English, USD",
									label: "English, USD",
								},
								{
									value: "Russian, RUBL",
									label: "Russian, RUBL",
								},
							]}
						/>
					</li>
					<li>
						<Select
							// className='border border-blue-500'
							bordered={false}
							placeholder="Ship to"
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
									value: "england",
									label: "england",
								},
								{
									value: "russia",
									label: "russia",
								},
							]}
						/>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;