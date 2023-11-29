import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import convertStringToHTML from "@/utils/stringToHtml";
const editorConfiguration = {
	toolbar: {
		items: ["undo", "redo", "|", "heading", "|", "bold", "italic", "|", "link"],
	},
	language: {
		ui: "en",
		content: "ar",
	},
};
export default function Editor({data,setData}) {

	return (
		<CKEditor
			editor={ClassicEditor}
			config={editorConfiguration}
			onReady={(editor) => {
				console.log("CKEditor5 React Component is ready to use!", editor);
			}}
			onChange={(event, editor) => {
				const textInput = editor.getData();
				console.log(textInput);
				setData({
					...data,
					field: parser(textInput),
				});
			}}
		/>
	);
}
function parser(data) {
	let field = convertStringToHTML(data);
	return field;
}
