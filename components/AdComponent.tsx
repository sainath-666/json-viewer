import React from "react";

type AdComponentProps = {
  slotId?: string;
  style?: React.CSSProperties;
  format?: "auto" | "fluid" | "rectangle";
  className?: string;
};

const AdComponent: React.FC<AdComponentProps> = ({
  slotId = "1234567890",
  style = { display: "block" },
  format = "auto",
  className = "",
}) => {
  return (
    <div
      className={`w-full flex justify-center items-center my-4 min-h-[90px] bg-secondary/50 rounded-lg overflow-hidden border border-border ${className}`}
    >
      <div className="text-muted-foreground text-xs p-4 text-center">
        Ad Space (Google AdSense)
        <br />
        Slot: {slotId}
        {/* The actual ad ins tag */}
        <ins
          className="adsbygoogle"
          style={style}
          data-ad-client="ca-pub-YOUR_AD_CLIENT_ID"
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
};

export default AdComponent;
