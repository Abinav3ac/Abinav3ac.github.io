import React from "react";

export default function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <span className="section-label-divider" aria-hidden="true" />
      {children}
    </div>
  );
}
