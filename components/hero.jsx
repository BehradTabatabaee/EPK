import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Hero() {
	return (
		<>
			<div className=" bg-[#3d4e58] w-full min-[280px]:h-[29rem] min-[412px]:h-[33rem] min-[500px]:h-[34rem] min-[823px]:h-[30rem] min-[820px]:h-[50rem] min-[512px]:h-[35rem] min-[510px]:h-[20rem] h-[38rem] sm:h-[42rem] md:h-[50rem] min-[912px]:h-[33rem] lg:h-[31rem] xl:h-[37rem] 2xl:h-[40rem]">
				<div className="flex flex-wrap-reverse justify-center sm:pt-8 min-[512px]:pt-5 mr-0 gap-7 md:mr-0 min-[1440px]:gap-46 min-[1280px]:gap-32 lg:gap-32">
					<div className="flex flex-col sm:pt-2 lg:mt-0 mt-1 mr-2 lg:gap-6 md:gap-9 sm:mr-0 lg:items-center justify-center">
						<div className="flex lg:flex-col lg:m-auto sm:gap-4 gap-3 justify-center md:mt-2 ">
							<span className=" min-[1440px]:text-6xl md:text-4xl sm:text-3xl min-[280px]:text-2xl text-white sm:text-right">
								اکسیر
							</span>
							<span className=" min-[1440px]:text-6xl md:text-4xl sm:text-3xl min-[280px]:text-2xl text-white lg:pr-[5rem] min-[1440px]:pr-[8rem] text-center sm:text-right">
								پویان
							</span>
							<span className=" min-[1440px]:text-6xl md:text-4xl sm:text-3xl min-[280px]:text-2xl text-white lg:pr-[10rem] min-[1440px]:pr-[16rem] text-left sm:text-right">
								کارافن
							</span>
						</div>
						<div className="flex flex-col gap-2 items-start justify-center lg:mt-4 md:mt-0 mt-2">
							<p className=" min-[1440px]:w-[30rem] lg:text-lg w-[10rem] min-[1440px]:text-2xl sm:w-[20rem] md:text-xl lg:w-[15rem] sm:text-xl text-sm text-center lg:text-right sm:mt-4 md:mt-0 text-white mt-4">
								درباره اکسیر پویان کارافن اینکه شرکت خوبیه و خیلی قشنگ و عالیه و
								خوب عالیه خلاصه.
							</p>
							<Link href={"/"} className="m-auto lg:mx-0 mt-4">
								<Button
									variant="outline"
									className="w-24 sm:w-28 h-9 sm:text-[1rem] text-md text-slate-100 bg-[#ea7a0c] border-none shadow-lg"
								>
									بیشتر بدانید
								</Button>
							</Link>
						</div>
					</div>
					<div>
						<img
							src="1921860.jpg"
							alt="img"
							className="w-[23rem] min-[280px]:w-[30rem] min-[320px]:w-[32rem] min-[512px]:w-[21rem] min-[1440px]:w-[40rem] lg:w-[29rem] sm:w-[30rem] sm:m-auto m-auto sm:rounded-xl min-[512px]:rounded-xl min-[512px]:opacity-100 min-[1px]:opacity-50 shadow-2xl sm:ml-0 md:ml-0 "
						/>
					</div>
				</div>
			</div>
		</>
	);
}
