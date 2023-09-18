"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import { Button } from "@/components/ui/button";
export default function DesktopDropDown() {
  const router = useRouter();
  return (
    <>
      <div className="absolute w-3/12 xl:w-1/6 h-screen bg-[#3d4e58] lg:block hidden right-0">
        <nav className="flex flex-col gap-2 w-full px-4">
          <div>
            <Link href={"/"}>
              <img src="second-logo.png" alt="logo" className="w-20 my-3" />
            </Link>
            <h1 className="text-xl text-white">
              پنل مدیریت سایت اکسیرپویان کارافن
            </h1>
            <hr className="text-white my-3" />
          </div>
          <NavLink href="/" text="مدیریت کاربران" />
          <NavLink href="/" text="مدیریت گواهینامه ها و افتخارات" />
          <NavLink href="/" text="مدیریت مقالات" />
          <NavLink href="/" text="مدیریت نظرات و پیشنهادات" />
          <NavLink href="/" text="مدیریت درخواست های همکاری" />
          <NavLink href="/" text="مدیریت تامین کنندگان" />
          <NavLink href="/" text="مدیریت تصاویر و ویدیو ها" />
          <hr />
          <Button
            variant="destructive"
            onClick={() => {
              signOut({ redirect: false }).then(() => {
                router.push("/"); // Redirect to the home page after signing out
              });
            }}
          >
            خروج
          </Button>
        </nav>
      </div>
    </>
  );
}

function NavLink(props) {
  return (
    <Link
      className="hover:bg-white hover:bg-opacity-60 w-full rounded-lg p-3 text-white hover:text-black text-md xl:text-lg "
      href={props?.href}
    >
      {props?.text}
    </Link>
  );
}
