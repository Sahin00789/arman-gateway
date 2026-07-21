"use client";

import React from "react";

interface LogoProps {
  variant?: "mark" | "full" | "icon";
  className?: string;
  width?: number | string;
  height?: number | string;
  showText?: boolean;
}

export default function Logo({
  variant = "mark",
  className = "",
  width,
  height,
  showText = false
}: LogoProps) {
  // If variant is "full" or showText is true, show the full SVG composition
  const isFull = variant === "full" || showText;

  if (isFull) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        width={width || "100%"}
        height={height || "100%"}
        aria-label="Arman Logical Systems Logo"
        role="img"
        className={`select-none transition-colors duration-300 ${className}`}
      >
        <title>Arman Logical Systems</title>
        <desc>Tech logo featuring a stylized A and L with a code symbol, orbit line, and digital pixels.</desc>
        <defs>
          <linearGradient id="logoPrimaryGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00a2ff" />
            <stop offset="100%" stopColor="#0055ff" />
          </linearGradient>

          <linearGradient id="logoPrimaryGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          <linearGradient id="logoOrbitGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#001233" />
            <stop offset="50%" stopColor="#0055ff" />
            <stop offset="100%" stopColor="#00a2ff" />
          </linearGradient>

          <linearGradient id="logoOrbitGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>

        {/* LOGO MARK */}
        <g transform="translate(100, -20)">
          {/* 'A' left leg */}
          <path 
            d="M 400,150 L 480,150 L 280,500 L 190,500 Z" 
            className="fill-slate-900 dark:fill-white transition-colors"
          />
          
          {/* 'A' right leg into 'L' base */}
          <path 
            d="M 410,165 L 580,450 Q 590,470 610,470 L 750,470 L 750,520 L 590,520 Q 530,520 500,460 L 360,200 Z" 
            fill="url(#logoPrimaryGradientLight)" 
            className="dark:hidden"
          />
          <path 
            d="M 410,165 L 580,450 Q 590,470 610,470 L 750,470 L 750,520 L 590,520 Q 530,520 500,460 L 360,200 Z" 
            fill="url(#logoPrimaryGradientDark)" 
            className="hidden dark:block"
          />

          {/* Inner Code Tags </> */}
          <g className="stroke-slate-900 dark:stroke-white transition-colors" strokeWidth="14" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="330,410 290,440 330,470" />
            <line x1="370" y1="480" x2="410" y2="400" />
            <polyline points="450,410 490,440 450,470" />
          </g>

          {/* Sweeping Orbit */}
          <path 
            d="M 180,490 C 200,650 600,600 750,300" 
            fill="none" 
            stroke="url(#logoOrbitGradientLight)" 
            strokeWidth="14" 
            strokeLinecap="round"
            className="dark:hidden"
          />
          <path 
            d="M 180,490 C 200,650 600,600 750,300" 
            fill="none" 
            stroke="url(#logoOrbitGradientDark)" 
            strokeWidth="14" 
            strokeLinecap="round"
            className="hidden dark:block"
          />

          {/* Digital Pixels */}
          <g className="fill-cyan-500 dark:fill-cyan-400">
            <rect x="630" y="220" width="18" height="18" />
            <rect x="600" y="250" width="18" height="18" />
            <rect x="630" y="250" width="18" height="18" />
            <rect x="630" y="280" width="18" height="18" />
          </g>
        </g>

        {/* TYPOGRAPHY */}
        <text 
          x="500" 
          y="660" 
          textAnchor="middle"
          className="font-extrabold text-[115px] fill-slate-900 dark:fill-white transition-colors tracking-tight font-sans"
        >
          Arman
        </text>
        
        <g transform="translate(0, 740)">
          <text 
            x="500" 
            y="0" 
            textAnchor="middle"
            className="font-semibold text-[44px] fill-blue-600 dark:fill-cyan-400 tracking-[8px] font-sans"
          >
            Logical Systems
          </text>
          <line x1="130" y1="-12" x2="200" y2="-12" className="stroke-blue-600 dark:stroke-cyan-400 stroke-[2.5px] stroke-round" />
          <line x1="800" y1="-12" x2="870" y2="-12" className="stroke-blue-600 dark:stroke-cyan-400 stroke-[2.5px] stroke-round" />
        </g>

        {/* SERVICES ROW */}
        <g transform="translate(70, 830)" className="font-sans">
          {/* Web Apps */}
          <g transform="translate(0, 0)">
            <circle cx="15" cy="-6" r="15" className="fill-none stroke-blue-600 dark:stroke-cyan-400 stroke-[2.5px] stroke-round" />
            <ellipse cx="15" cy="-6" rx="6" ry="15" className="fill-none stroke-blue-600 dark:stroke-cyan-400 stroke-[2.5px] stroke-round" />
            <line x1="0" y1="-6" x2="30" y2="-6" className="fill-none stroke-blue-600 dark:stroke-cyan-400 stroke-[2.5px] stroke-round" />
            <text x="42" y="1" className="font-medium text-[21px] fill-slate-900 dark:fill-slate-100">Web Apps</text>
          </g>
          
          <line x1="180" y1="-20" x2="180" y2="10" className="stroke-slate-300 dark:stroke-slate-700 stroke-2" />

          {/* Mobile Apps */}
          <g transform="translate(210, 0)">
            <rect x="0" y="-20" width="22" height="30" rx="4" className="fill-none stroke-blue-600 dark:stroke-cyan-400 stroke-[2.5px] stroke-round" />
            <line x1="8" y1="5" x2="14" y2="5" className="fill-none stroke-blue-600 dark:stroke-cyan-400 stroke-[2.5px] stroke-round" />
            <text x="38" y="1" className="font-medium text-[21px] fill-slate-900 dark:fill-slate-100">Mobile Apps</text>
          </g>

          <line x1="395" y1="-20" x2="395" y2="10" className="stroke-slate-300 dark:stroke-slate-700 stroke-2" />

          {/* ERP */}
          <g transform="translate(435, 0)">
            <rect x="0" y="-3" width="6" height="10" className="fill-blue-600 dark:fill-cyan-400" />
            <rect x="9" y="-12" width="6" height="19" className="fill-blue-600 dark:fill-cyan-400" />
            <rect x="18" y="-21" width="6" height="28" className="fill-blue-600 dark:fill-cyan-400" />
            <text x="40" y="1" className="font-medium text-[21px] fill-slate-900 dark:fill-slate-100">ERP</text>
          </g>

          <line x1="535" y1="-20" x2="535" y2="10" className="stroke-slate-300 dark:stroke-slate-700 stroke-2" />

          {/* SaaS */}
          <g transform="translate(565, 0)">
            <path d="M 24,-4 A 7,7 0 0,0 12,-10 A 9,9 0 0,0 -4,-4 A 6,6 0 0,0 -1,7 L 22,7 A 6,6 0 0,0 24,-4 Z" className="fill-none stroke-blue-600 dark:stroke-cyan-400 stroke-[2.5px] stroke-round" />
            <path d="M 11,-6 L 11,2 M 7,-2 L 11,2 L 15,-2" className="fill-none stroke-blue-600 dark:stroke-cyan-400 stroke-[2.5px] stroke-round" />
            <text x="40" y="1" className="font-medium text-[21px] fill-slate-900 dark:fill-slate-100">SaaS</text>
          </g>

          <line x1="685" y1="-20" x2="685" y2="10" className="stroke-slate-300 dark:stroke-slate-700 stroke-2" />

          {/* Websites */}
          <g transform="translate(715, 0)">
            <rect x="0" y="-18" width="28" height="22" rx="3" className="fill-none stroke-blue-600 dark:stroke-cyan-400 stroke-[2.5px] stroke-round" />
            <line x1="0" y1="-8" x2="28" y2="-8" className="fill-none stroke-blue-600 dark:stroke-cyan-400 stroke-[2.5px] stroke-round" />
            <circle cx="6" cy="-13" r="1.5" className="fill-blue-600 dark:fill-cyan-400" />
            <circle cx="12" cy="-13" r="1.5" className="fill-blue-600 dark:fill-cyan-400" />
            <text x="42" y="1" className="font-medium text-[21px] fill-slate-900 dark:fill-slate-100">Websites</text>
          </g>
        </g>

        {/* TAGLINE */}
        <g transform="translate(0, 940)">
          <text 
            x="500" 
            y="0" 
            textAnchor="middle"
            className="font-normal text-[18px] fill-slate-600 dark:fill-slate-400 tracking-[5px] font-sans"
          >
            Smart Solutions. Stronger Business.
          </text>
          <line x1="210" y1="-5" x2="240" y2="-5" className="fill-none stroke-blue-600 dark:stroke-cyan-400 stroke-[2.5px] stroke-round" />
          <line x1="760" y1="-5" x2="790" y2="-5" className="fill-none stroke-blue-600 dark:stroke-cyan-400 stroke-[2.5px] stroke-round" />
        </g>
      </svg>
    );
  }

  // Standalone Logo Mark (Vector Mark only)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="260 110 600 520"
      width={width || "100%"}
      height={height || "100%"}
      aria-label="Arman Logical Systems Logo Mark"
      role="img"
      className={`select-none transition-colors duration-300 ${className}`}
    >
      <title>Arman Logical Systems Logo Mark</title>
      <defs>
        <linearGradient id="logoMarkGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00a2ff" />
          <stop offset="100%" stopColor="#0055ff" />
        </linearGradient>

        <linearGradient id="logoMarkGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id="logoOrbitMarkGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#001233" />
          <stop offset="50%" stopColor="#0055ff" />
          <stop offset="100%" stopColor="#00a2ff" />
        </linearGradient>

        <linearGradient id="logoOrbitMarkGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      <g transform="translate(100, -20)">
        {/* 'A' left leg */}
        <path 
          d="M 400,150 L 480,150 L 280,500 L 190,500 Z" 
          className="fill-slate-900 dark:fill-white transition-colors"
        />
        
        {/* 'A' right leg into 'L' base */}
        <path 
          d="M 410,165 L 580,450 Q 590,470 610,470 L 750,470 L 750,520 L 590,520 Q 530,520 500,460 L 360,200 Z" 
          fill="url(#logoMarkGradientLight)" 
          className="dark:hidden"
        />
        <path 
          d="M 410,165 L 580,450 Q 590,470 610,470 L 750,470 L 750,520 L 590,520 Q 530,520 500,460 L 360,200 Z" 
          fill="url(#logoMarkGradientDark)" 
          className="hidden dark:block"
        />

        {/* Inner Code Tags </> */}
        <g className="stroke-slate-900 dark:stroke-white transition-colors" strokeWidth="14" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="330,410 290,440 330,470" />
          <line x1="370" y1="480" x2="410" y2="400" />
          <polyline points="450,410 490,440 450,470" />
        </g>

        {/* Sweeping Orbit */}
        <path 
          d="M 180,490 C 200,650 600,600 750,300" 
          fill="none" 
          stroke="url(#logoOrbitMarkGradientLight)" 
          strokeWidth="14" 
          strokeLinecap="round"
          className="dark:hidden"
        />
        <path 
          d="M 180,490 C 200,650 600,600 750,300" 
          fill="none" 
          stroke="url(#logoOrbitMarkGradientDark)" 
          strokeWidth="14" 
          strokeLinecap="round"
          className="hidden dark:block"
        />

        {/* Digital Pixels */}
        <g className="fill-cyan-500 dark:fill-cyan-400">
          <rect x="630" y="220" width="18" height="18" />
          <rect x="600" y="250" width="18" height="18" />
          <rect x="630" y="250" width="18" height="18" />
          <rect x="630" y="280" width="18" height="18" />
        </g>
      </g>
    </svg>
  );
}
