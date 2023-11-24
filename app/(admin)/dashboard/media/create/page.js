"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import UploadForm from "@/components/adminDashboard/UploadForm";
export default function create() {
	const [data, setData] = useState({
		title: "",
		image: "",
	});
	return (
		<div className="sm:w-full lg:w-5/12 container py-16 ">
			<Card>
				<CardHeader>
					<CardTitle className="font-sans">اضافه کردن تصویر و ویدیو </CardTitle>
					<CardDescription className="font-sans">
						همه ی قسمت ها الزامی هستند.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-3">
					<label htmlFor="title" className="font-sans">
						عنوان :
					</label>
					<Input
						autoComplete="off"
						type="text"
						name="title"
						defaultValue={data.title}
						onChange={(e) =>
							setData({
								...data,
								title: e.target.value,
							})
						}
						className="font-vazir"
					/>
					<UploadForm Data={data} SetData={setData} />
					<Button
						className="text-lg font-sans"
						onClick={() => {
							createMedia(data);
						}}
					>
						اضافه کردن
					</Button>
				</CardContent>
				<CardFooter></CardFooter>
			</Card>
		</div>
	);
}
async function createMedia(data) {
	const response = await fetch(`/api/media/create`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
	const backeddata = await response.json();
	return backeddata;
}
