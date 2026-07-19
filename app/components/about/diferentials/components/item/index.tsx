import { BadgeCheck } from 'lucide-react';

export default function Item({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
      <BadgeCheck className="mt-1 text-secondary shrink-0" />
      <p className="leading-7 text-stone-600">{text}</p>
    </div>
  );
}