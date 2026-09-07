export default function Loading() {
  return (
    <div className="loading-screen">
      <div className="loading-image-box">
        <video
          src="/images/1000155231.mp4"
          className="loading-image"
          autoPlay
          muted
          playsInline
        />
      </div>
    </div>
  );
}