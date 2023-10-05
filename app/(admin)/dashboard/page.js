import { db } from "@/prisma/client";
export default async function dashboard() {
	const comment = await db.comment.findMany({ where: { is_seen: false } });
	return (
		<section className="w-full h-full overflow-hidden ">
			<img src="/adminPanel2.jpg" className="w-[100vw] h-[100vh]" />
			<div className="lg:hidden absolute text-center items-center right-[5%] sm:right-[25%] md:right-[35%] top-20">
				<h2 className="text-lg text-black font-light font-vazir">
					نظرات و پیشنهاد های خوانده نشده : {comment.length}
				</h2>
			</div>
		</section>
	);
}
