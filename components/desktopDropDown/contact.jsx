const titles = [
	{ title: "اطلاعات تماس", href: "/" },
	{ title: "ارسال نظرات ، پیشنهادات و انتقادات", href: "/" },
	{ title: "درخواست همکاری", href: "/" },
	{ title: "لیست تامین کنتدگان", href: "/" },
];
import Link from "next/link";
export default function Contact() {
	return (
		<>
			<ul className="w-[50vw] text-right text-md p-3 flex flex-row-reverse flex-wrap">
				<div className="flex flex-col">{setTitle()}</div>
			</ul>
		</>
	);
}

function setTitle() {
	return titles.map((t) => {
		return (
			<>
				<Link href={t.href}>
					<li className="inline-block select-none space-y-1 rounded-md w-72 p-4 leading-none no-underline outline-none transition-colors hover:bg-blue-500/50 duration-300 cursor-pointer font-vazir">
						{t.title}
					</li>
				</Link>
			</>
		);
	});
}
