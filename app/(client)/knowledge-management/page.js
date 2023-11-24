export default function Knowledge_management() {
  return (
    <div className="container min-w-[70vw] min-h-[42vh]">
      <div className="flex flex-col justify-center items-center pt-16">
            <span className="text-center self-center font-bold md:text-4xl sm:text-3xl text-2xl font-sans border border-l-0 border-t-0 border-b-[2px] pb-5 border-r-0  border-orange-700">
              مدیریت دانش
            </span>
	  </div>
      <div className="flex flex-col lg:flex-row-reverse justify-center w-full pt-16 gap-10">
        <div className="lg:w-3/5 w-full">
          <img src="/knowledge.png" alt="" className="rounded-2xl" />
        </div>
        <div className="h-1/2 w-full lg:w-2/5 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-6 2xl:gap-7 font-vazir text-2xl leading-loose">
            <p className="!leading-loose text-justify text-sm sm:text-base md:text-lg lg:text-sm min-[1175px]:text-base min-[1300px]:text-lg min-[2126px]:text-xl min-[2400px]:text-2xl">
              شرکت اکسیر پویان کارافن با توجه به اهمیت و ضرورت مدیریت دانش در
              فضای تخصصی کسب و کار خود ، طی سال های گذشته پروژه ی جامعی را برای
              طراحی و راه اندازی سیستم مدیریت دانش اجرا نموده است. <br />
              با وجود تمامی اقدامات انجام شده در این حوزه ما به این که برای
              تبدیل شدن به یک شرکت دانش محور، در ابتدای مسیر قرار داریم، آگاهیم.
              <br />
              بنابراین برنامه ها و اقدامات متعددی در گروه EPK برای نهادینه سازی
              سیستم مدیریت دانش و پایش ، بهبود و ارتقای مستمر آن با در نظر گرفتن
              ویژگی های سازمانی شرکت و اهداف مورد نظر برنامه ریزی شده و در حال
              انجام است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
