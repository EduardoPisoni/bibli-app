import {
  CheckCircle,
} from "lucide-react";

export default function Plan({
  title,
  items,
  featured,
}: {
  title: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 ${featured
        ? "bg-violet-700 text-white scale-105 shadow-xl"
        : "bg-white"
        }`}
    >
      <h3 className="text-2xl font-bold mb-8">{title}</h3>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle size={18} />
            {item}
          </li>
        ))}
      </ul>

      <button
        className={`mt-10 w-full py-3 rounded-xl font-semibold ${featured
          ? "bg-white text-violet-700"
          : "bg-violet-700 text-white"
          }`}
      >
        Solicitar proposta
      </button>
    </div>
  );
}