import dice from "../assets/images/icon-dice.svg";
import "./Button.css";

interface Props {
  onclick: () => void;
}

const Button = ({ onclick }: Props) => {
  return (
    <button className="Button" onClick={onclick}>
      <img className="ButtonImage" src={dice} alt="Dice image" />
    </button>
  );
};

export default Button;
