import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import AboutUs from "./desktopDropDown/aboutUs";
import Buisness from "./desktopDropDown/business";
import Contact from "./desktopDropDown/contact";
import Media from "./desktopDropDown/media";
import Image from "next/image";
export default function DesktopNavbar() {
	return (
		<>
			<div className="hidden lg:flex flex-row gap-4 justify-between container">
				<Link href={"/"}>
					<img
						src="/second-logo.png"
						alt="logo"
						className="md:w-20 w-16 my-3"
					/>
				</Link>
				<NavigationMenu className="flex">
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger
								className="md:text-xl text-md font-sans"
							>
								ارتباط با ما
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<Contact />
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger
								className="md:text-xl text-md font-sans"
							>
								رسانه ها
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<Media />
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger
								className="md:text-xl text-md font-sans"
							>
								کسب و کار
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<Buisness />
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger
								className="md:text-xl text-md font-sans"
							>
								درباره ما
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<AboutUs />
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<div className="flex justify-center items-center gap-2">
					<Link href={"/"}>
						<RiTwitterXLine className="text-xl text-white hover:text-blue-500 duration-300" />
					</Link>
					<Link
						href={"https://www.linkedin.com/company/epkco/"}
						target="_blank"
					>
						<AiFillLinkedin className="text-2xl text-white hover:text-blue-500 duration-300" />
					</Link>
					<Link href={"/"}>
						<AiOutlineInstagram className="text-2xl text-white hover:text-blue-500 duration-300" />
					</Link>
				</div>
			</div>
		</>
	);
}
