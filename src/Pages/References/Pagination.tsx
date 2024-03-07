import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { recoilShowYear, recoilLanguage } from "../../Recoil/atoms";
import { useRecoilState } from "recoil";

export function Pagination() {
  // const [showYear, setShowYear] = React.useState(2024);
  const [showYear, setShowYear] = useRecoilState(recoilShowYear);
  const [language] = useRecoilState(recoilLanguage);

  // 2024, 2023,
  const li = [
    2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
    2010, 2009, 2008, 2007, 2006, 2005, 2004,
  ];

  const getItemProps = (year: number) =>
    ({
      className: showYear === year ? "text-red-500" : "text-blue-500",
      onClick: () => setShowYear(year),
    } as any);

  const next = () => {
    if (showYear === 2004 || showYear === 0) return;

    setShowYear(showYear - 1);
  };

  const prev = () => {
    if (showYear === 2022 || showYear === 0) return;

    setShowYear(showYear + 1);
  };

  return (
    <div className="flex items-center gap-4">
      <button {...getItemProps(0)}>
        <p>{language ? "Show all" : "Vis alle"}</p>
      </button>
      <button
        className="flex items-center gap-2"
        onClick={prev}
        disabled={showYear === 2022 || showYear === 0}
      >
        <BsChevronLeft
          className={
            "" +
            (showYear === 2022 || showYear === 0
              ? " text-gray-400"
              : "text-blue-500")
          }
        />
      </button>
      <div className="flex items-center gap-5">
        {showYear === 0 &&
          li
            .slice(li.indexOf(showYear) + 1, li.indexOf(showYear) + 4)
            .map((year) => (
              <button key={year} {...getItemProps(year)}>
                {year}
              </button>
            ))}
        {li
          .slice(li.indexOf(showYear), li.indexOf(showYear) + 3)
          .map((year) => (
            <button key={year} {...getItemProps(year)}>
              {year}
            </button>
          ))}
      </div>
      <button
        className="flex items-center gap-2"
        onClick={next}
        disabled={showYear === 2004 || showYear === 0}
      >
        <BsChevronRight
          className={
            "" +
            (showYear === 2004 || showYear === 0
              ? " text-gray-400"
              : "text-blue-500")
          }
        />
      </button>
    </div>
  );
}
