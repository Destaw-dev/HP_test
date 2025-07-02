"use client";

import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CategoryItem } from "./CategoryItem";
import { categories } from "./categoriesData";
import type { Category } from "./types";

export const Categories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const amount = 120;
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#F5F5F5] flex-col lg:h-[284px] relative flex justify-center">
      <div className="container lg:px-28 md:px-13 md:mx-auto">
        <h3 className="text-center text-[#16254F] text-lg lg:text-3xl lg:pt-14 lg:pb-12 pt-6 pb-8">
          באיזה תחום לחפש לך עסק?
        </h3>

        <div className="relative pb-10">
          <AiOutlineLeft
            onClick={() => scroll("left")}
            className="w-6 h-6 text-[#16254F] hidden lg:flex absolute -left-6 top-1/2 -translate-y-3/2 z-10"
          />

          <div
            ref={scrollRef}
            className="overflow-x-auto items-center scroll-smooth whitespace-nowrap flex gap-7 px-2 lg:gap-8 md:px-4 md:[&::-webkit-scrollbar]:hidden md:[scrollbar-width:none]"
          >
            {categories.map((cat: Category) => (
              <CategoryItem key={cat.id} title={cat.title} icon={cat.icon} />
            ))}
          </div>

          <AiOutlineRight
            onClick={() => scroll("right")}
            className="w-6 h-6 text-[#16254F] hidden lg:flex absolute -right-6 top-1/2 -translate-y-3/2 z-10"
          />
        </div>
      </div>
    </section>
  );
};