"use client";

import React from "react";
import Editor from "@monaco-editor/react";

interface JsonInputProps {
  value: string;
  onChange: (value: string) => void;
}

const JsonInput: React.FC<JsonInputProps> = ({ value, onChange }) => {
  return (
    <div className="absolute inset-0 pt-2 group/editor">
      <Editor
        height="100%"
        defaultLanguage="json"
        theme="vs-dark"
        value={value}
        onChange={(val) => onChange(val || "")}
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 14,
          wordWrap: "on",
          padding: { top: 8 },
          fontFamily: "'Fira Code', 'Segoe UI', Menlo, Monaco, monospace",
          formatOnPaste: true,
          scrollbar: {
            verticalScrollbarSize: 10,
            horizontalScrollbarSize: 10,
          },
        }}
        loading={
          <div className="flex items-center justify-center h-full text-white/40 text-sm">
            Loading editor...
          </div>
        }
      />
    </div>
  );
};

export default JsonInput;
