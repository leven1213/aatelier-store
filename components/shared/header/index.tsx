import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';

const Header = () => {
    return <header className='w-full border-b'>
        <div className='wrapper flex-between'>
            <div className='flex-start'>
                <Link href='/' className='flex-start'>
                    <Image 
                        src='/images/aatelier_logo-v1.svg' 
                        alt={`${APP_NAME} logo`} 
                        height={40} 
                        width={40} 
                        priority={true}
                    />
                    <Image 
                        className="hidden lg:block font-bold text-2xl ml-3"
                        src='/images/aatelier_logotype-v1.svg' 
                        alt={`${APP_NAME} logo`} 
                        height={110} 
                        width={110} 
                        priority={true}
                    /> 
                </Link>
            </div>
            <div className="space-x-2">
                <Button asChild variant='ghost'>
                    <Link href='/cart'>
                        <ShoppingCart /> Bag
                    </Link>
                </Button>
                <Button asChild variant='ghost'>
                    <Link href='/sign-in'>
                        <UserIcon /> Sign In
                    </Link>
                </Button>
            </div>
        </div> 
    </header>;
};

export default Header;