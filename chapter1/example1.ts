import axios from "axios";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

axios
  .get<Todo>("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.data)
  .then(logTodo);

function logTodo({ id, userId, title, completed }: Todo) {
  console.log(
    `id: ${id}, userId: ${userId}, title: ${title}, completed: ${completed}`
  );
}
