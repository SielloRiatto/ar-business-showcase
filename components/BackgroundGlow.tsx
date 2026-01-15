export default function BackgroundGlow() {
  return (
    <div 
      className="absolute bottom-0 left-0 w-[800px] h-[800px] pointer-events-none"
      style={{
        background: 'radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.4), rgba(30, 58, 138, 0.3) 40%, transparent 70%)',
        filter: 'blur(40px)'
      }}
    />
  );
}
