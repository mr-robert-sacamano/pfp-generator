import { assets } from './data/AssetEyesData';

interface Props {
    setAssetEyes: any;
}

export default function AssetEyes(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                const id: number = index + 1;
                const styling: string = 'eyes-' + id + ' eyes-img rounded-2xl border border-1 hover:cursor-pointer';

                return <div
                    key={id} 
                    onClick={() => props.setAssetEyes(id)}
                    className={styling}>{id}</div>
                }
            )}
        </>
    )
}