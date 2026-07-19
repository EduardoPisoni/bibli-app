
export default function DesignSystem() {
  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold text-text">
          Design System
        </h1>
        <p className="mt-3 text-text-light">
          Guia visual de cores do projeto.
        </p>

        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-text">
            Primary
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ColorCard
              name="Primary 50"
              className="bg-primary-50"
              hex="#fdf5f8"
            />

            <ColorCard
              name="Primary 100"
              className="bg-primary-100"
              hex="#f8dfe7"
            />

            <ColorCard
              name="Primary 200"
              className="bg-primary-200"
              hex="#efb8c9"
            />

            <ColorCard
              name="Primary 300"
              className="bg-primary-300"
              hex="#df88a4"
            />

            <ColorCard
              name="Primary 400"
              className="bg-primary-400"
              hex="#c9557b"
            />

            <ColorCard
              name="Primary 500"
              className="bg-primary-500"
              hex="#8C1D40"
            />

            <ColorCard
              name="Primary 600"
              className="bg-primary-600"
              hex="#7B1938"
            />

            <ColorCard
              name="Primary 700"
              className="bg-primary-700"
              hex="#65142F"
            />

            <ColorCard
              name="Primary 800"
              className="bg-primary-800"
              hex="#4D1025"
            />

            <ColorCard
              name="Primary 900"
              className="bg-primary-900"
              hex="#340A18"
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-text">
            Brand
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ColorCard
              name="Primary"
              className="bg-primary"
              hex="#8C1D40"
            />

            <ColorCard
              name="Primary Dark"
              className="bg-primary-dark"
              hex="#6F1732"
            />

            <ColorCard
              name="Secondary"
              className="bg-secondary"
              hex="#D6A54A"
            />
          </div>
        </section>

        <section className="mt-20">
          <h2 className="mb-8 text-3xl font-semibold text-text">
            Backgrounds
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ColorCard
              name="Background"
              className="bg-background border"
              hex="#F6F3EF"
            />
            <ColorCard
              name="Surface"
              className="bg-surface border"
              hex="#FFFFFF"
            />
          </div>
        </section>

        <section className="mt-20">
          <h2 className="mb-8 text-3xl font-semibold text-text">
            Typography
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ColorCard
              name="Text"
              className="bg-text"
              hex="#3B352F"
              dark
            />
            <ColorCard
              name="Text Light"
              className="bg-text-light"
              hex="#6B6B6B"
              dark
            />
          </div>
        </section>
      </div>
    </main>
  );
}

type Props = {
  name: string;
  className: string;
  hex: string;
  dark?: boolean;
};

export function ColorCard({
  name,
  className,
  hex,
  dark,
}: Props) {
  return (
    <div>
      <div
        className={`
          h-40 rounded-2xl shadow-sm
          ${className}
        `}
      />

      <h3 className="mt-5 text-lg font-semibold text-text">
        {name}
      </h3>

      <p className="mt-1 font-mono text-sm text-text-light">
        {className.replace("bg-", "")}
      </p>

      <p
        className={`mt-1 font-mono text-sm ${
          dark ? "text-text-light" : "text-text-light"
        }`}
      >
        {hex}
      </p>

    </div>
  );
}