import React from "react";

const reports = [
  {
    id: 1,
    title: "Crypto giveaway scam",
    category: "Spam",
    priority: "High",
    confidence: "94%"
  },
  {
    id: 2,
    title: "Abusive harassment comment",
    category: "Harassment",
    priority: "Critical",
    confidence: "97%"
  },
  {
    id: 3,
    title: "Duplicate report",
    category: "Low Risk",
    priority: "Low",
    confidence: "76%"
  }
];

export const Game = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>ModBuddy Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        
        <div style={{ flex: 1, border: "1px solid gray", padding: "12px" }}>
          <h2>Mod Queue</h2>
          {reports.map((report) => (
            <div key={report.id}>
              <h3>{report.title}</h3>
              <p>{report.category}</p>
              <p>{report.priority}</p>
              <hr />
            </div>
          ))}
        </div>

        <div style={{ flex: 1, border: "1px solid gray", padding: "12px" }}>
          <h2>Report Details</h2>
          <p>Select report for details</p>
        </div>

        <div style={{ flex: 1, border: "1px solid gray", padding: "12px" }}>
          <h2>AI Insights</h2>
          <p>Confidence: 94%</p>
          <p>Suggested Action: Remove</p>
        </div>

      </div>
    </div>
  );
};