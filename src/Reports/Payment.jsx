import { useEffect, useState, useCallback, useMemo } from "react";
import SideNav from "../Sidebar/SidenNav";
import {
  CheckCircle2,
  XCircle,
  Clock,
  Copy,
  Check,
  Database,
} from "lucide-react";
import { getAllReportApi } from "../Network/Reports";
import { convertDate, downloadExcel } from "../Helper/helper";
import { Spinner } from "@/components/ui/spinner";

const Payment = () => {
  const [copiedPaymentId, setCopiedPaymentId] = useState(null);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const [statusFilter, setStatusFilter] = useState("ALL");
  const [methodFilter, setMethodFilter] = useState("ALL");

  /* -------------------- Copy Payment ID -------------------- */
  const copyPaymentId = useCallback((paymentId) => {
    if (!paymentId) return;
    navigator.clipboard.writeText(String(paymentId));
    setCopiedPaymentId(paymentId);
    setTimeout(() => setCopiedPaymentId(null), 2000);
  }, []);

  /* -------------------- API Call -------------------- */
  const getReport = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getAllReportApi();
      setReports(res?.status === 200 ? res.data?.data ?? [] : []);
    } catch (err) {
      console.error("getReport error:", err);
      setReports([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getReport();
  }, [getReport]);

  /* -------------------- Filters -------------------- */
  const filteredData = useMemo(() => {
    return reports.filter((item) => {
      const matchStatus =
        statusFilter === "ALL" || item.payment_status === statusFilter;

      const matchMethod =
        methodFilter === "ALL" || item.payment_group === methodFilter;

      return matchStatus && matchMethod;
    });
  }, [reports, statusFilter, methodFilter]);

  return (
    <div className="min-h-screen">
      <SideNav>
        <div className="space-y-6 p-9 overflow-x-hidden animate-fadeIn">
          {/* Header */}
          <div>
            <h2 className="text-3xl font-bold text-slate-100 mb-2">
              Payment Records
            </h2>
            <p className="text-slate-400">
              Every payment that came through, organized in one place
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3 pt-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"

              >
                <option value="ALL">All Statuses</option>
                <option value="SUCCESS">Successful</option>
                <option value="FAILED">Failed</option>
                <option value="PENDING">Pending</option>
              </select>

              <select
                value={methodFilter}
                onChange={(e) => setMethodFilter(e.target.value)}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
              >
                <option value="ALL">All Methods</option>
                <option value="upi">UPI</option>
                <option value="card">Card</option>
                <option value="wallet">Wallet</option>
                <option value="net_banking">Net Banking</option>
              </select>
            </div>

            <Database
              className="cursor-pointer"
              color="white"
              onClick={() => downloadExcel(filteredData)}
            />
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            {loading ? (
              <div className="py-12 flex justify-center">
                <Spinner className="w-8 h-8 text-white" />
              </div>
            ) : filteredData.length ? (
              <table className="w-full min-w-[1100px] text-sm">
                <thead className="bg-black/40 border-b border-white/10">
                  <tr>
                    {[
                      "Time",
                      "Order ID",
                      "Payment ID",
                      "Amount",
                      "Status",
                      "Provider",
                      "Method",
                      "Service Charge",
                      "Service Tax",
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
                  {filteredData.map((p) => (
                    <tr
                      key={p.payment_id}
                      className={`hover:bg-white/5 ${
                        p.payment_status === "FAILED"
                          ? "bg-red-500/5 border-l-4 border-red-500"
                          : ""
                      }`}
                    >
                      <td className="py-5 px-4 flex text-gray-400">
                        {convertDate(p.payment_time)}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-semibold text-white">
                            {p.order_id}
                          </span>
                          <button
                            onClick={() => copyPaymentId(p.payment_id)}
                          >
                            {copiedPaymentId === p.payment_id ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3 text-slate-500" />
                            )}
                          </button>
                        </div>
                      </td>

                      <td className="px-6 py-4 font-bold text-white">
                        {p.payment_id}
                      </td>

                      <td className="px-6 py-4 font-bold text-white">
                        ₹{p.payment_amount}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                            p.payment_status === "SUCCESS"
                              ? "bg-emerald-500/20 text-emerald-400"
                              : p.payment_status === "FAILED"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-amber-500/20 text-amber-400"
                          }`}
                        >
                          {p.payment_status === "SUCCESS" ? (
                            <CheckCircle2 size={14} />
                          ) : p.payment_status === "FAILED" ? (
                            <XCircle size={14} />
                          ) : (
                            <Clock size={14} />
                          )}
                          {p.payment_status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-gray-300">
                        {p.gateway_id === 1 ? "Cashfree" : "Unknown"}
                      </td>

                      <td className="px-6 py-4 text-gray-300">
                        {p.payment_group}
                      </td>

                      <td className="px-6 py-4 text-gray-300">
                        {p.service_charge}
                      </td>

                      <td className="px-6 py-4 text-gray-300">
                        {p.service_tax}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-16 text-slate-400">
                No payments found
              </div>
            )}
          </div>
        </div>
      </SideNav>
    </div>
  );
};

export default Payment;
