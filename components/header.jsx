import NavBar from "./navbar";
import Hero from "./hero";
export default function Header() {
	return (
		<>
			<div className="bg-[#3d4e58] w-full h-full md:h-[55rem] lg:h-[35rem] xl:h-[38rem] 2xl:h-[40rem]">
				<NavBar />
				<Hero />
			</div>
		</>
	);
}
