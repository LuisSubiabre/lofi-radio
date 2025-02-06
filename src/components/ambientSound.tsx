import { Cloud, Flame } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AmbientSound = () => {
  const [isPlayingAmbient] = useState(true);

  const [rainVolume, setRainVolume] = useState(0);
  const [flameVolume, setFlamelVolume] = useState(0);

  const rainRef = useRef<HTMLAudioElement>(null);
  const flameRef = useRef<HTMLAudioElement>(null);

  // Control ambient sound volumes
  useEffect(() => {
    if (rainRef.current) {
      rainRef.current.volume = rainVolume;
      if (rainVolume > 0 && isPlayingAmbient) {
        rainRef.current.play();
      } else {
        rainRef.current.pause();
      }
    }
  }, [rainVolume, isPlayingAmbient]);

  useEffect(() => {
    if (flameRef.current) {
      flameRef.current.volume = flameVolume;
      if (flameVolume > 0 && isPlayingAmbient) {
        flameRef.current.play();
      } else {
        flameRef.current.pause();
      }
    }
  }, [flameVolume, isPlayingAmbient]);

  return (
    <>
      <div className="mt-6 pt-4 ">
        <div className="space-y-3">
          {/* Rain Control */}
          <div className="flex items-center gap-2">
            <Cloud className="text-[#2d3748] dark:text-white" size={20} />
            <input
              className="volume-slider flex-grow range pr-6 dark:accent-violet-500"
              max="1"
              min="0"
              step="0.01"
              type="range"
              value={rainVolume}
              onChange={(e) => setRainVolume(parseFloat(e.target.value))}
            />
          </div>

          {/* Flame Control */}
          <div className="flex items-center gap-2">
            <Flame className="text-[#2d3748]  dark:text-white " size={20} />
            <input
              className="volume-slider flex-grow range pr-6 dark:accent-violet-500"
              max="1"
              min="0"
              step="0.01"
              type="range"
              value={flameVolume}
              onChange={(e) => setFlamelVolume(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </div>
      {/* Audio Elements */}

      <audio ref={rainRef} loop src="/ambient/rain.mp3">
        <track kind="captions" />
      </audio>
      <audio ref={flameRef} loop src="/ambient/bonfire.mp3">
        <track kind="captions" />
      </audio>
    </>
  );
};

export default AmbientSound;
