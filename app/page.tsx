import { Navbar } from "@/components/common";
import {
	Blogs,
	FeatureSection,
	GameSection,
	HomeHero,
} from "@/components/home";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="flex min-h-screen flex-col pt-16">
				<HomeHero />
				<GameSection />
				<FeatureSection />
				<Blogs />
			</main>
		</>
	);
}
