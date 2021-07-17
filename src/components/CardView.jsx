import React from "react";
import "./cardView.css";

export default function CardView({ children, style }) {
  return (
    <div className="card-view" style={style}>
      {children}
    </div>
  );
}
