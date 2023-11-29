import NavBar from "./navbar";
export default function Header() {
	return (
		<>
			<div className="sm:bg-gray-900 absolute sm:static w-full min-[912px]:h-[7rem] lg:h-[7rem] xl:h-[7rem] 2xl:h-[7rem]">
				<NavBar />
			</div>
		</>
	);
}
