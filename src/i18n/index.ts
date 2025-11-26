import en from './en.json';
import es from './es.json';

const languages = { en, es } as const;

export function t(lang: keyof typeof languages, key: string): string {
    const keys = key.split('.');
    return keys.reduce((obj: unknown, k) => (obj as Record<string, unknown>)[k], languages[lang]) as string;
}
