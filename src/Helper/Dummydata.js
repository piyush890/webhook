const paymentsData = [
  { id: 1, time: '2 min ago', orderId: 'ORD-78945', amount: '₹2,499', status: 'success', gateway: 'Cashfree', method: 'UPI', paymentId: 'PAY_CF_9847563', failureReason: null },
  { id: 2, time: '5 min ago', orderId: 'ORD-78944', amount: '₹15,999', status: 'success', gateway: 'Razorpay', method: 'Card', paymentId: 'PAY_RZ_3847562', failureReason: null },
  { id: 3, time: '12 min ago', orderId: 'ORD-78943', amount: '₹899', status: 'failed', gateway: 'PhonePe', method: 'Wallet', paymentId: 'PAY_PP_7463829', failureReason: 'Customer bank timeout' },
  { id: 4, time: '18 min ago', orderId: 'ORD-78942', amount: '₹5,499', status: 'pending', gateway: 'Cashfree', method: 'NetBanking', paymentId: 'PAY_CF_8273645', failureReason: null },
  { id: 5, time: '23 min ago', orderId: 'ORD-78941', amount: '₹12,499', status: 'success', gateway: 'Razorpay', method: 'UPI', paymentId: 'PAY_RZ_9384756', failureReason: null },
  { id: 6, time: '31 min ago', orderId: 'ORD-78940', amount: '₹3,299', status: 'failed', gateway: 'Cashfree', method: 'Card', paymentId: 'PAY_CF_4758392', failureReason: 'Payment cancelled by customer' },
];
const menusData = [
    {
        id:0,
        name:"Overview",
        link:"/dashboard",
        icon:"LayoutDashboard"
    },
    {
        id:1,
        name:"Reports",
        link:"/reports",
        children:[
          {
         id: 10,
        name: "Payments",
        link: "/reports/payments",
          },
          {
         id: 12,
        name: "Refunds",
        link: "/reports/refunds",
          },
         
        ]
    },
    {
        id:2,
        name:"Projects",
        link:"/projects"
    },
    // {
    //     id:3,
    //     name:"Events",
    //     link:"/events"
    // },
    // {
    //     id:4,
    //     name:"Alerts",
    //     link:"/alerts"
    // },

];
const webhookLogs = [
  { id: 1, receivedAt: '2 min ago', gateway: 'Cashfree', projectId: 'proj_78597759', status: 200, retries: 0 },
  { id: 2, receivedAt: '5 min ago', gateway: 'Razorpay', projectId: 'proj_78597759', status: 200, retries: 0 },
  { id: 3, receivedAt: '12 min ago', gateway: 'PhonePe', projectId: 'proj_78597759', status: 401, retries: 3 },
  { id: 4, receivedAt: '18 min ago', gateway: 'Cashfree', projectId: 'proj_78597759', status: 200, retries: 0 },
];
   const alertsWithMetadata = [
    {
      id: 'failureSpike',
      label: 'Notify me when payment failures spike',
      description: 'You\'ll get an email if your failure rate exceeds 5% within 15 minutes',
      why: 'This helps you catch issues early, often before customers start complaining',
      lastTriggered: 'Never',
      example: 'Last month, this alert helped catch a gateway issue 30 minutes after it started'
    },
    {
      id: 'noWebhook',
      label: 'Notify me if payment updates stop coming in',
      description: 'You\'ll get an email if we don\'t receive any payment updates for 30 minutes',
      why: 'If updates stop, it usually means something needs to be fixed in your gateway settings',
      lastTriggered: 'Yesterday at 3:42 PM',
      example: 'This prevented 2 hours of missed payment notifications last week'
    },
    {
      id: 'dailySummary',
      label: 'Send me a daily summary email',
      description: 'Get a quick overview of yesterday\'s payments every morning at 9 AM',
      why: 'Stay informed without having to check the dashboard every day',
      lastTriggered: 'Today at 9:00 AM',
      example: 'Most customers find this helpful for daily standups and reporting'
    }
  ];

  const chartData = [
  { time: '00:00', successful: 120, failed: 5 },
  { time: '04:00', successful: 98, failed: 3 },
  { time: '08:00', successful: 245, failed: 12 },
  { time: '12:00', successful: 380, failed: 18 },
  { time: '16:00', successful: 290, failed: 8 },
  { time: '20:00', successful: 165, failed: 6 },
  { time: '23:59', successful: 142, failed: 4 }
];

// Payment method distribution data (Pie Chart)
const paymentMethodData = [
  { name: 'UPI', value: 5840, percentage: 46.8 },
  { name: 'Cards', value: 3744, percentage: 30.0 },
  { name: 'Net Banking', value: 1872, percentage: 15.0 },
  { name: 'Wallets', value: 1024, percentage: 8.2 }
];



// Hourly transaction data (Bar Chart)
const hourlyData = [
  { hour: '6AM', transactions: 145, revenue: 287000 },
  { hour: '9AM', transactions: 320, revenue: 635000 },
  { hour: '12PM', transactions: 580, revenue: 1152000 },
  { hour: '3PM', transactions: 495, revenue: 983000 },
  { hour: '6PM', transactions: 425, revenue: 844000 },
  { hour: '9PM', transactions: 280, revenue: 556000 }
];

// Status distribution for Donut Chart
const statusData = [
  { name: 'Successful', value: 11920, color: '#10b981' },
  { name: 'Failed', value: 412, color: '#ef4444' },
  { name: 'Processing', value: 148, color: '#f59e0b' }
];

// Revenue over time (Area Chart)
const revenueData = [
  { day: 'Mon', revenue: 18.5, transactions: 1850 },
  { day: 'Tue', revenue: 22.3, transactions: 2230 },
  { day: 'Wed', revenue: 19.8, transactions: 1980 },
  { day: 'Thu', revenue: 25.6, transactions: 2560 },
  { day: 'Fri', revenue: 28.2, transactions: 2820 },
  { day: 'Sat', revenue: 24.8, transactions: 2480 },
  { day: 'Sun', revenue: 21.4, transactions: 2140 }
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

// Recent transactions data
const recentTransactions = [
  { id: 'TXN123456', amount: 5000, status: 'success', time: '2 mins ago', customer: 'John Doe' },
  { id: 'TXN123457', amount: 12500, status: 'success', time: '5 mins ago', customer: 'Sarah Smith' },
  { id: 'TXN123458', amount: 3200, status: 'failed', time: '8 mins ago', customer: 'Mike Johnson' },
  { id: 'TXN123459', amount: 8900, status: 'success', time: '12 mins ago', customer: 'Emma Wilson' },
  { id: 'TXN123460', amount: 15000, status: 'success', time: '15 mins ago', customer: 'David Brown' },
  { id: 'TXN123461', amount: 4500, status: 'processing', time: '18 mins ago', customer: 'Lisa Davis' },
  { id: 'TXN123462', amount: 7800, status: 'success', time: '22 mins ago', customer: 'Robert Taylor' },
  { id: 'TXN123463', amount: 2100, status: 'failed', time: '25 mins ago', customer: 'Jennifer Lee' }
];


export { paymentsData, menusData, webhookLogs, revenueData, statusData, chartData, hourlyData, paymentMethodData, alertsWithMetadata,recentTransactions,COLORS };