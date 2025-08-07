const ClippedVideoBackground = () => {

  return (
    <video
      autoPlay
      muted
      playsInline
      loop
      className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1]"
    >
      <source src="/clipped.mp4" type="video/mp4" />
    </video>
  );
};

export default ClippedVideoBackground;
