import { assets } from './data/AssetMouthsData';

interface Props {
    setAssetMouth: any;
}

export default function AssetMouths(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                const id: number = index + 1;
                const styling: string = 'mouth-' + id + ' mouth-img rounded-2xl border border-1 hover:cursor-pointer';

                return <div
                    key={id} 
                    onClick={() => props.setAssetMouth(id)}
                    className={styling}>{id}</div>
                }
            )}
        </>
    )
}