import "./Back.css";
import { useEffect, useState } from "react";

export default function Back() {
    const [images, setImages] = useState(["", "", ""]);

useEffect(() => {
    const loadImages = async () => {
    const urls = await Promise.all(
        Array.from({ length: 3 }, async () => {
            const res = await fetch("https://foodish-api.com/api/");
            const data = await res.json();
            return data.image;
        })
    );

        setImages(urls);
    };

    loadImages();
    }, []);

    return <div className="container">
        <div className="light2">
            <div className="line"></div>
        </div>

        <div className="light-line-left"></div>
        <div className="light-line-right"></div>

        <div className="bottom-pipe">
            <div className="bottom-pipe-1"></div>
            <div className="bottom-pipe-2"></div>
        </div>

        <div className="up-pipe-left"></div>
        <div className="up-pipe-right"></div>
        <div className="pipe-left"></div>
        <div className="pipe-right">
            <div className="pipe-right-2"></div>
        </div>

        <div className="lights-line">
            <div className="line"></div>
                <div className="light" style={{ left: '10px'}}>
                    <div className="edge"></div>
                    <div className="ball"></div>
                </div>
                <div className="light" style={{ left: '80px'}}>
                    <div className="edge"></div>
                    <div className="ball"></div>
                </div>
                <div className="light" style={{ left: '150px'}}>
                    <div className="edge"></div>
                    <div className="ball"></div>
                </div>
        </div>

        <div className="shop-top-line"></div>
        <div className="roof-cover"></div>
        <div className="roof"></div>
        {/* roof colors */}
        {/* <div className="roof-line" style={{ left: '213px'}}></div>
        <div className="roof-line" style={{ left: '253px'}}></div>
        <div className="roof-line" style={{ left: '293px'}}></div>
        <div className="roof-line" style={{ left: '333px'}}></div>
        <div className="roof-line" style={{ left: '373px'}}></div>
        <div className="roof-line" style={{ left: '413px'}}></div>
        <div className="roof-line" style={{ left: '453px'}}></div> */}

        <div className="shop-extra-line"></div>

        <div className="add-connector"></div>
        <div className="add"></div>

        <div className="shop-frame">
            <div className="shop-roof-shadow"></div>

            <div className="shop-connector"></div>
            <div className="shop-title">コーヒーショップ - ローゼリー</div>
            <div className="shop-add" style={{ top: "90px", backgroundImage: `url(${images[0]})`, backgroundSize: "cover", backgroundPosition: "center",}}></div>
            <div className="shop-add" style={{ top: "140px", backgroundImage: `url(${images[1]})`, backgroundSize: "cover", backgroundPosition: "center",}}></div>
            <div className="shop-add" style={{ top: "190px", backgroundImage: `url(${images[2]})`, backgroundSize: "cover", backgroundPosition: "center",}}></div>

            <div className="bottom-shop">
                <div className="window-glass"></div>
                <div className="left-stair"></div>

                {/* stair steps */}
                <div className="step"></div>
                <div className="stair-1"></div>
                <div className="step-1"></div>
                <div className="stair-2"></div>
                <div className="step-2"></div>
                <div className="stair-3"></div>
                <div className="step-3"></div>
                <div className="stair-4"></div>

                <div className="right-stair"></div>
            </div>

            <div className="left-door"></div>
            <div className="top-door"></div>
            <div className="right-door"></div>
            <div className="door-knot"></div>
        </div>
    </div>

}