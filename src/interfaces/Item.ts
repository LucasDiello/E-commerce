type Item = {
    map(arg0: (item: Item) => void): unknown;
    id: string;
    title: string;
    thumbnail: string;
    price: number;
    };


export default Item;