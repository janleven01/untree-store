import { DropDownMenuProps } from "@/types";
import Link from "next/link";

const DropdownMenu = ({ items, scrolled, sideBar }: DropDownMenuProps) => {
  return (
    <>
      {sideBar ? (
        <div className="pl-1 sm:pl-5 flex flex-col">
          {items.map((item, index) => {
            const linkProps = {
              href:
                item.href !== "/shop"
                  ? { pathname: item.href }
                  : { pathname: item.href, query: { category: item.name } },
              scroll: false,
            };
            return (
              <Link
                {...linkProps}
                key={index}
                className="text-[13px] pt-3 hover:text-purple"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="absolute h-6 w-16 -left-4">
          <div
            className={`dropdown_links ${
              scrolled
                ? "bg-white shadow-lg"
                : "border-white/50 bg-white shadow-md "
            }`}
          >
            {items.map((item, index) => {
              const linkProps = {
                href:
                  item.href !== "/shop"
                    ? { pathname: item.href }
                    : { pathname: item.href, query: { category: item.name } },
                scroll: false,
              };
              return (
                <Link
                  {...linkProps}
                  key={index}
                  className="dropdown_links-text"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
