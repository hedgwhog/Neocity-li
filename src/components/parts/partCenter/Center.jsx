import "./Center.css";
import LightningIcon from "./Electricity";
import { useLightFlicker } from "./Light";

export default function Center() {
  useLightFlicker();

    return (
    <div className="center-container">
        <div className="box">
            <div className="innerbox"></div>
            <div className="cross"></div>
        </div>

        <div className="fallen-sign">
            <h2>入ってください</h2>
            <h4>私たちは開いています</h4>
            {/* top row */}
            <div className="circle-1" style={{ left: '0'}}></div>
            <div className="circle-2" style={{ left: '10%'}}></div>
            <div className="circle-1" style={{ left: '20%'}}></div>
            <div className="circle-2" style={{ left: '30%'}}></div>
            <div className="circle-1" style={{ left: '40%'}}></div>
            <div className="circle-2" style={{ right: '40%'}}></div>
            <div className="circle-1" style={{ right: '30%'}}></div>
            <div className="circle-2" style={{ right: '20%'}}></div>
            <div className="circle-1" style={{ right: '10%'}}></div>
            <div className="circle-2" style={{ right: '0'}}></div>

            {/* left row */}
            <div className="circle-2" style={{ left: '0', top: '16%'}}></div>
            <div className="circle-1" style={{ left: '0', top: '32.5%'}}></div>
            <div className="circle-2" style={{ left: '0', bottom: '32.5%'}}></div>
            <div className="circle-1" style={{ left: '0', bottom: '16%'}}></div>

            {/* right row */}
            <div className="circle-1" style={{ right: '0', top: '16%'}}></div>
            <div className="circle-2" style={{ right: '0', top: '32.5%'}}></div>
            <div className="circle-1" style={{ right: '0', bottom: '32.5%'}}></div>
            <div className="circle-2" style={{ right: '0', bottom: '16%'}}></div>

            {/* bottom row */}
            <div className="circle-2" style={{ left: '0', bottom: '0'}}></div>
            <div className="circle-1" style={{ left: '10%', bottom: '0'}}></div>
            <div className="circle-2" style={{ left: '20%', bottom: '0'}}></div>
            <div className="circle-1" style={{ left: '30%', bottom: '0'}}></div>
            <div className="circle-2" style={{ left: '40%', bottom: '0'}}></div>
            <div className="circle-1" style={{ right: '40%', bottom: '0'}}></div>
            <div className="circle-2" style={{ right: '30%', bottom: '0'}}></div>
            <div className="circle-1" style={{ right: '20%', bottom: '0'}}></div>
            <div className="circle-2" style={{ right: '10%', bottom: '0'}}></div>
            <div className="circle-1" style={{ right: '0', bottom: '0'}}></div>
            {/* <useLightFlicker /> */}
        </div>

        <div className="lightpole"></div>
        <div className="lightpole-circle">
            <div className="electric-core" />
            <div className="electric-aura" />
            <LightningIcon />
        </div>
        <div className="lightpole-shadow"></div>

        <div className="lightpole-triangle" style={{ left: "592px", top: "-114px", rotate: "-30deg",}}/>
        <div className="lightpole-triangle" style={{ left: "690px", top: "-98px", rotate: "55deg",}}/>

        <div className="add-connector"></div>
        <div className="add"></div>
    </div>

)};
