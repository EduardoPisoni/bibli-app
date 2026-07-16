
type Props = {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="bg-linear-to-br from-violet-900 to-violet-700 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:py-28">
        <div className="flex-1 text-center md:text-left">
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-violet-100 md:max-w-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};