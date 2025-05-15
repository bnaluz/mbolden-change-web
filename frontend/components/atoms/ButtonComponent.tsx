import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import styles from './ButtonComponent.module.css';
import { LinkAtom } from './Link';

import type { InternalOrExternalLink } from '@/sanity/types';
type BaseButtonAttributes = React.ComponentPropsWithoutRef<'button'>;
type RefType = HTMLButtonElement;

interface ButtonProps extends BaseButtonAttributes {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'icon';
    className?: string;
    isDisabled?: boolean;
    link?: InternalOrExternalLink;
}


const ButtonComponent = forwardRef<RefType, ButtonProps>((props, ref) => {
    const {
        type,
        children,
        variant = 'primary',
        isDisabled,
        className,
        link,
        ...rest
    } = props;

    const buttonClass = `${styles.base} ${styles[variant]} ${className || ''} ${isDisabled ? styles.disabled : ''}`.trim();

    if (link?.title && (link.isExternalLink ? link.url : link.reference?.slug?.current)) {
        return (
            <LinkAtom {...link} className={buttonClass}>
                {children || link.title}
            </LinkAtom>
        );
    }


    return (
        <button
            ref={ref}
            className={buttonClass}
            {...(rest as ComponentPropsWithoutRef<'button'>)}
            type={type || 'button'}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
});

export default ButtonComponent;
