type TGroupBy = <T, K>(arr: T[], func: (item: T) => K) => Map<K, T[]>;
