"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function create() {
    const router = useRouter();
  const [data, setData] = useState({
    name: "",
    user_name: "",
    password: "",
  });
  return (
    <div className="sm:w-full lg:w-5/12 container py-10 ">
      <Card>
        <CardHeader>
          <CardTitle>اضافه کردن کاربر</CardTitle>
          <CardDescription>همه های قسمت ها الزامی هستند.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <label htmlFor="user_name">نام کاربری :</label>
          <Input
            autoComplete="off"
            type="text"
            name="user_name"
            defaultValue={data.user_name}
            onChange={(e) =>
              setData({
                ...data,
                user_name: e.target.value,
              })
            }
          />
          <label htmlFor="name">نام و نام خانوادگی :</label>
          <Input
            autoComplete="off"
            type="text"
            name="name"
            defaultValue={data.name}
            onChange={(e) =>
              setData({
                ...data,
                name: e.target.value,
              })
            }
          />
          <label htmlFor="password">رمز عبور : </label>
          <Input
            autoComplete="off"
            type="text"
            name="password"
            defaultValue={data.password}
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
          />
          <Button className="text-lg" onClick={() =>{ createUser(data);window.location.href = "/dashboard/users"}}>
            اضافه کردن
          </Button>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
async function createUser(data) {
    const response = await fetch(`/api/users/create`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    const backeddata = await response.json();
    console.log(backeddata)  
}
