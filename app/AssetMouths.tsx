import { assets } from './AssetData';

export default function AssetMouths({ onMouth }) {
    return (
        <>
            {assets.map(asset => {
                if (asset.category === 'mouth') {
                    return <div
                        key={asset.id} 
                        onClick={ () => onMouth('option a') }
                        className="rounded-2xl border border-1">OPTION A</div>
                }
            })}
        </>
    )
}