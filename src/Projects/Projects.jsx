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


  const [projects, setProjects] = useState([]);

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






  const getStatusInfo = (statusCode) => {
    switch (statusCode) {
      case 1: return { label: 'Active', bg: 'bg-green-500/20', text: 'text-green-400' };
      case 0: return { label: 'InActive', bg: 'bg-gray-500/20', text: 'text-gray-400' };
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
                      // handleOpenDrawer(projectData)
                      navigate("/projects/gateways", {
                        state: {
                          projectId: projectData.project_id,
                        },
                      });

                    }}
                    className="w-full px-4 py-2.5 bg-white hover:bg-gray-100 text-gray-900 text-sm font-medium rounded-lg transition-colors">
                    View

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
      </div>

    </SideNav>);
}


export default Projects;