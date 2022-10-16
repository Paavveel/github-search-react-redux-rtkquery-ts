import { useAppSelector } from '../../app/hooks';
import { selectFavorites } from '../../features/github/githubSlice';

export const FavoritesPage = () => {
  const favorites = useAppSelector(selectFavorites);

  if (favorites.length === 0) return <p className='text-center'>No items.</p>;
  return (
    <div className='flex justify-center pt-10 mx-auto'>
      <ul className='list-none'>
        {favorites.map((fav) => (
          <li key={fav}>
            <a href={fav} target='_blank' rel='noopener noreferrer'>
              {fav}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
