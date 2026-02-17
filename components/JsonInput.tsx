"use client";

import React, { useRef, useState } from "react";
import { Upload, FileCode, CheckCircle, AlertCircle } from "lucide-react";

interface JsonInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string | null;
}

const JsonInput: React.FC<JsonInputProps> = ({ value, onChange, error }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === "application/json" || file.name.endsWith(".json")) {
        const text = await file.text();
        onChange(text);
      } else {
        alert("Please upload a valid JSON file.");
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onChange(event.target.result as string);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div
      className={`relative flex flex-col h-full rounded-lg border-2 transition-colors ${
        isDragging
          ? "border-primary bg-primary/10"
          : error
            ? "border-destructive"
            : "border-border"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your JSON here or drop a file..."
        className="flex-1 w-full h-full p-4 bg-transparent border-none resize-none focus:outline-none font-mono text-sm leading-relaxed"
        spellCheck={false}
      />

      {/* Overlay/Upload Button */}
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 shadow-md transition-all"
          title="Upload JSON File"
        >
          <Upload className="w-4 h-4" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".json,application/json"
          onChange={handleFileUpload}
        />
      </div>

      {/* Status Status Indicator inside input area */}
      <div className="absolute bottom-2 right-2 text-xs font-medium px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm border shadow-sm">
        {error ? (
          <span className="flex items-center gap-1 text-destructive">
            <AlertCircle className="w-3 h-3" /> Invalid JSON
          </span>
        ) : value.trim() ? (
          <span className="flex items-center gap-1 text-green-500">
            <CheckCircle className="w-3 h-3" /> Valid JSON
          </span>
        ) : (
          <span className="text-muted-foreground">Empty</span>
        )}
      </div>

      {isDragging && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg z-10 pointer-events-none">
          <div className="flex flex-col items-center p-6 border-2 border-dashed border-primary rounded-xl bg-card">
            <FileCode className="w-12 h-12 text-primary mb-2" />
            <p className="text-lg font-medium">Drop JSON file here</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JsonInput;
