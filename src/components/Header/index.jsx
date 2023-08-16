import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
import "./style.scss";
const index = () => {
	return (
		<header className="bg-white">
			<div className="container">
				<HeaderTop />
				<Navbar />
			</div>
		</header>
	);
};

export default index;
