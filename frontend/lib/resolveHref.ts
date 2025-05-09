import type { Button } from '@/sanity/types';

export const resolveHref = (button?: Button): string => {
    if (!button) return '#';
    if (button.internalSlug) return `/${button.internalSlug}`;
    if (button.externalLink) return button.externalLink;
    return '#';
};
