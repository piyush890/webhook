import { useEffect, useState, useCallback, useMemo } from "react";
import SideNav from "../Sidebar/SidenNav";
import {
  CheckCircle2,
  XCircle,
  Clock,
  Copy,
  Check,
  Database,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getRefundReportApi } from "../Network/Reports";
import { convertDate, downloadExcel } from "../Helper/helper";
import { Spinner } from "@/components/ui/spinner";

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

const Refund = () => {
  const [copiedPaymentId, setCopiedPaymentId] = useState(null);
  const [refunds, setRefunds] = useState([]);
  const [loading, setLoading] = useState(true);

  const [statusFilter, setStatusFilter] = useState("ALL");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);

  /* -------------------- Copy -------------------- */
  const copyPaymentId = useCallback((id) => {
    if (!id) return;
    navigator.clipboard.writeText(String(id));
    setCopiedPaymentId(id);
    setTimeout(() => setCopiedPaymentId(null), 2000);
  }, []);

  /* -------------------- API -------------------- */
  const getRefundReport = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getRefundReportApi();
      setRefunds(res?.status === 200 ? res.data?.data ?? [] : []);
    } catch (err) {
      console.error("Refund API error:", err);
      setRefunds([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getRefundReport();
  }, [getRefundReport]);

  /* -------------------- Filter -------------------- */
  const filteredRefunds = useMemo(() => {
    return refunds.filter((r) => {
      if (statusFilter === "ALL") return true;
      return r.refund_status === statusFilter;
    });
  }, [refunds, statusFilter]);

  // Reset to page 1 whenever filters or page size change
  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter, pageSize]);

  /* -------------------- Pagination -------------------- */
  const totalPages = Math.ceil(filteredRefunds.length / pageSize);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredRefunds.slice(start, start + pageSize);
  }, [filteredRefunds, currentPage, pageSize]);

  const getPageNumbers = () => {
    const pages = [];
    const siblings = 1;
    const left = Math.max(2, currentPage - siblings);
    const right = Math.min(totalPages - 1, currentPage + siblings);

    pages.push(1);
    if (left > 2) pages.push("...");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

       const formattedData = filteredRefunds.map((payment) => ({
      Time: convertDate(payment.created_at),
      Order_ID: payment.order_id,
      Payment_ID: payment.payment_id,
      Refund_ID: payment.refund_id,
      Amount: payment.amount,
      Status: payment.refund_status,
      Provider: payment.gateway_id === 1 ? "Cashfree" : "Unknown",
      Method: payment.payment_group,
      Service_Charge: payment.description,
    }));

  return (
    <div className="min-h-screen">
      <SideNav>
        <div className="space-y-6 p-9 overflow-x-hidden animate-fadeIn">
          {/* Header */}
          <div>
            <h2 className="text-3xl font-bold text-slate-100 mb-2">
              Refund Records
            </h2>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
            >
              <option value="ALL">All Status</option>
              <option value="SUCCESS">Success</option>
              <option value="FAILED">Failed</option>
              <option value="PENDING">Pending</option>
            </select>

            <Database
              className="cursor-pointer"
              color="white"
              onClick={() => downloadExcel(formattedData)}
            />
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            {loading ? (
              <div className="py-12 flex justify-center">
                <Spinner className="w-8 h-8 text-white" />
              </div>
            ) : filteredRefunds.length ? (
              <>
                <table className="w-full min-w-[1100px] text-sm">
                  <thead className="bg-black/40 border-b border-white/10">
                    <tr>
                      {[
                        "Time",
                        "Order ID",
                        "Payment ID",
                        "Refund ID",
                        "Amount",
                        "Status",
                        "Provider",
                        "Description",
                      ].map((h) => (
                        <th
                          key={h}
                          className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-white/5">
                    {paginatedData.map((r) => (
                      <tr
                        key={r.refund_id}
                        className={`hover:bg-white/5 ${
                          r.refund_status === "FAILED"
                            ? "bg-red-500/5 border-l-4 border-red-500"
                            : ""
                        }`}
                      >
                        <td className="px-6 py-4 text-gray-400">
                          {convertDate(r.created_at)}
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-semibold text-white">
                              {r.order_id}
                            </span>
                            <button onClick={() => copyPaymentId(r.payment_id)}>
                              {copiedPaymentId === r.payment_id ? (
                                <Check className="w-3 h-3 text-emerald-400" />
                              ) : (
                                <Copy className="w-3 h-3 text-slate-500" />
                              )}
                            </button>
                          </div>
                        </td>

                        <td className="px-6 py-4 font-bold text-white">
                          {r.payment_id}
                        </td>

                        <td className="px-6 py-4 font-bold text-white">
                          {r.refund_id}
                        </td>

                        <td className="px-6 py-4 font-bold text-white">
                          ₹{r.amount}
                        </td>

                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                              r.refund_status === "SUCCESS"
                                ? "bg-emerald-500/20 text-emerald-400"
                                : r.refund_status === "FAILED"
                                ? "bg-red-500/20 text-red-400"
                                : "bg-amber-500/20 text-amber-400"
                            }`}
                          >
                            {r.refund_status === "SUCCESS" ? (
                              <CheckCircle2 size={14} />
                            ) : r.refund_status === "FAILED" ? (
                              <XCircle size={14} />
                            ) : (
                              <Clock size={14} />
                            )}
                            {r.refund_status}
                          </span>
                          {r.refund_status === "FAILED" && r.type && (
                            <p className="text-xs text-red-400 mt-1">{r.type}</p>
                          )}
                        </td>

                        <td className="px-6 py-4 text-gray-300">
                          {r.gateway_id === 1 ? "Cashfree" : "Unknown"}
                        </td>

                        <td className="px-6 py-4 text-gray-300">
                          {r.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* -------------------- Pagination Footer -------------------- */}
                <div className="flex items-center justify-between mt-4 px-2 text-sm text-slate-400">
                  {/* Left: record count + page size picker */}
                  <div className="flex items-center gap-3">
                    <span>
                      {(currentPage - 1) * pageSize + 1}–
                      {Math.min(currentPage * pageSize, filteredRefunds.length)}{" "}
                      of {filteredRefunds.length} records
                    </span>
                    <select
                      value={pageSize}
                      onChange={(e) => setPageSize(Number(e.target.value))}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-300"
                    >
                      {PAGE_SIZE_OPTIONS.map((n) => (
                        <option key={n} value={n}>
                          {n} / page
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Right: page buttons */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    {getPageNumbers().map((page, idx) =>
                      page === "..." ? (
                        <span key={`ellipsis-${idx}`} className="px-2">
                          …
                        </span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                            currentPage === page
                              ? "bg-white/20 text-white"
                              : "hover:bg-white/10 text-slate-400"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}

                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-16 text-slate-400">
                No refund records found
              </div>
            )}
          </div>
        </div>
      </SideNav>
    </div>
  );
};

export default Refund;