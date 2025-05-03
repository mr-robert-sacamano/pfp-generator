import Image from 'next/image';

import { assets } from './data/AssetEyesData';

interface Props {
    setAssetEyes: any;
}

export default function AssetEyes(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                const id: number = index + 1;
                const styling: string = 'eyes-' + id + ' eyes-img rounded-2xl border border-2 overflow-hidden hover:cursor-pointer bg-[#b93db4]';

                return <div
                    key={id + '-eyes'} 
                    onClick={() => props.setAssetEyes(id)}
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