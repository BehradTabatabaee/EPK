import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import AboutUs from "./desktopDropDown/aboutUs";
import Buisness from "./desktopDropDown/business";
import Contact from "./desktopDropDown/contact";
import Media from "./desktopDropDown/media";
export default function DesktopNavbar() {
	return (
		<>
			<div className="hidden sm:flex flex-row gap-4 justify-between container">
				<Link href={"/"}>
					<img src="second-logo.png" alt="logo" className="w-20 my-3" />
				</Link>
				<NavigationMenu className="flex pb-2">
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="text-xl">
								ارتباط با ما
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<Contact />
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="text-xl">
								رسانه ها
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<Media />
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="text-xl">
								کسب و کار
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<Buisness />
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="text-xl">
								درباره ما
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<AboutUs />
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<div className="flex justify-center items-center gap-2 pb-4">
					<Link href={"/"}>
						<RiTwitterXLine className="text-xl text-white" />
					</Link>
					<Link href={"/"}>
						<AiFillLinkedin className="text-2xl text-white" />
					</Link>
					<Link href={"/"}>
						<AiOutlineInstagram className="text-2xl text-white" />
					</Link>
				</div>
			</div>
		</>
	);
}
