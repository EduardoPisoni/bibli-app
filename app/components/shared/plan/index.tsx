import {
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

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
        ? "bg-primary-600 text-white scale-105 shadow-xl"
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

      <Link
        href="/contato"
        className={`mt-10 block w-full py-3 rounded-xl font-semibold text-center ${featured
          ? "bg-white text-primary-600"
          : "bg-primary-600 text-white"
          }`}
      >
        Solicitar proposta
      </Link>
    </div>
  );
}