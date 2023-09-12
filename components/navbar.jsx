"use client";
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
import AboutUs from "./DropDown/aboutUs";
import Buisness from "./DropDown/business";
import Contact from "./DropDown/contact";
import Media from "./DropDown/media";
export default function NavBar() {
	return (
		<>
			<div className="flex flex-row gap-4 justify-between container">
				{/* logo kar darad */}
				<Link href={"/"}>
					<img
						src="second-logo.png"
						alt="logo"
						className="w-16 my-1 inline-block"
					/>
				</Link>
				<NavigationMenu className="flex pb-2">
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>ارتباط با ما</NavigationMenuTrigger>
							<NavigationMenuContent>
								<Contact />
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>رسانه ها</NavigationMenuTrigger>
							<NavigationMenuContent>
								<Media />
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>کسب و کار</NavigationMenuTrigger>
							<NavigationMenuContent>
								<Buisness />
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>درباره ما</NavigationMenuTrigger>
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
