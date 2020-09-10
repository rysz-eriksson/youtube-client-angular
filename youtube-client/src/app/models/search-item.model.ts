class Thumbnail {
  public url: string;
  public width: number;
  public height: number;
}

export class SearchItem {
  public kind: string;
  public etag: string;
  public id: string;
  public snippet: {
    publishedAt: Date,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: Thumbnail,
      medium: Thumbnail,
      high: Thumbnail,
      standard: Thumbnail,
      maxres: Thumbnail
    },
    channelTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    localized: {
      title: string,
      description: string
    },
    defaultAudioLanguage: string
  };
  public statistics: {
    viewCount: number,
    likeCount: number,
    dislikeCount: number,
    favoriteCount: number,
    commentCount: number
  };
}
