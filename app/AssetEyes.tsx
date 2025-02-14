import { assets } from './AssetData';

export default function AssetEyes({ onEyes }) {
    return (
        <>
            {assets.map(asset => {
                if (asset.category === 'eyes') {
                    return <div
                        key={asset.id} 
                        onClick={ () => onEyes('option a') }
                        className="rounded-2xl border border-1">OPTION A</div>
                }
            })}
        </>
    )
}