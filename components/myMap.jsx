import React from "react";
import dynamic from "next/dynamic";

function MyMap() {
	const Map = React.useMemo(
		() =>
			dynamic(
				() => import("./map"), // replace '@components/map' with your component's location
				{
					// loading: () => <p>A map is loading</p>,
					ssr: false, // This line is important. It's what prevents server-side render
				}
			),
		[
			/* list variables which should trigger a re-render here */
		]
	);
	return <Map />;
}

export default MyMap;
