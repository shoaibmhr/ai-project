
import Image from "next/image";

export default function Home() {
  return (
    <figure className="rounded-xl p-8 dark:bg-purple-600">

      {/* Profile Image */}
      <Image
        src="/image/image.png"
        alt="Shoaib Nawaz"
        width={160}
        height={160}
        className="rounded-full object-cover mx-auto"
      />

      <div className="pt-6 space-y-4 text-center">
        <blockquote>
          <p className="text-2xl md:text-4xl">
            “Tailwind CSS is the only framework that Ive seen scale on large
            teams. Its easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>

        <figcaption>
          <div className="font-semibold text-lg">
            Shoaib Nawaz
          </div>

          <div className="font-semibold">
            Software Engineer, UOS
          </div>
        </figcaption>
      </div>

    </figure>
  );
};
