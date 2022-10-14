import { useEffect, useState } from 'react';
import { useSearchUsersQuery } from '../../features/github/githubApi';
import { useDebounce } from '../../hooks';

export const HomePage = () => {
  const [search, setSearch] = useState('');
  const [searchDropdown, setSearchDropdown] = useState(false);
  const debouncedSearch = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debouncedSearch, {
    skip: debouncedSearch.length < 3,
  });

  useEffect(() => {
    setSearchDropdown(debouncedSearch.length > 3);
  }, [debouncedSearch]);

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
        {searchDropdown && (
          <ul className='list-none absolute top=[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white'>
            {isLoading && <p className='text-center'>Loading...</p>}
            {data?.items.map(user => (
              <li
                key={user.id}
                className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
