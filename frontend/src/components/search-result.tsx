import { Student } from '../types';

interface SearchResultProps {
  data: Student | null;
}

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

function SearchResult({ data }: SearchResultProps) {
  const getEntries = <T extends object>(obj: T) => Object.entries(obj) as Entries<T>;
  return (
    <div>
      {data && (
        <div>
          {getEntries instanceof Array
            && getEntries.map(([key, value]: [string, string]) => (
              <p key={key}>
                {key}
                {' '}
                {value}
              </p>
            ))}
        </div>
      )}
    </div>
  );
}

export default SearchResult;
