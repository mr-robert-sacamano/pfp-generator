import Image from 'next/image';

import { assets } from './data/AssetMouthData';

interface Props {
    setAssetMouth: any;
}

export default function AssetEars(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                const id: number = index + 1;
                const styling: string = 'mouth-' + id + ' mouth-img rounded-2xl border border-2 overflow-hidden hover:cursor-pointer bg-[#b93db4]';

                return <div
                    key={id + '-mouth'} 
                    onClick={() => props.setAssetMouth(id)}
                    className={styling}>
                        <Image
                            alt={id.toString()}
                            src={asset.imageUrl}
                            width={600}
                            height={600}
                            priority
                        />
                    </div>
                }
            )}
        </>
    )
}