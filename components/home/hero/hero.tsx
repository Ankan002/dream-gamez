import Link from "next/link";
import { TaglineText } from "../elements";
import { FlowStep } from "../elements/flow-step";
import { BsCaretRightFill } from "react-icons/bs";

const Hero = () => {
	return (
		<div className="min-h-screen px-4 py-6 bg-home-hero-bg bg-blend-color bg-cover flex md:flex-row flex-col items-center justify-center bg-right bg-black/50">
			<div className="md:flex-1 w-full flex flex-col justify-center md:items-start items-center">
				<p className="text-white font-quicksand text-5xl tracking-widest font-semibold text-center">
					Win 10,000 USDT!
				</p>

				<TaglineText text="Enter the 100k registration challenge now!" />

				<Link href="#">
					<button className="px-4 py-1 bg-primary-golden rounded-md text-lg my-5 font-oxanium font-medium">
						Register Now
					</button>
				</Link>

				<div className="w-full flex flex-wrap items-center md:justify-start justify-center">
					<FlowStep text="Register" />
					<BsCaretRightFill
						size={15}
						className="text-primary-gray mx-2"
					/>
					<FlowStep text="Refer" />
					<BsCaretRightFill
						size={15}
						className="text-primary-gray mx-2"
					/>
					<FlowStep text="Secure your shot at winning!" />
				</div>

				<TaglineText
					text="Every Referral earns you an extra Entry!"
					className="text-xs mt-3"
				/>
			</div>
		</div>
	);
};

export default Hero;
