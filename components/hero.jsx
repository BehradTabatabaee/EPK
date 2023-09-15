import { Button } from "@/components/ui/button";
import Link from "next/link";
// ta tablet responsive e
// faghat mobile monde v landscape mode sh
// width matn darbare ma to goshi bayad kochik she
export default function Hero() {
	return (
		<>
			<div className="flex flex-wrap-reverse justify-center mt-7 mr-0 gap-7 md:mr-0 min-[1440px]:gap-52 min-[1280px]:gap-32 lg:gap-32">
				<div className="flex flex-col sm:mt-4 lg:mt-1 mt-1 mr-2 lg:gap-6 md:gap-9 sm:mr-0">
					<div className="flex sm:flex-col sm:m-auto sm:gap-4 gap-3 justify-center md:mt-5 items-center sm:items-start">
						<span className="lg:text-4xl min-[1440px]:text-5xl md:text-4xl sm:text-3xl min-[280px]:text-2xl text-white sm:text-right">
							اکسیر
						</span>
						<span className="lg:text-4xl min-[1440px]:text-5xl md:text-4xl sm:text-3xl min-[280px]:text-2xl text-white sm:pr-[5rem] min-[1440px]:pr-[8rem] text-center sm:text-right">
							پویان
						</span>
						<span className="lg:text-4xl min-[1440px]:text-5xl md:text-4xl sm:text-3xl min-[280px]:text-2xl text-white sm:pr-[10rem] min-[1440px]:pr-[16rem] text-left sm:text-right">
							کارافن
						</span>
					</div>
					<div className="flex flex-col gap-2 items-center justify-center lg:mt-4 md:mt-0 mt-6">
						<p className=" min-[1440px]:w-[20rem] lg:text-lg w-[10rem] min-[1440px]:text-2xl sm:w-[20rem] md:text-xl lg:w-[15rem] sm:text-xl sm:m-auto text-sm text-center sm:mt-4 md:mt-0 text-white mt-4">
							درباره اکسیر پویان کارافن اینکه شرکت خوبیه و خیلی قشنگ و عالیه و
							خوب عالیه خلاصه.
						</p>
						<Link href={"/"} className="m-auto mt-4">
							<Button
								variant="outline"
								className="w-24 sm:w-32 sm:text-lg text-xs text-slate-100 bg-[#ea7a0c] border-none shadow-lg"
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
							className="w-[23rem] min-[280px]:w-[14rem] min-[320px]:w-[18rem] min-[1440px]:w-[40rem] lg:w-[29rem] sm:w-[30rem] sm:m-auto m-auto rounded-xl shadow-xl sm:ml-0 md:ml-0 "
						/>
					</Link>
				</div>
			</div>
		</>
	);
}
