import { useLocation, useNavigate } from "react-router-dom";
import { getGatewaysApi, getProjectApi, updateProjectApi } from "../Network/ProjectApi";
import SideNav from "../Sidebar/SidenNav";
import {  useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,

} from "@/components/ui/dialog"
import toast from 'react-hot-toast';
import { CheckCircle2, XCircle, Clock, Copy, Check, X, ChevronRight, AlertCircle, RefreshCw, Trash2, Eye, Play, Bell, BellOff, ChevronDown, ExternalLink } from 'lucide-react';



export default function GatewayCards() {
  const [open, setOpen] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedGateways, setSelectedGateways] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectsFullData, setProjectsFullData] = useState([]);
  const [secretKey, setSecretKey] = useState('');
    const [copiedField, setCopiedField] = useState(null);
  const [isProjectExist, setisProjectExist] = useState(false);
  const navigate = useNavigate();

 const { state } = useLocation();
 const [gateways, setGateways] = useState([]);



 const toggleGateway = (gatewayId) => {
    setSelectedGateways(prev =>
      prev.includes(gatewayId)
        ? prev.filter(id => id !== gatewayId)
        : [...prev, gatewayId]
    );
   
    
  };

   const checkProject = async () => {
    const apiResponse = await getProjectApi();
    if (apiResponse.data['status'] === "fail" && apiResponse.status === 200) {
      navigate("/createProject", { replace: true })
      return;
    }
    if (apiResponse.status === 400) {
      toast.error(apiResponse.data['message'])
      return;
    }
    else {
      setisProjectExist(true);
      setProjects(apiResponse.data['project']);
    }
  }

   const UpdaeProject = async () => {
    const apiResponse = await updateProjectApi({
      webhook: projectsFullData.webhook_token,
      secret_key: secretKey
    });
    console.log(apiResponse.data);
    
    if (apiResponse.status === 200) {
      toast.success(apiResponse.data['message']);
      setOpen(false);
      fetchGateways();
      return;
    }
    else {
      toast.error(apiResponse.data['message']);
    }


  }

    const handleOpenDrawer = (projectData) => {
    setProjectsFullData(projectData)
    setOpen(true)
  }

  const copyToClipboard = async (text, field) => {
    try {
      if (!text) return;

      await navigator.clipboard.writeText(String(text));

      setCopiedField(field);
      toast.success("Copied to clipboard!");
      setTimeout(() => {
        setCopiedField(null);
      }, 2000);

    } catch (err) {
      console.error("Copy failed:", err);
      alert("Copy failed. Please copy manually.");
    }
  };
    const fetchGateways = async () => { 
    const responseGateways = await getGatewaysApi({
      "project_id": state.projectId,
    });
    if(responseGateways.status === 200){
      setGateways(responseGateways.data['gateways']);
    }
    else{
      setGateways([]);
    }
  }
   const getAllGateway = (id)=>{
    if(id === 1) return "Cashfree";
    if(id === 4) return "Paytm";
    return "Unknown";
   }
   useEffect(()=>{
    fetchGateways();
   },[])

  return (
    <SideNav>
    <div
      className="min-h-screen p-10"
      style={{
        background: "radial-gradient(ellipse at bottom right, #0a1f2e 0%, #000000 60%)",
      }}
    >
      <h1 className="text-white text-3xl font-bold mb-8">Projects</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
  {gateways.map((gw) => (
    <div
      key={gw.id}
      className="rounded-2xl p-5 flex flex-col gap-4"
      style={{ backgroundColor: "#0d1117", border: "1px solid #1c2333" }}
    >
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-lg">{getAllGateway(gw.gateway_id)}</span>
        <span
          className="text-sm font-medium px-4 py-1 rounded-full"
          style={
            gw.status === 1
              ? {
                  background: "rgba(34,197,94,0.15)",
                  color: "#4ade80",
                  border: "1px solid rgba(34,197,94,0.25)",
                }
              : {
                  background: "rgba(239,68,68,0.15)",
                  color: "#f87171",
                  border: "1px solid rgba(239,68,68,0.25)",
                }
          }
        >
          {gw.status === 1 ? "Connected" : "Disconnected"}
        </span>
      </div>

      <div>
        <p className="text-white font-mono text-sm truncate">{gw.project_id}</p>
        <p className="font-mono text-xs mt-1 truncate" style={{ color: "#4a5568" }}>
          {gw.webhook_token}
        </p>
      </div>

      <button
        onClick={() => { handleOpenDrawer(gw); }}
        className="w-full text-black text-sm font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
        style={{ backgroundColor: "#ffffff" }}
      >
        View Settings
      </button>
    </div>
  ))}

  {/* ── Plus Card ── */}
  <button
    onClick={()=> setOpenDialog(true)}
    className="rounded-2xl p-5 flex flex-col items-center justify-center gap-3 min-h-[180px] hover:opacity-80 transition-opacity"
    style={{
      backgroundColor: "#0d1117",
      border: "1px dashed #1c2333",
    }}
  >
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center"
      style={{ backgroundColor: "#1c2333" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#ffffff"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </div>
    <span className="text-sm font-semibold" style={{ color: "#4a5568" }}>
      Add Gateway
    </span>
  </button>
</div>
              <Drawer open={open} onOpenChange={setOpen} direction="right">
          <DrawerContent className="h-full w-full sm:max-w-lg bg-slate-900">
            {/* Header with Gradient */}
            <DrawerHeader className="bg-linear-to-r from-slate-900  text-white">
              <DrawerTitle className="text-2xl text-white font-bold">
                Project Details
              </DrawerTitle>
              <DrawerDescription className="text-indigo-100">
                {projectsFullData && projectsFullData.project_name}
              </DrawerDescription>
            </DrawerHeader>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-slate-900 to-slate-800">
              {projectsFullData ? (
                <div className="space-y-5">
                  {/* Project Name */}
                  <div className="group">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 block">
                      Gateway Name
                    </label>
                    <div className="bg-slate-800/50 rounded-lg px-4 py-3 border-2 border-slate-700 group-hover:border-indigo-500 transition-colors shadow-lg backdrop-blur-sm">
                      <span className="text-slate-100 font-medium">
                        {getAllGateway(projectsFullData.gateway_id)}
                      </span>
                    </div>
                  </div>

                  {/* Project ID */}
                  <div className="group">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 block">
                      Project ID
                    </label>
                    <div className="bg-slate-800/50 rounded-lg px-4 py-3 border-2 border-slate-700 group-hover:border-indigo-500 transition-colors shadow-lg backdrop-blur-sm flex items-center gap-3">
                      <span className="text-slate-100 font-mono text-sm flex-1 break-all">
                        {projectsFullData.project_id}
                      </span>
                      <button
                        onClick={() => copyToClipboard(projectsFullData.project_id, 'id')}
                        className="flex-shrink-0 p-2 hover:bg-indigo-500/20 rounded-lg transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedField === 'id' ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-slate-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Callback URL */}
                  <div className="group">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 block">
                      Callback URL
                    </label>
                    <div className="bg-slate-800/50 rounded-lg px-4 py-3 border-2 border-slate-700 group-hover:border-indigo-500 transition-colors shadow-lg backdrop-blur-sm">
                      <div className="flex items-start gap-3">
                        <span className="text-slate-100 font-mono text-sm flex-1 break-all">
                          {projectsFullData.callbackurl}
                        </span>
                        <div className="flex gap-2 flex-shrink-0">
                          <button
                            onClick={() => window.open(projectsFullData.callbackurl, '_blank')}
                            className="p-2 hover:bg-indigo-500/20 rounded-lg transition-colors"
                            title="Open in new tab"
                          >
                            <ExternalLink className="w-4 h-4 text-slate-400" />
                          </button>
                          <button
                            onClick={() => copyToClipboard(projectsFullData.callbackurl, 'url')}
                            className="p-2 hover:bg-indigo-500/20 rounded-lg transition-colors"
                            title="Copy to clipboard"
                          >
                            {copiedField === 'url' ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4 text-slate-400" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          Secret Key *
                        </label>
                        {
                          projectsFullData.secret_key ? (
                            <div className="flex items-center gap-3">
                              <code className="bg-slate-800/50 border text-white border-slate-700 rounded-lg px-4 py-2 font-mono text-sm break-all flex-1">
                                {secretKey || projectsFullData.secret_key}
                              </code>
                              <button
                                onClick={() => copyToClipboard(projectsFullData.secret_key, 'secret')}
                                className="p-2 hover:bg-indigo-500/20 rounded-lg transition-colors"
                                title="Copy to clipboard"
                              >
                                {copiedField === 'secret' ? (
                                  <Check className="w-4 h-4 text-green-400" />
                                ) : (
                                  <Copy className="w-4 h-4 text-slate-400" />
                                )}
                              </button>
                            </div>
                          ) : (

                            <div className='flex flex-col gap-2'>
                              <input
                                type="text"
                                value={secretKey}
                                onChange={(e) => setSecretKey(e.target.value)}
                                placeholder="Enter your secret key"
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              />
                              {/* <a href="https://" className='text-white text-sm ml-3'>Guide me How to setup ?</a> */}
                            </div>
                          )
                        }
                        <p className="text-xs text-gray-600 mt-1.5">This is only for verify your Payment.</p>
                      </div>

                    </div>
                  </div>

                  {/* Status */}
                  <div className="group">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 block">
                      Status
                    </label>
                    <div className="bg-slate-800/50 rounded-lg px-4 py-3 border-2 border-slate-700 shadow-lg backdrop-blur-sm">
                      {projectsFullData.status === 1 ? (
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full font-semibold text-sm border border-green-500/30">
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-700/50 text-slate-400 rounded-full font-semibold text-sm border border-slate-600">
                          <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
                          Inactive
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-slate-700">
                      <X className="w-8 h-8 text-slate-500" />
                    </div>
                    <p className="text-slate-300 font-medium">No Data Available</p>
                    <p className="text-slate-500 text-sm mt-1">Gateways details could not be loaded</p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <DrawerFooter className="border-t border-slate-700 bg-slate-900">
              <button
                onClick={() => { UpdaeProject() }}
                className="w-full px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <RefreshCw className="w-5 h-5" />
                Update
              </button>

            </DrawerFooter>
          </DrawerContent>
        </Drawer>

         <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <form>
       
        <DialogContent className="sm:max-w-sm bg-black text-white border-1">
          <DialogHeader>
            <DialogTitle>Add Payment Gateway</DialogTitle>
            <DialogDescription>
              Project Id: {state.projectId}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
    </div>
    </SideNav>
  );
}