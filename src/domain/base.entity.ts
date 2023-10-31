export type OptionalGuid<T> = Omit<T, 'guid'> & { guid?: string };
