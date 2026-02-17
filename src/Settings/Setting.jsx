const Setting = () => {
    return (          
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold text-slate-100 mb-2">Project Settings</h2>
                <p className="text-slate-400">Manage your project configuration</p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Project Name</label>
                  <input
                    type="text"
                    defaultValue="My E-commerce Store"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-slate-500 mt-2">This is just a label to help you identify this project</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Environment</label>
                  <select className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Test Mode (for trying things out)</option>
                    <option>Live Mode (for real payments)</option>
                  </select>
                  <p className="text-xs text-slate-500 mt-2">
                    Test mode uses sandbox credentials. Switch to Live when you're ready to accept real payments from customers.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Security Key</label>
                  <p className="text-xs text-slate-400 mb-3">This key helps us verify that payment updates are authentic. Nothing will break unless you change it.</p>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      value="••••••••••••••••"
                      readOnly
                      className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-400"
                    />
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
                      <RefreshCw className="w-4 h-4" />
                      Generate New Key
                    </button>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 mt-3">
                    <p className="text-xs text-amber-300">
                      <strong>If you generate a new key:</strong> You'll need to update this key in all your payment provider dashboards. Your existing setup will stop working until you update them. This usually takes 5-10 minutes per provider.
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Last changed: Never
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>

              {/* Delete Project Section - Calm and informative */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Trash2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-200 mb-2">Delete This Project</h3>
                    <p className="text-sm text-slate-300 mb-4">
                      If you delete this project, all your payment records, settings, and logs will be permanently removed. You won't be able to recover this data.
                    </p>
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-slate-200 mb-2">What will be deleted:</p>
                      <ul className="space-y-1.5 text-sm text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-slate-500 mt-0.5">•</span>
                          <span>All payment records and transaction history</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-500 mt-0.5">•</span>
                          <span>All technical logs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-500 mt-0.5">•</span>
                          <span>Payment provider connections and settings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-500 mt-0.5">•</span>
                          <span>All alert preferences</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-xs text-slate-400 mb-4">This won't affect your actual payment provider accounts - it only removes data from Payeox.</p>
                    <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
                      <Trash2 className="w-4 h-4" />
                      Delete This Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
    );
}
export default Setting;