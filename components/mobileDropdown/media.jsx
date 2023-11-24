import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { BsChevronLeft } from "react-icons/bs";
const titles = [{ title: "اخبار", href: "/blog" }];
export default function Media() {
	return (
		<>
			<AccordionItem value="item-3">
				<AccordionTrigger className="pr-4 text-md font-sans">
					رسانه ها
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
