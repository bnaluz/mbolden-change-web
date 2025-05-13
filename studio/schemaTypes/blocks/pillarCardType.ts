import { defineField, defineType } from "sanity";


export const pillarCardType = defineType({
    name: "pillarCard",
    type: "document",
    title: "PillarCard",
    fields: [
        defineField({
            name: "image",
            type: "image",
            fields: [{ title: "Alt Text", name: "alt", type: "string" }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "headline",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            type: "array",
            of: [{ type: "block" }],
            validation: (Rule) => Rule.required(),            
        }),
    ]
})