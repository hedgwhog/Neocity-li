import "./Canvas.css";

import Right from "./parts/partRight/Right";
import Back from "./parts/partBack/Back";
import Center from "./parts/partCenter/Center";
import Left from "./parts/partLeft/Left";

export default function Canvas() {
  return <div className="canvas">
    <Left />
    <Back />
    <Center />
    <Right />
  </div>;
}