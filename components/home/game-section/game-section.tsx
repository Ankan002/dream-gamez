import { CommonParagraph, GameCard } from "../elements";

import GameImageOne from "@/assets/images/home/game-img-1.png";
import GameImageTwo from "@/assets/images/home/game-img-2.png";
import GameImageThree from "@/assets/images/home/game-img-3.png";
import GameImageFour from "@/assets/images/home/game-img-4.png";
import GameImageFive from "@/assets/images/home/game-img-5.png";

const GameData = [
	{
		name: "Coin Quest",
		highlights: [
			"Guaranteed Winner",
			"Limited Pool",
			"Play as low as - 2USDT",
		],
		image: GameImageOne,
	},
	{
		name: "DreamZ Dual",
		highlights: [
			"Instant Winner",
			"50% winning probability",
			"Play as low as - 1USDT",
		],
		image: GameImageTwo,
	},
	{
		name: "Jackpot Madness",
		highlights: ["Instant Winner", "Bigger the pool Higher the returns"],
		image: GameImageThree,
	},
	{
		name: "DreamZ",
		highlights: ["Instant Winner", "Bigger the pool Higher the returns"],
		image: GameImageFour,
	},
	{
		name: "DreamZ Casual",
		highlights: ["Lucky Dice", "Stone - Paper - Scissor"],
		image: GameImageFive,
	},
];

const GameSection = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center px-3 pt-6 my-10">
			<CommonParagraph text="DreamGamez" className="text-xl" />
			<CommonParagraph
				text="Find Best Games And Win Exciting Crypto By Spending Small Amount"
				className="text-xl"
			/>

			<div className="w-full flex items-center justify-center mt-6">
				<div
					className={`w-full max-w-[1200px] carousel carousel-center pb-6 ${
						GameData.length < 5 ? "lg:justify-center" : ""
					} ${GameData.length < 4 ? "sm:justify-center" : ""} ${
						GameData.length < 2 ? "justify-center" : ""
					}`}
				>
					{GameData.map((gameData, index) => (
						<GameCard
							className="carousel-item"
							key={index}
							gameData={gameData}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default GameSection;
