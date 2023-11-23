import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";
import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
const titles = [
	{ title: "شرکت در یک نگاه", href: "/about" },
	{ title: "ارزش های محوری", href: "/values" },
	{ title: "HSEQ", href: "/hseq" },
	{ title: "سرمایه انسانی", href: "/human-resources" },
	{ title: "مدیریت دانش", href: "/knowledge-management" },
	{ title: "اهداف و استراتژی", href: "/strategy" },
	{ title: "بیانیه ماموریت", href: "/mission-statement" },
	{ title: "گواهینامه و افتخارات", href: "/certificates" },
];
export default function AboutUs() {
	return (
		<>
			<AccordionItem value="item-1" className="">
				<AccordionTrigger className="pr-4 text-md font-sans">
					درباره ما
				</AccordionTrigger>
				{setTitle()}
			</AccordionItem>
		</>
	);
}
function setTitle() {
	return titles.map((t) => {
		return (
			<>
				<a href={t.href} key={t.title}>
					<AccordionContent className="p-2 pb-5 pt-5 cursor-pointer border-b hover:bg-blue-500/50 duration-300">
						<div className="flex justify-between">
							<span className="pr-4 font-vazir">{t.title}</span>
							<BsChevronLeft className="ml-2 text-slate-600 mt-1" />
						</div>
					</AccordionContent>
				</a>
			</>
		);
	});
}
