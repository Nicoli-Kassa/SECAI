export default function Card({ title, number, description, icon, color = "blue" }) {
  const colorMap = {
    blue: { bg: "#e3f2fd", text: "#1976d2", border: "#1976d2" },
    red: { bg: "#ffebee", text: "#d32f2f", border: "#d32f2f" },
    yellow: { bg: "#fffde7", text: "#f57f17", border: "#f57f17" },
    purple: { bg: "#f3e5f5", text: "#7b1fa2", border: "#7b1fa2" },
    orange: { bg: "#ffe0b2", text: "#e65100", border: "#e65100" },
    green: { bg: "#e8f5e9", text: "#388e3c", border: "#388e3c" },
  };

  const colors = colorMap[color] || colorMap.blue;

  return (
    <div
      className="shadow-md rounded-md p-5"
      style={{
        backgroundColor: colors.bg,
        borderLeft: `5px solid ${colors.border}`,
      }}
    >
      <h2 className="font-bold">{title} {icon}</h2>
      <p className="text-3xl font-bold my-2" style={{ color: colors.text }}>
        {number}
      </p>
      <p className="description">{description}</p>
    </div>
  );
}
