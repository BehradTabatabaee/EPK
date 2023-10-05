export default function convertStringToHTML(htmlString) {
	const parser = new DOMParser();
	const html = parser.parseFromString(htmlString, "text/html");

	return html.body.firstElementChild;
}
