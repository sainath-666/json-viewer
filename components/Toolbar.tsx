import React from "react";
import { Maximize2, Minimize2, Copy, Download, Trash2 } from "lucide-react";

interface ToolbarProps {
  onFormat: () => void;
  onMinify: () => void;
  onCopy: () => void;
  onDownload: () => void;
  onClear: () => void;
}

const Button: React.FC<{
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  variant?: "primary" | "secondary" | "danger";
}> = ({ onClick, icon, label, variant = "secondary" }) => {
  const baseClass =
    "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
    danger:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  };

  return (
    <button onClick={onClick} className={`${baseClass} ${variants[variant]}`}>
      {icon}
      <span className="hidden sm:inline">{label}</span>
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
    <div className="flex flex-wrap gap-2 p-2 bg-muted/50 rounded-t-lg border-b border-border items-center justify-between">
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={onFormat}
          icon={<Maximize2 className="w-4 h-4" />}
          label="Format"
          variant="primary"
        />
        <Button
          onClick={onMinify}
          icon={<Minimize2 className="w-4 h-4" />}
          label="Minify"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={onCopy}
          icon={<Copy className="w-4 h-4" />}
          label="Copy"
        />
        <Button
          onClick={onDownload}
          icon={<Download className="w-4 h-4" />}
          label="Download"
        />
        <Button
          onClick={onClear}
          icon={<Trash2 className="w-4 h-4" />}
          label="Clear"
          variant="danger"
        />
      </div>
    </div>
  );
};

export default Toolbar;
