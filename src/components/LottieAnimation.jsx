import { Player } from '@lottiefiles/react-lottie-player';

function LottieAnimation({ src, height = "300px", width = "300px" }) {
  return (
    <div className="flex justify-center items-center">
      <Player
        autoplay
        loop
        src={src}
        style={{ height, width }}
      />
    </div>
  );
}

export default LottieAnimation;
