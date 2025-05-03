import Image from 'next/image';

import { assets } from './data/AssetTorsoData';

interface Props {
    setAssetTorso: any;
}

export default function AssetTorso(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                const id: number = index + 1;
                const styling: string = 'torso-' + id + ' torso-img rounded-2xl border border-1 overflow-hidden hover:cursor-pointer';

                return <div
                    key={id} 
                    onClick={() => props.setAssetTorso(id)}
                    className={styling}>
                        <Image
                            alt={id.toString()}
                            src={asset.imageUrl}
                            width={600}
                            height={600}
                        />
                    </div>
                }
            )}
        </>
    )
}