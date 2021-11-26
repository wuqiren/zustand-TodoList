/* eslint-disable no-unused-vars */
import create from 'zustand';

const useStore = create((set: (arg: any) => void) => ({
  list: [1, 2, 3, 4, 5],
  add: (inputValue: string) =>
    set((state: any) => {
      state.list.push(inputValue);
      return { list: state.list };
    }),
  remove: (value: string) =>
    set((state: any) => {
      const list = state.list;
      list.splice(value, 1);
      return { list: state.list };
    }),
  fetch: async () => {
    const response = await fetch('http://localhost:3000/data');
    set({ list: await response.json() });
  },
}));
export default useStore;
