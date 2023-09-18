import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {PiElevator,PiLaptop,PiDrop} from "react-icons/pi"
import Laptop from "./servicesLaptop"
import Elevator from "./servicesElevator"
import Oil from "./servicesOil"
export default function Services() {
  return (
    <Tabs defaultValue="laptop" className="w-full text-center">
      <TabsList className="flex justify-center h-24 gap-10 bg-[#37464f]">
        <TabsTrigger value="drop" className="text-6xl bg-[#7392a4] rounded-2xl text-[#9d300f] data-[state=active]:bg-[#e9790d] data-[state=active]:text-white"><PiDrop/></TabsTrigger>
        {/* <TabsTrigger value="elevator" className="text-6xl bg-[#7392a4] rounded-2xl text-[#9d300f] data-[state=active]:bg-[#e9790d] data-[state=active]:text-white"><PiElevator/></TabsTrigger> */}
        <TabsTrigger value="laptop" className="text-6xl bg-[#7392a4] rounded-2xl text-[#9d300f] data-[state=active]:bg-[#e9790d] data-[state=active]:text-white"><PiLaptop/></TabsTrigger>
      </TabsList>
      <TabsContent value="laptop">
        <div dir="rtl">
            <Laptop/>
        </div>
      </TabsContent>
      {/* <TabsContent value="elevator">
        <div dir="rtl">
            <Elevator/>
        </div>
      </TabsContent> */}
      <TabsContent value="drop">
        <div dir="rtl">
            <Oil/>
        </div>
      </TabsContent>
    </Tabs>
  )
}