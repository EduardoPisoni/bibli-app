import React from 'react';

export default function Step({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-64 rounded-2xl border border-violet-100 bg-violet-50 p-4">
      <h3 className="font-bold text-violet-700">{title}</h3>

      <p className="mt-2 text-sm leading-7 text-stone-600">
        {children}
      </p>
    </div>
  );
}