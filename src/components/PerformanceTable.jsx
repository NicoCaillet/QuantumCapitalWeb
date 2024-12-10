import { useEffect, useRef, useState } from "preact/hooks";
import Table from "./table";
import "./styles.css";
import { animate, stagger } from "@motionone/dom";

export default function PerformanceTable({ data }) {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [menuAnimated, setMenuAnimated] = useState(false); // Nuevo estado
  const boxContainerRef = useRef();
  const menuRef = useRef([]);

  const handleBoxClick = (year) => {
    setSelectedYear(year);
    setSelectedData(data.find((item) => item.year === year));
    animate(
      boxContainerRef.current,
      { opacity: 0, transform: "scale(0.9)" },
      { duration: 0.6, easing: "ease-in-out" }
    );
  };

  useEffect(() => {
    if (selectedYear && !menuAnimated) {
      menuRef.current.forEach((el, index) => {
        animate(
          el,
          {
            opacity: [0, 1],
            transform: ["translateY(-20px)", "translateY(0)"],
          },
          { duration: 0.5, delay: index * 0.2, easing: "ease-out" }
        );
      });

      setMenuAnimated(true);
    }
  }, [selectedYear, menuAnimated]);

  useEffect(() => {
    if (!selectedYear && boxContainerRef.current) {
      animate(
        boxContainerRef.current.children,
        { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] },
        { duration: 2, delay: stagger(0.2), easing: "ease-out" }
      );
    }
  }, [selectedYear]);

  return (
    <div className="">
      {selectedYear && (
        <div className="flex justify-between items-center mo:flex-col">
          <div className="w-[699px] flex  mb-6 mo:w-full">
            {data.map((item, index) => (
              <div
                key={item.year}
                ref={(el) => (menuRef.current[index] = el)}
                className={`border-2 border-r-0 last:border-r-2 border-black p-3 w-full text-center font-semibold text-xl cursor-pointer ${
                  item.year === selectedYear
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
                onClick={() => handleBoxClick(item.year)}
              >
                {item.year}
              </div>
            ))}
          </div>
          <div className="text-3xl font-semibold text-green-700 mo:text-left mo:w-full mo:mb-4">
            +{selectedData.percentage}%
          </div>
        </div>
      )}

      {!selectedYear ? (
        <div
          ref={boxContainerRef}
          className="grid grid-cols-4 gap-4 mt-10 mo:grid-cols-1"
        >
          {data.map((item) => (
            <div
              key={item.year}
              className="bg-white p-4 flex flex-col items-center xl:h-[320px] border-2  border-black justify-center space-y-10 hover:bg-black hover:text-white group cursor-pointer"
              onClick={() => handleBoxClick(item.year)}
            >
              {!item.thisYear ? (
                <div className="text-[75px] xl:text-[80px] mo:text-[80px] mo:-mb-5 font-semibold text-green-700 group-hover:text-white">
                  +{Math.round(item.percentage)}%
                </div>
              ) : (
                <p className="text-3xl mt-20 ">ooo</p>
              )}
              <div className="flex justify-center items-end space-x-2 mo:items-center">
                <p className="-rotate-90 text-5xl xl:text-6xl w-1/4 font-semibold mo:mt-10 mo:text-6xl">
                  {item.year}
                </p>
                <p className="text-3xl xl:text-4xl font-semibold text-left mo:text-4xl">
                  Net Asset Values and Returns
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {selectedYear && selectedData && (
        <div>
          <Table
            headers={selectedData.tableHeaders}
            rows={selectedData.tableRows}
          />
        </div>
      )}
    </div>
  );
}
