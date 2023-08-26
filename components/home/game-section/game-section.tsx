import { CommonParagraph } from "../elements";

const GameSection = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center px-3 pt-6">
			<CommonParagraph text="DreamGamez" className="text-xl" />
			<CommonParagraph
				text="Find Best Games And Win Exciting Crypto By Spending Small Amount"
				className="text-xl"
			/>

			<div className="w-full flex flex-col items-center justify-center mt-10">
				<CommonParagraph
					text="100K DreamGameZ"
					className="text-3xl font-bold text-primary-golden"
				/>

				<div className="px-4 py-1 bg-gradient-to-r from-primary-yellow to-primary-golden flex items-center justify-center mt-1 rounded-lg">
					<CommonParagraph text="Pre-Registration Challenge" className="text-2xl" />
				</div>

				<CommonParagraph
					text={
						'Register & Enter into DreamGameZ "100K Pre Registration" For Free'
					}
					className="text-xl font-light"
				/>
			</div>
		</div>
	);
};

export default GameSection;
