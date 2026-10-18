type BlogComparisonTableProps = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export function BlogComparisonTable({ caption, headers, rows }: BlogComparisonTableProps) {
  return (
    <div role="region" aria-label={caption} tabIndex={0} className="overflow-x-auto rounded-xl border border-[#CDEECD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164E50]">
      <table className="w-full min-w-[520px] border-collapse text-left">
        <caption className="bg-[#EEF8EE] p-4 text-left font-medium text-[#164E50]">{caption}</caption>
        <thead className="bg-[#fbfbf8]">
          <tr>{headers.map(header => <th key={header} scope="col" className="p-4">{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row[0]} className="border-t border-[#dfe6df]">
              <th scope="row" className="p-4 align-top">{row[0]}</th>
              {row.slice(1).map((cell, index) => <td key={headers[index + 1]} className="p-4 align-top">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
