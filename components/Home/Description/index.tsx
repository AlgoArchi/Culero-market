import LogoImg from "../Logo"
import Image from "next/image"
import LinkedinIco from '@/assets/linkedin.png';
import TwitterIco from '@/assets/twitter.png';
import InstagramIco from '@/assets/instagram.png';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { showToast } from "@/utils/toastUtils";
import { subscribe } from "@/firebase/subscriber";

type Inputs = {
    email: string
}

const Description = () => {
    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is mendatory')
            .matches(/^(?=.*[@])/, 'Must contain @'),
    })

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit } = useForm(formOptions)

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log("data ", data);
        const subscribed = await subscribe(data.email);
        if(subscribed.result) {
            showToast('success', 'Successfully submitted your email!');
        } else {
            console.log("subscribed error", subscribed.error);
            showToast('error', 'Not able to subscribe your email');
        }
    }


    return (
        <div className="flex flex-col 2xl:space-y-14 lg:space-y-8 space-y-6 md:w-1/2 w-full">
            <LogoImg />
            <div>
                <div className="xl:text-[99px] lg:text-[70px] text-[50px] xl:leading-[99px] lg:leading-[70px] leading-[50px] font-[700] text-[#F4F4F4]" >
                    <div>Launching </div>
                    <div>soon ...</div>
                </div>
            </div>
            <div className="xl:text-[24px] lg:text-[22px] text-[18px] xl:leading-[36px] lg:leading-[30px] leading-[26px] font-meidum xl:w-[70%] w-[80%]">
                <p className="font-bold">Culero:</p>
                <p>Redefining peer feedback. Rate, review, and connect like never before.</p>
                <p>Stay tuned for our launch!</p>
            </div>

            <div className="flex flex-col space-y-4 xl:text-[24px] lg:text-[22px] text-[18px] xl:leading-[36px] lg:leading-[30px] leading-[26px] font-meidum w-full">
                <p className="font-bold">Subscribe for Early Access</p>
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between xl:w-[75%] w-[85%] bg-[#F8F8F8] p-2 rounded-2xl">
                    <div className="flex items-center xl:w-[70%] w-[80%]">
                        <input type="email" {...register('email')} className="w-full italic xl:text-[20px] lg:text-[16px] text-[14px] font-medium lg:px-4 px-2 bg-transparent focus:outline-none text-black" placeholder="Enter email address" />
                    </div>
                    <input
                        type="submit"
                        value="Subscribe"
                        className="font-semibold xl:text-[22px] lg:text-[18px] text-[15px] bg-[#1E68FF] rounded-2xl py-2 xl:px-8 lg:px-6 px-4 hover:shadow-xl hover:bg-[#507eda]transition duration-500 ease-in-out hover:scale-105 cursor-pointer"
                    />
                </form>
            </div>

            <div className="flex space-x-4">
                <Image src={TwitterIco} alt="Twitter Ico" />
                <Image src={InstagramIco} alt="Twitter Ico" />
                <Image src={LinkedinIco} alt="Twitter Ico" />
            </div>
        </div>
    )
}

export default Description