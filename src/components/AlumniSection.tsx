const alumni = [
  "Hassan Mehmood",
  "Tayyab Sajjad",
  "Muhammad Jawad",
  "Ahmad Fakhar",
  "Muhammad Bilal",
  "Moavia Hassan",
];

export default function AlumniSection() {
  return (
    <section id="alumni" aria-labelledby="alumni-heading" className="border-t border-border/50 py-12 md:py-16 scroll-mt-24">
      <div className="container text-center">
        <h2 id="alumni-heading" className="text-lg font-display font-semibold mb-6">Alumni</h2>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground max-w-3xl mx-auto">
          {alumni.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </div>
    </section>
  );
}
