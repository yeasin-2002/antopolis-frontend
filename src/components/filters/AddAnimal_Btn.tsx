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
import { Category } from "@/types";
import { SelectImage } from "../SelectImage";

interface Props extends React.ComponentProps<"button"> {
  allCategory: Category[];
}

interface FileWithPreview extends File {
  preview: string;
}

export const AddAnimal = ({ allCategory, ...props }: Props) => {
  const [name, setName] = useState("");
  const [file, setFile] = useState<FileWithPreview | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const comboboxItems = allCategory.map((item) => {
    return {
      value: item._id,
      label: item.name,
    };
  });

  return (
    <Dialog>
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
          <DialogDescription className="space-y-5 py-4">
            <input
              type="text"
              placeholder="Animal Name"
              className="input-items"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              Add
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
