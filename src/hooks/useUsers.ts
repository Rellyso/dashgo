import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { api } from "../services/api";

type User = {
  id: string,
  name: string,
  email: string,
  created_at: string
}

type GetUsersResponse = {
  users: User[],
  totalCount: number;
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('http://localhost:3000/api/users', {
    params: {
      page,
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: new Date(user.created_at).toLocaleDateString('pt-br', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }))

  return {
    users,
    totalCount
  };
}

export function useUsers(page: number, options: UseQueryOptions) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  }) as UseQueryResult<GetUsersResponse, unknown>
}