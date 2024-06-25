"use client";

import React, { useState } from "react";
import { Button, buttonVariants } from "../ui";

import { revalidatePath_server } from "@/actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CategoryResponse } from "@/types";
import { baseUrl } from "@/utils";
import toast from "react-hot-toast";

interface Props extends React.ComponentProps<"button"> {}

export const AddCategory = ({ ...props }: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const name = (e.currentTarget[0] as HTMLInputElement).value;
      console.log("🚀 ~ handleSubmit ~ name:", name);
      const req = await fetch(`${baseUrl}/category`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      const data = (await req.json()) as CategoryResponse;
      if (data.success) {
        console.log("🚀 ~ handleSubmit ~ data:", data);
        toast.success("added category");
        revalidatePath_server("/");
        setIsDialogOpen(false);
      }
      throw new Error("unable to add category");
    } catch (error) {
      toast.error("unable to add category");
    }
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
          <DialogTitle>Add Category</DialogTitle>
          <form className="space-y-5 py-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Animal Name"
              className="input-items"
            />
            <Button
              type="submit"
              className="input-items inline-flex items-center justify-center cursor-pointer rounded-lg"
            >
              Add
            </Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
