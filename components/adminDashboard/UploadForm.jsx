"use client";
import { useState } from "react";
import { Button } from "../ui/button";
export default function UploadForm({ Data, SetData }) {
	const [image, setImage] = useState(null);
	const [createObjectURL, setCreateObjectURL] = useState(null);

	const uploadToClient = (event) => {
		if (event.target.files && event.target.files[0]) {
			const i = event.target.files[0];
			setImage(i);
			setCreateObjectURL(URL.createObjectURL(i));
			SetData({ ...Data, image: "uploads/" + i.name });
		}
	};

	const uploadToServer = async (event) => {
		const body = new FormData();
		// console.log("file", image)
		body.append("file", image);
		const response = await fetch("/api/upload", {
			method: "POST",
			body,
		});
	};

	return (
		<div>
			<div>
				<img src={createObjectURL} className="w-5/12 aspect-video" />
				<h4 className="font-sans p-2">انتخاب تصویر : </h4>
				<input type="file" name="myImage" onChange={uploadToClient} />
				<Button
					variant="outline"
					className="btn btn-primary font-sans hover:bg-green-300 border-black sm:mt-0 mt-2"
					type="submit"
					onClick={uploadToServer}
				>
					ارسال به سرور
				</Button>
			</div>
		</div>
	);
}
