"use client";

import React from "react";
import dynamic from "next/dynamic";
import "jsoneditor/dist/jsoneditor.css";

const JsonEditorReact = dynamic(
  () => import("jsoneditor-react").then((mod) => mod.JsonEditor),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
        Loading view...
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
      <div className="flex flex-col items-center justify-center h-full text-muted-foreground select-none">
        <p className="text-sm">Awaiting valid JSON...</p>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 viewer-scroll-container">
      <JsonEditorReact
        value={data}
        mode="tree"
        allowedModes={["tree", "code"]}
        history={true}
        search={true}
        navigationBar={false}
        statusBar={true}
        sortObjectKeys={true}
        mainMenuBar={true}
        onChange={() => {}}
      />
    </div>
  );
};

export default JsonPreview;
