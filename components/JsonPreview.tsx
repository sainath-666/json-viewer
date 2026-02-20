"use client";

import React from "react";
import dynamic from "next/dynamic";
import "jsoneditor/dist/jsoneditor.css";

// Dynamic import with no SSR to avoid window is not defined
const JsonEditorReact = dynamic(
  () => import("jsoneditor-react").then((mod) => mod.JsonEditor),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col items-center justify-center h-full text-white/30 select-none animate-pulse">
        <div className="w-20 h-20 mb-4 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center bg-white/5 relative">
          <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin" />
          <span className="font-mono text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br from-primary to-purple-400">
            {`{}`}
          </span>
        </div>
        <p className="font-bold tracking-widest text-sm uppercase">
          Loading Engine
        </p>
      </div>
    ),
  },
);

interface JsonPreviewProps {
  data: object | null;
}

const JsonPreview: React.FC<JsonPreviewProps> = ({ data }) => {
  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-white/20 select-none">
        <div className="w-24 h-24 mb-6 rounded-3xl border border-white/10 flex items-center justify-center bg-black/40 shadow-inner group transition-all duration-300 hover:border-primary/30">
          <span className="font-mono text-5xl font-thin group-hover:text-primary transition-colors">{`{ }`}</span>
        </div>
        <p className="font-bold tracking-widest text-sm uppercase bg-clip-text text-transparent bg-gradient-to-r from-white/30 to-white/10">
          Awaiting Valid JSON
        </p>
      </div>
    );
  }

  return (
    <div className="h-full w-full rounded-2xl overflow-hidden bg-[#0f172a] shadow-inner relative isolate">
      {/* Absolute faint grid to make it look technical */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 w-full h-full">
        <JsonEditorReact
          value={data}
          mode="tree"
          allowedModes={["tree", "view", "form", "code", "text"]}
          history={true}
          search={true}
          navigationBar={true}
          statusBar={true}
          sortObjectKeys={true}
          mainMenuBar={true}
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default JsonPreview;
