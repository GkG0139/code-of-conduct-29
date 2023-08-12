interface Student {
  id: string;
  fullname: string;
  firstname: string;
  lastname: string;
  nickname: string;
  color: string;
  colorCode: string;
}

interface SearchResultProps {
  data: Student | null;
}

function SearchResult({ data }: SearchResultProps) {
  return (
    <div>
      {data && (
        <div>
          <p>{data.fullname}</p>
          <p>{data.firstname}</p>
          <p>{data.lastname}</p>
          <p>{data.nickname}</p>
          <p>{data.color}</p>
          <p>{data.colorCode}</p>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
