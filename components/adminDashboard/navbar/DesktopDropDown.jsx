"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
const titles = [
	{ title: "مدیریت کاربران", href: "/dashboard/users", id: 1 },
	{
		title: "مدیریت گواهینامه ها و افتخارات",
		href: "/dashboard/certificates",
		id: 2,
	},
	{ title: "مدیریت اخبار", href: "/dashboard/news", id: 3 },
	{ title: "مدیریت نظرات و پیشنهادات", href: "/dashboard/comments", id: 4 },
	// { title: "مدیریت درخواست های همکاری", href: "/" ,id : 5},
	// { title: "مدیریت تامین کنندگان", href: "/", id: 6 },
	{ title: "مدیریت تصاویر و ویدیو ها", href: "/dashboard/media", id: 7 },
];
export default function DesktopDropDown({ session, data }) {
	const router = useRouter();
	return (
		<div className=" w-3/12 lg:w-[30rem] bg-gray-900  hidden lg:block h-screen overflow-scroll z-10">
			<nav className="flex flex-col gap-2 w-full px-4">
				<div>
					<Link href={"/dashboard"}>
						<Image
							src="/second-logo.png"
							width={80}
							height={80}
							alt="Picture of the author"
							className="my-3 inline-block"
						/>
					</Link>
					<span className="xl:text-lg text-base text-white block font-sans">
						پنل مدیریت سایت اکسیرپویان کارافن
					</span>
					<hr className="text-white my-3" />
				</div>
				<SetTitle />
				<hr />
				<h2 className="text-lg text-white py-3 px-3 font-light font-vazir">
					کاربر وارد شده :{" "}
					<span className="font-delius">{session.user.name}</span>
				</h2>
				<Button
					variant="destructive"
					onClick={() => {
						signOut({ redirect: false }).then(() => {
							router.push("/"); // Redirect to the home page after signing out
						});
					}}
					className="shadow-xl font-sans"
				>
					خروج
				</Button>
				<hr className="my-3" />
				<h2 className="xl:text-lg text-base text-white font-light font-vazir">
					نظرات و پیشنهاد های خوانده نشده : {data.commentCount}
				</h2>
			</nav>
		</div>
	);
}

function SetTitle() {
	return titles.map((t) => {
		return (
			<Link
				key={t?.id}
				className="hover:bg-white hover:bg-opacity-60 w-full rounded-lg p-3 text-white hover:text-black text-base xl:text-lg transition-all font-sans"
				href={t?.href}
			>
				{t?.title}
			</Link>
		);
	});
}
