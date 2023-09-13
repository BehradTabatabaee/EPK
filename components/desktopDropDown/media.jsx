const titles = [
	{
		title: "انتشارات و مقاله ها",
		subMenu: [
			{ title: "حوزه نفت", href: "/" },
			{ title: "حوزه فناوری", href: "/" },
			{ title: "حوزه آسانسور", href: "/" },
		],
	},
	{
		title: "ارتباط رسانه ای",
		subMenu: [{ title: "تصاویر و ویدیو ها", href: "/" }],
	},
];
import Link from "next/link";
export default function Media() {
	return (
		<>
			<ul className="w-[50vw] text-right text-md p-3 flex flex-row-reverse flex-wrap">
				{setTitle()}
			</ul>
		</>
	);
}
function setTitle() {
	return titles.map((t) => {
		return (
			<>
				<div className="flex flex-col">
					<span className="p-4 text-slate-600 text-md">{t.title}</span>
					{t.subMenu.map((value) => {
						return (
							<>
								<Link href={value.href}>
									<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
										{value.title}
									</li>
								</Link>
							</>
						);
					})}
				</div>
			</>
		);
	});
}