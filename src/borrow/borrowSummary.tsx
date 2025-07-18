


import { Skeleton } from "@/components/ui/skeleton";
import { useGetBorrowSummaryQuery, } from "@/redux/api/bookApi";
import type { IBorrowSummary } from "@/redux/api/bookApi";


export default function BorrowSummary() {
  const { data, isLoading, isError, error } = useGetBorrowSummaryQuery();

  

  
if (isLoading) {
  return (
    <div className="max-w-6xl mx-auto mt-10 space-y-6">
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
          >
            <div className="space-y-2">
              <Skeleton className="h-5 w-[200px] rounded" />
              <Skeleton className="h-4 w-[150px] rounded" />
            </div>
            <Skeleton className="h-10 w-[100px] rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

  if (isError) {
    console.error("Error fetching borrow summary:", error);
    return <p className="text-center text-red-500 mt-10">⚠️ Error loading borrow summary.</p>;
  }

  const borrowList: IBorrowSummary[] = data?.data || [];

  if (borrowList.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No borrow summary found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-8">
        📘 Borrow Summary
      </h2>

      <div className="overflow-x-auto bg-white shadow rounded-xl ring-1 ring-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left font-semibold uppercase tracking-wide">Title</th>
              <th className="px-4 sm:px-6 py-3 text-left font-semibold uppercase tracking-wide">ISBN</th>
              <th className="px-4 sm:px-6 py-3 text-center font-semibold uppercase tracking-wide">Total Borrowed</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {borrowList.map((entry,idx) => (
              <tr key={ idx} className="hover:bg-indigo-50 transition duration-200">
                <td className="px-4 sm:px-6 py-4 text-gray-800 font-medium">{entry.book.title}</td>
                <td className="px-4 sm:px-6 py-4 text-gray-600">{entry.book.isbn}</td>
                <td className="px-4 sm:px-6 py-4 text-center text-indigo-700 font-semibold">{entry.totalQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
