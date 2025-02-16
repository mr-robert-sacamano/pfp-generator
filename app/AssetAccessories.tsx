import { assets } from './data/AssetAccessoriesData';

interface Props {
    setAssetAccessory: any;
}

export default function AssetAccessories(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                const id: number = index + 1;
                const styling: string = 'accessory-' + id + ' accessory-img rounded-2xl border border-1 hover:cursor-pointer';

                return <div
                    key={id} 
                    onClick={() => props.setAssetAccessory(id)}
                    className={styling}>{id}</div>
                }
            )}
        </>
    )
}