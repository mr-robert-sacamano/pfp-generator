import { assets } from './AssetEyesData';

interface Props {
    setAssetEyes: any;
}

export default function AssetEyes(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                return <div
                    key={index} 
                    onClick={() => props.setAssetEyes(asset.imageUrl)}
                    className="rounded-2xl border border-1 hover:cursor-pointer">{index}</div>
                }
            )}
        </>
    )
}