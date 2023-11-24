export default function Misson_statement() {
  return (
    <div className="container min-w-[70vw] min-h-[40vh]">
      <div className="flex flex-col justify-center items-center pt-10">
        <span className="text-center self-center font-bold md:text-4xl sm:text-3xl text-2xl font-sans border border-l-0 border-t-0 border-b-[2px] pb-5 border-r-0  border-orange-700">
          بیانیه ماموریت
        </span>
      </div>
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center w-full pt-10 gap-10">
        <div className="lg:w-3/5 w-full">
          <img src="/mission-statement.jpg" alt="" className="rounded-2xl" />
        </div>
        <div className="h-1/2 w-full lg:w-2/5 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-6 2xl:gap-7 min-[2126]:gap-8  min-[2400px]:gap-10 font-vazir text-2xl leading-loose">
            <p className="!leading-loose text-justify  text-sm sm:text-base md:text-lg lg:text-lg min-[1175px]:text-lg min-[1300px]:text-lg min-[2126px]:text-xl min-[2400px]:text-3xl">
              ماموریت ما آموزش ، طراحی ، نظارت ، اجرا ، نصب و راه اندازی و تعمیر
              و نگهداشت کلیه ی پروژه های نفت ، گاز و پتروشیمی – آسانسور و پله
              برقی – فناوری اطلاعات با کیفیت بالا در محیطی سالم ، ایمن و مبتنی
              بر مدیریت بهینه ی منابع ، ارتقای سرمایه ها انسانی و کسب رضایت همه
              ی ذینفعان سازمانی می باشد .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
