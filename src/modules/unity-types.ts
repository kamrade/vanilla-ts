/**
 * 
 *  https://www.typescriptlang.org/docs/handbook/utility-types.html
 * 
 *  Awaited<T>
 *  Partial<T>        - take some of the properties of type T (makes all properies not required)
 *  Required<T>       - make all the properties of type T required 
 *  Readonly<T>       - make all the properties of type T readonly
 *  Record<K,T>       - make Record type with key K and property based on T
 *  Pick<T,K>         - take some particular properties K from type T
 *  Omit<T,K>         - take all properties from type T, except K
 *  Exclude<T,U>      - exclude from type T all properties from type U
 *  Extract<T,U>      - extract from type T only the properties existing in type U
 *  NonNullable<T>    - takes one generic parameter which should be a union type and return the same type but without null and undefined
 *  ReturnType<T>
 *  InstanceType<T>
 *  Required<T>
 *  ThisType<T>
 */


interface Starship {
  name: string;
  enableHyperjump: boolean;
}


// PARTIAL
function partialTypes() {
  const updateStarship = (id: number, starship: Partial<Starship>) => {
    console.log('Partial type:', id, starship);
  }

  updateStarship(1, {
    name: 'Explorer'
  });
}


// RECORD
function recordType() {
  const starships: Record<string, Starship> = {
    Explorer1: {
      name: 'Explorer1',
      enableHyperjump: true,
    },
    Explorer2: {
      name: 'Explorer2',
      enableHyperjump: false,
    },
  };

  console.log('Record type:', 'Starships', starships);
}


// EXCLUDE
function excludeType() {
  type A = string | string[] | undefined;
  type B = Exclude<A, undefined>;
  let b : B = 'undefined';
  console.log("Exclude", b);

  type AvailableDrinks = "Coffee" | "Tea" | "Orange juice" | "Lemonade";
  let johnDrink: AvailableDrinks = "Coffee";
  type DrinksJaneDoesntLike = "Coffee" | "Orange juice";
  let janesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike> = "Lemonade";
  console.log("Exclude:", johnDrink, janesDrink);
}


// EXTRACT
function exctractType() {
  type AvailableDrinks = "Coffee" | "Tea" | "Orange juice" | "Lemonade";
  type DrinksJaneLikes = "Tea" | "Lemonade" | "Mohito";
  let janeDrink: Extract<AvailableDrinks, DrinksJaneLikes> = "Tea";
  console.log("Exctract:", janeDrink);
}


// NONNULLABLE
function nonNullanle() {
  type A = string | string[] | null | undefined;
  type B = NonNullable<A>;
  let a: B = 'null';
  console.log("Non nullable:", a);

  interface StarshipProperties {
    color?: "blue" | "red" | "green";
  }
  function paintStarship(id: number, color: NonNullable<StarshipProperties['color']>) {
    console.log('Non nullable:', `Paint starship #${id} with ${color} color`);
  }
  paintStarship(1, 'blue'); // - can't get undefined color
}


// --- ALL ---
export function unityTypes() {
  console.log('::: Unity Types');
  partialTypes();
  recordType();
  excludeType();
  exctractType();
  nonNullanle();

}