import { Button } from "@/components/ui/button";
import Link from "next/link";
import {FiChevronLeft} from "react-icons/fi"
export default function Oil() {
	return (
		<>
			<div className="bg-[url('/oilmd.jpg')] md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-32 md:bg-[url('/oil.jpg')] bg-cover bg-opacity-50 bg-no-repeat flex justify-center items-center bg-[#8b8b8b] w-full min-[280px]:h-[31rem] min-[412px]:h-[35rem] min-[500px]:h-[36rem] min-[823px]:h-[32rem] min-[820px]:h-[52rem] min-[512px]:h-[37rem] min-[510px]:h-[22rem] h-[40rem] sm:h-[44rem] md:h-[52rem] min-[912px]:h-[35rem] lg:h-[33rem] xl:h-[39rem] 2xl:h-[42rem]">
				<div className="flex items-center flex-wrap-reverse justify-center mr-0 gap-7 md:mr-0 min-[1440px]:gap-46 min-[1280px]:gap-32 lg:gap-32">
					<div className="flex flex-col sm:pt-2 lg:mt-0 mt-1 mr-2 lg:gap-6 md:gap-9 sm:mr-0 lg:items-center justify-center">
						<div className="flex lg:flex-col lg:m-auto sm:gap-4 gap-3 justify-center md:mt-2 ">
							<h1 className="min-[1440px]:text-7xl md:text-6xl sm:text-5xl min-[280px]:text-3xl text-white md:text-black sm:text-right">
								روغن موتور، نفت و گاز
							</h1>
						</div>
						<div className="flex flex-col gap-2 items-center justify-center lg:mt-4 md:mt-0 mt-2">
							<p className=" min-[1440px]:w-[30rem] lg:text-2xl w-[10rem] min-[1440px]:text-4xl sm:w-[20rem] md:text-3xl lg:w-[15rem] sm:text-2xl text-md text-center sm:mt-4 md:mt-0 text-white md:text-black mt-4">
								با کیفیت ترین روغن موتور و خدمات پس از فروش را از ما بخواهید
							</p>
							<Link href={"/"} className="m-auto lg:mx-0 mt-8">
								<Button
									variant="outline"
									className="w-32 sm:w-40 py-7 sm:text-xl text-md text-white md:text-black bg-[#ea7a0c] border-none shadow-lg rounded-2xl"
								>
									اطلاعات بیشتر
									<FiChevronLeft className="mt-1"/>
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
