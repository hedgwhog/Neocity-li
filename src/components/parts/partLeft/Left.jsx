import "./Left.css";
import { useEffect } from "react";
import gsap from "gsap";

export default function Left() {

    useEffect(() => {
        gsap.to(".window-reflection",{
            x:4,
            duration:6,
            repeat:-1,
            yoyo:true,
            ease:"sine.inOut"
        });
    }, []);

    return <div className="left-container">
        <div className="ambient-light"></div>
        <div className="city-light"></div>
        <div className="window-glow"></div>
        <div className="window-beam"></div>
        <div className="neon-reflection"></div>
        <div className="house-shadow"></div>

        <div className="house-container">
            <div className="image"></div>
            <div className="image-box"></div>
            <div className="image-connector"></div>
            <div className="black"></div>
            <div className="shutter-1-cross"></div>
            <div className="shutter-right"></div>
            <div className="shutter-2-cross-left"></div>
            <div className="shutter-2-cross-side"></div>
            <div className="shutter-2-cross-down"></div>
            <div className="shutter-2-cross-right"></div>
            <div className="shutter-2-shadow"></div>
            <div className="shutter-2-bottom"></div>

            <div className="window-bottom">
                <div className="window-glass"></div>
            </div>
            <div className="window-cross"></div>
            <div className="window-side"></div>
            <div className="window-top">
                <div className="window-glass"></div>
                <div className="window-reflection"></div>
                <div className="window-shadow"></div>
            </div>

            <div className="postcode-post"></div>
            <h2 className="top">市役所</h2>
            <h2 className="middle">モール</h2>
            <h2 className="bottom">学校</h2>
            <div className="postcode-1-bottom"></div>
            <div className="postcode-1-top"></div>
            <div className="postcode-1-cross"></div>

            <div className="postcode-2"></div>

            <div className="postcode-3-bottom"></div>
            <div className="postcode-3-top"></div>
            <div className="postcode-3-cross"></div>
        </div>

         <div className="house-cross-container"></div>

         <div className="house-outside-container">
                <div className="image-container">
                    <div className="left"></div>
                    <h3>新しいアイスクリーム店が本日</h3>
                    <div className="image"></div>
                    <p>渋谷モールセンターにオープンしました</p>
                </div>
         </div>
    </div>
}