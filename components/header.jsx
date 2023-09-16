import NavBar from "./navbar";
import Hero from "./hero";
export default function Header() {
	return (
		<>
			<div className=" bg-[url('../public/heroImg.jpg')] w-full min-[280px]:h-[31rem] min-[412px]:h-[33rem] min-[500px]:h-[34rem] min-[823px]:h-[30rem] min-[820px]:h-[50rem] min-[512px]:h-[35rem] min-[510px]:h-[20rem] h-[38rem] sm:h-[42rem] md:h-[50rem] min-[912px]:h-[33rem] lg:h-[31rem] xl:h-[40rem] 2xl:h-[40rem]">
				<NavBar />
				<Hero />
			</div>
		</>
	);
}
