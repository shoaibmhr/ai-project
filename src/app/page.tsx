export default function Home() {
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img></img>
      <div className="pt-6 space-y-4">
        <blockquote>
          <p className="text-lg">
            “Tailwind CSS is the only framework that Ive seen scale on large
            teams. Its easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption>
          <div>Shoaib Nawaz</div>
          <div>Software Engineer, UOS</div>
        </figcaption>
      </div>
    </figure>
  );
}
