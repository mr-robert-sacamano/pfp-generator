import { assets } from './AssetMouthsData';

interface Props {
    setAssetMouth: any;
}

export default function AssetMouths(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                return <div
                    key={index} 
                    onClick={() => props.setAssetMouth(asset.imageUrl)}
                    className="rounded-2xl border border-1 hover:cursor-pointer">{index}</div>
                }
            )}
        </>
    )
}