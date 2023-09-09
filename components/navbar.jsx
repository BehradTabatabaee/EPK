"use client";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
export default function NavBar() {
	return (
		<>
			<div className="flex flex-row gap-4 justify-between container">
				{/* logo kar darad */}
				<Link href={"/"}>
					<img
						src="second-logo.png"
						alt="logo"
						className="w-16 my-1 inline-block"
					/>
				</Link>
				<NavigationMenu className="flex pb-2">
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>ارتباط با ما</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="w-[50vw] text-right text-md p-3 flex flex-row-reverse flex-wrap">
									<div className="flex flex-col">
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-60 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												اطلاعات تماس
											</li>
										</Link>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-60 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												ارسال نظرات ، پیشنهادات و انتقادات
											</li>
										</Link>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-60 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												درخواست همکاری
											</li>
										</Link>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-60 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												لیست تامین کنندگان
											</li>
										</Link>
									</div>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>رسانه ها</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="w-[50vw] text-right text-md p-3 flex flex-row-reverse flex-wrap">
									<div className="flex flex-col">
										<span className="p-4 text-slate-600 text-md">
											انتشارات و مقاله ها
										</span>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												حوزه نفت
											</li>
										</Link>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												حوزه فناوری
											</li>
										</Link>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												حوزه آسانسور
											</li>
										</Link>
									</div>
									<div className="flex flex-col">
										<span className="p-4 text-slate-600 text-md">
											ارتباط رسانه ای
										</span>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												تصاویر و ویدیوها
											</li>
										</Link>
									</div>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>کسب و کار</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="w-[50vw] text-right text-md p-3 flex flex-row-reverse flex-wrap">
									<div className="flex flex-col">
										<span className="p-4 text-slate-600 text-md">
											حوزه نفت ، گاز و پتروشیمی
										</span>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												بالادستی
											</li>
										</Link>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												پایین دستی
											</li>
										</Link>
									</div>
									<div className="flex flex-col">
										<span className="p-4 text-slate-600 text-md">
											حوزه فناوری اطلاعات
										</span>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												گروه فانوس
											</li>
										</Link>
									</div>
									<div className="flex flex-col">
										<span className="p-4 text-slate-600 text-md">
											حوزه آسانسور ، پله برقی و بالابر های صنعتی
										</span>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												گروه آسانسور
											</li>
										</Link>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												گروه پله برقی
											</li>
										</Link>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												گروه بالابر های صنعتی
											</li>
										</Link>
									</div>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>درباره ما</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="flex flex-row-reverse gap-2 justify-start w-[50vw] text-right text-md p-4 flex-wrap">
									<div className="flex flex-col">
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												شرکت در یک نگاه
											</li>
										</Link>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												ارزش های محوری
											</li>
										</Link>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												HSEQ
											</li>
										</Link>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												سرمایه انسانی
											</li>
										</Link>
									</div>
									<div className="flex flex-col">
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												مدیریت دانش
											</li>
										</Link>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 !text-sm rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												چشم انداز، اهداف و استراتژی
											</li>
										</Link>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												بیانیه ماموریت
											</li>
										</Link>
										<Link href={"/"}>
											<li className="inline-block select-none space-y-1 rounded-md w-48 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#574bd1]/25 cursor-pointer">
												گواهینامه و افتخارات
											</li>
										</Link>
									</div>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<div className="flex justify-center items-center gap-2 pb-4">
					<Link href={"/"}>
						<RiTwitterXLine className="text-xl text-white" />
					</Link>
					<Link href={"/"}>
						<AiFillLinkedin className="text-2xl text-white" />
					</Link>
					<Link href={"/"}>
						<AiOutlineInstagram className="text-2xl text-white" />
					</Link>
				</div>
			</div>
		</>
	);
}
