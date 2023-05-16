import NextImage from '../NextImage';

export const HeroSection = () => {
  return (
    <div
      style={{ backgroundColor: '#020D1B' }}
      className='flex items-center justify-between'
    >
      <div className='h-fit p-20'>
        <h1 className='mb-10 text-4xl text-white'>
          Blogging about code and life.
        </h1>

        <input
          type='text'
          id='last_name'
          className='block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          placeholder='Search a post here'
        />

        <p className='mt-5 text-xs text-white'>Typescript - Next - Test E2E</p>
      </div>

      <div className='flex-initial'>
        <NextImage
          useSkeleton
          src='/images/giphy.gif'
          width='450'
          height='450'
          alt='Icon'
        />
      </div>
    </div>
  );
};
