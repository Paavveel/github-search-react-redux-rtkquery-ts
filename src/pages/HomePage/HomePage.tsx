import { useSearchUsersQuery } from '../../features/github/githubApi';

export const HomePage = () => {
  const { isLoading, isError, data } = useSearchUsersQuery('pavel');
  return <div>HomePage</div>;
};
