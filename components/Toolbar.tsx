import React from "react";
import { Maximize2, Copy, Trash2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface ToolbarProps {
  onFormat: () => void;
  onCopy: () => void;
  onClear: () => void;
}

const ToolButton: React.FC<{
  onClick: () => void;
  icon: React.ReactElement<{ className?: string }>;
  label: string;
  variant?: "primary" | "secondary" | "danger";
}> = ({ onClick, icon, label, variant = "secondary" }) => {
  const baseClass =
    "flex items-center justify-center gap-2 h-9 px-3 sm:px-4 text-[13px] font-medium rounded-md transition-colors focus:outline-none";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    danger: "hover:bg-destructive/10 text-red-400 hover:text-red-300",
  };

  return (
    <button onClick={onClick} className={`${baseClass} ${variants[variant]}`}>
      {React.cloneElement(icon, {
        className: "w-4 h-4",
      })}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};

const Toolbar: React.FC<ToolbarProps> = ({ onFormat, onCopy, onClear }) => {
  return (
    <div className="flex items-center gap-3">
      <ToolButton
        onClick={onFormat}
        icon={<Maximize2 />}
        label="Format"
        variant="primary"
      />
      <div className="w-px h-5 bg-border hidden sm:block" />
      <ToolButton
        onClick={onCopy}
        icon={<Copy />}
        label="Copy"
        variant="secondary"
      />
      <ToolButton
        onClick={onClear}
        icon={<Trash2 />}
        label="Clear"
        variant="danger"
      />
      <div className="w-px h-5 bg-border hidden sm:block" />
      <ThemeToggle />
    </div>
  );
};

export default Toolbar;
