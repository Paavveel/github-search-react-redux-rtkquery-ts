import { useEffect, useState } from 'react';
import { useSearchUsersQuery } from '../../features/github/githubApi';

export const HomePage = () => {
  const [search, setSearch] = useState('');
  const { isLoading, isError, data } = useSearchUsersQuery('pavel');

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div className='flex justify-center pt-10 mx-auto'>
      {isError && (
        <p className='text-center text-red-600'>Something went wrong...</p>
      )}
      <div className='relative w-[560px]'>
        <input
          value={search}
          type='text'
          className='border py-2 px-4 w-full h-[42px] mb-2'
          placeholder='Search for Github username...'
          onChange={e => setSearch(e.target.value)}
        />
        <div className='absolute top=[42px] left-0 right-0 max-h-[200px] shadow-md bg-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          quasi!
        </div>
      </div>
    </div>
  );
};
