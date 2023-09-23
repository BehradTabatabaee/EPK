"use client";
import { useState } from "react";
export default function Form() {
	let [form, setForm] = useState({ userName: "", email: "", message: "" });
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
				<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white font-sans">
					نظرات، پیشنهادات و انتقادات
				</h2>
				<p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl font-vazir">
					گروه اکسیر پویان کارافن آماده شنیدن پیشنهادات و انتقادات شماست
				</p>
				<form action="#" className="space-y-8">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 font-sans"
						>
							نام و نام خانوادگی
						</label>
						<input
							type="name"
							id="name"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light font-vazir"
							placeholder="علی حسینی"
							onChange={(e) => {
								setForm({ ...form, userName: e.target.value });
							}}
							required
						/>
					</div>
					<div>
						<label
							htmlFor="subject"
							className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 font-sans"
						>
							پست الکترونیکی
						</label>
						<input
							type="email"
							id="email"
							className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light font-delius"
							placeholder="example@gmail.com"
							onChange={(e) => {
								setForm({ ...form, email: e.target.value });
							}}
							required
						/>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 font-sans"
						>
							پیام
						</label>
						<textarea
							id="message"
							rows="6"
							className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 font-vazir"
							placeholder="پیام خود را وارد کنید ..."
							onChange={(e) => {
								setForm({ ...form, message: e.target.value });
							}}
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full px-6 py-2.5 text-lg font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto focus:outline-none bg-gray-700 rounded-lg hover:bg-gray-900 focus:ring focus:ring-gray-300 focus:ring-opacity-80 font-sans"
						onClick={() => {
							addFeedBack(form);
						}}
					>
						ارسال
					</button>
				</form>
			</div>
		</section>
	);
}
const addFeedBack = (form) => {
	console.log(form);
	fetch("/api/comments/create", {
		method: "POST",
		body: JSON.stringify({
			name: form.userName,
			email: form.email,
			comment: form.message,
		}),
		headers: {
			"content-type": "application/json",
		},
	}).catch((e) => console.log(e));
};
