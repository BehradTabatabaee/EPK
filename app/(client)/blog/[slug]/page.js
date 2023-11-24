import { db } from "@/prisma/client";
import { notFound, redirect } from "next/navigation";
import { BsCalendarDate } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
export default async function BlogPage({ params }) {
	if (isNaN(+params.slug)) {
		notFound();
	}
	const data = await db.news.findUnique({
		where: { id: Number(params.slug) },
	});
	if (!data?.id) {
		notFound();
	}
	return (
		<>
			<div className="container pt-20 flex justify-center items-center min-w-[70vw]">
				<div className="w-[90%] items-center justify-center sm:items-start sm:justify-start flex flex-col min-[281px]:gap-7 min-[320px]:gap-8 sm:gap-10 md:gap-12 gap-6">
					<h1 className="text-3xl md:text-5xl xl:text-6xl sm:text-4xl font-bold font-sans">
						{data.title}
					</h1>
					<div className="flex md:gap-20 flex-wrap gap-4 min-[326px]:gap-10">
						<div className="flex min-[280px]:gap-2">
							<BsCalendarDate className="text-xl sm:text-2xl mt-0.5 sm:mt-[0.0625rem]" />
							<p className="text-lg sm:text-xl font-delius">
								{data.created_at.getDate()}/{data.created_at.getMonth()}/
								{data.created_at.getFullYear()}
							</p>
						</div>
						<div className="flex min-[280px]:gap-2">
							<FaRegClock className="text-xl sm:text-2xl mt-0.5 sm:mt-[0.0625rem]" />
							<p className="text-lg sm:text-xl font-delius">
								{data.created_at.getHours()}:{data.created_at.getMinutes()}
							</p>
						</div>
					</div>
					<img
						src={`/${data.image}`}
						alt=""
						className="rounded-xl w-full h-[30vh] md:h-[35vh] lg:h-[40vh] xl:h-[45vh] 2xl:h-[50vh] min-[1920px]:h-[55vh]"
					/>
					<div
						className="text-lg whitespace-pre-line sm:text-xl md:text-2xl text-center sm:text-right font-vazir !leading-relaxed"
						dangerouslySetInnerHTML={{ __html: data.field }}
					></div>
				</div>
			</div>
		</>
	);
}
