import { alertsWithMetadata } from "../Helper/Dummydata";
import { CheckCircle2, XCircle, Clock, Copy, Check, ChevronRight, AlertCircle, RefreshCw, Trash2, Eye, Play, Bell, BellOff, ChevronDown } from 'lucide-react';
import SideNav from '../Sidebar/SidenNav';
import { useState } from "react";
const Alert = () => {
    const [alerts, setAlerts] = useState({
        failureSpike: true,
        noWebhook: true,
        dailySummary: false
      });
    return (<>
          <SideNav>
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold text-slate-100 mb-2">
                  Email Alerts
                </h2>
                <p className="text-slate-400">
                  Get notified when important things happen - so you don't have to keep checking the dashboard
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 space-y-6">
                {alertsWithMetadata.map((alert) => (
                  <div
                    key={alert.id}
                    className="border border-slate-700 rounded-xl p-5 hover:bg-slate-700/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Bell className="w-5 h-5 text-slate-400" />
                          <h3 className="font-bold text-slate-200">
                            {alert.label}
                          </h3>
                        </div>

                        <p className="text-sm text-slate-400 mb-2">
                          {alert.description}
                        </p>

                        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-3">
                          <p className="text-xs text-blue-300">
                            <strong>Why this helps:</strong> {alert.why}
                          </p>
                        </div>

                        {alert.example && (
                          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3 mb-3">
                            <p className="text-xs text-emerald-300">
                              <strong>Real example:</strong> {alert.example}
                            </p>
                          </div>
                        )}

                        <p className="text-xs text-slate-500">
                          <strong>Last triggered:</strong> {alert.lastTriggered}
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          setAlerts({
                            ...alerts,
                            [alert.id]: !alerts[alert.id],
                          })
                        }
                        className={`relative w-14 h-7 rounded-full transition-colors ${alerts[alert.id] ? 'bg-blue-600' : 'bg-slate-600'
                          }`}
                      >
                        <div
                          className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${alerts[alert.id] ? 'left-8' : 'left-1'
                            }`}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Helper Tip */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm text-slate-300">
                    Alerts are sent to your registered email address. You can update your email in Settings.
                  </p>
                </div>
              </div>
            </div>
          </SideNav>
          </>);
    
}
export default Alert;