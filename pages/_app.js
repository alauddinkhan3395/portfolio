import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// Router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

// Import Sora font from @next/font/google
import { Sora } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '700'],
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className={sora.className}>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </div>
  );
};

export default MyApp;