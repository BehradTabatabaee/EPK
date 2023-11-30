import Hero from "@/components/hero";
import Media from "@/components/media";
import Services from "@/components/services";
import Slogan from "@/components/sloganSection";
export const dynamic = 'force-dynamic';
export default function Home() {
	return (
		<>
			<div>
				<Hero />
				<Slogan />
				<Services />
				<Media />
			</div>
		</>
	);
}
