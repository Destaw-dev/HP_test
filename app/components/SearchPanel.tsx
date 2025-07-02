"use client";

import { useState } from "react";
import { SearchInputFields } from "./SearchInputFields";
import { SearchTabs } from "./SearchTabs";
import { SearchButton } from "./SearchButton";
import { SearchTab } from "./types";

export default function SearchPanel() {
    const [tab, setTab] = useState<SearchTab>("business");

  return (
    <section
      className={`w-full md:w-fit md:py-14 py-6 lg:pr-28 md:pr-10 shadow-xs`}
    >
      <div
        className={`lg:h-[465px] md:bg-[#F5F5F5] rounded-t-2xl text-[#16254F] flex flex-col md:pt-10 gap-6 lg:px-18 md:px-10 px-6 ${
          tab === "people" ? "pb-2.5" : "pb-18"
        }`}
      >
        <SearchTabs activeTab={tab} setActiveTab={setTab} />

        <h2 className="lg:text-3xl lg:text-center">
          {tab === "business" ? "איזה עסק למצוא לך?" : "את מי למצוא לך?"}
        </h2>

        <form className={`flex flex-col gap-6 `}>
          <SearchInputFields activeTab={tab} />
          <SearchButton activeTab={tab} />
        </form>
      </div>
    </section>
  );
}

