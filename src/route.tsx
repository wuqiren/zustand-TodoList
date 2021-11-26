import About from './About';
import Index from './App';
import TodoList from './TodoList';
const routes = [
  {
    path: '/',
    component: <Index />,
  },
  {
    path: '/todoList',
    component: <TodoList />,
  },
  {
    path: '/about',
    component: <About />,
  },
];

export default routes;
