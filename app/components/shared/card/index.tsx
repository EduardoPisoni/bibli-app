export default function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-xl transition">
      <div className="text-primary-700 mb-6">{icon}</div>

      <h3 className="font-bold text-xl mb-3">{title}</h3>

      <p className="text-stone-600 leading-7">{text}</p>
    </div>
  );
}
