export function mappedTypes() {
  console.log('::: Mapped types');
  

  // EXAMPLE 1
  type Properties = 'propA' | 'propB';
  
  type MyMappedType = {
    [P in Properties]: P;
  }

  let myMapped: MyMappedType = {
    propA: 'propA',
    propB: 'propB'
  }

  console.log('Example 1 (my Mapped):', myMapped);


  // EXAMPLE 2
  type MyGenericMappedType<Properties extends string | number | symbol> = {
    [P in Properties]: P;
  }

  type MyNewType = MyGenericMappedType<'propA' | 'propB'>;

  let myNew: MyNewType = {
    propA: 'propA',
    propB: 'propB',
  }

  console.log('Example 2 (myNew):', myNew);


  // EXAMPLE 3
  type MyAnotherGenericMappedType<T> = {
    readonly [P in keyof T]?: T[P];
  }

  type MyAnotherNewType = MyAnotherGenericMappedType<{a: 'a', b: 'b'}>;

  let myAnother: MyAnotherNewType = {
    a: 'a',
  }

  console.log('Example 3 (myAnother):', myAnother);


  // EXAMPLE 4. To pick up some properties from existing type.
  type Pick1<T, Properties extends keyof T> = {
    [P in Properties]: T[P]
  }

  type MyPickType = Pick<{a: 'a', b: 'b', c: 'c'}, 'a' | 'c'>;

  let myPick: MyPickType = {
    a: 'a',
    c: 'c'
  }

  console.log('Example 4 (myPick): ', myPick);

  // EXAMPLE 5. Record

  // Intersection of types
  type Record1<K extends keyof any, T> = {
    [P in K]: T;
  } & { someProperty: string }

  const someRecord1: Record1<'A' | 'B', number> = {
    'A': 1,
    'B': 2,
    someProperty: 'someProperty'
  }

  console.log('Some record 1', someRecord1);

  const someRecord: Record<string | number, number> = {}
  someRecord.apples = 10;
  someRecord.oranges = 20;
  someRecord[3] = 30;
  someRecord[0] = 40;

  console.log(someRecord);

  const someOtherRecord: Record<'A' | 'B', number> = { A: 23, B: 12 }

  console.log(someOtherRecord);

  interface Record2 {
    [key: string]: number;
  }



}