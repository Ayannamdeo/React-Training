import { useEffect, useState } from "react";

const image = [
  "https://picsum.photos/id/10/536/354",
  "https://picsum.photos/id/22/536/354",
  "https://picsum.photos/id/33/536/354",
  "https://picsum.photos/id/21/536/354",
  "https://picsum.photos/id/30/536/354",
  "https://picsum.photos/id/42/536/354",
  "https://picsum.photos/id/57/536/354",
  "https://picsum.photos/id/76/536/354",
  "https://picsum.photos/id/129/536/354",
  "https://picsum.photos/id/155/536/354"
];
export function Slideshow() {
  const [current_slide, setCurrentSlide] = useState(0);
  const [interval_val, setIntervalVal] = useState(2000);
  const [is_paused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval_id;
    if (!is_paused) {
      interval_id = setInterval(() => setCurrentSlide((prevState) => (prevState + 1)%10), interval_val);
    }
    return ()=> clearInterval(interval_id);
  }, [is_paused, interval_val]);

  function handleNext() {
    setCurrentSlide((prevState) => (prevState + 1) % 10);
  }

  function handlePrev() {
    setCurrentSlide((prevState) => (prevState - 1 + 10) % 10);
  }

  function handlePause() {
    setIsPaused((prevState) => !prevState);
  }

  return (
    <div>
      <h1>Question-8: Slideshow</h1>
      <img src={`${image[current_slide]}`} alt={`Slide no: ${current_slide}`} />
      <br/>
      <input
        type="number"
        min={1000}
        max={10000}
        step={1000}
        value={interval_val}
        onChange={(e) => setIntervalVal(e.target.value)}
      />
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handlePause}>{is_paused ? "play" : "pause"}</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}