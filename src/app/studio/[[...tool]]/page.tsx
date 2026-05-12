"use client";

import { NextStudio } from "next-sanity/studio";
import { useState } from "react";
import config from "../../../../sanity.config";

const STUDIO_PASSWORD = process.env.NEXT_PUBLIC_STUDIO_PASSWORD || "yogaadi2024";

export default function StudioPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === STUDIO_PASSWORD) {
      setAuthenticated(true);
      setError(false);
      // Store in sessionStorage so it persists during the session
      if (typeof window !== "undefined") {
        sessionStorage.setItem("studio_auth", "true");
      }
    } else {
      setError(true);
    }
  };

  // Check sessionStorage on load
  if (!authenticated && typeof window !== "undefined") {
    if (sessionStorage.getItem("studio_auth") === "true") {
      setAuthenticated(true);
    }
  }

  if (!authenticated) {
    return (
      <div className="fixed inset-0 bg-[#1A1A1A] flex items-center justify-center z-[9999]">
        <div className="w-full max-w-sm px-6">
          <h1 className="font-display font-bold text-2xl text-white mb-2">
            Studio Access
          </h1>
          <p className="text-[#9B9B9B] text-sm mb-8 font-mono">
            Enter password to access the content studio.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Password"
                className="w-full border-b-2 border-[#333] bg-transparent py-3 text-white placeholder:text-[#6B6B6B] focus:border-[#FF4D00] focus:outline-none transition-colors duration-200 font-mono text-sm"
                autoFocus
              />
              {error && (
                <p className="text-[#FF4D00] text-xs font-mono mt-2 uppercase tracking-wider">
                  Incorrect password
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full border-2 border-white px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-white hover:bg-white hover:text-[#1A1A1A] transition-colors duration-200"
            >
              Enter Studio
            </button>
          </form>

          <p className="text-[#6B6B6B] text-[10px] font-mono uppercase tracking-wider mt-8 text-center">
            Unauthorized access is prohibited
          </p>
        </div>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
