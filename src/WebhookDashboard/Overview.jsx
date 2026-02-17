import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend, Area, AreaChart
} from 'recharts';
import { CheckCircle2, XCircle, Clock, TrendingUp, ArrowUpRight, ArrowDownRight, Zap, Users, CreditCard, RotateCcw, CircleOff } from 'lucide-react';
import SidenNav from '../Sidebar/SidenNav';
import { Spinner } from '../components/ui/spinner';
import { dashboardApi, dashboardPaymentMethodApi, dashboardPerHourTxnApi, dashboardStatusPerHourTxnApi, dashboardTxnListto5, dashboardRefundDataApi } from '../Network/Dashboard';
import { revenueData, statusData, chartData, hourlyData, paymentMethodData, alertsWithMetadata, recentTransactions, COLORS } from '../Helper/Dummydata';
import { jwtDecode } from "jwt-decode";

// Chart data

export default function PayeoxDashboard() {
  const [txnData, setTxnData] = useState({
    total_transactions: 0,
    success_count: 0,
    failed_count: 0,
    processing_count: 0,
    total_revenue: 0,
    success_rate: 0,
    failed_rate: 0,
    failed_revenue: 0,
    refund_amount: 0
  });
  const [paymentMethodData, setPaymentMethodData] = useState([]);
  const [statusData, setStatusData] = useState([]);
  const [txnDataPerHour, setTxnDataPerHour] = useState([]);
  const [txnStatusPerHour, setTxnStatusPerHour] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [txnsData,setTxnsData] = useState([]);
  const [timeFilter, setTimeFilter] = useState('24h');
  const getTxnData = async () => {
    setLoading(true);
    try {
      const [txndata, paymentMethod, txnperhour, txnStatusPerHour, refundData] = await Promise.all([
        dashboardApi(),
        dashboardPaymentMethodApi(),
        dashboardPerHourTxnApi(),
        dashboardStatusPerHourTxnApi(),
        dashboardRefundDataApi()
      ])

      const txn = txndata.data['data']
      const paymentData = paymentMethod.data['data'] || [];
      const txnDataPerHour = txnperhour.data['data'] || [];
      const txnDataStatusPerHour = txnStatusPerHour.data['data'] || [];
      const refundDataArray = refundData.data['data'] || [];

      setTxnData({
        total_revenue: txn['total_revenue'] ||0,
        success_rate: txn['success_rate'] ||0,
        success_count: txn['success_count'] ||0,
        total_transactions: txn['total_transactions'] ||0,
        failed_count: txn['failed_count'] ||0,
        processing_count: txn['processing_count'] ||0,
        failed_rate: txn['fail_rate'] ||0,
        failed_revenue: txn['failed_revenue'] ||0,
        refund_amount: refundDataArray['total_refunds'] || 0
      })
      setStatusData([
        { name: 'Successful', value: txn['success_count'], color: '#10b981' },
        { name: 'Failed', value: txn['failed_count'], color: '#ef4444' },
        { name: 'Processing', value: txn['processing_count'], color: '#f59e0b' }
      ]);
      console.log(refundData);
      setPaymentMethodData(paymentData);
      setTxnDataPerHour(txnDataPerHour);
      setTxnStatusPerHour(txnDataStatusPerHour);

      // setTxnsData(txnsData);

    } catch (error) {
      console.error('Error fetching transaction data:', error);
    } finally {
      setLoading(false);
    }
  };

const token = localStorage.getItem("start");



  useEffect(() => {
    if (token) {
  const decoded = jwtDecode(token);
  console.log(decoded);
}
    getTxnData();
  }, []);
  // Enhanced metric card component with icons and gradients
  const EnhancedMetric = ({ label, value, change, icon: Icon, gradient }) => (
    <div className="relative overflow-hidden bg-slate-900/60 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      {/* Gradient Background */}
      <div className={`absolute top-0 right-0 w-32 h-32 ${gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>

        </div>
        <p className="flex flex-wrap text-gray-400 text-sm mb-2 w-2xs font-medium">{label}</p>
        <p className="text-4xl font-bold text-white tracking-tight">{value}</p>
      </div>
    </div>
  );

  // Transaction card component
  const TransactionCard = ({ id, payment_amount, payment_status, time, customer }) => {
    const statusConfig = {
      success: {
        icon: CheckCircle2,
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/30',
        label: 'Success'
      },
      failed: {
        icon: XCircle,
        color: 'text-red-400',
        bg: 'bg-red-500/10',
        border: 'border-red-500/30',
        label: 'Failed'
      },
      processing: {
        icon: Clock,
        color: 'text-amber-400',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/30',
        label: 'Processing'
      }
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
      <div className={`${config.bg} border ${config.border} rounded-lg p-4 backdrop-blur-sm`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 ${config.bg} rounded-full flex items-center justify-center border ${config.border}`}>
              <Icon className={`w-5 h-5 ${config.color}`} />
            </div>
            <div>
              <p className="text-white font-semibold text-lg">₹{payment_amount.toLocaleString('en-IN')}</p>
              <p className="text-gray-400 text-xs">{customer}</p>
            </div>
          </div>
          <div className="text-right">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.color} border ${config.border}`}>
              {config.label}
            </span>
            <p className="text-gray-500 text-xs mt-1">{time}</p>
          </div>
        </div>
        <p className="text-gray-500 text-xs">Transaction ID: {id}</p>
      </div>
    );
  };

  const ProviderStatus = ({ name, status, message }) => {
    const statusConfig = {
      active: {
        color: 'green',
        icon: CheckCircle2,
        bgColor: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/30',
        textColor: 'text-emerald-400',
        dotColor: 'bg-emerald-500',
        label: 'Active'
      },
      inactive: {
        color: 'gray',
        icon: Clock,
        bgColor: 'bg-slate-800/50',
        borderColor: 'border-slate-700',
        textColor: 'text-slate-400',
        dotColor: 'bg-slate-500',
        label: 'Inactive'
      },
      error: {
        color: 'red',
        icon: XCircle,
        bgColor: 'bg-red-500/10',
        borderColor: 'border-red-500/30',
        textColor: 'text-red-400',
        dotColor: 'bg-red-500',
        label: 'Error'
      }
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
      <div className={`${config.bgColor} rounded-lg p-4 border ${config.borderColor} backdrop-blur-sm`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${config.dotColor} shadow-lg`}></div>
            <span className="font-semibold text-white">{name}</span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.textColor} border ${config.borderColor}`}>
            {config.label}
          </span>
        </div>
        <p className={`text-sm ${config.textColor}`}>{message}</p>
      </div>
    );
  };

  const InsightBanner = ({ type, message }) => {
    const config = {
      warning: {
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/30',
        text: 'text-amber-300',
        icon: '⚠️'
      },
      info: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-300',
        icon: 'ℹ️'
      },
      success: {
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/30',
        text: 'text-emerald-300',
        icon: '✓'
      }
    };

    const style = config[type];

    return (
      <div className={`${style.bg} border ${style.border} rounded-lg p-4 flex items-start gap-3 backdrop-blur-sm`}>
        <span className="text-lg">{style.icon}</span>
        <p className={`text-sm ${style.text} flex-1`}>{message}</p>
      </div>
    );
  };

  return (
    <SidenNav>
      <div className="min-h-screen bg-black relative">
        {/* Grid Background */}
        <div className="fixed inset-0 z-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="relative z-10 max-w-8xl mx-auto p-6 space-y-6">

          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                  <span className="text-xs font-medium text-emerald-400">Live</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Monitor your payments in real-time</p>
            </div>
          </div>

          {/* Enhanced Stats - Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <EnhancedMetric
              label="Today's Revenue Collection"
              value={"₹" + txnData.total_revenue}
              change={{ type: 'up', value: '+18%' }}
              icon={CreditCard}
              gradient="bg-gradient-to-br from-purple-500 to-pink-500"
            />

            <EnhancedMetric
              label="Today's Total Payments"
              value={txnData.total_transactions}
              change={{ type: 'up', value: '+12%' }}
              icon={Zap}
              gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
            />
            <EnhancedMetric
              label="Today's Failed Transactions"
              value={txnData.failed_count}
              change={{ type: 'down', value: '-5%' }}
              icon={XCircle}
              gradient="bg-gradient-to-br from-red-500 to-pink-500"
            />
            <EnhancedMetric
              label="Today's Failed Amount"
              value={"₹" + txnData.failed_revenue}
              change={{ type: 'down', value: '-5%' }}
              icon={CircleOff}
              gradient="bg-gradient-to-br from-red-500 to-pink-500"
            />
            <EnhancedMetric
              label="Today's Refund Amount"
              value={"₹" + txnData.refund_amount}
              change={{ type: 'up', value: '+2%' }}
              icon={RotateCcw}
              gradient="bg-gradient-to-br from-amber-500 to-orange-500"
            />
          </div>

          {/* Charts Section - 3 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Payment Status Donut Chart */}

            <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Payment Status</h3>
              {statusData.length > 0 ? (
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {statusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-64">
                  {loading ? (
                    <Spinner className="w-10 h-10 text-white" />
                  ) : (
                    <p className="text-gray-400 text-lg">No data available</p>
                  )}
                </div>
              )}
              <div className="space-y-2 mt-4">
                {statusData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-white font-semibold">{item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>


            {/* Payment Methods Pie Chart */}

                <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Payment Methods</h3>
                  {
                    paymentMethodData.length > 0 ? (
                      <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                          <Pie
                            data={paymentMethodData}
                            cx="50%"
                            cy="50%"
                            outerRadius={90}
                            dataKey="total"
                            nameKey="payment_group"
                            label={({ percentage }) => `${percentage}%`}
                          >
                            {paymentMethodData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'white',
                              border: '1px solid rgba(255,255,255,0.1)',
                              borderRadius: '8px',
                              fontSize: '12px'
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="flex items-center justify-center h-64 ">
                        {loading ? (
                          <Spinner className="w-10 h-10 text-white" />
                        ) : (
                          <p className="text-gray-400 text-lg">No data available</p>
                        )}
                      </div>
                    )
                  }
                  <div className="space-y-2 mt-4">
                    {paymentMethodData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                          <span className="text-gray-300">{item.payment_group}</span>
                        </div>
                        <span className="text-white font-semibold">{item.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
            
            

            {/* Today's's Summary Card */}
            <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Today's Breakdown</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-gray-300 text-sm">Successful</span>
                    </div>
                    <span className="text-white font-semibold text-sm">{txnData.success_count}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5">
                    <div className="bg-linear-to-r from-emerald-500 to-teal-500 h-2.5 rounded-full shadow-lg shadow-emerald-500/50" style={{ width: `${txnData.success_rate}%` }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{txnData.success_rate}% of Total</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <span className="text-gray-300 text-sm">Failed</span>
                    </div>
                    <span className="text-white font-semibold text-sm">{txnData.failed_count}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5">
                    <div className="bg-linear-to-r from-red-500 to-pink-500 h-2.5 rounded-full shadow-lg shadow-red-500/50" style={{ width: `${txnData.failed_rate}%` }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{txnData.failed_rate}% of total</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span className="text-gray-300 text-sm">Processing</span>
                    </div>
                    <span className="text-white font-semibold text-sm">{txnData.processing_count}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full shadow-lg shadow-amber-500/50" style={{ width: '0%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{0}% of total</p>
                </div>

                {/* Provider Status */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-white font-semibold mb-3 text-sm">Provider Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"></div>
                        <span className="text-gray-300 text-xs">Cashfree</span>
                      </div>
                      <span className="text-emerald-400 text-xs font-medium">Active</span>
                    </div>
                    {/* <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                        <span className="text-gray-300 text-xs">Razorpay</span>
                      </div>
                      <span className="text-slate-400 text-xs font-medium">Inactive</span>
                    </div> */}
                    {/* <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                        <span className="text-gray-300 text-xs">PhonePe</span>
                      </div>
                      <span className="text-red-400 text-xs font-medium">Error</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hourly Transactions Bar Chart */}
          <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Hourly Transaction Volume</h3>
            {
              txnDataPerHour.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={txnDataPerHour}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="hours" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        fontSize: '12px',
                        backdropFilter: 'blur(12px)'
                      }}
                    />
                    <Bar dataKey="transactions" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-64">
                  {loading ? (
                    <Spinner className="w-10 h-10 text-white" />
                  ) : (
                    <p className="text-gray-400 text-lg">No data available</p>
                  )}
                </div>
              )
            }
          </div>


          {/* Line Chart - Payment Trends */}
          <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Payment Success vs Failed Trends</h3>
              {/* <div className="flex gap-2">
                {[
                  { label: '24h', value: '24h' },
                  { label: '7d', value: '7d' },
                  { label: '30d', value: '30d' }
                ].map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setTimeFilter(filter.value)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                      timeFilter === filter.value
                        ? 'bg-white text-black'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div> */}
            </div>
            {
              txnStatusPerHour.length > 0 ? (

                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={txnStatusPerHour}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis
                      dataKey="time"
                      stroke="#9ca3af"
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis
                      stroke="#9ca3af"
                      style={{ fontSize: '12px' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        fontSize: '12px',
                        backdropFilter: 'blur(12px)'
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="successful"
                      stroke="#10b981"
                      strokeWidth={3}
                      dot={{ fill: '#10b981', r: 5 }}
                      name="Successful"
                    />
                    <Line
                      type="monotone"
                      dataKey="failed"
                      stroke="#ef4444"
                      strokeWidth={3}
                      dot={{ fill: '#ef4444', r: 5 }}
                      name="Failed"
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-64">
                  {loading ? (
                    <Spinner className="w-10 h-10 text-white" />
                  ) : (
                    <p className="text-gray-400 text-lg">No data available</p>
                  )}
                </div>
              )
            }
          </div>
          {/* Revenue Trend Area Chart & Recent Transactions */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">

            {/* Revenue Area Chart */}
            {/* <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Weekly Revenue Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="day" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div> */}

            {/* Recent Transactions */}
            {/* <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
                <button className="text-sm text-blue-400 hover:text-blue-300 font-medium">View All</button>
              </div>
              
              <div className="space-y-3 max-h-70 overflow-y-auto pr-2">
                {txnsData.slice(0, 5).map((transaction) => (
                  <TransactionCard key={transaction.id} {...transaction} />
                ))}
              </div>
            </div> */}
          </div>



        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </SidenNav>
  );
}
