import Image from 'next/image';

import { assets } from './data/AssetEarsData';

interface Props {
    setAssetEars: any;
}

export default function AssetEars(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                const id: number = index + 1;
                const styling: string = 'ears-' + id + ' ears-img rounded-2xl border border-1 overflow-hidden hover:cursor-pointer';

                return <div
                    key={id} 
                    onClick={() => props.setAssetEars(id)}
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