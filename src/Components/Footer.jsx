import Clogo from "../assets/chip/clogo.jsx";
import Discord from "../assets/links/discord.jsx";
import Telegram from "../assets/links/telegram.jsx";
import Twitter from "../assets/links/twitter.jsx";

function Footer() {
	return (
		<div className=" flex max-h-[200px] min-h-[200px] w-full justify-evenly bg-[#ffffff11] p-5 backdrop-blur-md md:p-10">
			<div>
				<Clogo />
			</div>
			<div className=" grid grid-flow-row content-center gap-2 md:grid-flow-col md:content-start">
				<Twitter
					colour="black"
					href="https://twitter.com/chip_dao"
					className="h-[30px]"
				/>
				<Discord
					colour="black"
					href="https://discord.gg/MpVZf9dRNz"
					className="h-[30px]"
				/>
			</div>
		</div>
	);
}

export default Footer;
