import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

export default async function dashboard() {
    
    const session = await getServerSession(authOptions)
    console.log(session.user);

	return (
		<div>

		<div>{session.user.name}</div>


		</div>
	);
}
