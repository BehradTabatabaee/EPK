export default function About() {
	return (
		<div className="h-[200vh] min-[281px]:h-[150vh] sm:h-[300vh] min-[767px]:h-[150vh] min-[844px]:h-[300vh] min-[896px]:h-[300vh] min-[914px]:h-[300vh] lg:h-[200vh] xl:h-[170vh] 2xl:h-screen justify-center p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 2xl:p-28 flex flex-col 2xl:flex-row items-center gap-14">
			<div className="h-fit flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20 w-full 2xl:w-1/2 2xl:justify-center">
				<h1 className="md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center 2xl:text-right font-sans">
					شرکت در یک نگاه
				</h1>
				<p className="md:text-xl lg:text-2xl 2xl:text-3xl !leading-loose font-vazir text-center 2xl:text-right">
					شرکت اکسیر پویان کارافن با مسئولیت محدود در سال 1396 و پس از اخذ مجوز
					های لازم از مراجع ذیربط تاسیس گردید . این شرکت از بدل پیدایش برنامه
					ریزی لازم برای ایجاد زیر ساخت های مورد نیاز و تشکیل مراکز تامین نیاز
					های اجرایی اقدام گرد . فعالیت های شرکت در زمینه های مشاوره ، آموزش ،
					طراحی ، نظارت ، اجرا ، نصب و راه اندازی ، بهره برداری و تعمیر و
					نگهداشت درکلیه ی پروژه های حوزه نفت ، گاز و پتروشیمی ، فناوری اطلاعات
					، آسانسور و پله برقی می باشد
				</p>
			</div>
			<div className="w-full 2xl:w-1/2 flex flex-col h-full gap-6">
				<div className="w-full h-1/3 bg-[url('/elevatormd.jpg')] rounded-2xl bg-cover bg-no-repeat"></div>
				<div className="w-full h-1/3 bg-[url('/elevatormd.jpg')] rounded-2xl bg-cover bg-no-repeat"></div>
				<div className="w-full h-1/3 bg-[url('/elevatormd.jpg')] rounded-2xl bg-cover bg-no-repeat"></div>
			</div>
		</div>
	);
}
