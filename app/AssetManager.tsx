'use client';

import { useState } from "react";
import AssetHats from "./AssetHats";
import AssetEyes from "./AssetEyes";
import AssetMouths from "./AssetMouths";
import AssetAccessories from "./AssetAccessories";

export default function AssetManager() {
    const [asset, setAsset] = useState('hats');

    return (
        <>
            <div className="mb-6">
                <div className="flex justify-center text-sm mb-6">
                    <div className="flex items-center gap-2">
                        <div
                            onClick={() => {}} 
                            className="flex justify-center px-4 py-2 bg-[#00a2ff] border-2 border-black rounded-3xl shadow-[3px_3px_0_0_rgba(0,0,0)] text-black w-[128px] text-center hover:cursor-pointer hover:bg-[#11b3ff]">
                                <div className="flex align-center">
                                    RESET

                                    <span className="ml-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                            <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
                                        </svg>
                                    </span>      
                                </div>                      
                        </div>

                        <div
                            onClick={() => {}} 
                            className="flex justify-center px-4 py-2 bg-[#00a2ff] border-2 border-black rounded-3xl shadow-[3px_3px_0_0_rgba(0,0,0)] text-black w-[128px] text-center hover:cursor-pointer hover:bg-[#11b3ff]">
                                <div className="flex align-center">
                                    RANDOM

                                    <span className="ml-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                        </svg>

                                    </span>      
                                </div>                      
                        </div>
                    </div>                
                </div>

                <div className="flex justify-between text-sm">
                    <div
                        onClick={() => { setAsset('hats') }}  
                        className="p-4 bg-[#00a2ff] border-2 border-black rounded-3xl shadow-[3px_3px_0_0_rgba(0,0,0)] text-black w-[144px] text-center hover:cursor-pointer hover:bg-[#11b3ff]">
                        HATS
                    </div>

                    <div
                        onClick={() => { setAsset('eyes') }}  
                        className="p-4 bg-[#00a2ff] border-2 border-black rounded-3xl shadow-[3px_3px_0_0_rgba(0,0,0)] text-black w-[144px] text-center hover:cursor-pointer hover:bg-[#11b3ff]">
                        EYES
                    </div>                              

                    <div
                        onClick={() => { setAsset('mouth') }}  
                        className="p-4 bg-[#00a2ff] border-2 border-black rounded-3xl shadow-[3px_3px_0_0_rgba(0,0,0)] text-black w-[144px] text-center hover:cursor-pointer hover:bg-[#11b3ff]">
                        MOUTHS
                    </div>

                    <div
                        onClick={() => { setAsset('accessories') }}  
                        className="p-4 bg-[#00a2ff] border-2 border-black rounded-3xl shadow-[3px_3px_0_0_rgba(0,0,0)] text-black w-[144px] text-center hover:cursor-pointer hover:bg-[#11b3ff]">
                        ACCESSORIES
                    </div>                                 
                </div>
            </div>

            <div className="flex justify-between border border-1 p-4 rounded-3xl">
                {asset === 'hats' && <AssetHats />}
                {asset === 'eyes' && <AssetEyes />}
                {asset === 'mouths' && <AssetMouths />}
                {asset === 'accessories' && <AssetAccessories />}
            </div>
        </>
    )
}