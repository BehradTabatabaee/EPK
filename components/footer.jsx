import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
export default function Footer() {
	return (
		<>
			<footer className="bg-gray-900 mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 p-12 py-6 w-full">
				<div className="container min-w-[60vw] px-6 py-12 mx-auto">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
						<div className="sm:col-span-2">
							<h1 className="max-w-lg text-xl font-semibold tracking-tight xl:text-2xl text-white">
								عضویت در خبرنامه
							</h1>

							<div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
								<input
									id="email"
									type="text"
									className="px-4 py-2  border rounded-md bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
									placeholder="آدرس ایمیل"
								/>

								<button className="w-full px-6 py-2.5 text-lg font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
									عضویت
								</button>
							</div>
						</div>

						<div>
							<p className="font-semibold text-white">دسترسی سریع</p>

							<div className="flex flex-col items-start mt-5 space-y-2">
								<Link
									href="#"
									className=" transition-colors duration-300 text-gray-300  hover:text-blue-500"
								>
									صفحه اصلی
								</Link>
								<Link
									href="#"
									className="transition-colors duration-300 text-gray-300  hover:text-blue-500"
								>
									درباره ما
								</Link>
								<Link
									href="#"
									className=" transition-colors duration-300 text-gray-300  hover:text-blue-500"
								>
									کسب و کار
								</Link>
								<Link
									href="#"
									className=" transition-colors duration-300 text-gray-300  hover:text-blue-500"
								>
									رسانه ها
								</Link>
							</div>
						</div>

						<div>
							<p className="font-semibold text-white">دفتر اصلی</p>
							<div className="flex flex-col items-start mt-5 space-y-2">
								<p
									href="#"
									className=" transition-colors duration-300 text-gray-300"
								>
									آدرس : شهرستان نطنز، خیابان امام خمینی، مجتمع تجاری چهارده
									معصوم
								</p>
								<p
									href="#"
									className=" transition-colors duration-300 text-gray-300"
								>
									صندوق پستی : 65486-87616
								</p>
								<p
									href="#"
									className=" transition-colors duration-300 text-gray-300"
								>
									شماره تلفن : 9133623085-98+
								</p>
								<p
									href="#"
									className=" transition-colors duration-300 text-gray-300"
								>
									پست الکترونیکی : EPK@gmail.com
								</p>
							</div>
						</div>
					</div>

					<hr className="my-6 md:my-8 border-gray-700" />

					<div className="md:flex-row items-center md:justify-between flex gap-12 flex-col">
						<div>
							<Link
								href="#"
								className="text-white lg:text-2xl sm:text-lg md:text-xl text-md w-1/2"
							>
								تمامی حقوق این سایت متعلق به گروه اکسیر پویان کارافن می باشد
							</Link>
						</div>
						<div className="flex">
							<Link
								href="#"
								className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-500"
								aria-label="TwitterX"
							>
								<RiTwitterXFill className="text-2xl" />
							</Link>
							<Link
								href="#"
								className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-500"
								aria-label="Linkedin"
							>
								<AiFillLinkedin className="text-2xl" />
							</Link>
							<Link
								href="#"
								className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-500"
								aria-label="Instagram"
							>
								<BsInstagram className="text-2xl" />
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
