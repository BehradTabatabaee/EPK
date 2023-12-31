import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiElevator, PiLaptop, PiDrop } from "react-icons/pi";
import Laptop from "./servicesLaptop";
import Oil from "./servicesOil";
import Elevator from "./servicesElevator";
export default function Services() {
	return (
		<Tabs defaultValue="laptop" className="w-full text-center">
			<TabsList className="flex justify-center h-24 sm:gap-10 gap-5 bg-gray-900">
				<TabsTrigger
					value="elevator"
					className="sm:text-6xl text-5xl bg-[#7392a4] hover:bg-white hover:text-[#e9790d] rounded-2xl text-[#9d300f] data-[state=active]:bg-[#e9790d] data-[state=active]:text-white data-[state=active]:duration-300"
				>
					<PiElevator />
				</TabsTrigger>
				<TabsTrigger
					value="drop"
					className="sm:text-6xl text-5xl bg-[#7392a4] hover:bg-white hover:text-[#e9790d] rounded-2xl  text-[#9d300f] data-[state=active]:bg-[#e9790d] data-[state=active]:text-white data-[state=active]:duration-300"
				>
					<PiDrop />
				</TabsTrigger>
				<TabsTrigger
					value="laptop"
					className="sm:text-6xl text-5xl bg-[#7392a4] hover:bg-white hover:text-[#e9790d] rounded-2xl text-[#9d300f] data-[state=active]:bg-[#e9790d] data-[state=active]:text-white data-[state=active]:duration-300"
				>
					<PiLaptop />
				</TabsTrigger>
			</TabsList>
			<TabsContent value="laptop">
				<div dir="rtl">
					<Laptop />
				</div>
			</TabsContent>
			<TabsContent value="drop">
				<div dir="rtl">
					<Oil />
				</div>
			</TabsContent>
			<TabsContent value="elevator">
				<div dir="rtl">
					<Elevator />
				</div>
			</TabsContent>
		</Tabs>
	);
}
