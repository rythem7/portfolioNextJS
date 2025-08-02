'use client';

export default function ErrorFallback({ error }) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4">
            <h1 className="text-4xl">Oops!</h1>
            <p>Something went wrong.</p>
            <pre className="whitespace-pre-wrap">{error.message}</pre>
        </div>
    );
}
