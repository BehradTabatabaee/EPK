"use client"
import MyMap from "@/components/map";
export default function Contact() {
	return (
		<div className="max-w-screen flex justify-center items-center min-h-[65vh]">
			<div className="mt-24 w-3/4 flex-col lg:flex-row flex h-full justify-center gap-10 items-center">
				<div className="w-full lg:w-2/5">
					<h1 className="!leading-loose text-lg lg:text-xl xl:text-2xl font-semibold font-sans">دفتر مرکزی</h1>
					<div className="!leading-loose text-sm lg:text-lg xl:text-xl flex flex-col items-start mt-5 space-y-2 font-vazir">
						<p href="#" className="!leading-loose transition-colors duration-300">
							آدرس : شهرستان نطنز، خیابان امام خمینی، مجتمع تجاری چهارده معصوم
						</p>
						<p href="#" className="!leading-loose transition-colors duration-300">
							صندوق پستی : 65486-87616
						</p>
						<p href="#" className="!leading-loose transition-colors duration-300">
							شماره تلفن : 9133623085-98+
						</p>
						<p href="#" className="!leading-loose transition-colors duration-300">
							پست الکترونیکی : EPK@gmail.com
						</p>
					</div>
				</div>
				<div className="w-full lg:w-3/5 h-full">
					<MyMap/>
				</div>
			</div>
		</div>
	);
}
