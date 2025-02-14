import { assets } from './AssetData';

export default function AssetAccessories({ onAccessories }) {
    return (
        <>
            {assets.map(asset => {
                if (asset.category === 'accessory') {
                    return <div
                        key={asset.id} 
                        onClick={ () => onAccessories('option a') }
                        className="rounded-2xl border border-1">OPTION A</div>
                }
            })}
        </>
    )
}