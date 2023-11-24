export default function About() {
	return (
		<div className="lg:container max-w-screen min-w-screen lg:min-w-[70vw] p-1">
			<div className="justify-center p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 flex flex-col items-center gap-14 ">
				<div className="h-fit flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20 w-full 2xl:justify-center">
					<h1 className="text-lg sm:text-xl  md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold sm:w-2/3 w-full self-center  text-center font-sans border border-l-0 border-t-0 border-b-[2px] pb-5 border-r-0  border-orange-700">
						اکسیر پویان کارافن در یک نگاه
					</h1>
					<p className="text-xs  sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl !leading-loose font-vazir text-justify">
						شرکت اکسیر پویان کارافن با مسئولیت محدود در سال 1396 و پس از اخذ
						مجوز های لازم از مراجع ذیربط تاسیس گردید . این شرکت از بدل پیدایش
						برنامه ریزی لازم برای ایجاد زیر ساخت های مورد نیاز و تشکیل مراکز
						تامین نیاز های اجرایی اقدام کرد . فعالیت های شرکت در زمینه های
						مشاوره ، آموزش ، طراحی ، نظارت ، اجرا ، نصب و راه اندازی ، بهره
						برداری و تعمیر و نگهداشت درکلیه ی پروژه های حوزه نفت ، گاز و
						پتروشیمی ، فناوری اطلاعات ، آسانسور و پله برقی می باشد.
					</p>
				</div>
				<div className="w-full">
					<img src="/elevatormd.jpg" alt="laptop" className="w-full !aspect-video rounded-2xl"/>
				</div>
			</div>
		</div>
	);
}
