import { useState } from "react";

export default function ForgotPassword() {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const simulate = (cb) => {
    setLoading(true);
    setTimeout(() => { setLoading(false); cb(); }, 1000);
  };

  const handleEmailSubmit = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: "Enter a valid email address." });
      return;
    }
    setErrors({});
    simulate(() => setStep("otp"));
  };

  const handleOtpChange = (val, idx) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 5) document.getElementById(`otp-${idx + 1}`)?.focus();
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0)
      document.getElementById(`otp-${idx - 1}`)?.focus();
  };

  const handleOtpSubmit = () => {
    if (otp.join("").length < 6) {
      setErrors({ otp: "Enter the complete 6-digit code." });
      return;
    }
    setErrors({});
    simulate(() => setStep("password"));
  };

  const handlePasswordSubmit = () => {
    const errs = {};
    if (newPassword.length < 8) errs.newPassword = "Min. 8 characters required.";
    if (newPassword !== confirmPassword) errs.confirmPassword = "Passwords do not match.";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    simulate(() => setStep("success"));
  };

  const Eye = ({ open }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      {open
        ? <><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></>
        : <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M3 3l18 18"/>
      }
    </svg>
  );

  const inputClass = "w-full bg-black border border-zinc-800 text-white text-sm px-4 py-3 rounded-lg placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors duration-200";

  const Label = ({ children }) => (
    <label className="block text-xs text-zinc-500 mb-2 tracking-widest uppercase">{children}</label>
  );

  const ErrorMsg = ({ msg }) => msg ? <p className="mt-1.5 text-xs text-red-500">{msg}</p> : null;

  const Btn = ({ onClick, children }) => (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-100 disabled:opacity-40 transition-colors duration-200 flex items-center justify-center"
    >
      {loading
        ? <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
        : children}
    </button>
  );

  const stepList = ["email", "otp", "password"];
  const stepIndex = stepList.indexOf(step);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
     
      <div className="w-full max-w-sm">
       
        {/* Step dots */}
        {step !== "success" && (
          <div className="flex gap-1.5 mb-10 justify-center">
            {stepList.map((s, i) => (
              <div
                key={s}
                className="h-0.5 rounded-full transition-all duration-500"
                style={{ width: stepIndex === i ? 28 : 10, background: stepIndex >= i ? "#fff" : "#27272a" }}
              />
            ))}
          </div>
        )}

        {/* Card */}
        <div className="border border-zinc-900 rounded-2xl p-8" style={{ background: "#0a0a0a" }}>
          <div className=" flex items-center justify-center">
             <img src="/logos.png" alt="" srcset="" className=" flex items-center justify-between w-16 h-16 mb-8" />
          </div>
          {/* EMAIL */}
          {step === "email" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-white text-lg font-medium mb-1">Forgot password</h2>
                <p className="text-zinc-600 text-sm">We'll send a code to your email.</p>
              </div>
              <div>
                <Label>Email</Label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleEmailSubmit()}
                  placeholder="you@example.com"
                  className={inputClass}
                  autoFocus
                />
                <ErrorMsg msg={errors.email} />
              </div>
              <Btn onClick={handleEmailSubmit}>Send code</Btn>
            </div>
          )}

          {/* OTP */}
          {step === "otp" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-white text-lg font-medium mb-1">Check your email</h2>
                <p className="text-zinc-600 text-sm">
                  Code sent to <span className="text-zinc-400">{email}</span>
                </p>
              </div>
              <div>
                <Label>6-digit code</Label>
                <div className="flex gap-1">
                  {otp.map((d, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      maxLength={1}
                      value={d}
                      onChange={e => handleOtpChange(e.target.value, i)}
                      onKeyDown={e => handleOtpKeyDown(e, i)}
                      className="flex-1 h-12 w-12 bg-black border border-zinc-800 text-white text-center text-base rounded-lg focus:outline-none focus:border-zinc-500 transition-colors duration-200"
                    />
                  ))}
                </div>
                <ErrorMsg msg={errors.otp} />
              </div>
              <Btn onClick={handleOtpSubmit}>Verify</Btn>
              <p className="text-center text-zinc-700 text-xs">
                Didn't get it?{" "}
                <button className="text-zinc-400 hover:text-white transition-colors">Resend</button>
                {"  ·  "}
                <button onClick={() => setStep("email")} className="text-zinc-400 hover:text-white transition-colors">Change email</button>
              </p>
            </div>
          )}

          {/* PASSWORD */}
          {step === "password" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-white text-lg font-medium mb-1">New password</h2>
                <p className="text-zinc-600 text-sm">Choose something secure.</p>
              </div>
              <div className="space-y-4">
                <div>
                  <Label>New password</Label>
                  <div className="relative">
                    <input
                      type={showNew ? "text" : "password"}
                      value={newPassword}
                      onChange={e => setNewPassword(e.target.value)}
                      placeholder="Min. 8 characters"
                      className={inputClass + " pr-10"}
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowNew(v => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-300 transition-colors"
                    >
                      <Eye open={showNew} />
                    </button>
                  </div>
                  <ErrorMsg msg={errors.newPassword} />
                </div>
                <div>
                  <Label>Confirm password</Label>
                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                      onKeyDown={e => e.key === "Enter" && handlePasswordSubmit()}
                      placeholder="Re-enter password"
                      className={inputClass + " pr-10"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(v => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-300 transition-colors"
                    >
                      <Eye open={showConfirm} />
                    </button>
                  </div>
                  <ErrorMsg msg={errors.confirmPassword} />
                </div>
              </div>
              <Btn onClick={handlePasswordSubmit}>Reset password</Btn>
            </div>
          )}

          {/* SUCCESS */}
          {step === "success" && (
            <div className="text-center space-y-6 py-2">
              <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h2 className="text-white text-lg font-medium mb-1">Password updated</h2>
                <p className="text-zinc-600 text-sm">You can now sign in with your new password.</p>
              </div>
              <button
                onClick={() => {
                  setStep("email");
                  setEmail("");
                  setOtp(["","","","","",""]);
                  setNewPassword("");
                  setConfirmPassword("");
                }}
                className="w-full py-3 rounded-lg border border-zinc-800 text-zinc-500 text-sm hover:border-zinc-700 hover:text-zinc-300 transition-colors duration-200"
              >
                Back to sign in
              </button>
            </div>
          )}
        </div>

        {step === "email" && (
          <p className="text-center text-zinc-700 text-xs mt-6">
            Remembered it?{" "}
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Sign in</a>
          </p>
        )}
      </div>
    </div>
  );
}
