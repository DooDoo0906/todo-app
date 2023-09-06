import prisma from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

const createTodo = async (data: FormData) => {
  "use server"

  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }
  await prisma.todo.create({ data: { title: title, complete: false } });
  redirect("/");
};

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-2 justify-end">
          <button
            type="submit"
            className="border rounded border-slate-300 hover:border-slate-100 p-2"
          >
            Create
          </button>
          <Link
            className=" bg-red-400 border rounded border-slate-300 hover:border-slate-100 p-2"
            href=".."
          >
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
}
