// Category.tsx
export interface Category {
    id: string;
    name: string;
    depth?: number;
    link?: string;
    subcats?: Category[];
}

export default () => { };