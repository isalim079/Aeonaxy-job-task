import {AiFillDribbbleCircle, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillWechat} from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='bg-gray-100'>
            <div className='grid  grid-cols-6 gap-10 py-16 pl-10'>
                <div className='space-y-4'>
                    <p className='text-2xl font-bold text-pink-600'>Aeonaxy</p>
                    <p className='text-sm text-justify'>Aeonaxy is the world's leading company for creatives to share, grow, and get hired.</p>
                    <div className='flex text-2xl space-x-4'>
                        <AiFillTwitterCircle />
                        <AiFillFacebook />
                        <AiFillInstagram />
                        <AiFillDribbbleCircle />
                    </div>
                </div>
                <div className='list-none space-y-3 text-sm'>
                    <li className='font-semibold'>For designers</li>
                    <li>Go pro!</li>
                    <li>Explore work</li>
                    <li>Design blog</li>
                    <li>Overtime podcast</li>
                    <li>Playoffs</li>
                    <li>Weekly warm-up</li>
                    <li>Refer a Friend</li>
                    <li>Code of conduct</li>
                </div>
                <div className='list-none space-y-3 text-sm'>
                <li className='font-semibold'>Hire Developers</li>
                    <li>Post a job opening</li>
                    <li>Post a freelance project</li>
                    <li>Search for designers</li>
                    <li className='font-semibold'>Brands</li>
                    <li>Advertise with us</li>
                </div>
                <div className='list-none space-y-3 text-sm'>
                <li className=' font-semibold'>Company</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Media Kit</li>
                    <li>Testimonials</li>
                    <li>API</li>
                    <li>Terms of service</li>
                    <li>Privacy policy</li>
                    <li>Cookie policy</li>
                </div>
                <div className='list-none space-y-3 text-sm'>
                <li className='font-semibold'>For designers</li>
                    <li>Design jobs</li>
                    <li>Designers for hire</li>
                    <li>Freelance designers for hire</li>
                    <li>Tags</li>
                    <li>Places</li>
                    <li className='font-semibold'>Design assets</li>
                    <li>Aeonaxy Marketplace</li>
                    <li>Creative Market</li>
                    <li>Fontspring</li>
                    <li>Font Squirrel</li>
                    
                </div>
                <div className='list-none space-y-3 text-sm'>
                <li className='font-semibold'>Design Resources</li>
                    <li>Freelancing</li>
                    <li>Developer Hiring</li>
                    <li>Developer Portfolio</li>
                    <li>Developer Education</li>
                    <li>Creative Process</li>
                    <li>Develop Industry Trends</li>
                </div>
                <div></div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;