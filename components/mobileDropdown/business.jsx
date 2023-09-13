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
export default function Buisness() {
	return (
		<>
			<AccordionItem value="item-2">
				<AccordionTrigger className="pr-4 text-lg ">کسب و کار</AccordionTrigger>
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
								<AccordionContent className="p-2 pb-5 pt-5 cursor-pointer hover:bg-[#574bd1]/25 ">
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
