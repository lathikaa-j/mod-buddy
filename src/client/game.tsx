import React, { useState } from "react";

const reports = [
  {
    id: 1,
    title: "Crypto giveaway scam link posted",
    category: "Spam",
    priority: "High",
    confidence: 94,
    content: "Click here to get free bitcoin instantly..."
  },
  {
    id: 2,
    title: "User attacking another member",
    category: "Harassment",
    priority: "Critical",
    confidence: 97,
    content: "You are worthless and should leave..."
  },
  {
    id: 3,
    title: "Duplicate report on same post",
    category: "Low Risk",
    priority: "Low",
    confidence: 72,
    content: "Repeated report submitted multiple times."
  }
];

export const Game = () => {
  const [selected, setSelected] = useState(reports[0]);

  const getPriorityColor = (p: string) => {
    if (p === "Critical") return "#ff3b30";
    if (p === "High") return "#ff9500";
    return "#34c759";
  };

  return (
    <div style={styles.container}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>QueueSense</h1>
        <p style={styles.subtitle}>AI Moderation Control Center</p>
      </div>

      {/* MAIN GRID */}
      <div style={styles.grid}>

        {/* LEFT - QUEUE */}
        <div style={styles.panel}>
          <h2 style={styles.panelTitle}>Moderation Queue</h2>

          {reports.map((r) => (
            <div
              key={r.id}
              onClick={() => setSelected(r)}
              style={{
                ...styles.card,
                borderLeft: `6px solid ${getPriorityColor(r.priority)}`
              }}
            >
              <div style={styles.cardTitle}>{r.title}</div>
              <div style={styles.meta}>
                <span>{r.category}</span>
                <span style={styles.badge}>{r.priority}</span>
              </div>
            </div>
          ))}
        </div>

        {/* MIDDLE - DETAILS */}
        <div style={styles.panel}>
          <h2 style={styles.panelTitle}>Report Details</h2>

          <div style={styles.detailsBox}>
            <h3>{selected.title}</h3>
            <p style={{ opacity: 0.8 }}>{selected.content}</p>
            <p><b>Category:</b> {selected.category}</p>
          </div>
        </div>

        {/* RIGHT - AI INSIGHTS */}
        <div style={styles.panel}>
          <h2 style={styles.panelTitle}>AI Insights</h2>

          <div style={styles.aiBox}>
            <p><b>Priority Score:</b> {selected.priority}</p>
            <p><b>Confidence:</b> {selected.confidence}%</p>
            <p><b>Suggested Action:</b> Remove / Escalate</p>
          </div>
        </div>

      </div>
    </div>
  );
};

const styles: any = {
  container: {
    fontFamily: "Arial",
    background: "#0f172a",
    color: "white",
    minHeight: "100vh",
    padding: "20px"
  },
  header: {
    marginBottom: "20px"
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold"
  },
  subtitle: {
    opacity: 0.7
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "15px"
  },
  panel: {
    background: "#111827",
    padding: "15px",
    borderRadius: "12px"
  },
  panelTitle: {
    marginBottom: "10px"
  },
  card: {
    background: "#1f2937",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    cursor: "pointer"
  },
  cardTitle: {
    fontWeight: "bold"
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5px",
    fontSize: "12px",
    opacity: 0.8
  },
  badge: {
    padding: "2px 6px",
    background: "#374151",
    borderRadius: "6px"
  },
  detailsBox: {
    background: "#1f2937",
    padding: "10px",
    borderRadius: "10px"
  },
  aiBox: {
    background: "#1f2937",
    padding: "10px",
    borderRadius: "10px"
  }
};