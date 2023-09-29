import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import { db } from "@/prisma/client";
export default async function Media() {
	const data = await db.news.findMany({ take: 3 });
	return (
		<>
			<div className="container min-w-fit mt-20">
				<div className="flex flex-col items-center lg:items-start">
					<h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-sans">
						رسانه ها
					</h1>
					<img
						src="divider-left.png"
						alt="divider"
						className="lg:w-[25rem] md:w-[20rem] sm:w-[15rem] w-[10rem] mt-2 hidden lg:block"
					/>
					<img
						src="footer-red.png"
						alt="divider"
						className="lg:w-[25rem] md:w-[20rem] sm:w-[15rem] w-[10rem] mt-2 lg:hidden"
					/>
				</div>
				<div className="flex flex-col lg:container h-[70vh] sm:h-[200vh] min-[720px]:h-[120vh] md:h-[90vh] min-[820px]:h-[70vh] min-[844px]:h-[130vh] min-[896px]:h-[140vh] min-[912px]:h-[80vh] min-[914px]:h-[150vh] lg:h-[120vh] xl:h-[120vh] 2xl:h-[100vh] gap-3 mt-12">
					<Link
						href="/"
						className="w-full h-1/3 sm:h-3/5 bg-slate-500 rounded-3xl overflow-hidden transition-all hover:opacity-90"
					>
						<div
							className={`bg-[url('/${data[0].image}')] bg-cover bg-no-repeat w-full h-full gap-3 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-10 text-right flex flex-col justify-center pr-4 pt-12 items-start sm:items-start sm:justify-end text-white sm:p-5 sm:pb-12`}
						>
							<h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-sans">
								{data[0].title}
							</h1>
							<p className="text-xs sm:text-lg font-vazir md:text-xl 2xl:text-2xl w-3/4 line-clamp-1">
								{data[0].field}
							</p>
						</div>
					</Link>
					<div className="flex sm:flex-nowrap flex-wrap flex-row h-2/3 sm:h-2/5 gap-3">
						<Link
							href="/"
							className="w-full sm:w-1/2 bg-slate-500 h-1/2 sm:h-full rounded-3xl overflow-hidden transition-all hover:opacity-90"
						>
							<div
								className={`bg-[url('/${data[0].image}')] bg-cover bg-no-repeat w-full h-full gap-3 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-10 text-right flex flex-col justify-center pr-4 pt-12 items-start sm:items-start sm:justify-end text-white sm:p-5 sm:pb-12`}
							>
								<h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-sans">
									{data[1].title}
								</h1>
								<p className="text-xs sm:text-lg font-vazir md:text-xl 2xl:text-2xl w-3/4 line-clamp-1">
									{data[1].field}
								</p>
							</div>
						</Link>
						<Link
							href="/"
							className="w-full sm:w-1/2 bg-slate-500 h-1/2 sm:h-full rounded-3xl overflow-hidden transition-all hover:opacity-90"
						>
							<div
								className={`bg-[url('/${data[0].image}')] bg-cover bg-no-repeat w-full h-full gap-3 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-10 text-right flex flex-col justify-center pr-4 pt-12 items-start sm:items-start sm:justify-end text-white sm:p-5 sm:pb-12`}
							>
								<h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-sans">
									{data[2].title}
								</h1>
								<p className="text-xs sm:text-lg font-vazir md:text-xl 2xl:text-2xl w-3/4 line-clamp-1">
									{data[2].field}
								</p>
							</div>
						</Link>
					</div>
				</div>
				<div className="sm:text-left text-center">
					<Link
						href="/"
						className="inline-flex lg:ml-6 justify-center items-center lg:justify-end mt-10 lg:items-end group transition duration-300"
					>
						<h2 className="text-center text-lg sm:text-xl md:text-2xl xl:text-left ml-0.5 mt-2 font-sans">
							انتشارات و مقالات
							<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 mt-1 bg-[#9d300f]"></span>
						</h2>
						<FiChevronLeft className="lg:mb-2.5 mt-0.5 text-lg sm:text-xl md:text-2xl" />
					</Link>
				</div>
			</div>
		</>
	);
}
