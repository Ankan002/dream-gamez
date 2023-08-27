import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import { BiSolidStar } from "react-icons/bi";

interface Props {
	gameData: {
		name: string;
		highlights: Array<string>;
		image: StaticImageData;
	};
	className?: string;
}

const GameCard = (props: Props) => {
	const { gameData, className } = props;

	return (
		<div
			className={twMerge(
				"relative md:w-60 sm:w-52 w-40 flex flex-col items-center justify-center mx-2 rounded-3xl p-2 border-2 bg-primary-maroon border-primary-golden",
				className
			)}
		>
			<div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 bg-primary-dark/80 rounded-3xl cursor-pointer transition-all ease-in-out hover:shadow-lg hover:shadow-primary-golden flex flex-col items-center justify-center">
				<p className="font-oxanium md:text-lg text-base text-primary-yellow font-bold tracking-wide">
					{gameData.name}
				</p>

				<button className="px-2 py-0.5 bg-gradient-to-r from-primary-yellow to-primary-golden hover:from-primary-golden hover:to-primary-yellow font-oxanium mt-1 font-medium md:text-lg text-base">
					Know More
				</button>
			</div>
			<Image
				src={gameData.image.src}
				alt={gameData.name}
				height={gameData.image.height}
				width={gameData.image.width}
				className="w-full md:h-60 sm:h-52 h-40 object-contain rounded-3xl"
			/>

			<div className="w-full flex flex-col justify-center mt-3">
				{gameData.highlights.map((highlight, index) => (
					<div
						key={index}
						className="w-full flex items-center px-2 my-0.5"
					>
						<BiSolidStar className="text-primary-gray" size={20} />
						<p className="w-full font-poppins text-primary-gray ml-3 text-sm">
							{highlight}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default GameCard;
