import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "1cnil5hd",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-08-15",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas},
});

export default config;