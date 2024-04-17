import { useEffect } from "react";
import { usePagination } from "./usePagination";

export function Pagination({items, pageLimit, setPageItems}){
    const { pageNumber, pageCount,changePage, pageData, nextPage, previousPage } =
      usePagination(items, pageLimit);
      const paginationNumbers = [];

    //   console.log("pageCount: ",pageCount);

      for (let i = 1; i <= pageCount; i++) {
        paginationNumbers.push(i);
      }

      useEffect(()=> {
        setPageItems(pageData);
      }, [pageNumber, items]);

      return (
        <nav>
            <ul className='pagination justify-content-center'>
                <li className="page-item"> 
                    <button className="page-link" onClick={previousPage} >
                        Previous
                    </button>
                </li>
                 {/* Mapping through each page number */}
                {paginationNumbers.map(pgN => (
                    <li key={pgN} className= {`page-item ${pageNumber === pgN ? 'active' : ''} `} >
                        <button onClick={() => changePage(pgN-1)}  className='page-link' >
                            {pgN}
                        </button>
                    </li>
                ))}
                <li className="page-item"> 
                    <button className="page-link" onClick={nextPage} >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
      );

    
}