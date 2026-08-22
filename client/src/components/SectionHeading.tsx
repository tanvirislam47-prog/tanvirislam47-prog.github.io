/** Personal research portfolio style: compact technical labels, editorial hierarchy, restrained blue signal accents. */
type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  intro?: string;
  align?: "left" | "split";
};

export function SectionHeading({ index, label, title, intro, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "split" ? "grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-end" : "max-w-3xl"}>
      <div>
        <p className="section-kicker"><span>{index}</span>{label}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}
