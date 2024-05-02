import Logo from '@/assets/logo.png';
import Image from 'next/image';

const LogoImg = () => {
    return (
        <div>
            <Image src={Logo} alt='Logo' className='w-24 h-12' />
        </div>
    )
}

export default LogoImg;