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
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
const titles = [
	{ title: "مدیریت کاربران", href: "/dashboard/users" },
	{ title: "مدیریت گواهینامه ها و افتخارات", href: "/dashboard/certificates" },
	{ title: "مدیریت مقالات", href: "/" },
	{ title: "مدیریت نظرات و پیشنهادات", href: "/dashboard/comments" },
	// { title: "مدیریت درخواست های همکاری", href: "/" },
	{ title: "مدیریت تامین کنندگان", href: "/" },
	{ title: "مدیریت تصاویر و ویدیو ها", href: "/" },
];
export default function MobileSheet({ session }) {
	return (
		<>
			<Sheet>
				<SheetTrigger className="absolute z-50 mt-4 mr-3 w-9 h-9">
					<CiMenuFries className="text-2xl m-auto text-black" />
				</SheetTrigger>
				<SheetContent className="w-[250px] sm:w-[260px] overflow-scroll ">
					<div className="bg-[#3d4e58] sm:h-[10rem] h-[12rem]">
						<Link href={"/dashboard"} className="absolute">
							<img
								src="second-logo.png"
								alt="logo"
								className="w-16 pt-3 mr-2"
							/>
						</Link>
						<div className="flex flex-col justify-center items-end gap-2 pt-3 pl-3">
							{/* <Link href={"/"}>
                  <AiOutlineInstagram className="text-xl text-white" />
                </Link>
                <Link href={"/"}>
                  <AiFillLinkedin className="text-xl text-white" />
                </Link>
                <Link href={"/"}>
                  <RiTwitterXLine className="text-lg text-white" />
                </Link> */}
						</div>
						<div className="mt-24 mr-3">
							<span className="text-lg text-white">
								{" "}
								پنل مدیریت سایت اکسیرپویان کارافن
							</span>
						</div>
					</div>
					<div className="flex flex-col">
						{setTitle()}
						<hr />
						<h1 className="sm:text-md text-sm text-center mt-5 p-2">
							کاربر وارد شده :{" "}
							<span className="text-red-600">{session.user.name}</span>
						</h1>
					</div>
				</SheetContent>
			</Sheet>
		</>
	);
}

function setTitle() {
	return titles.map((t) => {
		return (
			<>
				<Link
					key={t}
					className="w-full p-6 text-black text-md xl:text-lg border-b hover:hover:bg-[#574bd1]/25 transition-all"
					href={t?.href}
				>
					{t?.title}
				</Link>
			</>
		);
	});
}
