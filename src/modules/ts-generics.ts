// You can pass types to other types
type MyGenericType<TData> = {
    data: TData;
};

type Example1 = MyGenericType<{
    firstName: string;
}>;

type Example2 = MyGenericType<string>;
type Example3 = MyGenericType<number>;


// You can create functions with a type helper
// mapped over the top, and pass the type to them
// manually…

const makeFetch = <TData>(url: string): Promise<TData> => {
    return fetch(url).then((res) => res.json())
};

makeFetch<{ firstName: string, lastName: string }>("api/endpoint").then((res) => {
    console.log(res);
});


// You can pass these type parameters to
// other parts of JS, like Set and Map

const set = new Set<number>();

set.add(1);

// We want this to error!
set.add("abc")

export {};