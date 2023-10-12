import { db } from "@/prisma/client";
import { Button } from "@/components/ui/button";
export default function Blog() {
	return (
		<>
			<div className="sm:hidden flex justify-center items-center pt-6">
				<span className="text-base font-sans">اخبار</span>
			</div>
			<div className="flex gap-10 flex-wrap pt-16 justify-center items-center p-5 m-auto w-3/4">
				<Mapper />
				<Mapper />
			</div>
		</>
	);
}
async function Mapper() {
	const data = await db.news.findMany();
	return data.map((e) => {
		return (
			<div className="justify-center items-center sm:justify-start sm:items-start gap-6 flex flex-col duration-300 delay-75 w-screen min-[1024px]:max-w-[33vw] min-[1440px]:max-w-[34vw] 2xl:max-w-[20vw] min-[1920px]:max-w-[15vw] rounded-2xl border-b-[2px] hover:border-transparent border-black/30 hover:shadow-2xl">
				<img src={e.image} alt="" className="rounded-t-2xl h-[25vh] w-full" />
				<h1 className="sm:text-lg lg:text-xl text-center sm:text-right font-sans px-4">
					{e.title}
				</h1>
				<div className="line-clamp-2 text-center sm:text-right sm:text-lg font-vazir px-4 max-w-[95%]" >
					{e.summary}
				</div>
				<a
					href={`/blog/${e.id}`}
					className="relative inline-block text-sm group duration-300 delay-75 sm:self-end m-5 mt-0"
				>
					<span className="relative z-10 block font-sans px-3 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
						<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
						<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
						<span className="relative">ادامه مطلب</span>
					</span>
					<span
						className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
						data-rounded="rounded-lg"
					></span>
				</a>
			</div>
		);
	});
}
