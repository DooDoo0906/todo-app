type TodoProps = {
  id: string;
  title: string;
  complete: boolean;
};
export default function TodoItems({ id, title, complete }: TodoProps) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox" className="cursor-pointer peer" />
      <label
        htmlFor={id}
        className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
