import Hero from "@/components/hero";
import Media from "@/components/media";
import Services from "@/components/services";
import Slogan from "@/components/sloganSection";
export default function Home() {
	return (
		<>
			<div className="h-[3500px]">
				<Hero />
				<Slogan />
				<Services />
				<Media/>
			</div>
		</>
	);
}
