"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function UserCard({ props }) {
  const [data, setData] = useState({
    name: props.name,
    user_name: props.user_name,
    password: props.password,
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>ویرایش کاربر {props.name}</CardTitle>
        <CardDescription>
          در این قسمت میتوانید کاربر را ویرایش کنید
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <label htmlFor="user_name">نام کاربری :</label>
        <Input
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
        <Button className="text-lg" onClick={
            () => editUser(props.id,data)
        }>ویرایش</Button>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}

async function editUser(id,data){
const response = await fetch(`/api/users/${id}`,{
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
const backeddata = await response.json();
window.location.reload();
}