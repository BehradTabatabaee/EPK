import React from "react";
import dynamic from "next/dynamic";

function MyEditor({data,setData}) {
	const Editor = React.useMemo(
		() =>
			dynamic(
				() => import("./editor"), // replace '@components/Editor' with your component's location
				{
					// loading: () => <p>A Editor is loading</p>,
					ssr: false, // This line is important. It's what prevents server-side render
				}
			),
		[
			/* list variables which should trigger a re-render here */
		]
	);
	return <Editor  data={data} setData={setData}/>;
}

export default MyEditor;
