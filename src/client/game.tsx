import React, { useState } from "react";

type Report = {
  id: number;
  title: string;
  category: string;
  priority: number;
  confidence: number;
  content: string;
};

const reports: Report[] = [
  {
    id: 1,
    title: "Crypto giveaway scam link posted",
    category: "Spam",
    priority: 3,
    confidence: 94,
    content: "Click here to get free bitcoin instantly..."
  },
  {
    id: 2,
    title: "Abusive harassment in comments",
    category: "Harassment",
    priority: 5,
    confidence: 97,
    content: "You are worthless and should leave this platform..."
  },
  {
    id: 3,
    title: "Repeated duplicate reports",
    category: "Low Risk",
    priority: 1,
    confidence: 72,
    content: "Same report submitted multiple times."
  }
];

export const Game = () => {
  const sortedReports = [...reports].sort((a, b) => b.priority - a.priority);

  const [selected, setSelected] = useState<Report>(sortedReports[0]!);

  const getColor = (p: number) => {
    if (p >= 5) return "#ff3b30";
    if (p >= 3) return "#ff9500";
    return "#34c759";
  };

  const handleAction = (action: string) => {
    alert(`${action} -> ${selected.title}`);
  };

  return (
    <div style={styles.container}>

      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>QueueSense</h1>
        <p style={styles.subtitle}>
          AI Moderation Dashboard for Reddit Communities
        </p>
      </div>

      {/* GRID */}
      <div style={styles.grid}>

        {/* LEFT */}
        <div style={styles.panel}>
          <h2 style={styles.panelTitle}>Moderation Queue</h2>

          {sortedReports.map((r) => (
            <div
              key={r.id}
              onClick={() => setSelected(r)}
              style={{
                ...styles.card,
                borderLeft: `5px solid ${getColor(r.priority)}`
              }}
            >
              <div style={styles.cardTitle}>{r.title}</div>
              <div style={styles.meta}>
                <span>{r.category}</span>
                <span>Priority: {r.priority}</span>
              </div>
            </div>
          ))}
        </div>

        {/* MIDDLE */}
        <div style={styles.panel}>
          <h2 style={styles.panelTitle}>Report Details</h2>

          <div style={styles.box}>
            <h3>{selected.title}</h3>
            <p style={{ opacity: 0.85 }}>{selected.content}</p>

            <p><b>Category:</b> {selected.category}</p>
            <p><b>Priority:</b> {selected.priority}/5</p>

            <div style={styles.actions}>
              <button
                style={styles.approve}
                onClick={() => handleAction("APPROVE")}
              >
                Approve
              </button>

              <button
                style={styles.remove}
                onClick={() => handleAction("REMOVE")}
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div style={styles.panel}>
          <h2 style={styles.panelTitle}>AI Insights</h2>

          <div style={styles.box}>
            <p><b>AI Confidence:</b> {selected.confidence}%</p>

            <p>
              <b>AI Score:</b>{" "}
              {Math.round((selected.priority * selected.confidence) / 5)}/100
            </p>

            <p>
              <b>Recommendation:</b>{" "}
              {selected.priority >= 4 ? "REMOVE IMMEDIATELY" : "REVIEW"}
            </p>

            <p style={{ opacity: 0.7, marginTop: "10px" }}>
              AI analyzes spam signals, toxicity patterns, and user reports.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

const styles: any = {
  container: {
    fontFamily: "Arial",
    background: "#0b1220",
    minHeight: "100vh",
    color: "white",
    padding: "20px"
  },

  header: {
    marginBottom: "20px"
  },

  title: {
    fontSize: "30px",
    fontWeight: "bold",
    margin: 0
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
    background: "#111a2e",
    borderRadius: "14px",
    padding: "15px",
    minHeight: "500px"
  },

  panelTitle: {
    marginBottom: "12px"
  },

  card: {
    background: "#1a2440",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    cursor: "pointer"
  },

  cardTitle: {
    fontWeight: "bold",
    marginBottom: "5px"
  },

  meta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    opacity: 0.8
  },

  box: {
    background: "#1a2440",
    padding: "12px",
    borderRadius: "10px"
  },

  actions: {
    marginTop: "15px",
    display: "flex",
    gap: "10px"
  },

  approve: {
    background: "#22c55e",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer"
  },

  remove: {
    background: "#ef4444",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer"
  }
};