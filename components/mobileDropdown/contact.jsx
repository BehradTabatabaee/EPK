import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";
const titles = [
	{ title: "اطلاعات تماس", href: "/" },
	{ title: "پیشنهادات و انتقادات", href: "/feedback" },
	{ title: "درخواست همکاری", href: "/" },
	{ title: "لیست تامین کنندگان", href: "/" },
];
export default function Contact() {
	return (
		<>
			<AccordionItem value="item-4">
				<AccordionTrigger className="pr-4 text-md font-sans">
					ارتباط با ما
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
				<Link href={t.href}>
					<AccordionContent className="p-2 pb-5 pt-5 cursor-pointer border-b hover:bg-blue-500/50 duration-300">
						<div className="flex justify-between">
							<span className="pr-4 font-vazir">{t.title}</span>
							<BsChevronLeft className="ml-2 text-slate-600 mt-1" />
						</div>
					</AccordionContent>
				</Link>
			</>
		);
	});
}
