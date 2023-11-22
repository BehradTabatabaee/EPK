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
		title: "ارتباط رسانه ای",
		subMenu: [
			{ title: "اخبار", href: "/blog" },
			// { title: "تصاویر و ویدیو ها", href: "/" },
		],
	},
];
export default function Media() {
	return (
		<>
			<AccordionItem value="item-3">
				<AccordionTrigger className="pr-4 text-md font-sans">
					رسانه ها
				</AccordionTrigger>
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
					<AccordionTrigger className="pr-7 text-md font-sans ">
						{t.title}
					</AccordionTrigger>
					{t.subMenu.map((value) => {
						return (
							<>
								<a href={value.href} key={value.title}>
									<AccordionContent className="p-2 pb-5 pt-5 cursor-pointer border-b hover:bg-blue-500/50 duration-300 ">
										<div className="flex justify-between">
											<span className="pr-7 font-vazir">{value.title}</span>
											<BsChevronLeft className="ml-2 text-slate-600 mt-1" />
										</div>
									</AccordionContent>
								</a>
							</>
						);
					})}
				</AccordionItem>
			</>
		);
	});
}
