import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

export default async function dashboard() {
    
    const session = await getServerSession(authOptions)
    if(session){
        console.log("logged in")
    }else{
        console.log("not login")
    }

	return (
		<div>

		<div>ahmad</div>


		</div>
	);
}
