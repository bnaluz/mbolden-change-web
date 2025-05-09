import { defineField, defineType } from 'sanity';

export const buttonType = defineType({
    name: 'button',
    title: 'Button',
    type: 'object',
    fields: [
        defineField({
        name: 'label',
        title: 'Label',
        type: 'string',
        description: 'Text shown on the button',
        validation: Rule => Rule.required().error('Button label is required'),
        }),
        defineField({
        name: 'internalSlug',
        title: 'Internal Slug',
        type: 'string',
        description: 'Enter the slug of an internal page (e.g., "contact"). Leave blank if using an external link.',
        }),
        defineField({
        name: 'externalLink',
        title: 'External Link',
        type: 'url',
        }),
    ],
    preview: {
        select: {
        label: 'label',
        internalSlug: 'internalSlug',
        external: 'externalLink',
        },
        prepare({ label, internalSlug, external }) {
        const destination = internalSlug ? `/${internalSlug}` : external || '(no link)';
        return {
            title: `${label || '[No label]'} → ${destination}`,
        };
        },
    },
});
