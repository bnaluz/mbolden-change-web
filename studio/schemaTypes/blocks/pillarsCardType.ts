import { defineField, defineType } from "sanity";


export const pillarsCardType = defineType({
    name: "pillarCard",
    type: "object",
    title: "Pillars",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "caption",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "pillars",
            type: "array",
            of: [{ type: "reference", to: [{ type: "pillars" }] }],
        }),
    ]
});