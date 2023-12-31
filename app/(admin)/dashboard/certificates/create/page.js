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

export default function create() {
  const [data, setData] = useState({
    title: "",
    image: "",
  });
  return (
    <div className="sm:w-full lg:w-5/12 container py-10 ">
      <Card>
        <CardHeader>
          <CardTitle className="font-sans">اضافه کردن گواهینامه</CardTitle>
          <CardDescription className="font-sans">
            همه ی قسمت ها الزامی هستند.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <label htmlFor="title" className="font-sans">
            عنوان :
          </label>
          <Input
            autoComplete="off"
            type="text"
            name="title"
            defaultValue={data.title}
            onChange={(e) =>
              setData({
                ...data,
                title: e.target.value,
              })
            }
            className="font-vazir"
          />
          <label htmlFor="image" className="font-sans">
            لینک تصویر :
          </label>
          <Input
            autoComplete="off"
            type="text"
            name="image"
            defaultValue={data.image}
            onChange={(e) =>
              setData({
                ...data,
                image : e.target.value,
              })
            }
            className="font-vazir"
          />
          <Button
            className="text-lg font-sans"
            onClick={() => {
              createCertificate(data);
              location.href = "/dashboard/users";
            }}
          >
            اضافه کردن
          </Button>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
async function createCertificate(data) {
  const response = await fetch(`/api/certificates/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const backeddata = await response.json();
  return backeddata;
}
