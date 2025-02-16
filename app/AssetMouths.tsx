import { assets } from './data/AssetMouthsData';

interface Props {
    setAssetMouth: any;
}

export default function AssetMouths(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                const styling: string = 'mouth-' + index + ' rounded-2xl border border-1 hover:cursor-pointer';

                return <div
                    key={index} 
                    onClick={() => props.setAssetMouth(index)}
                    className={styling}>{index}</div>
                }
            )}
        </>
    )
}