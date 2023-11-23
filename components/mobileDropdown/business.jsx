import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { BsChevronLeft } from "react-icons/bs";
const titles = [
	{
		title: " نفت ، گاز و پتروشیمی",
		subMenu: [
			{ title: "بالادستی", href: "/" },
			{ title: "پایین دستی", href: "/" },
		],
	},
	{
		title: " فناوری اطلاعات",
		subMenu: [{ title: "InSite Group", href: "/" }],
	},
	{
		title: " آسانسور ، پله برقی و بالابرهای صنعتی",
		subMenu: [
			{ title: "آسانسور", href: "/" },
			{ title: "پله برقی", href: "/" },
			{ title: "بالابر های صنعتی", href: "/" },
		],
	},
];
export default function Buisness() {
	return (
		<>
			<AccordionItem value="item-2">
				<AccordionTrigger className="pr-4 text-md font-sans">
					کسب و کار
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
					<AccordionTrigger className="pr-5 text-sm text-right font-sans">
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
