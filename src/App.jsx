// src/App.jsx
import { useState } from "react";
import BootScreen from "./pages/BootScreen";
import UserMode from "./pages/user_mode/UserMode";
import RootMode from "./pages/root_mode/RootMode";
import FaultyTerminalBackground from "./components/FaultyTerminalBackground";

export default function App() {
  const [mode, setMode] = useState("boot"); // "boot" | "user" | "root"

  const goBoot = () => setMode("boot");
  const goUser = () => setMode("user");
  const goRoot = () => setMode("root");

  return (
    <>
      {/* full-screen animated background */}
      <FaultyTerminalBackground />

      {/* foreground content */}
      {mode === "boot" && (
        <BootScreen onSelectUser={goUser} onSelectRoot={goRoot} />
      )}

      {mode === "user" && (
        <UserMode onSwitchToRoot={goRoot} onBackToBoot={goBoot} />
      )}

      {mode === "root" && (
        <RootMode onSwitchToUser={goUser} onBackToBoot={goBoot} />
      )}
    </>
  );
}
