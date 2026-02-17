"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "jsoneditor/dist/jsoneditor.css";

// Dynamic import with no SSR to avoid window is not defined
const JsonEditorReact = dynamic(
  () => import("jsoneditor-react").then((mod) => mod.JsonEditor),
  {
    ssr: false,
    loading: () => (
      <div className="p-4 text-muted-foreground">Loading Editor...</div>
    ),
  },
);

interface JsonPreviewProps {
  data: object | null;
  theme?: string; // Not directly used by jsoneditor, handled via CSS
}

const JsonPreview: React.FC<JsonPreviewProps> = ({ data }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!data) {
    return (
      <div className="flex h-full w-full items-center justify-center text-muted-foreground opacity-50">
        JSON Preview will appear here
      </div>
    );
  }

  return (
    <div className="jsoneditor-container h-full w-full overflow-hidden rounded-md shadow-inner relative">
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
        onChange={() => {}} // Read-only mostly from this prop perspective but allows interaction
        // htmlElementProps={{ className: 'h-full w-full' }} // Setup height
      />
    </div>
  );
};

export default JsonPreview;
