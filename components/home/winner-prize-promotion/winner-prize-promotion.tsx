import { CommonParagraph } from "../elements";

const WinnerPrizePromotion = () => {
	return (
		<div className="w-full flex flex-col py-10 bg-winner-prize-promotion-bg bg-center bg-cover">
			<div className="w-full flex md:flex-row flex-col md:px-10 px-4">
				<div className="flex-1 flex flex-col w-full items-center justify-center">
					<div className="min-w-[250px] bg-white px-3 py-2 md:my-6 my-4 font-poppins text-3xl text-primary-dark flex items-center justify-center text-center font-semibold rounded-xl">
						10,000 USDT
					</div>

					<div className="min-w-[250px] bg-white px-3 py-2 md:my-6 my-4 font-poppins text-3xl text-primary-dark flex items-center justify-center text-center font-semibold rounded-xl">
						5,000 USDT
					</div>

					<div className="min-w-[250px] bg-white px-3 py-2 md:my-6 my-4 font-poppins text-3xl text-primary-dark flex items-center justify-center text-center font-semibold rounded-xl">
						3,000 USDT
					</div>
				</div>
				<div className="flex-1 flex md:justify-end justify-center ">
					<div className="flex flex-col items-center justify-center lg:max-w-[650px] md:max-w-[500px] w-full">
						<CommonParagraph
							text="Get a Change"
							className="text-3xl font-light text-center"
						/>

						<CommonParagraph
							text="Win 10,000 USDT"
							className="md:text-4xl text-3xl font-bold mt-1 tracking-wider text-center"
						/>

						<CommonParagraph
							text="How to increase your winning chances?"
							className="text-xl font-semibold mt-5 tracking-wider text-center"
						/>

						<CommonParagraph
							text="Maximize your winning chances by getting an additional entry for every friend you refer."
							className="text-base md:max-w-[400px] text-justify font-normal"
						/>

						<CommonParagraph
							text="Follow us on social media to increase the entries."
							className="text-base md:max-w-[400px] text-justify font-normal mt-0"
						/>
					</div>
				</div>
			</div>
			<div className="w-full flex bg-white/70 px-3 mt-2">
				<CommonParagraph text="Guaranteed Consolation Prizes Upto 200USDT for 25 Referral providers" />
			</div>
		</div>
	);
};

export default WinnerPrizePromotion;
