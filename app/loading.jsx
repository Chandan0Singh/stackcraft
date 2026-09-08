export default function Loading() {
  return (
    <div className="loading-screen">
      <div className="loading-image-box">
        <video
          src="/images/loader.mp4"
          className="loading-image"
          autoPlay
          muted
          playsInline
        />
      </div>
    </div>
  );
}
