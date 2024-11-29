const Table = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto bg-white dark:bg-neutral-700">
      <table className="min-w-full text-left text-sm ">
        <thead className="border-b-2 dark:border-neutral-600 bg-black text-white whitespace-nowrap">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="px-3 py-4 font-normal ">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={`border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600 ${
                index % 2 === 0 ? "bg-white" : "bg-neutral-50"
              }`}
            >
              <td className="px-3 py-4">{row.country}</td>
              <td className="px-3 py-4">{row.securityType}</td>
              <td className="px-3 py-4">{row.industry}</td>
              <td className="px-3 py-4">{row.investCategory}</td>
              <td className="px-3 py-4 ">{row.company}</td>
              <td className="px-3 py-4">{row.stockTicket}</td>
              <td className="px-3 py-4">{row.shares}</td>
              <td className="px-3 py-4">{row.avgCost}</td>
              <td className="px-3 py-4">{row.lastPrice}</td>
              <td className="px-3 py-4">{row.dividendsCollected}</td>
              <td className="px-3 py-4">{row.return}</td>
              <td className="px-3 py-4">{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
