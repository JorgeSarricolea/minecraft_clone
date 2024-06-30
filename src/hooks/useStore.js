import { nanoid } from "nanoid";
import { create } from "zustand";

/**
 * Creates a Zustand store for managing the state of the application.
 *
 * @property {string} texture - The current selected texture.
 * @property {Array} cubes - The list of cubes in the world, each with an id, position, and texture.
 * @property {function} addCube - Function to add a new cube to the state.
 * @property {function} removeCube - Function to remove a cube from the state.
 * @property {function} setTexture - Function to set the current selected texture.
 * @property {function} saveWorld - Function to save the current state of the world.
 * @property {function} resetWorld - Function to reset the world to its initial state.
 */
export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [
    {
      id: nanoid(),
      pos: [1, 1, 1],
      texture: "dirt",
    },
    {
      id: nanoid(),
      pos: [1, 2, 1],
      texture: "log",
    },
  ],
  /**
   * Adds a new cube to the state at the specified position with the current texture.
   *
   * @param {number} x - The x-coordinate for the new cube.
   * @param {number} y - The y-coordinate for the new cube.
   * @param {number} z - The z-coordinate for the new cube.
   */
  addCube: (x, y, z) => {
    set((state) => ({
      cubes: [
        ...state.cubes,
        { id: nanoid(), pos: [x, y, z], texture: state.texture },
      ],
    }));
  },
  /**
   * Removes a cube from the state based on its id.
   *
   * @param {string} id - The id of the cube to be removed.
   */
  removeCube: (id) => {
    set((state) => ({
      cubes: state.cubes.filter((cube) => cube.id !== id),
    }));
  },
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}));
