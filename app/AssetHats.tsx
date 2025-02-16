import { assets } from './data/AssetHatsData';

interface Props {
    setAssetHat: any;
}

export default function AssetHats(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                const styling: string = 'hat-' + index + ' rounded-2xl border border-1 hover:cursor-pointer';

                return <div
                    key={index} 
                    onClick={() => props.setAssetHat(index)}
                    className={styling}>{index}</div>
                }
            )}
        </>
    )
}