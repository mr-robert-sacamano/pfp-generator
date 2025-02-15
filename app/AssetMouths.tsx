import { assets } from './AssetData';

interface Props {
    setAssetMouth: any;
}

export default function AssetMouths(props: Props) {
    return (
        <>
            {assets.map(asset => {
                if (asset.category === 'mouth') {
                    return <div
                        key={asset.id} 
                        onClick={() => props.setAssetMouth(asset.imageUrl)}
                        className="rounded-2xl border border-1 hover:cursor-pointer">{asset.id}</div>
                }
            })}
        </>
    )
}