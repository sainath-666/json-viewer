"use client";

import React, { useState } from "react";
import JsonInput from "@/components/JsonInput";
import JsonPreview from "@/components/JsonPreview";
import Toolbar from "@/components/Toolbar"; // We need to update Toolbar to export properly or check my previous write

import { formatJson, minifyJson } from "@/utils/jsonUtils";

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
      // Do nothing on invalid JSON while typing
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
      setParsedJson(JSON.parse(minified)); // Update preview too
      setError(null);
    } catch (e) {
      setError("Invalid JSON: " + (e as Error).message);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonInput).then(() => {
      alert("Copied to clipboard!");
    });
  };

  const handleDownload = () => {
    if (!jsonInput) return;
    const blob = new window.Blob([jsonInput], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `json-data-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    setJsonInput("");
    setParsedJson(null);
    setError(null);
  };

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-20">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground">
              {"{ }"}
            </div>
            <h1 className="text-xl font-bold tracking-tight">
              JSON Viewer Tool
            </h1>
          </div>
          <nav className="hidden md:flex gap-4 text-sm font-medium text-muted-foreground">
            {/* Navigation Links can go here */}
          </nav>
        </div>
      </header>

      {/* Ad Section */}
      <div className="container mx-auto px-4 py-4">
        {/* Ad Space Removed */}
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-280px)] min-h-[600px]">
          {/* Left Pane: Input */}
          <div className="flex flex-col h-full bg-card rounded-xl border shadow-sm overflow-hidden">
            <div className="p-3 border-b bg-muted/30 flex justify-between items-center">
              <h2 className="font-semibold text-sm">JSON Input</h2>
              <span className="text-xs text-muted-foreground">
                {jsonInput.length} chars
              </span>
            </div>
            <Toolbar
              onFormat={handleFormat}
              onMinify={handleMinify}
              onCopy={handleCopy}
              onDownload={handleDownload}
              onClear={handleClear}
            />
            <div className="flex-1 relative">
              <JsonInput
                value={jsonInput}
                onChange={handleInputChange}
                error={error}
              />
            </div>
          </div>

          {/* Right Pane: Preview */}
          <div className="flex flex-col h-full bg-card rounded-xl border shadow-sm overflow-hidden">
            <div className="p-3 border-b bg-muted/30 flex justify-between items-center">
              <h2 className="font-semibold text-sm">Tree View</h2>
              <span className="text-xs text-muted-foreground">
                {parsedJson ? "Valid Object" : "Waiting..."}
              </span>
            </div>
            <div className="flex-1 overflow-hidden bg-[#272822]">
              <JsonPreview data={parsedJson} theme="monokai" />
            </div>
          </div>
        </div>

        {/* Bottom Ad Section */}
      </div>

      {/* Footer */}
      <footer className="border-t py-6 bg-muted/20">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} JSON Viewer Tool. Efficient & Secure.
          </p>
        </div>
      </footer>
    </main>
  );
}
