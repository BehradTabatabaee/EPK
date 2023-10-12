export default function convertStringToHTML(htmlString) {
	const parser = new DOMParser();
	const html = parser.parseFromString(htmlString, "text/html");
	let text = "";
	let newtext = "";
	html.body.childNodes.forEach((e) => {
		text += e.innerHTML;
		newtext = text.replace(/&nbsp;/g, '\n')
	})
	return newtext;
}