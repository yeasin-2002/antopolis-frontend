"use server";

import { revalidatePath } from "next/cache";

export const revalidatePath_server = async (path: string) => {
  return await revalidatePath(path);
};
