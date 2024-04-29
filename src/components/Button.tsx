import dice from "../assets/images/icon-dice.svg";
import "./Button.css";

interface Props {
  onclick: () => void;
}

const Button = ({ onclick }: Props) => {
  return (
    <button className="button" onClick={onclick}>
      <img className="button-image" src={dice} alt="Dice image" />
    </button>
  );
};

export default Button;
