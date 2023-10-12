import { db } from "@/prisma/client";
export default async function GET(req, res) {
	//deleting all the data
	try {
		await db.user.deleteMany();
		// await db.supplier.deleteMany();
		await db.media.deleteMany();
		await db.comment.deleteMany();
		await db.certificate.deleteMany();
		await db.news.deleteMany();
		//crating users in DB
		await db.user.createMany({
			data: [
				{
					user_name: "smaEti",
					name: "Amin Ehterami",
					password: "123456789",
				},
				{
					user_name: "AliMah",
					name: "Ali Mahallati",
					password: "123456789",
				},
				{
					user_name: "Behrad",
					name: "behrad Tabatabaee",
					password: "123456789",
				},
			],
		});
		await db.comment.createMany({
			data: [
				{
					name: "احمد ذوقی",
					email: "ahmad@gmail.com",
					comment: "وای اینجا پارتیه ؟ وای ارشیا جونممممممممممممممم",
					is_seen: false,
				},
				{
					name: "پیشرو",
					email: "reza@gmail.com",
					comment: "مشکل داری ؟ مشکل داری ؟ بیناموس ما داریم زحمت میکشیم !!",
					is_seen: false,
				},
				{
					name: "احمد222222 ذوقی",
					email: "ahmad@gm222222ail.com",
					comment: "وای اینجاlol پارتیه ؟ وای ارشیا جونممممممممممممممم",
					is_seen: true,
				},
				{
					name: "پی222222شرو",
					email: "reza@gm2222ail.com",
					comment: "مشکل داری ؟ مشکل داری ؟lol بیناموس ما داریم زحمت میکشیم !!",
					is_seen: true,
				},
			],
		});
		await db.certificate.createMany({
			data: [
				{
					title: "گواهینامه اول",
					image: "certificate.jpg",
				},
				{
					title: "گواهینامه دوم",
					image: "certificate.jpg",
				},
			],
		});
		await db.media.createMany({
			data: [
				{
					title: "تصویر اول",
					image: "/1921860.jpg",
				},
				{
					title: "تصویر دوم",
					image: "/laptop.jpg",
				},
			],
		});
		return res.status(200).json("Your DB has been seeded Seccussfully!");
	} catch (error) {
		res.status(500).json("ERROR!! :", error);
	}
}
