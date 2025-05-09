'use client';

import ButtonComponent from '@/components/atoms/ButtonComponent';

export default function ButtonTestPage() {
    const handleClick = () => {
        alert('Button action triggered!');
    };

    return (
        <main style={{ padding: '2rem' }}>
        <h1>Button Test Page</h1>

        <section style={{ marginTop: '2rem' }}>
            <h2>Internal Link</h2>
            <ButtonComponent href="/" variant="primary">
            Go to Home
            </ButtonComponent>
        </section>

        <section style={{ marginTop: '2rem' }}>
            <h2>External Link</h2>
            <ButtonComponent
            href="https://example.com"
            isExternal
            variant="secondary"
            >
            Visit Example.com
            </ButtonComponent>
        </section>

        <section style={{ marginTop: '2rem' }}>
            <h2>Action Button</h2>
            <ButtonComponent onClick={handleClick} variant="tertiary">
            Trigger Alert
            </ButtonComponent>
        </section>
        </main>
    );
}
