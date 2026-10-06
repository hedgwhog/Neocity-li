import "./Right.css";
import ScreenPart2 from "./Translate";

export default function Right() {
  return <div className="right-container">
    <div className="top-sewer">
        <div className="part-1"></div>
    </div>

    <div className="screen-part-1">
        ようこそ、<br></br>
        このネオシティはルーカス・ボウメースターによって作られました。<br></br>
        テキストを理解するには、下の画面の翻訳機能を使ってください。でも、今さらそれに気づいているはずですよね……
        <div className="electric-part-1"></div>
    </div>

    <div className="middle-sewer">
        <div className="part-1"></div>
        <div className="part-1-5"></div>
        <div className="part-1-75"></div>
        <div className="part-1-95"></div>
        <div className="part-2"></div>
        <div className="part-2-25"></div>
        <div className="part-2-5"></div>
        <div className="part-2-75"></div>
        <div className="part-3"></div>
        <div className="part-4"></div>
        <div className="part-5"></div>
        <div className="part-5-5"></div>
    </div>

    <ScreenPart2 />

    <div className="electric-part-2"></div>
    <div className="bottom-sewer">
        <div className="part-1"></div>
    </div>
  </div>
}