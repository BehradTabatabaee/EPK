"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BiSolidError } from "react-icons/bi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function create() {
	const router = useRouter();
	const [data, setData] = useState({
		name: "",
		user_name: "",
		password: "",
	});
	const [isValid, setIsValid] = useState(0);
	return (
		<>
			<div className="flex flex-wrap h-screen w-screen overflow-y-scroll">
				<section className="sm:w-full flex flex-col gap-4 lg:w-5/12 container pt-20 ">
					{setModal(isValid)}
					<Card>
						<CardHeader>
							<CardTitle>اضافه کردن کاربر</CardTitle>
							<CardDescription>همه های قسمت ها الزامی هستند.</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col gap-3">
							<label htmlFor="user_name">نام کاربری :</label>
							<Input
								autoComplete="off"
								type="text"
								name="user_name"
								defaultValue={data.user_name}
								onChange={(e) =>
									setData({
										...data,
										user_name: e.target.value,
									})
								}
								required
								title="لطفا فیلد را پر کنید"
							/>
							<label htmlFor="name">نام و نام خانوادگی :</label>
							<Input
								autoComplete="off"
								type="text"
								name="name"
								defaultValue={data.name}
								onChange={(e) =>
									setData({
										...data,
										name: e.target.value,
									})
								}
								required
								title="لطفا فیلد را پر کنید"
							/>
							<label htmlFor="password">رمز عبور : </label>
							<Input
								autoComplete="off"
								type="text"
								name="password"
								defaultValue={data.password}
								onChange={(e) =>
									setData({
										...data,
										password: e.target.value,
									})
								}
								required
								title="لطفا فیلد را پر کنید"
							/>
							<Button
								className="text-lg"
								onClick={() => {
									let response = createUser(data);
									response.then((e) => {
										if (e.message) {
											setIsValid(1);
										} else {
											setIsValid(0);
											location.href = "/dashboard/users";
										}
									});
								}}
							>
								اضافه کردن
							</Button>
						</CardContent>
						<CardFooter></CardFooter>
					</Card>
				</section>
			</div>
		</>
	);
}
async function createUser(data) {
	const response = await fetch(`/api/users/create`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
	const backeddata = await response.json();
	console.log(backeddata);
	return backeddata;
}
function setModal(valid) {
	if (valid) {
		return (
			<>
				<Alert className="h-42 w-full z-50 text-right border-red-500">
					<BiSolidError className=" w-6 h-6 mt-1" />
					<AlertTitle className="font-sans mt-3 text-red-600">خطا !</AlertTitle>
					<AlertDescription className="font-vazir mt-8">
						تمامی فیلد ها باید پر شده باشند.
					</AlertDescription>
				</Alert>
			</>
		);
	}
}
