type Pair<T> = [string, T];

export class HashTable<T> {
    size: number;
    buckets: Pair<T>[][];

    constructor(size: number = 10) {
        this.size = size;
        this.buckets = Array.from({ length: size }, () => []);
    }

    private hash(key: string): number {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % this.size;
    }

    set(key: string, value: T): void {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const pair = bucket.find(([k]) => k === key);

        if (pair) pair[1] = value;
        else bucket.push([key, value]);
    }

    get(key: string): T | undefined {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const pair = bucket.find(([k]) => k === key);

        return pair ? pair[1] : undefined;
    }

    delete(key: string): boolean {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const pairIndex = bucket.findIndex(([k]) => k === key);

        if (pairIndex !== -1) {
            bucket.splice(pairIndex, 1);
            return true;
        }

        return false;
    }
}
