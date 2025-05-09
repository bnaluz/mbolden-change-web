import Link from 'next/link';
import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import styles from './ButtonComponent.module.css';


type BaseButtonAttributes = React.ComponentPropsWithoutRef<'button'>;
type RefType = HTMLButtonElement;

interface ButtonProps extends BaseButtonAttributes {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'icon';
    className?: string;
    href?: string;
    isDisabled?: boolean;
    isExternal?: boolean;
}


const ButtonComponent = forwardRef<RefType, ButtonProps>((props, ref) => {
    const {
        type,
        children,
        variant = 'primary',
        isDisabled,
        className,
        href,
        isExternal,
        ...rest
    } = props;

    const buttonClass = `${styles.base} ${styles[variant]} ${className || ''} ${isDisabled ? styles.disabled : ''}`;

    const handleLinkClick = (e: React.MouseEvent) => {
        if (isDisabled) {
            e.preventDefault();
        }
    };

    if (href) {
        if (isExternal) {
            return (
                <a
                    href={href}
                    className={buttonClass}
                    {...(rest as ComponentPropsWithoutRef<'a'>)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={isDisabled ? handleLinkClick : undefined}
                >
                    {children}
                </a>
            );
        } else {
            return (
                <Link href={href} className={buttonClass} {...(rest as ComponentPropsWithoutRef<'a'>)} onClick={isDisabled ? handleLinkClick : undefined}>
                    {children}
                </Link>

            );
        }
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
