import { useLocation, useNavigate } from "react-router-dom";
import { getGatewaysApi, updateProjectApi, addGateways, getProjectApi } from "../Network/ProjectApi";
import SideNav from "../Sidebar/SidenNav";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import toast from "react-hot-toast";
import {
  Copy,
  Check,
  X,
  RefreshCw,
  ExternalLink,
} from "lucide-react";

export default function GatewayCards() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const [gateways, setGateways] = useState([]);
  const [selectedGateways, setSelectedGateways] = useState([]);
  const [originalGateways, setOriginalGateways] = useState([]);

  const [projectsFullData, setProjectsFullData] = useState(null);
  const [secretKey, setSecretKey] = useState("");
  const [copiedField, setCopiedField] = useState(null);

  /* -------------------- HELPERS -------------------- */
  const normalizeId = (id) => String(id);

  const getAllGateway = (id) => {
    if (id === 1 || id === "1") return "Cashfree";
    if (id === 4 || id === "4") return "Paytm";
    return "Unknown";
  };

  /* -------------------- TOGGLE -------------------- */
  const toggleGateway = (gatewayId) => {
    const id = normalizeId(gatewayId);
    setSelectedGateways((prev) =>
      prev.includes(id)
        ? prev.filter((gwId) => gwId !== id)
        : [...prev, id]
    );
  };

  /* -------------------- API -------------------- */
  const fetchGateways = async () => {
    try {
      const response = await getGatewaysApi({
        project_id: state.projectId,
      });

      if (response.status === 200) {
        const data = response.data?.gateways || [];
        setGateways(data);
        setSelectedGateways(
          data
            .filter((gw) => gw?.gateway_id)
            .map((gw) => normalizeId(gw.gateway_id))
        );
      } else {
        setGateways([]);
        setSelectedGateways([]);
      }
    } catch (err) {
      console.error("Failed to fetch gateways:", err);
      setGateways([]);
      setSelectedGateways([]);
    }
  };

  const UpdaeProject = async () => {
    const apiResponse = await updateProjectApi({
      webhook: projectsFullData.webhook_token,
      secret_key: secretKey,
    });

    if (apiResponse.status === 200) {
      toast.success(apiResponse.data.message);
      setOpen(false);
      fetchGateways();
    } else {
      toast.error(apiResponse.data.message);
    }
  };

  const AddGateway = async () => {
    const toAdd = selectedGateways.filter((id) => !originalGateways.includes(id));

    const apiResponse = await addGateways({
      project_id: state.projectId,
      gateway_id: toAdd,
    });

    if (apiResponse.status === 200) {
      toast.success(apiResponse.data.message);
      setOpenDialog(false);
      fetchGateways();
    } else {
      toast.error(apiResponse.data.message);
    }
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
     
    }
  }
  /* -------------------- EFFECTS -------------------- */
  useEffect(() => {
    fetchGateways();
    checkProject();
  }, []);

  useEffect(() => {
    if (openDialog) {
      const current = gateways
        .filter((gw) => gw?.gateway_id)
        .map((gw) => normalizeId(gw.gateway_id));
      setSelectedGateways(current);
      setOriginalGateways(current);
    }
  }, [openDialog, gateways]);

  /* -------------------- STATIC -------------------- */
  const allgateways = [
    {
      id: "1",
      name: "Cashfree",
      description: "Receive payment updates from Cashfree Payments",
    },
    {
      id: "4",
      name: "Paytm",
      description: "Receive payment updates from Paytm Payments",
    },
  ];

  const handleOpenDrawer = (projectData) => {
    setProjectsFullData(projectData);
    setOpen(true);
  };

  const copyToClipboard = async (text, field) => {
    if (!text) return;
    await navigator.clipboard.writeText(String(text));
    setCopiedField(field);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedField(null), 2000);
  };

  /* -------------------- COMPUTED -------------------- */
  const toAdd = selectedGateways.filter((id) => !originalGateways.includes(id));
  const toRemove = originalGateways.filter((id) => !selectedGateways.includes(id));
  const hasChanges = toAdd.length > 0 || toRemove.length > 0;

  /* ==================== UI ==================== */
  return (
    <SideNav>
      <div
        className="min-h-screen p-10"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, #0a1f2e 0%, #000000 60%)",
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
                <span className="text-white font-bold text-lg">
                  {getAllGateway(gw.gateway_id)}
                </span>
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
                <p className="text-white font-mono text-sm truncate">
                  {gw.project_id}
                </p>
                <p
                  className="font-mono text-xs mt-1 truncate"
                  style={{ color: "#4a5568" }}
                >
                  {gw.webhook_token}
                </p>
              </div>

              <button
                onClick={() => handleOpenDrawer(gw)}
                className="w-full text-black text-sm font-semibold py-3 rounded-xl"
                style={{ backgroundColor: "#ffffff" }}
              >
                View Settings
              </button>
            </div>
          ))}

          <button
            onClick={() => setOpenDialog(true)}
            className="rounded-2xl p-5 flex flex-col items-center justify-center gap-3 min-h-[180px]"
            style={{
              backgroundColor: "#0d1117",
              border: "1px dashed #1c2333",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#1c2333" }}
            >
              +
            </div>
            <span className="text-sm font-semibold" style={{ color: "#4a5568" }}>
              Add Gateway
            </span>
          </button>
        </div>

        {/* -------- Dialog -------- */}
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="sm:max-w-sm bg-black text-white border-1">
            <DialogHeader>
              <DialogTitle>Manage Payment Gateways</DialogTitle>
              <DialogDescription>
                Project Id: {state.projectId}
              </DialogDescription>
            </DialogHeader>

            {allgateways.map((gateway) => {
              const id = normalizeId(gateway.id);
              const isSelected = selectedGateways.includes(id);
              const wasOriginal = originalGateways.includes(id);

              // Badge logic
              let badge = null;
              if (wasOriginal && !isSelected) {
                badge = (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                    Will Remove
                  </span>
                );
              } else if (!wasOriginal && isSelected) {
                badge = (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                    Will Add
                  </span>
                );
              } else if (wasOriginal && isSelected) {
                badge = (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    Connected
                  </span>
                );
              }

              return (
                <button
                  key={gateway.id}
                  onClick={() => toggleGateway(gateway.id)}
                  className={`w-full p-4 rounded-lg border text-left transition-colors ${
                    isSelected
                      ? "bg-white text-black border-white"
                      : "bg-black border-gray-800 hover:border-gray-600"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-medium">{gateway.name}</h3>
                        {badge}
                      </div>
                      <p className={`text-xs ${isSelected ? "text-gray-600" : "text-gray-500"}`}>
                        {gateway.description}
                      </p>
                    </div>

                    <div
                      className={`w-5 h-5 rounded border flex items-center justify-center ml-3 flex-shrink-0 ${
                        isSelected ? "bg-black border-black" : "border-gray-700"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-white" />}
                    </div>
                  </div>
                </button>
              );
            })}

            <DialogFooter>
              <button
                onClick={AddGateway}
                disabled={!hasChanges}
                className={`w-full px-4 py-2.5 text-white text-sm font-medium rounded-lg transition-all ${
                  hasChanges
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed opacity-50"
                }`}
              >
                {hasChanges
                  ? `Save Changes${toAdd.length > 0 ? ` · +${toAdd.length}` : ""}${toRemove.length > 0 ? ` · -${toRemove.length}` : ""}`
                  : "No Changes"}
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* -------- Drawer -------- */}
        <Drawer open={open} onOpenChange={setOpen} direction="right">
          <DrawerContent className="h-full w-full sm:max-w-lg bg-slate-900">
            <DrawerHeader className="bg-linear-to-r from-slate-900 text-white">
              <DrawerTitle className="text-2xl text-white font-bold">
                Project Details
              </DrawerTitle>
              <DrawerDescription className="text-indigo-100">
                {projectsFullData && projectsFullData.project_name}
              </DrawerDescription>
            </DrawerHeader>

            <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-slate-900 to-slate-800">
              {projectsFullData ? (
                <div className="space-y-5">
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

                  <div className="group">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 block">
                      Project ID
                    </label>
                    <div className="bg-slate-800/50 rounded-lg px-4 py-3 border-2 border-slate-700 group-hover:border-indigo-500 transition-colors shadow-lg backdrop-blur-sm flex items-center gap-3">
                      <span className="text-slate-100 font-mono text-sm flex-1 break-all">
                        {projectsFullData.project_id}
                      </span>
                      <button
                        onClick={() => copyToClipboard(projectsFullData.project_id, "id")}
                        className="flex-shrink-0 p-2 hover:bg-indigo-500/20 rounded-lg transition-colors"
                      >
                        {copiedField === "id" ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-slate-400" />
                        )}
                      </button>
                    </div>
                  </div>

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
                            onClick={() => window.open(projectsFullData.callbackurl, "_blank")}
                            className="p-2 hover:bg-indigo-500/20 rounded-lg transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 text-slate-400" />
                          </button>
                          <button
                            onClick={() => copyToClipboard(projectsFullData.callbackurl, "url")}
                            className="p-2 hover:bg-indigo-500/20 rounded-lg transition-colors"
                          >
                            {copiedField === "url" ? (
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
                    <label className="block text-sm text-gray-400 mb-2">
                      Secret Key *
                    </label>
                    {projectsFullData.secret_key ? (
                      <div className="flex items-center gap-3">
                        <code className="bg-slate-800/50 border text-white border-slate-700 rounded-lg px-4 py-2 font-mono text-sm break-all flex-1">
                          {secretKey || projectsFullData.secret_key}
                        </code>
                        <button
                          onClick={() => copyToClipboard(projectsFullData.secret_key, "secret")}
                          className="p-2 hover:bg-indigo-500/20 rounded-lg transition-colors"
                        >
                          {copiedField === "secret" ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-slate-400" />
                          )}
                        </button>
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={secretKey}
                        onChange={(e) => setSecretKey(e.target.value)}
                        placeholder="Enter your secret key"
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-100"
                      />
                    )}
                  </div>

                  <div className="group">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 block">
                      Status
                    </label>
                    <div className="bg-slate-800/50 rounded-lg px-4 py-3 border-2 border-slate-700">
                      {projectsFullData.status === 1 ? (
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm">
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-700/50 text-slate-400 rounded-full text-sm">
                          Inactive
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64">
                  <X className="w-8 h-8 text-slate-500" />
                </div>
              )}
            </div>

            <DrawerFooter className="border-t border-slate-700 bg-slate-900">
              <button
                onClick={UpdaeProject}
                className="w-full px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Update
              </button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </SideNav>
  );
}