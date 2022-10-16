import { useAppDispatch } from '../../app/hooks';
import { IRepo } from '../../features/github/githubApi';
import { addFavorite } from '../../features/github/githubSlice';

export const RepoCard = ({ repo }: { repo: IRepo }) => {
  const dispatch = useAppDispatch();

  const addToFavorite = (url: string) => {
    dispatch(addFavorite(url));
  };

  return (
    <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
      <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
        <h2 className='text-lg font-bold'>{repo.full_name}</h2>
        <p className='text-sm'>
          Forks: <span className='font-bold mr-2'>{repo.forks}</span>
          Watchers: <span className='font-bold'>{repo.watchers}</span>
        </p>
        <p className='text-sm font-thin'>{repo.description}</p>
      </a>
      <button
        className='rounded py-2 px-4 bg-yellow-400 hover:shadow-md transition-all'
        onClick={() => addToFavorite(repo.html_url)}
      >
        Add
      </button>
    </div>
  );
};
