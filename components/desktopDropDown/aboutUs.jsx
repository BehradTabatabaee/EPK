const titles = [
	[
		{ title: "شرکت در یک نگاه", href: "/about" },
		{ title: "ارزش های محوری", href: "/values" },
		{ title: "HSEQ", href: "/hseq" },
		{ title: "سرمایه انسانی", href: "/human-resources" },
	],
	[
		{ title: "مدیریت دانش", href: "/knowledge-management" },
		{ title: "چشم انداز، اهداف و استراتژی", href: "/strategy" },
		{ title: "بیانیه ماموریت", href: "/mission-statement" },
		{ title: "گواهینامه و افتخارات", href: "/certificates" },
	],
];
import Link from "next/link";
export default function AboutUs() {
	return (
		<>
			<ul className="flex flex-row-reverse gap-2 justify-start w-[50vw] text-right text-md p-4 flex-wrap">
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
					{t.map((value) => {
						return (
							<>
								<Link href={value.href} key={value.title}>
									<li className="inline-block select-none space-y-1 rounded-md w-60 p-4 leading-none no-underline outline-none transition-colors hover:bg-blue-500/50 duration-300 cursor-pointer font-vazir">
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
