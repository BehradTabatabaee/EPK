"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import UploadForm from "@/components/adminDashboard/UploadForm";
import { useState } from "react";
const editorConfiguration = {
	toolbar: {
		items: ["undo", "redo"],
	},
	language: {
		ui: "en",
		content: "ar",
	},
};
export default function CreateBlog() {
	const [data, setData] = useState({
		title: "",
		text: "",
		image: "",
	});
	return (
		<>
			<Card className="m-auto overflow-y-scroll sm:mt-2 mt-10">
				<CardHeader>
					<CardTitle className="mb-3 font-sans">اضافه کردن مقاله</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-2">
					<div className="App w-[50vw] font-vazir flex flex-col gap-5">
						<div className="flex flex-col gap-3">
							<label htmlFor="title" className="font-sans w-full">
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
								className="font-vazir border-2"
							/>
						</div>
						<div className="flex flex-col gap-3">
							<label htmlFor="title" className="font-sans w-full">
								متن :
							</label>
							<CKEditor
								editor={ClassicEditor}
								config={editorConfiguration}
								onReady={(editor) => {
									console.log(
										"CKEditor5 React Component is ready to use!",
										editor
									);
								}}
								onChange={(event, editor) => {
									const textInput = editor.getData();
									setData({
										...data,
										text: textInput,
									});
								}}
							/>
						</div>
						<div className="flex flex-col gap-3">
							<label htmlFor="title" className="font-sans w-full">
								عکس :
							</label>
							<UploadForm Data={data} SetData={setData} />
						</div>
					</div>
					<Button
						className="text-base w-28 font-sans"
						onClick={() => {
							// ersal data be database
						}}
					>
						اضافه کردن
					</Button>
				</CardContent>
			</Card>
		</>
	);
}
