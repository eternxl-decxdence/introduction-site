export default function Tag({ text }: { text: string }) {
  return (
    <div className="bg-effects-light dark:bg-effects-dark rounded-full px-1 py-0.25 leading-none shadow-xl/50 transition-all duration-350 ease-in-out">
      <span className="text-body text-tag-light dark:text-tag-dark font-medium transition-all duration-350 ease-in-out">
        {text}
      </span>
    </div>
  );
}
