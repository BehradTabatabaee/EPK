import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
const titles = [
	{ title: "مدیریت کاربران", href: "/dashboard/users", id: 1 },
	{
		title: "مدیریت گواهینامه ها و افتخارات",
		href: "/dashboard/certificates",
		id: 2,
	},
	{ title: "مدیریت اخبار", href: "/dashboard/news", id: 3 },
	{ title: "مدیریت نظرات و پیشنهادات", href: "/dashboard/comments", id: 4 },
	// { title: "مدیریت درخواست های همکاری", href: "/",id:5 },
	// { title: "مدیریت تامین کنندگان", href: "/",id:6 },
	// { title: "مدیریت تصاویر و ویدیو ها", href: "/dashboard/media", id: 7 },
];
export default function MobileSheet({ session }) {
	return (
		<>
			<Sheet>
				<SheetTrigger className="absolute z-50 mt-4 mr-3 w-9 h-9">
					<CiMenuFries className="text-2xl m-auto text-black" />
				</SheetTrigger>
				<SheetContent className="w-[250px] sm:w-[270px] overflow-scroll ">
					<div className="bg-gray-900 sm:h-[10rem] h-[12rem]">
						<Link href={"/dashboard"} className="absolute">
							<Image
								src="/second-logo.png"
								width={64}
								height={64}
								alt="Picture of the author"
								className="mt-5 inline-block mr-3"
							/>
						</Link>
						<div className="pt-4 pl-3"></div>
						<div className="mt-24 mr-3">
							<span className="text-lg text-white font-sans">
								{" "}
								پنل مدیریت سایت اکسیرپویان کارافن
							</span>
						</div>
					</div>
					<div className="flex flex-col">
						{setTitle()}
						<hr />
						<h1 className="sm:text-md text-sm text-center mt-5 pb-3 p-2 font-vazir">
							کاربر وارد شده :{" "}
							<span className="text-red-600 font-delius">
								{session.user.name}
							</span>
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
					key={t?.id}
					className="w-full p-6 text-black text-md xl:text-lg border-b hover:hover:bg-[#574bd1]/25 transition-all font-sans"
					href={t?.href}
				>
					{t?.title}
				</Link>
			</>
		);
	});
}
