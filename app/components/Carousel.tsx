"use client";

import { useEffect, useState } from "react";
import { posts } from "../data/slideData";

export default function Carousel() {
  const [perPage, setPerPage] = useState(3);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerPage(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pages = [];
  for (let i = 0; i < posts.length; i += perPage) {
    pages.push(posts.slice(i, i + perPage));
  }

  const current = Math.min(page, pages.length - 1);

  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      {/* trilho */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {pages.map((group, i) => (
            <div
              key={i}
              className="w-full shrink-0 grid gap-6"
              style={{ gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))` }}
            >
              {group.map((post) => (
                <article key={post.id} className="text-left">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[3/2] object-cover rounded-lg shadow-md"
                  />
                  <h3 className="mt-1 text-lg font-semibold text-gray-900 leading-snug">
                    {post.title}
                  </h3>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* bolinhas */}
      <div className="flex justify-center gap-2 mt-10">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            aria-label={`Ir para página ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === current ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}