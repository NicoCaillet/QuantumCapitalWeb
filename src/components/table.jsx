const Table = ({headers, rows}) => {
  
  return (
    <div class="overflow-x-auto bg-white dark:bg-neutral-700">
      <table class="min-w-full text-left text-sm whitespace-nowrap">
        <thead class="uppercase tracking-wider border-b-2 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800">
          <tr>
            {headers.map((header) => (
              <th scope="col" class="px-6 py-4">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
              <td class="px-6 py-4">{row.mainMarket}</td>
              <td class="px-6 py-4">{row.securityType}</td>
              <td class="px-6 py-4">{row.industry}</td>
              <td class="px-6 py-4">{row.investCategory}</td>
              <td class="px-6 py-4">{row.company}</td>
              <td class="px-6 py-4">{row.shares}</td>
              <td class="px-6 py-4">{row.costPerShare}</td>
              <td class="px-6 py-4">{row.lastPrice}</td>
              <td class="px-6 py-4">{row.dividendsCollected}</td>
              <td class="px-6 py-4">{row.totalGainLoss}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table