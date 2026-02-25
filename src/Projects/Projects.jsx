import { CheckCircle2, XCircle, Clock, Copy, Check, X, ChevronRight, AlertCircle, RefreshCw, Trash2, Eye, Play, Bell, BellOff, ChevronDown, ExternalLink } from 'lucide-react';
import SideNav from '../Sidebar/SidenNav';
import { getProjectApi, updateProjectApi } from '../Network/ProjectApi';
import { useEffect, useState } from 'react';
import { Spinner } from "@/components/ui/spinner"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
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
const Projects = () => {
  const [isProjectExist, setisProjectExist] = useState(false);
  const [open, setOpen] = useState(false)

  const [projects, setProjects] = useState([]);
  const [projectsFullData, setProjectsFullData] = useState([]);
  const [secretKey, setSecretKey] = useState('');
  const navigate = useNavigate();

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
      project_id: projectsFullData.project_id,
      secret_key: secretKey
    });
    if (apiResponse.status === 200) {
      toast.success(apiResponse.data['message']);
      setOpen(false);
      checkProject();
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
  const [copiedField, setCopiedField] = useState(null);

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



  const getStatusInfo = (statusCode) => {
    switch (statusCode) {
      case 1: return { label: 'Connected', bg: 'bg-green-500/20', text: 'text-green-400' };
      case 0: return { label: 'Not Connected', bg: 'bg-gray-500/20', text: 'text-gray-400' };
      case 2: return { label: 'Error', bg: 'bg-red-500/20', text: 'text-red-400' };
      default: return { label: 'Unknown', bg: 'bg-gray-500/20', text: 'text-gray-400' };
    }
  };

  useEffect(() => {
    checkProject();
  }, [])


  return (
    <SideNav>

      <div className="space-y-6 animate-fadeIn  p-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-100 mb-2">Projects </h2>
        </div>



        {/* Project Error Alert - Friendly guidance */}


        {
          isProjectExist ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
            {
              projects.map((projectData, index) => (
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white">{projectData.project_name}</h3>
                    </div>
                    <span className={`text-sm px-3 py-1 rounded-full ${getStatusInfo(projectData.status).bg} ${getStatusInfo(projectData.status).text}`}>
                      {getStatusInfo(projectData.status).label}
                    </span>
                  </div>

                  <div className="space-y-1 mb-5">
                    <p className="text-sm text-gray-400 font-mono truncate">
                      {projectData.url}
                    </p>
                    <p className="text-xs text-gray-500">
                      {projectData.project_id}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      handleOpenDrawer(projectData)

                    }}
                    className="w-full px-4 py-2.5 bg-white hover:bg-gray-100 text-gray-900 text-sm font-medium rounded-lg transition-colors">
                    {getStatusInfo(projectData.status).label === 'Connected' ? 'View Settings' :
                      getStatusInfo(projectData.status).label === 'Not Connected' ? 'Set Up' :
                        'Fix Setup'}
                  </button>
                </div>

              ))
            }

          </div>) : (<main>
            <div className="flex items-center justify-center h-screen gap-3">
              <Spinner className="size-9 text-white" />
              <p className='text-white'>Checking Project Status</p>
            </div>
          </main>)
        }
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
                      Project Name
                    </label>
                    <div className="bg-slate-800/50 rounded-lg px-4 py-3 border-2 border-slate-700 group-hover:border-indigo-500 transition-colors shadow-lg backdrop-blur-sm">
                      <span className="text-slate-100 font-medium">
                        {projectsFullData.project_name}
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
                          {projectsFullData.url}
                        </span>
                        <div className="flex gap-2 flex-shrink-0">
                          <button
                            onClick={() => window.open(projectsFullData.url, '_blank')}
                            className="p-2 hover:bg-indigo-500/20 rounded-lg transition-colors"
                            title="Open in new tab"
                          >
                            <ExternalLink className="w-4 h-4 text-slate-400" />
                          </button>
                          <button
                            onClick={() => copyToClipboard(projectsFullData.url, 'url')}
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
                              <a href="https://" className='text-white text-sm ml-3'>Guide me How to setup ?</a>
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
                    <p className="text-slate-500 text-sm mt-1">Project details could not be loaded</p>
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
      </div>

    </SideNav>);
}


export default Projects;