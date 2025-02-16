import { assets } from './data/AssetEyesData';

interface Props {
    setAssetEyes: any;
}

export default function AssetEyes(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                const styling: string = 'eyes-' + index + ' rounded-2xl border border-1 hover:cursor-pointer';

                return <div
                    key={index} 
                    onClick={() => props.setAssetEyes(index)}
                    className={styling}>{index}</div>
                }
            )}
        </>
    )
}