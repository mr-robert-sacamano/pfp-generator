import { assets } from './AssetData';

interface Props {
    setAssetEyes: any;
}

export default function AssetEyes(props: Props) {
    return (
        <>
            {assets.map(asset => {
                if (asset.category === 'eyes') {
                    return <div
                        key={asset.id} 
                        onClick={() => props.setAssetEyes(asset.imageUrl)}
                        className="rounded-2xl border border-1 hover:cursor-pointer">{asset.id}</div>
                }
            })}
        </>
    )
}