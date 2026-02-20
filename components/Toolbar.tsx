import React from "react";
import {
  Maximize2,
  Minimize2,
  Copy,
  Download,
  Trash2,
  Code2,
} from "lucide-react";

interface ToolbarProps {
  onFormat: () => void;
  onMinify: () => void;
  onCopy: () => void;
  onDownload: () => void;
  onClear: () => void;
}

const ToolButton: React.FC<{
  onClick: () => void;
  icon: React.ReactElement<{ className?: string }>;
  label: string;
  variant?: "primary" | "secondary" | "danger";
}> = ({ onClick, icon, label, variant = "secondary" }) => {
  const baseClass =
    "group relative flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-[13px] font-semibold rounded-xl transition-all duration-300 focus:outline-none overflow-hidden hover:scale-[1.03] active:scale-[0.97]";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25 border border-primary/50",
    secondary:
      "bg-white/5 text-white/80 hover:bg-white/15 hover:text-white border border-white/10 hover:border-white/30",
    danger:
      "bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 hover:text-red-300",
  };

  return (
    <button onClick={onClick} className={`${baseClass} ${variants[variant]}`}>
      <div className="relative z-10 flex items-center gap-2">
        {React.cloneElement(icon, {
          className:
            "w-4 h-4 transition-transform group-hover:-translate-y-0.5",
        })}
        <span className="hidden lg:inline tracking-wide">{label}</span>
      </div>
      {/* Background flare on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};

const Toolbar: React.FC<ToolbarProps> = ({
  onFormat,
  onMinify,
  onCopy,
  onDownload,
  onClear,
}) => {
  return (
    <div className="flex flex-wrap gap-2 w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <ToolButton
          onClick={onFormat}
          icon={<Maximize2 />}
          label="Prettify"
          variant="primary"
        />
        <ToolButton
          onClick={onMinify}
          icon={<Minimize2 />}
          label="Minify"
          variant="secondary"
        />
      </div>

      <div className="w-[1px] h-6 bg-white/10 hidden sm:block" />

      <div className="flex items-center gap-2">
        <ToolButton
          onClick={onCopy}
          icon={<Copy />}
          label="Copy"
          variant="secondary"
        />
        <ToolButton
          onClick={onDownload}
          icon={<Download />}
          label="Save"
          variant="secondary"
        />
        <ToolButton
          onClick={onClear}
          icon={<Trash2 />}
          label="Clear"
          variant="danger"
        />
      </div>
    </div>
  );
};

export default Toolbar;
