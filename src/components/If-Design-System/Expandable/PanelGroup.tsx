import React, { useState } from "react";

interface IPanelGroupProps {
    children: React.ReactNode,
    [x: string]: any,
}

export function PanelGroup({ children, ...props }: IPanelGroupProps) {
  return (
    <div
      className="if panels"
      {...props}
    >
      {children}
    </div>
  );
}