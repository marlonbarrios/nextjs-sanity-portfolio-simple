


import { defineConfig } from 'sanity';
import {structureTool } from 'sanity/structure';
import  schemas  from './sanity/schemas';




const config = defineConfig({
    projectId: 'bzx6jqwx',
    dataset: 'production',
    title: 'My developer and artist portfolio',
    apliVersion: '2024-03-15',
    basePath: '/admin',
    plugins: [structureTool()],
    schema: { types: schemas}


    });

export default config;