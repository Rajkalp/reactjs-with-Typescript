// type RootState = {
//   counter: number;
// };

// export default RootState;


import store from "./store"
export type RootState = ReturnType<typeof store.getState>