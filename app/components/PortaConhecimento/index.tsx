"use client";

import { videosPortalConhecimento } from "../../utils/const";
import React, { useState } from "react";

export default function PortalConhecimento() {
  // const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(videosPortalConhecimento[0]); 

  return (

<div className="bg-white min-h-screen p-6">
        <h1 className="text-2xl text-blue-black font-sans mb-10">
          Portal do conhecimento
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col items-start">
            <video
              controls
              className="w-full rounded-lg shadow-lg"
              src={currentVideo.videoUrl} 
            >
              Seu navegador não suporta vídeos.
            </video>

            <h2 className="text-xl text-blue-black font-semibold mt-4 mb-5">
              {currentVideo.title} 
            </h2>
            <div className="bg-gray-300 pt-1 pl-1 rounded-md w-full">
              <p className="text-black mt-2">{currentVideo.description}</p>
              <p className="text-black mt-2 text-sm pb-3">
                Descrição mais detalhada ou transcrição
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {videosPortalConhecimento.map((video) => (
              <div
                key={video.id}
                onClick={() => setCurrentVideo(video)} 
                className="flex items-center rounded-lg cursor-pointer transition hover:bg-gray-200"
              >
                <div className="w-24 h-16 flex-shrink-0">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="rounded-md"
                    width={96}
                    height={64}
                    
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-blue-black">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-500">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};
