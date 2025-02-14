import { assets } from './AssetData';

export default function AssetHats({ onHat }) {
    return (
        <>
            {assets.map(asset => {
                if (asset.category === 'hat') {
                    return <div
                        key={asset.id} 
                        onClick={ () => onHat('option a') }
                        className="rounded-2xl border border-1">OPTION A</div>
                }
            })}
        </>
    )
}