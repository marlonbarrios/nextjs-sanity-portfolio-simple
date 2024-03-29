import { PortableTextBlock } from "next-sanity";

export type Project = {
    _id: string;
    _createdAt: string;
    name: string;
    slug: string;
    imageUrl: string;
    url: string;
    content: PortableTextBlock[];

}