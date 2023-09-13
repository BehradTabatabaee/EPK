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
	{ title: "ارسال نظرات ، پیشنهادات و انتقادات", href: "/" },
	{ title: "درخواست همکاری", href: "/" },
	{ title: "لیست تامین کنتدگان", href: "/" },
];
export default function Contact() {
	return (
		<>
			<AccordionItem value="item-4">
				<AccordionTrigger className="pr-4 text-lg ">
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
				<AccordionContent className="p-2 pb-5 pt-5 cursor-pointer border-b hover:bg-[#574bd1]/25">
					<Link href={t.href} className="flex justify-between">
						<span className="pr-4">{t.title}</span>
						<BsChevronLeft className="ml-2 text-slate-500" />
					</Link>
				</AccordionContent>
			</>
		);
	});
}
