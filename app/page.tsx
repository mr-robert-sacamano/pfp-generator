'use client';

import { useState, useEffect } from "react";
import Image from 'next/image';

import beth from '../public/image/beth.png';
import AssetHats from "./AssetHats";
import AssetEyes from "./AssetEyes";
import AssetMouths from "./AssetMouths";
import AssetAccessories from "./AssetAccessories";

export default function Home() {
    const [category, setCategory] = useState('hats');
    const [assetHat, setAssetHat] = useState('');
    const [assetEyes, setAssetEyes] = useState('');
    const [assetMouth, setAssetMouth] = useState('');
    const [assetAccessory, setAssetAccessory] = useState('');

    const handleImageLoad = () => {
        const pfpDownload = document.querySelector('#pfp-download') as HTMLAnchorElement;
        const pfpImg = document.querySelector('#pfp') as HTMLImageElement;
    
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        /*
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
        */

        canvas.width = 600;
        canvas.height = 600;
        
        if (context) {
            console.log('here');
            context.drawImage(pfpImg, 0, 0);

            pfpImg.src = canvas.toDataURL('image/png');
            pfpDownload.href = canvas.toDataURL('image/png');
        }
    }

    useEffect(() => {
        handleImageLoad();
    });

    const resetImage = () => {
        setAssetHat('');
        setAssetEyes('');
        setAssetMouth('');
        setAssetAccessory('');
    }

    const randomImage = () => {
        setAssetHat('');
        setAssetEyes('');
        setAssetMouth('');
        setAssetAccessory('');
    }  

    return (
        <>
            <div className="mx-auto max-w-[600px] px-6 pt-2 text-center">
                <div className="flex justify-center">
                    <span className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 sm:size-6">
                            <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <a href="https://bethonsolana.com" className="text-sm sm:text-base">Take me back to bethonsolana.com</a>
                </div>
 
                <div className="grid grid-cols-1 pt-12 pb-6">
                    <a 
                        id="pfp-download"
                        download="beth-pfp.png"
                        className="flex justify-center gap-2 mb-6 font-semibold py-6 w-full rounded-md text-white bg-[#ca41c5] rounded-3xl shadow-[8px_8px_0_0_rgba(0,0,0)] hover:cursor-pointer hover:bg-[#db52d6] focus:shadow-none focus:border-none">

                        <div className="flex align-center text-sm sm:text-xl">
                            DOWNLOAD YOUR BETH PFP

                            <span className="ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </span>
                        </div>
                    </a>
                </div>                

                <div className="mb-6">
                    <Image
                        alt="Beth PFP"
                        id="pfp"
                        src={beth.src}
                        className="max-w-full border-4 border-black rounded-3xl object-fit"
                        width={600}
                        height={600}
                        onLoadingComplete={handleImageLoad}
                        />
                </div>

                <div className="mb-6">
                    <div className="mb-6">
                        <div className="flex justify-center text-sm mb-6">
                            <div className="flex items-center gap-2">
                                <div
                                    onClick={() => { resetImage(); }} 
                                    className="flex justify-center px-4 py-2 bg-[#00a2ff] border-2 border-black rounded-3xl shadow-[3px_3px_0_0_rgba(0,0,0)] text-black w-[128px] text-center hover:cursor-pointer hover:bg-[#11b3ff]">
                                        <div className="flex align-center text-[12px] sm:text-base">
                                            RESET

                                            <span className="ml-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5">
                                                    <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
                                                </svg>
                                            </span>      
                                        </div>                      
                                </div>

                                <div
                                    onClick={() => { randomImage(); }} 
                                    className="flex justify-center px-4 py-2 bg-[#00a2ff] border-2 border-black rounded-3xl shadow-[3px_3px_0_0_rgba(0,0,0)] text-black w-[128px] text-center hover:cursor-pointer hover:bg-[#11b3ff]">
                                        <div className="flex align-center text-[12px] sm:text-base">
                                            RANDOM

                                            <span className="ml-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                                </svg>

                                            </span>      
                                        </div>                      
                                </div>
                            </div>                
                        </div>

                        <div className="flex justify-between text-[12px] sm:text-base">
                            <div
                                onClick={() => { setCategory('hats') }}  
                                className="p-3 bg-[#00a2ff] border-2 border-black rounded-3xl shadow-[3px_3px_0_0_rgba(0,0,0)] text-black w-[120px] sm:w-[136px] text-center hover:cursor-pointer hover:bg-[#11b3ff]">
                                HATS
                            </div>

                            <div
                                onClick={() => { setCategory('eyes') }}  
                                className="p-3 bg-[#00a2ff] border-2 border-black rounded-3xl shadow-[3px_3px_0_0_rgba(0,0,0)] text-black w-[120px] sm:w-[136px] text-center hover:cursor-pointer hover:bg-[#11b3ff]">
                                EYES
                            </div>                              

                            <div
                                onClick={() => { setCategory('mouths') }}  
                                className="p-3 bg-[#00a2ff] border-2 border-black rounded-3xl shadow-[3px_3px_0_0_rgba(0,0,0)] text-black w-[120px] sm:w-[136px] text-center hover:cursor-pointer hover:bg-[#11b3ff]">
                                MOUTHS
                            </div>

                            <div
                                onClick={() => { setCategory('accessories') }}  
                                className="p-3 bg-[#00a2ff] border-2 border-black rounded-3xl shadow-[3px_3px_0_0_rgba(0,0,0)] text-black w-[120px] sm:w-[136px] text-center hover:cursor-pointer hover:bg-[#11b3ff]">
                                ACCESSORIES
                            </div>                                 
                        </div>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 border border-1 p-4 rounded-3xl">
                        {category === 'hats' && <AssetHats setAssetHat={setAssetHat} />}
                        {category === 'eyes' && <AssetEyes setAssetEyes={setAssetEyes} />}
                        {category === 'mouths' && <AssetMouths setAssetMouth={setAssetMouth} />}
                        {category === 'accessories' && <AssetAccessories setAssetAccessory={setAssetAccessory} />}
                    </div>
                </div>
            </div>
        </>
    );
}
