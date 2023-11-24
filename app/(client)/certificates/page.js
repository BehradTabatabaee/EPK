import { db } from "@/prisma/client";
export default async function Certificates() {
	return (
		<>
			<div className="sm:hidden flex justify-center items-center pt-6">
				<span className="text-base font-sans">گواهینامه ها و افتخارات</span>
			</div>
			<div className="flex gap-20 flex-wrap pt-16 justify-center items-center p-5">
				<Mapper />

			</div>
		</>
	);
}
async function Mapper() {
	const data = await db.certificate.findMany();
	return data.map((e) => {
		return (
			<div className="justify-center items-center gap-6 flex flex-col w-fit rounded-2xl shadow-2xl p-12">
				<img src={e.image} alt="" className="rounded-lg h-[40vh]" />
				<h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-sans">
					{e.title}
				</h1>
			</div>
		);
	});
}
