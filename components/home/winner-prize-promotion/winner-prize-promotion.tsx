import { CommonParagraph } from "../elements";

const WinnerPrizePromotion = () => {
	return (
		<div className="w-full flex flex-col bg-winner-prize-promotion-bg bg-center bg-cover py-2">
			<div className="md:flex-1 md:py-40 py-10 w-full flex md:flex-row flex-col md:px-10 px-4">
				<div className="flex-1 flex flex-col w-full items-center justify-center">
					<div className="xl:min-w-[440px] lg:min-w-[320px] min-w-[250px] bg-white px-3 xl:py-4 lg:py-3 py-2 md:my-6 my-4 font-poppins xl:text-6xl lg:text-5xl text-3xl text-primary-dark flex items-center justify-center text-center font-semibold rounded-xl">
						10,000 USDT
					</div>

					<div className="xl:min-w-[440px] lg:min-w-[320px] min-w-[250px] bg-white px-3 xl:py-4 lg:py-3 py-2 md:my-6 my-4 font-poppins xl:text-6xl lg:text-5xl text-3xl text-primary-dark flex items-center justify-center text-center font-semibold rounded-xl">
						5,000 USDT
					</div>

					<div className="xl:min-w-[440px] lg:min-w-[320px] min-w-[250px] bg-white px-3 xl:py-4 lg:py-3 py-2 md:my-6 my-4 font-poppins xl:text-6xl lg:text-5xl text-3xl text-primary-dark flex items-center justify-center text-center font-semibold rounded-xl">
						3,000 USDT
					</div>
				</div>
				<div className="flex-1 flex md:justify-end justify-center ">
					<div className="flex flex-col items-center justify-center xl:max-w-[900px] lg:max-w-[800px] md:max-w-[500px] w-full">
						<CommonParagraph
							text="Get a Change"
							className="xl:text-6xl lg:text-5xl text-3xl font-light text-center"
						/>

						<CommonParagraph
							text="Win 10,000 USDT"
							className="xl:text-7xl lg:text-6xl md:text-4xl text-3xl font-bold mt-1 tracking-wider text-center"
						/>

						<CommonParagraph
							text="How to increase your winning chances?"
							className="lg:text-2xl text-xl font-semibold mt-5 tracking-wider text-center"
						/>

						<CommonParagraph
							text="Maximize your winning chances by getting an additional entry for every friend you refer."
							className="lg:text-xl text-base md:max-w-[500px] text-justify font-normal"
						/>

						<CommonParagraph
							text="Follow us on social media to increase the entries."
							className="lg:text-xl text-base md:max-w-[500px] text-justify font-normal mt-0"
						/>
					</div>
				</div>
			</div>
			<div className="w-full flex bg-white/70 px-3 py-2">
				<CommonParagraph text="Guaranteed Consolation Prizes Upto 200USDT for 25 Referral providers" className="md:text-xl" />
			</div>
		</div>
	);
};

export default WinnerPrizePromotion;
