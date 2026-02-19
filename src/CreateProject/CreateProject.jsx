import React, { useEffect, useState } from 'react';
import { Copy, Check, AlertCircle } from 'lucide-react';
import { createProjectsApi, getProjectApi } from '../Network/ProjectApi';
import { data, replace, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


export default function CreateProject() {
  const [projectName, setProjectName] = useState('');
  const [environment, setEnvironment] = useState('test');
  const [selectedGateways, setSelectedGateways] = useState([]);
  const [alerts, setAlerts] = useState({
    failures: true,
    noUpdates: true,
    dailySummary: true,
  });
  const [isCreating, setIsCreating] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [projectId, setProjectId] = useState('');
  const [copiedUrl, setCopiedUrl] = useState('');
  const navigate = useNavigate();
  const gateways = [
    {
      id: '1',
      name: 'Cashfree',
      description: 'Receive payment updates from Cashfree Payments',
    },
   
  ];

  const createProject = async () =>{
    const responses = await createProjectsApi({
      'project_name':projectName,
      'gateway':selectedGateways
    });
    if(responses.status===200){
      navigate("/projects", {replace: true})
    }else{
      toast.error(responses.data['message']);
    }
     
  }
  const toggleGateway = (gatewayId) => {
    setSelectedGateways(prev =>
      prev.includes(gatewayId)
        ? prev.filter(id => id !== gatewayId)
        : [...prev, gatewayId]
    );
   
    
  };

  const handleCreateProject = async () => {
    createProject();
    setIsCreating(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const newProjectId = `proj_${Math.random().toString(36).substr(2, 9)}`;
    setProjectId(newProjectId);
    setIsCreating(false);
    setIsCreated(true);
  };

  const getWebhookUrl = (gatewayId) => {
    return `https://api.payeox.com/webhook/${projectId}/${gatewayId}`;
  };

  const copyWebhookUrl = (url) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(''), 2000);
  };

  if (isCreated) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-3xl mx-auto pt-20">
          <div className="mb-12">
            <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center mb-6">
              <Check className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-light mb-2">
              Project Created
            </h1>
            <p className="text-gray-500">
              {projectName}
            </p>
          </div>

          {selectedGateways.length > 0 && (
            <div className="mb-12">
              <h2 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
                Webhook URLs
              </h2>
              <div className="space-y-3">
                {selectedGateways.map((gatewayId) => {
                  const gateway = gateways.find(g => g.id === gatewayId);
                  const url = getWebhookUrl(gatewayId);
                  const isCopied = copiedUrl === url;
                  
                  return (
                    <div
                      key={gatewayId}
                      className="border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium">{gateway.name}</span>
                        <button
                          onClick={() => copyWebhookUrl(url)}
                          className="text-xs px-3 py-1.5 bg-white text-black hover:bg-gray-200 rounded transition-colors flex items-center gap-1.5"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3 h-3" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                      <code className="text-xs text-gray-400 font-mono break-all">
                        {url}
                      </code>
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Paste these URLs into your respective payment gateway dashboards
              </p>
            </div>
          )}

          <div className="mb-12">
            <h2 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
              Next Steps
            </h2>
            <div className="space-y-2">
              {[
                'Copy webhook URLs above',
                'Add them to your payment gateway settings',
                'Start receiving payment updates',
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-500">
                  <span className="text-xs">{idx + 1}.</span>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            ← Create Another Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
     <main className='flex'>
       <div className="max-w-2xl mx-auto px-8 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-3xl font-light mb-3">
            Create a New Project
          </h1>
          <p className="text-gray-500 text-sm">
            Set up a project to start tracking payments and payment updates from your gateways.
          </p>
        </div>

        {/* Section 1: Project Details */}
        <div className="mb-12">
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Project Name *
              </label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="My E-commerce Store"
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors"
              />
              <p className="text-xs text-gray-600 mt-1.5">This is only for your reference.</p>
            </div>

          </div>
        </div>

        {/* Section 2: Payment Gateways */}
        <div className="mb-12">
          <h2 className="text-sm text-gray-400 mb-3">Choose Payment Gateways</h2>
          <p className="text-xs text-gray-600 mb-4">You can add these later if you prefer</p>
          
          <div className="space-y-3 mb-4">
            {gateways.map((gateway) => (
              <button
                key={gateway.id}
                onClick={() => toggleGateway(gateway.id)}
                className={`w-full p-4 rounded-lg border text-left transition-colors ${
                  selectedGateways.includes(gateway.id)
                    ? 'bg-white text-black border-white'
                    : 'bg-black border-gray-800 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium mb-1">{gateway.name}</h3>
                    <p className={`text-xs ${
                      selectedGateways.includes(gateway.id) ? 'text-gray-600' : 'text-gray-500'
                    }`}>
                      {gateway.description}
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                    selectedGateways.includes(gateway.id)
                      ? 'bg-black border-black'
                      : 'border-gray-700'
                  }`}>
                    {selectedGateways.includes(gateway.id) && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
         
        </div>

        {/* Section 5: Security */}
        

        {/* Primary Action */}
        <div>
          <button
            onClick={createProject}
            disabled={!projectName.trim() || isCreating}
            className={`w-full py-3 rounded-lg text-sm font-medium transition-all ${
              !projectName.trim()
                ? 'bg-gray-900 text-gray-600 cursor-not-allowed'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            {isCreating ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-400 border-t-black rounded-full animate-spin"></div>
                Creating Project...
              </span>
            ) : (
              'Create Project'
            )}
          </button>
        </div>
      </div>
     </main>
     
    </div>
  );
}
