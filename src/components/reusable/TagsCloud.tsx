import Tag from "./Tag";

export default function TagsCloud({ tags }: { tags: Array<string> }) {
  return (
    <div className="flex w-full flex-wrap gap-0.25 xl:gap-0.5">
      {tags
        .sort((a, b) => b.length - a.length)
        .map((tag, i) => (
          <Tag key={i} text={tag} />
        ))}
    </div>
  );
}
