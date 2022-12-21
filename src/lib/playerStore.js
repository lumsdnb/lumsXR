import { writable } from "svelte/store";

export const player = writable({
  username: "jdoe",
  name: "John Doe",
  email: "jdoe@email.com",
  position: [0, 0, 0],
  rotation: 0,
});
