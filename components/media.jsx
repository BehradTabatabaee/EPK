import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
export default function Media() {
	return (
		<>
			<div className="container min-w-fit mt-20">
				<div className="flex flex-col items-center lg:items-start">
					<h1 className="md:text-4xl sm:text-3xl text-2xl">رسانه ها</h1>
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
				<div className="mt-12 min-[844px]:h-[130vh] min-[890px]:h-[130vh] min-[912px]:h-[60vh] min-[914px]:h-[130vh] flex gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 flex-wrap lg:flex-nowrap w-full justify-start items-start h-[60vh] sm:h-[150vh] md:h-[70vh] lg:h-[65vh] xl:h-[55vh] 2xl:h-[45vh]">
					<Link
						href="/"
						className="bg-slate-500 w-full h-1/4 lg:h-full lg:w-full rounded-2xl"
					></Link>
					<div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 h-full items-center w-full lg:items-end">
						<Link
							href="/"
							className="w-full lg:w-full h-1/4 bg-slate-500 rounded-2xl"
						></Link>
						<Link
							href="/"
							className="w-full lg:w-full h-1/4 bg-slate-500 rounded-2xl"
						></Link>
						<Link
							href="/"
							className="w-full lg:w-full h-1/4 bg-slate-500 rounded-2xl"
						></Link>
						<Link href="/" className="flex justify-center mt-6 items-center">
							<h2 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-left ml-2 mt-2 group transition duration-300">
								انتشارات و مقالات
								<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 mt-1 bg-[#9d300f]"></span>
							</h2>
							<FiChevronLeft className="mt-2 text-2xl" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
