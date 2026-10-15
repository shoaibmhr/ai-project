export default function Home() {
  return (
    <figure className=" rounded-xl p-8 dark:bg-purple-600">
      {/* <img></img> */}
      <div className="pt-6 space-y-4">
        <blockquote>
          <p className="text-5xl">
            “Tailwind CSS is the only framework that Ive seen scale on large
            teams. Its easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption>
          <div className="font-semibold text-lg">Abdullah Mughal</div>
          <div className="font-semibold ">Software Engineer, UOS</div>
        </figcaption>
      </div>
    </figure>
  );
}
