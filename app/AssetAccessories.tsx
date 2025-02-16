import { assets } from './data/AssetAccessoriesData';

interface Props {
    setAssetAccessory: any;
}

export default function AssetAccessories(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                const styling: string = 'accessory-' + index + ' rounded-2xl border border-1 hover:cursor-pointer';

                return <div
                    key={index} 
                    onClick={() => props.setAssetAccessory(index)}
                    className={styling}>{index}</div>
                }
            )}
        </>
    )
}