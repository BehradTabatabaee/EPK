import NavBar from "./navbar";
import Hero from "./hero";
export default function Header() {
	return (
		<>
			<div className="bg-[#3d4e58] w-full min-[280px]:h-[32rem] min-[500px]:h-[20rem] h-[38rem] sm:h-[50rem] md:h-[55rem] min-[912px]:h-[33rem] lg:h-[35rem] xl:h-[40rem] 2xl:h-[40rem]">
				<NavBar />
				<Hero />
			</div>
		</>
	);
}
