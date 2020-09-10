import { SearchItem } from './search-item.model';

export class SearchResponse {
  public kind: string;
  public etag: string;
  public pageInfo: {
    totalResults: number,
    resultsPerPage: number
  };
  public items: SearchItem[];
}
