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
    // reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div
      className={`relative h-full w-full group transition-all duration-300 ${isDragging ? "ring-2 ring-primary bg-primary/5" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your JSON here or drag & drop a file..."
        className="form-textarea w-full h-full p-6 pr-32 bg-transparent border-none resize-none focus:outline-none focus:ring-0 font-mono text-[13px] leading-loose text-indigo-50 placeholder:text-white/20 custom-scrollbar"
        spellCheck={false}
      />

      {/* Floating Upload Button */}
      <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 px-3 py-2 bg-black/40 hover:bg-primary/30 text-white rounded-xl border border-white/10 backdrop-blur-md transition-all hover:scale-105 hover:border-primary/50 shadow-lg"
          title="Upload JSON File"
        >
          <Upload className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold tracking-wide hidden sm:block">
            Upload File
          </span>
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".json,application/json"
          onChange={handleFileUpload}
        />
      </div>

      {/* Modern Status Badge */}
      {error ? (
        <div className="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 text-xs font-semibold text-red-200 bg-red-500/20 border border-red-500/30 rounded-xl backdrop-blur-md shadow-xl transition-all animate-in fade-in slide-in-from-bottom-2">
          <AlertCircle className="w-4 h-4 text-red-400" /> JSON Syntax Error
        </div>
      ) : value.trim() ? (
        <div className="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-200 bg-emerald-500/20 border border-emerald-500/30 rounded-xl backdrop-blur-md shadow-xl transition-all animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" /> Valid JSON Code
        </div>
      ) : null}

      {/* Drag & Drop Overlay overlaying the full container */}
      {isDragging && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#050511]/80 backdrop-blur-sm z-10 border-2 border-dashed border-primary transition-all">
          <div className="flex flex-col items-center bg-black/60 p-10 rounded-3xl shadow-2xl border border-white/10 scale-100 animate-in zoom-in-95 duration-200">
            <div className="p-5 bg-primary/20 rounded-full mb-6 relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
              <FileCode className="w-12 h-12 text-primary drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] relative z-10" />
            </div>
            <p className="text-2xl font-black text-white tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              DROP TO IMPORT
            </p>
            <p className="text-sm font-medium text-white/50 mt-2">
              Supports .json files automatically
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JsonInput;
