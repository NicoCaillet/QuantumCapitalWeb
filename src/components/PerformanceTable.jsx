import { useState } from "preact/hooks";
import Table from "./table";

export default function PerformanceTable({ data }) {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  const handleBoxClick = (year) => {
    setSelectedYear(year);
    setSelectedData(data.find(item => item.year === year)); // Ajusta según tu estructura de datos
  };

  const handleReset = () => {
    setSelectedYear(null);
    setSelectedData(null);
  };


  return (
    <div>
      {selectedYear ? (
        <div className="w-[700px] flex border-2 border-black mb-6">
          {data.map((item) => (
            <div
              key={item.year}
              className={`border-r-2 border-black p-3 w-full text-center last:border-0 font-semibold text-xl cursor-pointer ${
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
      ) : null}

      {!selectedYear ? (
        <div className="grid grid-cols-4 gap-4 mt-10">
             {data.map((item) => (
            <div
            className="bg-white p-4 flex flex-col items-center xl:h-[320px] border-2 border-black justify-center space-y-10 hover:bg-black hover:text-white group cursor-pointer"
            onClick={() => handleBoxClick(item.year)}
            >
            {/* Mostrar porcentaje o texto alternativo */}
            {!item.thisYear ? (
              <div className="text-[75px] xl:text-[80px] font-semibold text-green-700 group-hover:text-white">
                +{item.percentage}%
              </div>
            ) : (
              <p className="text-3xl mt-20">ooo</p>
            )}
            <div className="flex justify-center items-end space-x-2">
              {/* Mostrar el año */}
              <p className="-rotate-90 text-5xl xl:text-6xl w-1/4 font-semibold">{item.year}</p>
              <p className="text-3xl xl:text-4xl font-semibold text-left">
                Net Asset Values and Returns
              </p>
            </div>
          </div>
            ))}
        </div>
      ) : null}

      {selectedYear && selectedData ? (
        <div>
          <Table headers={selectedData.tableHeaders} rows={selectedData.tableRows} />
          <button
            className="mt-6 px-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800"
            onClick={handleReset}
          >
            Volver
          </button>
        </div>
      ) : null}
    </div>
  );
};




