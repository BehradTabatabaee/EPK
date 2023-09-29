import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion } from "@/components/ui/accordion";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
import AboutUs from "./mobileDropdown/aboutUs";
import Buisness from "./mobileDropdown/business";
import Media from "./mobileDropdown/media";
import Contact from "./mobileDropdown/contact";
export default function MobileSheet() {
	return (
		<>
			<Sheet>
				<SheetTrigger className="absolute z-50 mt-4 mr-3 w-9 h-9">
					<CiMenuFries className="text-2xl m-auto text-black" />
				</SheetTrigger>
				<SheetContent className="w-[250px] overflow-scroll ">
					<div className="bg-gray-900 h-[10rem]">
						<a href={"/"} className="absolute">
							<img
								src="second-logo.png"
								alt="logo"
								className="w-16 pt-3 mr-2"
							/>
						</a>
						<div className="flex flex-col justify-center items-end gap-2 pt-3 pl-3">
							<Link href={"/"}>
								<AiOutlineInstagram className="text-xl text-white hover:text-blue-500 duration-300" />
							</Link>
							<Link
								href={"https://www.linkedin.com/company/epkco/"}
								target="_blank"
							>
								<AiFillLinkedin className="text-xl text-white hover:text-blue-500 duration-300" />
							</Link>
							<Link href={"/"}>
								<RiTwitterXLine className="text-lg text-white hover:text-blue-500 duration-300" />
							</Link>
						</div>
						<div className="mt-7 mr-3">
							<span className="text-lg text-white font-ghasem">
								اکسیر &nbsp;پویان&nbsp;کارافن
							</span>
						</div>
					</div>
					<Accordion type="single" collapsible>
						<AboutUs />
						<Buisness />
						<Media />
						<Contact />
					</Accordion>
				</SheetContent>
			</Sheet>
		</>
	);
}
