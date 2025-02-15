import { assets } from './AssetData';

interface Props {
    setAssetHat: any;
}

export default function AssetHats(props: Props) {
    return (
        <>
            {assets.map(asset => {
                if (asset.category === 'hat') {
                    return <div
                        key={asset.id} 
                        onClick={() => props.setAssetHat(asset.imageUrl)}
                        className="rounded-2xl border border-1 hover:cursor-pointer">{asset.id}</div>
                }
            })}
        </>
    )
}