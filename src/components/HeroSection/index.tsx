


import NextImage from '@/components/NextImage';


export const HeroSection = () => {
  return (
    <div
      style={{ height: '40vh' }}
      className='flex items-center justify-between bg-black gap-20'
    >
      <div className='h-fit flex-auto pl-20 max-w-full'>
        <h1 className='mb-10 text-4xl text-white w-full max-w-sm'>
          Blogging about code and life.
        </h1>

        <input
          type='text'
          id='last_name'
          className='w-full max-w-md rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          placeholder='Search a post here'
        />

        <p className='mt-5 text-xs text-white'>Typescript - Next - Test E2E</p>
      </div>

      <div className='flex-initial overflow-hidden' style={{ right: 0, height: '40vh', }}>

        <NextImage width={700} height={1000} src="/images/giphy.gif" alt="Gif" />

      </div>
    </div>
  );
};
