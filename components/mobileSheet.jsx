import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
import AboutUs from "./mobileDropdown/aboutUs";
import Buisness from "./mobileDropdown/business";
import Media from "./mobileDropdown/media";
import Contact from "./mobileDropdown/contact";
// scroll nadarad
// button ha bayad kar shavad
// har button component joda sakhte shavad
// esm ein goh accardione
export default function MobileSheet() {
	return (
		<>
			<Sheet>
				<SheetTrigger className=" mt-4 mr-3 w-9 h-9">
					<CiMenuFries className="text-2xl m-auto text-white" />
				</SheetTrigger>
				<SheetContent className="w-[250px] overflow-scroll">
					<div className="bg-[#3d4e58] h-[10rem]">
						<Link href={"/"} className="absolute">
							<img
								src="second-logo.png"
								alt="logo"
								className="w-16 pt-1 mr-1"
							/>
						</Link>
						<div className="flex flex-col justify-center items-end gap-2 pt-3 pl-3">
							<Link href={"/"}>
								<AiOutlineInstagram className="text-xl text-white" />
							</Link>
							<Link href={"/"}>
								<AiFillLinkedin className="text-xl text-white" />
							</Link>
							<Link href={"/"}>
								<RiTwitterXLine className="text-lg text-white" />
							</Link>
						</div>
						<div className="mt-7 mr-3">
							<span className="text-lg text-white">اکسیر پویان کارافن</span>
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