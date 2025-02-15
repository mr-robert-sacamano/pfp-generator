import { assets } from './AssetData';

interface Props {
    setAssetAccessory: any;
}

export default function AssetAccessories(props: Props) {
    return (
        <>
            {assets.map(asset => {
                if (asset.category === 'accessory') {
                    return <div
                        key={asset.id} 
                        onClick={() => props.setAssetAccessory(asset.imageUrl)}
                        className="rounded-2xl border border-1 hover:cursor-pointer">{asset.id}</div>
                }
            })}
        </>
    )
}