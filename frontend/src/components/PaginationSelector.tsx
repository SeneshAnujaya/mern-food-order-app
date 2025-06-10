import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const PaginationSelector = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination className="">
      <PaginationContent>
        {page !== 1 && (
          <PaginationItem className="text-mainOrange font-semibold">
            <PaginationPrevious
              href="#"
              onClick={() => onPageChange(page - 1)}
            />
          </PaginationItem>
        )}

        {pageNumbers.map((number) => (
          <PaginationItem className="bg-[#fff1ee] text-mainOrange rounded-md">
            <PaginationLink
              href="#"
              onClick={() => onPageChange(number)}
              isActive={page === number}
              className={`${page === number ? 'bg-mainOrange text-white': 'bg-[#fff1ee]'}`}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
        {page !== pageNumbers.length && (
          <PaginationItem className="text-mainOrange font-semibold">
            <PaginationNext href="#" onClick={() => onPageChange(page + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSelector;
