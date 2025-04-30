export function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 md:py-24">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="from-foreground to-foreground/50 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
            PX to REM Converter
          </h1>
          <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
            Convert pixel values to rem units instantly. Make your web designs more accessible and responsive with
            precise calculations.
          </p>
        </div>
      </div>
    </section>
  );
}
