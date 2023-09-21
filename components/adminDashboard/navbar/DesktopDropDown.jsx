"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
const titles = [
	{ title: "مدیریت کاربران", href: "/dashboard/users" },
	{ title: "مدیریت گواهینامه ها و افتخارات", href: "/" },
	{ title: "مدیریت مقالات", href: "/" },
	{ title: "مدیریت نظرات و پیشنهادات", href: "/" },
	{ title: "مدیریت درخواست های همکاری", href: "/" },
	{ title: "مدیریت تامین کنندگان", href: "/" },
	{ title: "مدیریت تصاویر و ویدیو ها", href: "/" },
];
export default function DesktopDropDown({ session, data }) {
	const router = useRouter();
	return (
		<>
			<div className="absolute w-3/12 lg:w-[18rem] h-full bg-[#3d4e58] lg:block hidden right-0 overflow-scroll ">
				<nav className="flex flex-col gap-2 w-full px-4">
					<div>
						<Link href={"/dashboard"}>
							<img src="second-logo.png" alt="logo" className="w-20 my-3" />
						</Link>
						<Link href={"/dashboard"} className="text-xl text-white">
							پنل مدیریت سایت اکسیرپویان کارافن
						</Link>
						<hr className="text-white my-3" />
					</div>
					{setTitle()}
					{/* <NavLink href="/dashboard/users" text="مدیریت کاربران" />
					<NavLink href="/" text="مدیریت گواهینامه ها و افتخارات" />
					<NavLink href="/" text="مدیریت مقالات" />
					<NavLink href="/" text="مدیریت نظرات و پیشنهادات" />
					<NavLink href="/" text="مدیریت درخواست های همکاری" />
					<NavLink href="/" text="مدیریت تامین کنندگان" />
					<NavLink href="/" text="مدیریت تصاویر و ویدیو ها" /> */}
					<hr />
					<h2 className="text-lg text-white py-3 px-3 font-light">
						کاربر وارد شده : {session.user.name}
					</h2>
					<Button
						variant="destructive"
						onClick={() => {
							signOut({ redirect: false }).then(() => {
								router.push("/"); // Redirect to the home page after signing out
							});
						}}
						className="shadow-xl"
					>
						خروج
					</Button>
					<hr className="my-3" />
					<h2 className="text-lg text-white font-light">
						کامنت های خوانده نشده : {data.commentCount}
					</h2>
					<h2 className="text-lg text-white py-2 font-light">
						درخواست همکاری های خوانده نشده : {data.coopCount}
					</h2>
				</nav>
			</div>
		</>
	);
}

// function NavLink(props) {
// 	return (
// 		<Link
// 			className="hover:bg-white hover:bg-opacity-60 w-full rounded-lg p-3 text-white hover:text-black text-md xl:text-lg "
// 			href={props?.href}
// 		>
// 			{props?.text}
// 		</Link>
// 	);
// }
function setTitle() {
	return titles.map((t) => {
		return (
			<>
				<Link
					className="hover:bg-white hover:bg-opacity-60 w-full rounded-lg p-3 text-white hover:text-black text-md xl:text-lg transition-all"
					href={t?.href}
				>
					{t?.title}
				</Link>
			</>
		);
	});
}
