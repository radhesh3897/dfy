function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

type ArticleBylineProps = {
  published: string;
  updated?: string;
};

export function ArticleByline({ published, updated }: ArticleBylineProps) {
  const showUpdated = updated && updated !== published;

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-[#e1e5ec] pb-5 text-sm text-[#5f6877]">
      <span className="font-medium text-[#164E50]">By Radhesh Agrawal</span>
      <span aria-hidden="true">·</span>
      <span>Founder, Done For You</span>
      <span aria-hidden="true">·</span>
      <span>
        Published <time dateTime={published}>{formatDate(published)}</time>
      </span>
      {showUpdated && (
        <>
          <span aria-hidden="true">·</span>
          <span>
            Updated <time dateTime={updated}>{formatDate(updated)}</time>
          </span>
        </>
      )}
    </div>
  );
}
