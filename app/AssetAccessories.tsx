import { assets } from './AssetAccessoriesData';

interface Props {
    setAssetAccessory: any;
}

export default function AssetAccessories(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                return <div
                    key={index} 
                    onClick={() => props.setAssetAccessory(asset.imageUrl)}
                    className="rounded-2xl border border-1 hover:cursor-pointer">{index}</div>
                }
            )}
        </>
    )
}