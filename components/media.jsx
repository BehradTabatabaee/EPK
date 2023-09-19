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
				<div className="mt-12 flex gap-8 lg:gap-14 flex-wrap lg:flex-nowrap w-full justify-start items-start h-[70vh] md:h-[60vh] lg:h-[50vh] xl:h-[50vh] 2xl:h-[50vh]">
					<Link href="/" className="bg-slate-500 w-full h-1/2 lg:h-full lg:w-full rounded-2xl">
					</Link>
					<div className="flex flex-col gap-8 justify-center h-full items-center w-full lg:items-end">
						<Link href="/" className="w-full lg:w-full h-1/3 bg-slate-500 rounded-2xl">
						</Link>
						<Link href="/" className="w-full lg:w-full h-1/3 bg-slate-500 rounded-2xl">
						</Link>
						<Link href="/" className="w-full lg:w-full h-1/3 bg-slate-500 rounded-2xl">
						</Link>
						<Link href="/" className="flex justify-center items-center">
							<h2 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-left ml-2 mt-2 border-b-2 border-transparent hover:border-[#9d300f] delay-75 duration-75">
								انتشارات و مقالات
							</h2>
							<FiChevronLeft className="mt-2 text-2xl" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
