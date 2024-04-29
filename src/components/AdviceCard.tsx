import "./AdviceCard.css";

interface Props {
  adviceId: number;
  children: string;
}

const AdviceCard = ({ adviceId, children }: Props) => {
  return (
    <div className="advice-card">
      <h1
        style={{
          fontFamily: "Manrope",
          fontSize: "0.8rem",
          color: "hsl(150, 100%, 66%)",
          fontWeight: "600",
          letterSpacing: "0.275rem",
          marginTop: "0.8rem",
        }}
      >
        ADVICE #{adviceId}
      </h1>
      <p
        style={{
          fontFamily: "Manrope",
          fontWeight: 800,
          fontSize: "1.71rem",
          color: "hsl(193, 38%, 86%)",
        }}
      >
        "{children}"
      </p>
    </div>
  );
};

export default AdviceCard;
