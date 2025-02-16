import { assets } from './AssetHatsData';

interface Props {
    setAssetHat: any;
}

export default function AssetHats(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                return <div
                    key={index} 
                    onClick={() => props.setAssetHat(asset.imageUrl)}
                    className="rounded-2xl border border-1 hover:cursor-pointer">{index}</div>
                }
            )}
        </>
    )
}