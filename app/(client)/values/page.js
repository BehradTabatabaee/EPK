"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function Values() {
	return (
		<div className="flex flex-col justify-center items-center p-24">
			<h1 className="text-center text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl mb-16 font-sans w-full">
				ارزش های محوری 
			</h1>
			<Accordion type="single" collapsible className="w-screen xl:w-2/3">
				<AccordionItem value="item-1">
					<AccordionTrigger className="border font-sans border-b-2 border-t-0 border-r-0 border-l-0 text-blue-800 mt-6 text-sm md:text-lg lg:text-xl p-8">
						صمیمیت با مشتریان
					</AccordionTrigger>
					<AccordionContent className="p-6 text-sm xl:text-lg font-vazir">
						اکسیر پویان فوق العادس
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger className="border font-sans border-b-2 border-t-0 border-r-0 border-l-0 text-blue-800 mt-6 text-sm md:text-lg lg:text-xl p-6">
						متعهد بودن در قبال کارکنان
					</AccordionTrigger>
					<AccordionContent className="p-6 text-sm xl:text-lg font-vazir">
						{" "}
						اکسیر پویان فوق العادس
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger className="border font-sans border-b-2 border-t-0 border-r-0 border-l-0 text-blue-800 mt-6 text-sm md:text-lg lg:text-xl p-6">
						نوآوری
					</AccordionTrigger>
					<AccordionContent className="p-6 text-sm xl:text-lg font-vazir">
						{" "}
						اکسیر پویان فوق العادس
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger className="border font-sans border-b-2 border-t-0 border-r-0 border-l-0 text-blue-800 mt-6 text-sm md:text-lg lg:text-xl p-6">
						مسئولیت پذیری در قبال جامعه
					</AccordionTrigger>
					<AccordionContent className="p-8 text-sm xl:text-lg font-vazir">
						{" "}
						اکسیر پویان فوق العادس
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-5">
					<AccordionTrigger className="border font-sans border-b-2 border-t-0 border-r-0 border-l-0 text-blue-800 mt-6 text-sm md:text-lg lg:text-xl p-8">
						حفاظت از محیط زیست
					</AccordionTrigger>
					<AccordionContent className="p-8 text-sm xl:text-lg font-vazir">
						{" "}
						اکسیر پویان فوق العادس
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-6">
					<AccordionTrigger className="border font-sans border-b-2 border-t-0 border-r-0 border-l-0 text-blue-800 mt-6 text-sm md:text-lg lg:text-xl p-8">
						پذیرش فرهنگ کار ایمن
					</AccordionTrigger>
					<AccordionContent className="p-8 text-sm xl:text-lg font-vazir">
						{" "}
						اکسیر پویان فوق العادس
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
