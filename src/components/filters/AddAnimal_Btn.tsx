"use client";

import React, { useState } from "react";
import { Button, buttonVariants, Combobox } from "../ui";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Category, CategoryResponse_GET } from "@/types";
import toast from "react-hot-toast";
import { SelectImage } from "../SelectImage";

import { revalidatePath_server } from "@/actions";
import { useEdgeStore } from "@/lib/edgestore";
import { baseUrl } from "@/utils";
import { UploadingLoop } from "../icons";

interface Props extends React.ComponentProps<"button"> {
  allCategory: Category[];
}

interface FileWithPreview extends File {
  preview: string;
}

export const AddAnimal = ({ allCategory, ...props }: Props) => {
  const [name, setName] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const { edgestore } = useEdgeStore();
  const [file, setFile] = useState<FileWithPreview | null>(null);
  const [isCloseDialog, setIsCloseDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const comboboxItems = allCategory.map((item) => {
    return {
      value: item._id,
      label: item.name,
    };
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!selectedCategoryId) return toast.error("please select category");
      if (!file) return toast.error("please select image");

      // uploadImage
      const res = await edgestore.publicFiles.upload({ file });

      const req = await fetch(`${baseUrl}/animal`, {
        method: "POST",
        body: JSON.stringify({
          name,
          category: selectedCategoryId,
          image: res.url,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = (await req.json()) as CategoryResponse_GET;
      if (data.success) {
        toast.success("succfully added animal");
        revalidatePath_server("/");
        return setIsCloseDialog(false);
      }
      throw new Error("unable to add animal");
    } catch (error) {
      toast.error("unable to add animal");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog onOpenChange={setIsCloseDialog} open={isCloseDialog}>
      <DialogTrigger
        className={buttonVariants({
          variant: "default",
          className: "!rounded-full",
        })}
      >
        Add Animal
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Animal</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 py-4">
          <input
            type="text"
            placeholder="Animal Name"
            className="input-items"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Combobox
            frameworks={comboboxItems}
            value={selectedCategoryId}
            setValue={setSelectedCategoryId}
          />

          <SelectImage file={file} setFile={setFile} />
          <Button
            type="submit"
            className="input-items inline-flex items-center justify-center cursor-pointer rounded-lg"
          >
            {isLoading ? <UploadingLoop /> : "Add"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
