// ye bug riz dare
// bishtar az div linke kesh omade
const titles = [
	{
		title: "حوزه نفت ، گاز و پتروشیمی",
		subMenu: [
			{ title: "بالادستی", href: "/" },
			{ title: "پایین دستی", href: "/" },
		],
	},
	{
		title: "حوزه فناوری اطلاعات",
		subMenu: [{ title: "گروه فانوس", href: "/" }],
	},
	{
		title: "حوزه آسانسور ، پله برقی و بالابرهای صنعتی",
		subMenu: [
			{ title: "گروه آسانسور", href: "/" },
			{ title: "گروه پله برقی", href: "/" },
			{ title: "گروه بالابر های صنعتی", href: "/" },
		],
	},
];
import Link from "next/link";
export default function Buisness() {
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
									<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-blue-500/50 duration-300 ">
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
