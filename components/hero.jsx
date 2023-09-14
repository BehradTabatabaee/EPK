import { Button } from "@/components/ui/button";
import Link from "next/link";
// ta tablet responsive e
// faghat mobile monde v landscape mode sh
export default function Hero() {
	return (
		<>
			<div className="flex flex-wrap-reverse justify-center mt-7 mr-16 md:mr-0 min-[1440px]:gap-52 min-[1280px]:gap-32 lg:gap-32">
				<div className="flex flex-col sm:mt-4 min-[1440px]:mt-4 lg:mt-1 mt-3 mr-4 sm:mr-16 lg:gap-6 md:gap-12 md:mr-0">
					<div className="flex flex-col md:m-auto gap-4 justify-center md:mt-5 items-start">
						<span className="lg:text-4xl min-[1440px]:text-5xl md:text-4xl text-white sm:text-right">
							اکسیر
						</span>
						<span className="lg:text-4xl min-[1440px]:text-5xl md:text-4xl text-white lg:pr-[5rem] min-[1440px]:pr-[8rem] text-center sm:text-right">
							پویان
						</span>
						<span className="lg:text-4xl min-[1440px]:text-5xl md:text-4xl text-white lg:pr-[10rem] min-[1440px]:pr-[16rem] text-left sm:text-right">
							کارافن
						</span>
					</div>
					<div className="flex flex-col gap-2 items-center justify-center mt-2">
						<p className="sm:w-[20rem] min-[1440px]:w-[17rem] lg:text-lg w-[40rem] min-[1440px]:text-2xl md:w-[20rem] lg:w-[15rem] text-xl text-center lg:mt-2 md:mt-1 text-white mt-4">
							درباره اکسیر پویان کارافن اینکه شرکت خوبیه و خیلی قشنگ و عالیه و
							خوب عالیه خلاصه.
						</p>
						<Link href={"/"} className="m-auto mt-4">
							<Button
								variant="outline"
								className="w-28 sm:w-32 text-base text-slate-100 bg-[#ea7a0c] border-none shadow-lg"
							>
								بیشتر بدانید
							</Button>
						</Link>
					</div>
				</div>
				<div>
					<Link href={"/"}>
						<img
							src="heroImg.jpg"
							alt="img"
							className="w-[30rem] min-[1440px]:w-[38rem] lg:w-[29rem] sm:w-[30rem] md:m-auto rounded-xl shadow-xl sm:ml-28 md:ml-0 "
						/>
					</Link>
				</div>
			</div>
		</>
	);
}
