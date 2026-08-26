import React from 'react';

interface CinematicBackgroundProps {
  videoUrl?: string;
  opacity?: number;
}

export const CinematicBackground: React.FC<CinematicBackgroundProps> = ({
  videoUrl = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4',
  opacity = 0.6,
}) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-black">
      {/* Cinematic Ambient Background Video from Stitch */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-center mix-blend-screen"
        style={{ opacity }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Exact Stitch Linear Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/85" />

      {/* Subtle Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
