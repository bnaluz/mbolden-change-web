import { defineField, defineType } from "sanity";


export const pillarCardType = defineType({
    name: "pillarCard",
    type: "document",
    title: "Pillar Card",
    fields: [
        defineField({
            name: "image",
            type: "image",
            title: "Image",
            fields: [{ title: "Alt Text", name: "alt", type: "string" }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "headline",
            type: "string",
            title: "Headline",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            type: "array",
            title: "Description",
            of: [{ type: "block" }],
            validation: (Rule) => Rule.required(),            
        }),
    ]
})