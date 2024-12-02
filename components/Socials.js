// Link
import Link from "next/link";

// Icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiDribbbleLine,
  // RiBahanceLine,
  RiPinterestLine,
  RiFacebookLine

} from "react-icons/ri";

const Socials = () => {
  return (
   <div className='flex items-center gap-x-5 text-lg'>
    <Link href={'https://youtube.com/@bindasringtones?si=_hJ2bI5IdBKeIOOl'} className='hover:text-accent transition-all duration-300'>
    <RiYoutubeLine/>
    </Link>
    <Link href={'https://www.instagram.com/khan_alauddin__/'} className='hover:text-accent transition-all duration-300'>
    <RiInstagramLine/>
    </Link>
    <Link href={'https://www.facebook.com/profile.php?id=100025131360047'} className='hover:text-accent transition-all duration-300'>
    <RiFacebookLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiDribbbleLine/>
    </Link>
    {/* <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiBahanceLine/>
    </Link> */}
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiPinterestLine/>
    </Link>
  </div>
  )
};

export default Socials;
