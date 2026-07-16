import { useState } from "react";

import Insights from "../components/Insights";
import FeaturedArticle from "../components/FeaturedArticle";
import CategoryTabs from "../components/CategoryTabs";
import ResourcesGrid from "../components/ResourcesGrid";
import DigitalInsights from "../components/DigitalInsights";

export default function Resource() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <Insights />

      <FeaturedArticle />

      <div className="mx-5">
        <CategoryTabs
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <ResourcesGrid selectedCategory={selectedCategory} />

      <DigitalInsights />
    </div>
  );
}