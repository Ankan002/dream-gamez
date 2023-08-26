import Link from "next/link";
import LinkBlock from "./link-block";

const LinkBlocks = [
	[
		{
			name: "Coin Quest",
			href: "#",
		},
		{
			name: "1 vs 1 Battle",
			href: "#",
		},
		{
			name: "Little Draw",
			href: "#",
		},
		{
			name: "Jackpot Madness",
			href: "#",
		},
		{
			name: "Stone - Paper - Scissor",
			href: "#",
		},
	],
	[
		{
			name: "Terms & Conditions",
			href: "#",
		},
		{
			name: "Privacy Policy",
			href: "#",
		},
		{
			name: "Refund Policy",
			href: "#",
		},
		{
			name: "Affiliate",
			href: "#",
		},
		{
			name: "FAQ",
			href: "#",
		},
        {
			name: "Use Cases",
			href: "#",
		},
	],
];

const Footer = () => {
	return (
		<footer className="w-full flex flex-col py-3 bg-secondary-dark">
			<div className="footer md:px-10 px-4 md:max-w-[1200px]">
                <LinkBlock title="Games" links={LinkBlocks[0]} />
                <LinkBlock title="Need Help?" links={LinkBlocks[1]} />
            </div>

			<div className="w-full bg-primary-dark md:px-10 px-4 py-2 mt-3">
				<p className="text-sm text-white">
					Copyright &#169; 2023
					<span className="text-primary-yellow mx-1">
						DreamGameZ.
					</span>
					All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
