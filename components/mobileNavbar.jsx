import Link from "next/link";
import MobileSheet from "./mobileSheet";
export default function MobileNavbar() {
	return (
		<>
			<div className="flex sm:hidden">
				<MobileSheet />
				<div className="flex justify-center items-center m-auto mt-5 pl-9">
					<Link href={"/"}>
						<span className="text-xl text-white">اکسیر پویان کارافن</span>
					</Link>
				</div>
			</div>
		</>
	);
}
