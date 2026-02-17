"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactJson = dynamic(() => import("react-json-view"), {
  ssr: false,
  loading: () => (
    <div className="p-4 text-muted-foreground">Loading Viewer...</div>
  ),
});

interface JsonPreviewProps {
  data: object | null;
  theme?: string;
}

const JsonPreview: React.FC<JsonPreviewProps> = ({
  data,
  theme = "monokai",
}) => {
  if (!data) {
    return (
      <div className="flex h-full w-full items-center justify-center text-muted-foreground opacity-50">
        JSON Preview will appear here
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-auto rounded-md bg-[#272822] p-4 shadow-inner text-sm">
      <ReactJson
        src={data}
        theme={theme as any}
        iconStyle="triangle"
        enableClipboard={true}
        displayDataTypes={false}
        displayObjectSize={true}
        indentWidth={2}
        collapsed={false}
        style={{
          backgroundColor: "transparent",
          fontFamily: "monospace",
        }}
      />
    </div>
  );
};

export default JsonPreview;
