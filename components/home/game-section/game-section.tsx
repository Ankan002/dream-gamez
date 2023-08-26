import { CommonParagraph } from "../elements";

const GameSection = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center px-3 py-6">
			<CommonParagraph text="DreamGamez" className="text-xl" />
			<CommonParagraph
				text="Find Best Games And Win Exciting Crypto By Spending Small Amount"
				className="text-xl"
			/>
		</div>
	);
};

export default GameSection;
