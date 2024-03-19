import { PortableTextBlock } from "next-sanity";

export type Page = {
    title: string;
    _id: string;
    _createdAt: string;
    name: string;
    slug: string;
    imageUrl: string;
    url: string;
    content: PortableTextBlock[];

}