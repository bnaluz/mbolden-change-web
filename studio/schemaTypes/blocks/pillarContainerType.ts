import { defineField, defineType } from "sanity";


export const pillarsContainerType = defineType({
    name: "pillarContainer",
    type: "object",
    title: "PillarContainer",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "description",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "pillars",
            type: "array",
            of: [{ type: "reference", to: [{ type: "pillarCard" }] }],
        }),
    ],
});