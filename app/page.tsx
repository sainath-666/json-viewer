"use client";

import React, { useState } from "react";
import JsonInput from "@/components/JsonInput";
import JsonPreview from "@/components/JsonPreview";
import Toolbar from "@/components/Toolbar";
import { formatJson, minifyJson } from "@/utils/jsonUtils";
import { Code2, Network } from "lucide-react";

export default function Home() {
  const [jsonInput, setJsonInput] = useState<string>("");
  const [parsedJson, setParsedJson] = useState<object | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (value: string) => {
    setJsonInput(value);
    if (!value.trim()) {
      setParsedJson(null);
      setError(null);
      return;
    }
    try {
      const parsed = JSON.parse(value);
      setParsedJson(parsed);
      setError(null);
    } catch {
      // Do nothing on valid typings errors
    }
  };

  const handleFormat = () => {
    if (!jsonInput) return;
    try {
      const formatted = formatJson(jsonInput);
      setJsonInput(formatted);
      setParsedJson(JSON.parse(formatted));
      setError(null);
    } catch (e) {
      setError("Invalid JSON: " + (e as Error).message);
    }
  };

  const handleMinify = () => {
    if (!jsonInput) return;
    try {
      const minified = minifyJson(jsonInput);
      setJsonInput(minified);
      setParsedJson(JSON.parse(minified));
      setError(null);
    } catch (e) {
      setError("Invalid JSON: " + (e as Error).message);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonInput).then(() => {
      // Optional: Add a toast notification here
    });
  };

  const handleDownload = () => {
    if (!jsonInput) return;
    const blob = new window.Blob([jsonInput], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `data-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    setJsonInput("");
    setParsedJson(null);
    setError(null);
  };

  return (
    <main className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 relative overflow-hidden">
      {/* Abstract Glowing Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-500/20 blur-[150px] mix-blend-screen" />
      </div>

      <div className="w-full max-w-[1600px] flex-1 flex flex-col gap-8">
        {/* Premium Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel px-6 py-4 rounded-3xl mx-auto w-full">
          <div className="relative group flex items-center gap-4 cursor-pointer">
            <div className="p-2.5 bg-primary/10 rounded-2xl border border-primary/20 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-10 h-10 object-contain drop-shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-300 to-blue-400">
                JSON<span className="font-light text-foreground">Viewer</span>
              </h1>
              <p className="text-sm font-medium text-white/40 tracking-wide hidden sm:block">
                Advanced structural analysis & formatting
              </p>
            </div>
          </div>

          <div className="flex bg-black/30 rounded-2xl p-2 border border-white/5">
            <Toolbar
              onFormat={handleFormat}
              onMinify={handleMinify}
              onCopy={handleCopy}
              onDownload={handleDownload}
              onClear={handleClear}
            />
          </div>
        </header>

        {/* Main Interface Layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[70vh]">
          {/* Editor Pane */}
          <div className="glass-panel flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-primary/5 hover:shadow-2xl hover:border-primary/20 group relative border border-white/10">
            <div className="border-b border-white/10 bg-gradient-to-r from-black/40 to-black/10 p-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                  <Code2 className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-semibold tracking-wide text-white/90">
                  Source Edit
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
                  {jsonInput.length} chars
                </span>
              </div>
            </div>
            <div className="flex-1 relative bg-black/20">
              <JsonInput
                value={jsonInput}
                onChange={handleInputChange}
                error={error}
              />
            </div>
          </div>

          {/* Tree Tree Pane */}
          <div className="glass-panel flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-purple-500/5 hover:shadow-2xl hover:border-purple-500/20 shadow-xl border border-white/10">
            <div className="border-b border-white/10 bg-gradient-to-r from-black/40 to-black/10 p-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                  <Network className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-semibold tracking-wide text-white/90">
                  Interactive Tree
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${parsedJson ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" : "bg-amber-400/50 blink"}`}
                />
                <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
                  {parsedJson ? "Valid Structure" : "Waiting Input"}
                </span>
              </div>
            </div>
            <div className="flex-1 relative bg-black/40 p-2">
              <JsonPreview data={parsedJson} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
