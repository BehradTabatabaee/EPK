import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";
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
export default function Media() {
	return (
		<>
			<AccordionItem value="item-3">
				<AccordionTrigger className="pr-4 text-lg ">رسانه ها</AccordionTrigger>
				<AccordionContent className="cursor-pointer">
					<Accordion type="single" collapsible>
						{setTitle()}
					</Accordion>
				</AccordionContent>
			</AccordionItem>
		</>
	);
}
function setTitle() {
	let i = 0;
	return titles.map((t) => {
		i++;
		return (
			<>
				<AccordionItem value={`item-${i}`}>
					<AccordionTrigger className="pr-7 text-lg ">
						{t.title}
					</AccordionTrigger>
					{t.subMenu.map((value) => {
						return (
							<>
								<AccordionContent className="p-2 pb-5 pt-5 cursor-pointer border-b hover:bg-[#574bd1]/25 ">
									<Link href={value.href} className="flex justify-between">
										<span className="pr-7">{value.title}</span>
										<BsChevronLeft className="ml-2 text-slate-500" />
									</Link>
								</AccordionContent>
							</>
						);
					})}
				</AccordionItem>
			</>
		);
	});
}
