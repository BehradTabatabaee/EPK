import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
export default function Elevator() {
	return (
		<>
			<div className="bg-[url('/elevatormd.jpg')] md:bg-[url('/elevator.jpg')] md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-32 bg-cover bg-opacity-50 bg-no-repeat flex justify-center items-center bg-[#8b8b8b] w-full min-[280px]:h-[46rem] min-[412px]:h-[50rem] min-[500px]:h-[51rem] min-[512px]:h-[52rem] min-[510px]:h-[37rem] h-[55rem] sm:h-[120vh]">
				<div className="flex items-center flex-wrap-reverse justify-center mr-0 gap-7 md:mr-0 min-[1440px]:gap-46 min-[1280px]:gap-32 lg:gap-32">
					<div className="flex flex-col gap-6 sm:gap-8 md:gap-10 sm:pt-2 lg:mt-0 mt-1 mr-2 lg:gap-12 xl:gap-12 2xl:gap-16 sm:mr-0 lg:items-center justify-center">
						<div className="flex lg:flex-col lg:m-auto sm:gap-4 gap-3 justify-center md:mt-2 ">
							<h1 className="min-[1440px]:text-7xl md:text-6xl sm:text-5xl min-[280px]:text-4xl text-white sm:text-right font-sans">
								بالابر های صنعتی
							</h1>
						</div>
						<div className="flex flex-col gap-2 items-center justify-center lg:mt-4 md:mt-0 mt-2">
							<p className="min-[1440px]:w-[30rem] lg:text-2xl w-[17rem] min-[1440px]:text-3xl sm:w-[20rem] md:text-2xl lg:w-[20rem] sm:text-xl text-xl text-center sm:mt-4 md:mt-0 text-white mt-4 font-vazir">
								راه اندازی و اجرای با کیفیت ترین بالابر های صنعتی وارداتی و
								داخلی
							</p>
							<Link href={"/"} className="m-auto lg:mx-0 mt-8">
								<Button
									variant="outline"
									className="w-40 sm:w-48 py-8 sm:text-xl text-md text-white bg-indigo-700 border-none shadow-lg rounded-3xl font-sans"
								>
									اطلاعات بیشتر
									<FiChevronLeft className="mt-1 mr-1" />
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
