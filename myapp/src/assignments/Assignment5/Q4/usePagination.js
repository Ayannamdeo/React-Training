import { useState } from "react";

export function usePagination(items, pageLimit){

    const [pageNumber, setPageNumber] = useState(0);
    const pageCount = Math.ceil(items.length/pageLimit);
    const changePage = (pgN) => setPageNumber(pgN);
    const pageData = () => {
      const startingIndex = pageNumber * pageLimit;
      const lastIndex = startingIndex + pageLimit;
      return items.slice(startingIndex, lastIndex);
    };
    const nextPage = () => setPageNumber(Math.min(pageNumber + 1, pageCount - 1));

    const previousPage = () => setPageNumber(Math.max(pageNumber - 1, 0));

    return {
      pageNumber,
      pageCount,
      changePage,
      pageData,
      nextPage,
      previousPage,
    };

}