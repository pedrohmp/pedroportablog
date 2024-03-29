import * as React from 'react';

import { HeroSection } from '@/components/HeroSection';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import { PostList } from '@/components/PostList';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <HeroSection />
          <PostList />
          <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>
            <footer className='absolute bottom-2 text-gray-700'>
              ©{new Date().getFullYear()} By{' '}
              <UnderlineLink href='/'>Pedro Porta</UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
