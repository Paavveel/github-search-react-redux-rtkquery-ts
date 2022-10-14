import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ServerResponse<T> {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
}

export interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: builder => ({
    searchUsers: builder.query<ServerResponse<IUser>, string>({
      query: search => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 10,
        },
      }),
    }),
  }),
});

export const { useSearchUsersQuery } = githubApi;
