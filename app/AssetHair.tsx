import Image from 'next/image';

import { assets } from './data/AssetHairData';

interface Props {
    setAssetHair: any;
    setDrawImageFlag: any;
}

export default function AssetHair(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                const id: number = index + 1;
                const styling: string = 'hair-' + id + ' hair-img rounded-2xl border border-2 overflow-hidden hover:cursor-pointer bg-[#b93db4]';

                return <div
                    key={id + '-hair'} 
                    onClick={() => { props.setDrawImageFlag(true); props.setAssetHair(id); }}
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