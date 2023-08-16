import CarouselIntro from "./Carousel";
import MenuBar from "./Menu";
const index = () => {
  return (
		<section className="">
			<div className="container mx-auto">
				<div className="intro_wrapper border border-[#DEE2E7] rounded flex w-[1180px] bg-white py-5 pr-5 pl-[14px] h-[400px] gap-[10px] mb-[33px]">
					<MenuBar />
					<CarouselIntro />
					<div className="ml-[10px] flex flex-col justify-between">
						<div className="card w-[200px] h-[110px] bg-[#F38332] rounded-md p-4 text-white">
							<p>Get US $10 off with a new supplier</p>
						</div>
						<div className="card w-[200px] h-[110px] bg-[#55BDC3] rounded-md p-4 text-white">
							<p>Get US $10 off with a new supplier</p>
						</div>
						<div className="card w-[200px] h-[110px] bg-[#127FFF] rounded-md p-4 text-white">
							<p>Get US $10 off with a new supplier</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default index;
