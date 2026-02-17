import { webhookLogs } from "../Helper/Dummydata";
import { CheckCircle2, XCircle, Clock, Copy,CreditCard, Check, ChevronRight, AlertCircle, RefreshCw, Trash2, Eye, Play, Bell, BellOff, ChevronDown } from 'lucide-react';
import SideNav from "../Sidebar/SidenNav";

const Events = () => {
   
     
  return (
         <SideNav>
         <main className="p-6">
           <h1 className="text-2xl font-bold text-white mb-6 animate-fadeIn">Events</h1>
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <EnhancedMetric
              label="Total Events"
              value={"₹" + "12,500"}
              change={{ type: 'up', value: '+18%' }}
              icon={CreditCard}
              gradient="bg-gradient-to-br from-purple-500 to-pink-500"
            />
              <EnhancedMetric
              label="Today's Events"
              value={"₹" + "12,500"}
              change={{ type: 'up', value: '+18%' }}
              icon={CreditCard}
              gradient="bg-gradient-to-br from-purple-500 to-pink-500"
            />
            </div>
            </div>
         </main>
            </SideNav>
          
  );
}
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
export default Events;