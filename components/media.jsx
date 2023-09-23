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
				<div className="flex flex-col lg:container h-[70vh] sm:h-[200vh] min-[720px]:h-[120vh] md:h-[90vh] min-[820px]:h-[70vh] min-[844px]:h-[130vh] min-[896px]:h-[140vh] min-[912px]:h-[80vh] min-[914px]:h-[150vh] lg:h-[120vh] xl:h-[120vh] 2xl:h-[100vh] gap-3 mt-12">
					<Link
						href="/"
						className="w-full h-1/3 sm:h-3/5 bg-slate-500 rounded-3xl"
					>
						<div></div>
					</Link>
					<div className="flex sm:flex-nowrap flex-wrap flex-row h-2/3 sm:h-2/5 gap-3">
						<Link
							href="/"
							className="w-full sm:w-1/2 bg-slate-500 h-1/2 sm:h-full rounded-3xl"
						>
							<div></div>
						</Link>
						<Link
							href="/"
							className="w-full sm:w-1/2 bg-slate-500 h-1/2 sm:h-full rounded-3xl"
						>
							<div></div>
						</Link>
					</div>
				</div>
				<div className="sm:text-left text-center">
					<Link
						href="/"
						className="inline-flex lg:ml-6 justify-center items-center lg:justify-end mt-10 lg:items-end"
					>
						<h2 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-left ml-2 mt-2 group transition duration-300">
							انتشارات و مقالات
							<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 mt-1 bg-[#9d300f]"></span>
						</h2>
						<FiChevronLeft className="lg:mb-3 text-2xl" />
					</Link>
				</div>
			</div>
		</>
	);
}
