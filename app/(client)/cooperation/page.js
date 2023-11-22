export default function Cooperation() {
	return (
		<div className="container min-w-[70vw]">
			<div className="flex flex-col justify-center items-center pt-10"></div>
			<div className="flex flex-col lg:flex-row-reverse justify-center w-full mt-20 gap-10">
				<div className="w-full">
					<img src="handshake.jpg" alt="" className="rounded-2xl" />
				</div>
				<div className="h-1/2 w-full lg:w-1/2 flex flex-col items-center justify-center">
					<div className="flex flex-col gap-6 2xl:gap-7 min-[2126]:gap-8  min-[2400px]:gap-10 font-vazir text-2xl leading-loose">
						<span className="text-center font-bold md:text-4xl sm:text-3xl text-2xl font-sans">
							درخواست همکاری
						</span>
						<p className="!leading-loose text-center text-sm sm:text-base md:text-lg lg:text-sm min-[1175px]:text-base min-[1300px]:text-lg min-[2126px]:text-xl min-[2400px]:text-2xl">
							شرکت اکسیر پویان کارافن، همواره در تلاش است تا با استفاده از توانایی
							های افراد ماهر و خلاق، بهترین خدمات را ارائه دهد.<br/> ما باور داریم که
							موفقیت ما نتیجه تلاش و همکاری تیمی است که با هدف مشترک، به سمت رشد
							و پیشرفت حرکت می کند. <br/>ما در اکسیر پویان کارافن، به دنبال افرادی
							هستیم که علاقه مند به یادگیری، پیشرفت و کسب تجربیات جدید هستند.
                            <br/>
							اگر شما جزو این افراد هستید و به دنبال فرصتی برای بهره گیری از
							توانایی های خود در یک محیط کاری حرفه ای هستید، ما خوشحال خواهیم شد
							که شما را در تیم خود داشته باشیم. برای درخواست همکاری، می توانید از طریق ایمیل
                            <span className="font-bold font-delius"> EPK@gmail.com </span>
                            با ما در ارتباط باشید.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
