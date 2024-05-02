import Image from "next/image";
import HomeBackImg from '@/assets/home-back.png';

const HomeBack = () => {
    return (
        <div className="w-1/2 h-full md:block hidden">
            <Image src={HomeBackImg} alt="Home Back" className="w-full h-full" />
        </div>
    )
}

export default HomeBack;