"use client";

import React, { useState } from "react";
import JsonInput from "@/components/JsonInput";
import JsonPreview from "@/components/JsonPreview";
import Toolbar from "@/components/Toolbar";
import { formatJson } from "@/utils/jsonUtils";
import Image from "next/image";

export default function Home() {
  const [jsonInput, setJsonInput] = useState<string>("");
  const [parsedJson, setParsedJson] = useState<object | null>(null);

  const handleInputChange = (value: string) => {
    setJsonInput(value);
    if (!value.trim()) {
      setParsedJson(null);
      return;
    }
    try {
      const parsed = JSON.parse(value);
      setParsedJson(parsed);
    } catch {
      // Ignore valid typing errors
    }
  };

  const handleFormat = () => {
    if (!jsonInput) return;
    try {
      const formatted = formatJson(jsonInput);
      setJsonInput(formatted);
      setParsedJson(JSON.parse(formatted));
    } catch {
      // Ignore format errors silently or alert
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonInput).then(() => {});
  };

  const handleClear = () => {
    setJsonInput("");
    setParsedJson(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground py-6 px-4 md:px-8">
      <div className="w-full max-w-[1700px] flex flex-col gap-6 mx-auto h-[calc(100vh-3rem)]">
        {/* Header */}
        <header className="flex items-center justify-between gap-4 bg-card border border-border px-6 py-4 rounded-xl shrink-0">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo"
              width={36}
              height={36}
              className="h-9 w-9 object-contain rounded-md shadow-sm"
            />
            <h1 className="text-xl font-semibold tracking-tight text-foreground/90">
              JSON Viewer
            </h1>
          </div>

          <div className="flex">
            <Toolbar
              onFormat={handleFormat}
              onCopy={handleCopy}
              onClear={handleClear}
            />
          </div>
        </header>

        {/* Content Area */}
        <main
          role="main"
          className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0"
        >
          {/* Source Left */}
          <div className="flex flex-col border border-border rounded-xl bg-card overflow-hidden">
            <div className="border-b border-border bg-muted px-4 py-2.5 flex items-center">
              <span className="text-sm font-medium text-foreground">
                Editor
              </span>
            </div>
            <div className="flex-1 relative bg-[#1e1e1e]">
              <JsonInput value={jsonInput} onChange={handleInputChange} />
            </div>
          </div>

          {/* Tree Right */}
          <div className="flex flex-col border border-border rounded-xl bg-card overflow-hidden">
            <div className="border-b border-border bg-muted px-4 py-2.5 flex items-center">
              <span className="text-sm font-medium text-foreground">
                Viewer
              </span>
            </div>
            <div className="flex-1 relative bg-[#0d1117]">
              <JsonPreview data={parsedJson} />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="shrink-0 text-center text-sm text-foreground/60 transition-colors">
          Developed by{" "}
          <a
            href="https://sainathreddy.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-primary underline-offset-4 hover:underline"
          >
            SAINATHREDDY
          </a>
        </footer>
      </div>
    </div>
  );
}
