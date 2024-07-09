import SearchResults from "@/components/SearchResults";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Search Results",
};

const SearchResultsPage = () => {
  return (
    <main className="w-full min-h-screen">
      <Suspense fallback={<div className="loading-styles">Loading...</div>}>
        <SearchResults />
      </Suspense>
    </main>
  );
};

export default SearchResultsPage;
