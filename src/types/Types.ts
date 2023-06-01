import { SetStateAction } from "react";

export type TContextState = {
  searchToogle: boolean;

  categories: string;
  cursorNext: string;
  toogleDescription: boolean;
  toogleSidebar: boolean;
  searchTermMobile: string;
  searchTerm: string;
  setCursorNext: React.Dispatch<SetStateAction<string>>;
  setToogleSidebar: React.Dispatch<SetStateAction<boolean>>;
  setCategories: React.Dispatch<SetStateAction<string>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSearchTermMobile: React.Dispatch<React.SetStateAction<string>>;
  setToogleDescription: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchToogle: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TCategory = {
  name: string;
};

export type TDataYoutube = {
  contents: [];
  cursorNext: string;
};

export type TAvatar = {
  url: string;
};

export type TContent = {
  video: {
    author: {
      avatar: [TAvatar];
      channelId: string;
      title: string;
    };
    publishedTimeText: string;
    title: string;
    videoId: string;
    stats: { views: number };
    thumbnails: [TAvatar];
  };
};

export type TBadges = {
  text: string;
  type: string;
};

export interface ITags {
  tag: string;
}

export interface IId {
  id: string;
}

export type TDetail = {
  author: {
    avatar: [TAvatar];
    channelId: string;
    title: string;
    badges: [TBadges];

    stats: { subscribersText: string };
  };
  category: string;
  description: string;
  keywords: [];
  lengthSeconds: number;
  stats: {
    comments: number;
    likes: number;
    views: number;
  };
  title: string;
  videoId: string;
  thumbnails: [TAvatar];
  publishedDate: string;
};

export interface IDetail {
  content: {
    author: {
      avatar: [TAvatar];
      channelId: string;
      title: string;
      badges: [TBadges];

      stats: { subscribersText: string };
    };
    category: string;
    description: string;
    keywords: [];
    lengthSeconds: number;
    stats: {
      comments: number;
      likes: number;
      views: number;
    };
    title: string;
    videoId: string;
    thumbnails: [TAvatar];
    publishedDate: string;
  };
}
export interface IContent {
  content: {
    video: {
      author: {
        avatar: [TAvatar];
        channelId: string;
        title: string;
      };
      publishedTimeText: string;
      title: string;
      videoId: string;
      stats: { views: number };
      thumbnails: [TAvatar];
    };
  };
}
