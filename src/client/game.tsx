import { useState } from "react";

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
    title: "Crypto scam giveaway post",
    category: "Spam",
    priority: 3,
    confidence: 94,
    content: "Click here to get free bitcoin instantly..."
  },
  {
    id: 2,
    title: "Harassment in comments",
    category: "Hate",
    priority: 5,
    confidence: 97,
    content: "Abusive message targeting user..."
  },
  {
    id: 3,
    title: "Duplicate spam reports",
    category: "Low",
    priority: 1,
    confidence: 72,
    content: "Repeated reports on same post"
  }
];

export const Game = () => {
  const sorted = [...reports].sort((a, b) => b.priority - a.priority);

  const [selected, setSelected] = useState<Report>(sorted[0]!);

  const getColor = (p: number) => {
    if (p >= 5) return "#ff3b30";
    if (p >= 3) return "#ff9500";
    return "#34c759";
  };

  const action = (type: string) => {
    alert(`${type}: ${selected.title}`);
  };

  return (
    <div style={styles.container}>

      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>QueueSense</h1>
        <p style={styles.subtitle}>
          AI Moderation Dashboard (Devvit Hackathon)
        </p>
      </div>

      {/* GRID */}
      <div style={styles.grid}>

        {/* LEFT */}
        <div style={styles.panel}>
          <h3>Queue</h3>

          {sorted.map((r) => (
            <div
              key={r.id}
              onClick={() => setSelected(r)}
              style={{
                ...styles.card,
                borderLeft: `5px solid ${getColor(r.priority)}`
              }}
            >
              <b>{r.title}</b>
              <div style={styles.meta}>
                <span>{r.category}</span>
                <span>P{r.priority}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div style={styles.panel}>
          <h3>Details</h3>

          <div style={styles.box}>
            <h4>{selected.title}</h4>
            <p>{selected.content}</p>
            <p>Category: {selected.category}</p>
            <p>Priority: {selected.priority}/5</p>

            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button style={styles.approve} onClick={() => action("APPROVE")}>
                Approve
              </button>

              <button style={styles.remove} onClick={() => action("REMOVE")}>
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div style={styles.panel}>
          <h3>AI Insights</h3>

          <div style={styles.box}>
            <p>Confidence: {selected.confidence}%</p>

            <p>
              Score:{" "}
              {Math.round((selected.priority * selected.confidence) / 5)}
            </p>

            <p>
              Decision:{" "}
              {selected.priority >= 4 ? "REMOVE" : "REVIEW"}
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
    background: "#111a2e",
    padding: "15px",
    borderRadius: "12px",
    minHeight: "500px"
  },

  card: {
    background: "#1a2440",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    cursor: "pointer"
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

  approve: {
    background: "#22c55e",
    border: "none",
    padding: "8px",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer"
  },

  remove: {
    background: "#ef4444",
    border: "none",
    padding: "8px",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer"
  }
};