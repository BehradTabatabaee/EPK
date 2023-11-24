"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import UploadForm from "@/components/adminDashboard/UploadForm";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BiSolidError } from "react-icons/bi";
import convertStringToHTML from "@/utils/stringToHtml";
const editorConfiguration = {
  toolbar: {
    items: ["undo", "redo", "|", "heading", "|", "bold", "italic", "|", "link"],
  },
  language: {
    ui: "en",
    content: "ar",
  },
};
export default function EditBlog({ blogData }) {
  const [data, setData] = useState({
    title: blogData.title,
    image: blogData.image,
    field: blogData.field,
    summary: blogData.summary,
  });
  const [isValid, setIsValid] = useState(0);
// console.log(data)
  return (
    <>
      <div className="flex flex-wrap h-screen w-screen overflow-y-scroll">
        <section className="sm:w-full flex flex-col gap-4 lg:w-5/12 container min-w-full max-w-[100vw] pt-20 ">
          <Card className="m-auto overflow-y-scroll sm:mt-2 mt-10">
            {setModal(isValid)}
            <CardHeader>
              <CardTitle className="mb-3 font-sans">اضافه کردن مقاله</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="App w-[50vw] font-vazir flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <label htmlFor="title" className="font-sans w-full">
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
                    className="font-vazir border-2"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="title" className="font-sans w-full">
                    متن :
                  </label>
                  <CKEditor
                    editor={ClassicEditor}
                    config={editorConfiguration}
                    onReady={(editor) => {
                      editor.setData(data.field);
                    }}
                    onChange={(event, editor) => {
                      const textInput = editor.getData();
                      setData({
                        ...data,
                        field: parser(textInput),
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="title" className="font-sans w-full">
                    خلاصه خبر :
                  </label>
                  <textarea
                    name="summary"
                    id="summary"
                    cols="30"
                    rows="10"
                    className="border-2 p-4"
                    onChange={(e) =>
                      setData({
                        ...data,
                        summary: e.target.value,
                      })
                    }
                  >
                    {data.summary}
                  </textarea>
                </div>
                <label htmlFor="image">عکس :</label>
                <img src={`/${data.image}`} id="image" className="w-5/12 aspect-video" />
                <div className="flex flex-col gap-3">
                  <label htmlFor="image" className="font-sans w-full">
                    عکس جدید:
                  </label>
                  <UploadForm Data={data} SetData={setData} />
                </div>
              </div>
              <Button
                className="text-base w-40 font-sans"
                onClick={() => {
                  let response = updateNews(data,blogData.id);
                  response.then((e) => {
                    if (e.message) {
                      setIsValid(1);
                    } else {
                      setIsValid(0);
                    //   location.href = "/dashboard/news";
                    }
                  });
                }}
              >
                ویرایش کردن
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
function parser(data) {
  let field = convertStringToHTML(data);
  return field;
}
async function updateNews(data,id) {
    console.log(data)
  const response = await fetch(`/api/news/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const backeddata = await response.json();
  console.log(backeddata)
  return backeddata;
}
function setModal(valid) {
  if (valid) {
    return (
      <>
        <Alert className="h-42 w-full z-50 text-right border-red-500 mb-12">
          <BiSolidError className=" w-6 h-6 mt-1" />
          <AlertTitle className="font-sans mt-3 text-red-600">خطا !</AlertTitle>
          <AlertDescription className="font-vazir mt-8">
            تمامی فیلد ها باید پر شده باشند.
          </AlertDescription>
        </Alert>
      </>
    );
  }
}
