import { useRouter } from 'next/router';

// /. imports

export function useLocationData(): any {
    const { pathname, asPath } = useRouter();

    return { pathname };
}
