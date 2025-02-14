import Image from "next/image";

export default function ProfilePicture() {
    return (
        <div>
            <Image
                alt="Beth PFP"
                className="max-w-full border-4 border-black rounded-3xl"
                src="/image/beth.jpg"
                width={600}
                height={600}
            />
        </div>
    )
}