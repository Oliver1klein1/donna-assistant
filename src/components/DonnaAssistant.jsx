import React from "react";
import Background from "./Background";

const DonnaAssistant = () => {
  return (
    <div className="relative min-h-screen bg-[#1A1A2E] text-white overflow-hidden">
      <Background />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main Content Area */}
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto flex flex-col h-full">
            {/* Center Section with Header and ElevenLabs Widget */}
            <div className="flex-1 flex flex-col items-center justify-center">
              {/* Header */}
              <div className="mb-48 mt-32 text-center">
                <h1 className="text-6xl font-playfair font-bold">
                  Donna
                  <span className="block text-xl font-inter text-[#C9A959] mt-3">
                    Executive Assistant to Michael Klein
                  </span>
                </h1>
              </div>

              {/* ElevenLabs Widget */}
              <div className="w-full max-w-2xl rounded-2xl bg-[#1A1A2E]/30 backdrop-blur-md border border-[#C9A959]/20 p-8 shadow-xl ml-[-20%]">
                <div className="flex justify-center">
                  <elevenlabs-convai 
                    agent-id="SQ16J17d50LcDV05rCet"
                    debug="true"
                    theme="dark"
                    position="center"
                  ></elevenlabs-convai>
                </div>
              </div>

              {/* Second ElevenLabs Widget */}
              <div className="w-full max-w-2xl rounded-2xl bg-[#1A1A2E]/30 backdrop-blur-md border border-[#C9A959]/20 p-8 shadow-xl ml-[-20%] mt-8">
                <div className="flex justify-center">
                  <elevenlabs-convai 
                    agent-id="NK7f7TG532ujHwjjmvYL"
                    debug="true"
                    theme="dark"
                    position="center"
                  ></elevenlabs-convai>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DonnaAssistant; 