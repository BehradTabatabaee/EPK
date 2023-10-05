"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import convertStringToHTML from "@/utils/stringToHtml";
export default function CreateBlog() {
	let finalData;
	return (
		<>
			<Card className="m-auto mt-52">
				<CardHeader>
					<CardTitle className="mb-3 font-sans">اضافه کردن مقاله</CardTitle>
					<CardDescription className="font-sans">
						لطفا مقاله ی خود را بنویسید .
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-3">
					<div className="App w-[50vw] font-vazir">
						<CKEditor
							editor={ClassicEditor}
							onReady={(editor) => {
								console.log(
									"CKEditor5 React Component is ready to use!",
									editor
								);
							}}
							onChange={(event, editor) => {
								const data = editor.getData();
								finalData = data;
								console.log({ event, editor, data });
							}}
						/>
					</div>
					<Button
						className="text-base w-28 font-sans"
						onClick={() => {
							console.log(convertStringToHTML(finalData));
						}}
					>
						اضافه کردن
					</Button>
				</CardContent>

				<CardFooter></CardFooter>
			</Card>
		</>
	);
}
