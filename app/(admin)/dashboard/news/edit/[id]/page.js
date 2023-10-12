import { db } from "@/prisma/client";
import EditBlog from "./EditBlog";
export default async function page({params}){
	const foundBlog = await db.news.findUnique({
		where: {
		  id: parseInt(params.id),
		},
	  });
	return(<EditBlog blogData={foundBlog}/>)
}