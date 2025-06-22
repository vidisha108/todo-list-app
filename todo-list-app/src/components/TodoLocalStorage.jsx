const todokey = "reactTodo";
export const getLocalStorageTodo = () => {
  const rawTodo = localStorage.getItem(todokey);
    if(!rawTodo) return [];
    return JSON.parse(rawTodo);}

export const setLocalStorageTodo = (task) => {
 return localStorage.setItem(todokey, JSON.stringify(task))};