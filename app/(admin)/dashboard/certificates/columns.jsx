"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const columns = [
  {
    accessorKey: "id",
    header: "شناسه",
  },
  {
    accessorKey: "title",
    header: "عنوان",
  },
  {
    id: "show",
    cell: ({ row }) => {
      const certificate = row.original;

      return (
        <Dialog>
          <DialogTrigger asChild>
          <Button >نمایش</Button>
          </DialogTrigger>
          <DialogContent>
            <img src={certificate.image} alt="certificate_img" />
          </DialogContent>
        </Dialog>
      );
    },
  },
  {
    id: "delete",
    cell: ({ row }) => {
      const certificate = row.original;

      return (
        <Button
          variant="destructive"
          onClick={() => deleteCertificate(certificate.id)}
        >
          حذف
        </Button>
      );
    },
  },
];

async function deleteCertificate(id) {
  const response = await fetch(`/api/certificates/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  window.location.reload();
}
