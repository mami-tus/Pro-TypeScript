export type Human = { name: string };
export type Animal = { species: string };
function getName(human: Human) {
  return human.name;
}
function getSpecies(animal: Animal) {
  return animal.species;
}
const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;

export const uhyo: Human = { name: 'uhyo' };
export const cat: Animal = { species: 'Felis silvestris catus' };
// error TS2345: Argument of type 'Human' is not assignable to parameter of type 'Human & Animal'.
// Property 'species' is missing in type 'Human' but required in type 'Animal'.
// mysteryFunc(uhyo);
// error TS2345: Argument of type 'Animal' is not assignable to parameter of type 'Human & Animal'.
// Property 'name' is missing in type 'Animal' but required in type 'Human'.
// mysteryFunc(cat);
