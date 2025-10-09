import type { Task } from '@entities/TaskCard/model';
import { baseApi } from '@shared/baseApi';

export const tasksApi = baseApi
    .injectEndpoints({
        endpoints: (build) => ({
            getTasks: build.query<Task[], void>({
                query: () => 'todos',
                // Переписать tasksApi на baseApi.injectEndpoints(...), добавить эндпоинт getTasks с transformResponse → response.todos.
                // в ответе от JSONPlaceholder сразу приходит массив, поэтому transformResponse как таковой бесполезен, поэтому
                // решил модифицировать до 10 первых элементов ответа, чтобы список помещался на одном экране и было видно куда добавляются
                // новые todododo
                transformResponse: (response: Task[]) => response.slice(0, 10),
            }),
        }),
    })
    // Чтобы каждый раз не ходить в baseApi и не добавлять там тэги
    .enhanceEndpoints({
        addTagTypes: ['Todos'],
    });

export const { useGetTasksQuery } = tasksApi;
