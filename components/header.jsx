import NavBar from "./navbar";
export default function Header() {
	return (
		<>
			<div className="sm:bg-gray-900 absolute sm:static w-full min-[280px]:h-[4rem] min-[412px]:h-[6rem] min-[500px]:h-[6rem] min-[823px]:h-[6rem] min-[820px]:h-[6rem] min-[512px]:h-[6rem] min-[510px]:h-[6rem] h-[7rem] sm:h-[7rem] md:h-[7rem] min-[912px]:h-[7rem] lg:h-[7rem] xl:h-[7rem] 2xl:h-[7rem]">
				<NavBar />
			</div>
		</>
	);
}
