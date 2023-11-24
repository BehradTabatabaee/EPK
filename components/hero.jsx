import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Hero() {
	return (
		<>
			<div className=" bg-gray-900 w-full fold:h-[31rem] xfold:h-[35rem] xxfold:h-[40rem] xxs:h-[38rem] xmd:h-[43rem] xxxs:h-[35rem] xxss:h-[20rem] xxmd:h-[26rem] xxxxs:h-[38rem] h-[38rem] sm:h-[45rem] md:h-[46rem] min-[912px]:h-[25rem] lg:h-[28rem] xl:h-[30rem] 2xl:h-[35rem]">
				<div className="flex flex-wrap-reverse justify-center sm:pt-8 xxxs:pt-5 mr-0 gap-7 md:mr-0 min-[1440px]:gap-46 min-[1280px]:gap-32 lg:gap-28 xxxxs:pt-20 lg:mr-5">
					<div className="flex flex-col sm:pt-2 lg:mt-0 mt-1 mr-2 gap-1 lg:gap-5 xl:gap-5 md:gap-5 sm:mr-0 lg:items-center justify-center">
						<div className="flex sm:gap-3 gap-3 justify-center md:mt-2 !mb-3 ">
							<span className=" min-[1440px]:text-6xl md:text-4xl sm:text-3xl fold:text-2xl text-white font-ghasem">
								اکسیر
							</span>
							<span className=" min-[1440px]:text-6xl md:text-4xl sm:text-3xl fold:text-2xl text-white font-ghasem">
								&nbsp;پویان
							</span>
							<span className=" min-[1440px]:text-6xl md:text-4xl sm:text-3xl fold:text-2xl text-white font-ghasem">
								کارافن
							</span>
						</div>
						<span className="2xl:w-[500px] min-[1440px]:w-[530px] xl:w-[370px] lg:w-[360px] md:w-[380px] sm:w-[290px] w-[220px] bg-slate-300 h-[0.5px]"></span>
						<div className="text-center mt-3 sm:mt-3 md:mt-0">
							<span className="min-[1440px]:text-3xl md:text-2xl sm:text-xl fold:text-md text-slate-400 font-delius">
								Elixir Pouyan Karafan
							</span>
						</div>
						<div className="flex flex-col gap-2 items-start justify-center lg:justify-end lg:mt-8 md:mt-5 mt-2">
							<p className=" min-[1440px]:w-[30rem] lg:text-lg w-[12rem] min-[1440px]:text-xl sm:w-[18rem] md:text-base lg:w-[21rem] md:w-[20rem] sm:text-xl text-sm text-center lg:text-right sm:mt-7 md:mt-0 mr-7 fold:mr-3 sm:mr-0 md:mr-6 lg:mr-0 text-slate-200 mt-2 font-vazir">
								شرکت اکسیر پویان کارافن با مسئولیت محدود در سال 1396 و پس از اخذ
								مجوز های لازم از مراجع ذیربط تاسیس گردید{" "}
							</p>
							<Link href={"/about"} className="m-auto lg:mx-0 mt-4">
								<Button
									variant="outline"
									className="w-28 sm:w-32 h-10 sm:text-[1rem] duration-300 text-sm text-slate-100 bg-[#ea7a0c] border-none shadow-lg font-sans"
								>
									بیشتر بدانید
								</Button>
							</Link>
						</div>
					</div>
					<div>
						<img
							src="bureau.jpg"
							alt="img"
							className="w-[23rem] fold:w-[30rem] min-[320px]:w-[32rem] xxxs:w-[21rem] min-[1440px]:w-[40rem] lg:w-[30rem] md:w-[28rem] sm:w-[30rem] sm:m-auto m-auto sm:rounded-xl xxxs:rounded-xl xxxs:opacity-100 min-[1px]:opacity-50 shadow-2xl sm:ml-0 md:ml-0 "
						/>
					</div>
				</div>
			</div>
		</>
	);
}
