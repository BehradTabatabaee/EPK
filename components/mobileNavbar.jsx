import Link from "next/link";
import MobileSheet from "./mobileSheet";
export default function MobileNavbar() {
	return (
		<>
			<div className="flex sm:hidden">
				<MobileSheet />
				<div className="flex justify-center items-center m-auto min-[512px]:mt-3 pr-7 pl-12">
					{/* <span className="text-xl text-white">اکسیر پویان کارافن</span> */}
					<Link href={"/"}>
						<img
							src="second-logo.png"
							alt="logo"
							className="w-14 hidden min-[541px]:hidden min-[512px]:block"
						/>
					</Link>
				</div>
			</div>
		</>
	);
}
