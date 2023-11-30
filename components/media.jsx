import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import { db } from "@/prisma/client";
import Image from "next/image";
export const dynamic = 'force-dynamic';
export default async function Media() {
	const data = await db.news.findMany({ orderBy: {
		id: 'desc',
	},
	take: 3,});
	return (
		<>
			<div className="container lg:max-w-[90vw] xl:max-w-[80vw] 2xl:max-w-[70vw] min-w-fit mt-20">
				<div className="flex flex-col items-center lg:items-start">
					<h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-sans border border-l-0 border-t-0 border-b-[2px] pb-5 border-r-0 border-orange-700">
						رسانه ها
					</h1>
				</div>
				<div className="flex flex-col !w-full !p-0 h-[70vh] sm:h-[200vh] xsm:h-[100vh] S8:h-[150vh] md:h-[100vh] air:h-[150vh] surface:h-[100vh] A51:h-[150vh] lg:h-[100vh] xl:h-[90vh] 2xl:h-[80vh] xpc:h-[100vh] gap-3 mt-12">
					<Link
						href={`/blog/${data[0].id}`}
						className="relative w-full h-1/3 sm:h-3/5 bg-slate-500 rounded-3xl overflow-hidden transition-all hover:opacity-90"
					>
						<Image src={`${data[0].image}`} fill={true} priority={true} />
						<div className="absolute bottom-12 sm:bottom-16 right-4 sm:right-6 lg:right-7 xl:right-8 text-white flex flex-col gap-2">
							<h1 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-sans">
								{data[0].title}
							</h1>
							<p className="text-xs sm:text-base font-vazir md:text-lg 2xl:text-xl w-3/4 line-clamp-1">
								{data[0].summary}
							</p>
						</div>
					</Link>
					<div className="flex sm:flex-nowrap flex-wrap flex-row h-2/3 sm:h-2/5 gap-3">
						<Link
							href={`/blog/${data[1].id}`}
							className="relative w-full sm:w-1/2 bg-slate-500 h-1/2 sm:h-full rounded-3xl overflow-hidden transition-all hover:opacity-90"
						>
							<Image src={`${data[1].image}`} fill={true} priority={true} />
							<div className="absolute bottom-11 sm:bottom-12 right-4 sm:right-6 lg:right-7 xl:right-8 text-white flex flex-col gap-2">
								<h1 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-sans">
									{data[1].title}
								</h1>
								<p className="text-xs sm:text-base font-vazir md:text-lg 2xl:text-xl w-3/4 line-clamp-1">
									{data[1].summary}
								</p>
							</div>
						</Link>
						<Link
							href={`/blog/${data[2].id}`}
							className="relative w-full sm:w-1/2 bg-slate-500 h-1/2 sm:h-full rounded-3xl overflow-hidden transition-all hover:opacity-90"
						>
							<Image src={`${data[2].image}`} fill={true} priority={true} />
							<div className="absolute bottom-11 sm:bottom-12 right-4 sm:right-6 lg:right-7 xl:right-8 text-white flex flex-col gap-2">
								<h1 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-sans">
									{data[2].title}
								</h1>
								<p className="text-xs sm:text-base font-vazir md:text-lg 2xl:text-xl w-3/4 line-clamp-1">
									{data[2].summary}
								</p>
							</div>
						</Link>
					</div>
				</div>
				<div className="sm:text-left text-center">
					<Link
						href="/blog"
						className="inline-flex justify-center items-center lg:justify-end mt-10 lg:items-end group transition duration-300"
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
