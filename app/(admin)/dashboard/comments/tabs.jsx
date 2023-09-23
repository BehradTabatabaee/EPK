"use client"
import { columns } from "./columns";
import {columns2} from "./columns2"
import { DataTable } from "./data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DirectionProvider } from '@radix-ui/react-direction';

export default function CommentTabs(props) {
  return (
        <DirectionProvider dir="rtl">
      <Tabs defaultValue="unseen" className="container flex flex-col justify-center ">
        <TabsList>
          <TabsTrigger value="unseen">خوانده نشده : <p className="text-red-600">{props.unseenData.length}</p></TabsTrigger>
          <TabsTrigger value="seen">خوانده شده</TabsTrigger>
        </TabsList>
        <TabsContent value="unseen">
          <DataTable columns={columns} data={props.unseenData} />
        </TabsContent>
        <TabsContent value="seen"><DataTable columns={columns2} data={props.seenData} /></TabsContent>
      </Tabs>
      </DirectionProvider>
  );
}

