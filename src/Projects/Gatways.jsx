import SideNav from "../Sidebar/SidenNav";

const gateways = [
  {
    name: "PayLink",
    status: "Connected",
    url: "https://api.payeox.com/v1/callback/wh...",
    id: "5203a2f0-2d36-4f06-a5ab-e1ebe9f1ccd4",
  },
  {
    name: "Stripe",
    status: "Connected",
    url: "https://hooks.stripe.com/v1/callback/wh...",
    id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  },
  {
    name: "PayPal",
    status: "Disconnected",
    url: "https://api.paypal.com/v1/webhook/wh...",
    id: "f9e8d7c6-b5a4-3210-fedc-ba9876543210",
  },
  {
    name: "Razorpay",
    status: "Connected",
    url: "https://api.razorpay.com/v1/callback/wh...",
    id: "11223344-5566-7788-99aa-bbccddeeff00",
  },
  {
    name: "Square",
    status: "Disconnected",
    url: "https://connect.squareup.com/v2/webhook...",
    id: "aabbccdd-eeff-0011-2233-445566778899",
  },
  {
    name: "Adyen",
    status: "Connected",
    url: "https://live.adyen.com/v1/callback/wh...",
    id: "deadbeef-cafe-babe-f00d-0123456789ab",
  },
];

export default function GatewayCards() {
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
              <span className="text-white font-bold text-lg">{gw.name}</span>
              <span
                className="text-sm font-medium px-4 py-1 rounded-full"
                style={
                  gw.status === "Connected"
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
                {gw.status}
              </span>
            </div>

            <div>
              <p className="text-white font-mono text-sm truncate">{gw.url}</p>
              <p className="font-mono text-xs mt-1 truncate" style={{ color: "#4a5568" }}>
                {gw.id}
              </p>
            </div>

            <button
              className="w-full text-black text-sm font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#ffffff" }}
            >
              View Settings
            </button>
          </div>
        ))}
      </div>
    </div>
    </SideNav>
  );
}