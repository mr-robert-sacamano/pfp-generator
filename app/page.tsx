'use client';

//import { useState } from "react";

import ProfilePicture from "./ProfilePicture";
import AssetManager from "./AssetManager";

export default function Home() {
    /*
    const [images, setImages] = useState([]);
    const [layeredImage, setLayeredImage] = useState(null);

    // Handle image upload
    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
    };

    const combineImages = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
    
        let width = 0;
        let height = 0;
    
        images.forEach((image) => {
          const img = new Image();
          img.onload = () => {
            if (img.width > width) width = img.width;
            if (img.height > height) height = img.height;
            
            canvas.width = width;
            canvas.height = height;
    
            // Draw each image layer by layer
            images.forEach((image, index) => {
              const img = new Image();
              img.src = URL.createObjectURL(image);
              img.onload = () => {
                ctx.drawImage(img, 0, 0);
                // Update the layered image after drawing all images
                if (index === images.length - 1) {
                  setLayeredImage(canvas.toDataURL("image/png"));
                }
              };
            });
          };
          img.src = URL.createObjectURL(image);
        });
    };
    */

    return (
        <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-2">
                <div className="flex justify-center">
                    <div className="flex align-center">
                        <span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <a href="https://bethonsolana.com">Take me back to bethonsolana.com</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-20 py-12">
                    <div className="flex justify-center">
                        <div className="px-6">
                            <div 
                                className="flex justify-center gap-2 mb-6 text-2xl font-semibold py-6 w-full rounded-md text-white bg-[#ca41c5] rounded-3xl shadow-[8px_8px_0_0_rgba(0,0,0)] hover:cursor-pointer hover:bg-[#db52d6] focus:shadow-none focus:border-none"
                                /*onClick={combineImages}*/>

                                    <div className="flex align-center">
                                        DOWNLOAD YOUR CUSTOMIZED BETH PFP

                                        <span className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                            </svg>
                                        </span>
                                    </div>

                            </div>
                            
                            <div className="mb-6">
                                <ProfilePicture />
                            </div>

                            <div className="mb-6">
                                <AssetManager />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
