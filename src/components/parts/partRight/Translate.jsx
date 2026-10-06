import { useState } from "react";
import "./Translate.css";

export default function ScreenPart2() {
  const [japanese, setJapanese] = useState("");
  const [english, setEnglish] = useState("");
  const [loading, setLoading] = useState(false);

  const translate = async () => {
    const text = japanese.trim();

    if (!text) return;

    setLoading(true);
    setEnglish("");

    try {
      // Kanji (Japanese) -> English
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=ja|en`
      );

      if (!response.ok) {
        throw new Error("Network error");
      }

      const data = await response.json();

      setEnglish(
        data.responseData?.translatedText || "No translation found."
      );
    } catch (err) {
      console.error(err);
      setEnglish("Translation failed.");
    }

    setLoading(false);
  };

  return (
    <div className="screen-part-2">
      <div className="translator">
        <textarea
          placeholder="日本語（Kanji supported）..."
          value={japanese}
          onChange={(e) => setJapanese(e.target.value)}
        />

        <button onClick={translate} disabled={loading}>
          {loading ? "Translating..." : "Translate"}
        </button>

        <div className="result">
          {english || "English translation appears here."}
        </div>
      </div>
    </div>
  );
}