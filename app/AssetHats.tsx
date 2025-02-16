import { assets } from './data/AssetHatsData';

interface Props {
    setAssetHat: any;
}

export default function AssetHats(props: Props) {
    return (
        <>
            {assets.map((asset, index) => {
                const id: number = index + 1;
                const styling: string = 'hat-' + id + ' hat-img rounded-2xl border border-1 hover:cursor-pointer';

                return <div
                    key={id} 
                    onClick={() => props.setAssetHat(id)}
                    className={styling}>{id}</div>
                }
            )}
        </>
    )
}