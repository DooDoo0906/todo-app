import TodoItems from "@/components/TodoItems";
import prisma from "@/db";
import { data } from "autoprefixer";
import Link from "next/link";
import { todo } from "node:test";

const getTodo = () => {
  return prisma.todo.findMany();
};

export default async function Home() {
  const todos = await getTodo();
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          href="/new"
          className="border border-s-slate-300 text-slate-300 px-2 py-1 rounded
          hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItems
            key={todo.id}
            id={todo.id}
            complete={todo.complete}
            title={todo.title}
          />
        ))}
      </ul>
    </>
  );
}
