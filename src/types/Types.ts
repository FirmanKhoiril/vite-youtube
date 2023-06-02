import React, { SetStateAction } from "react";

export type TContextState = {
  searchToogle: boolean;

  categories: string;
  cursorNext: string;
  toogleDescription: boolean;
  toogleSidebar: boolean;
  searchTermMobile: string;
  toogleComments: boolean;
  searchTerm: string;
  setCursorNext: React.Dispatch<SetStateAction<string>>;
  setToogleSidebar: React.Dispatch<SetStateAction<boolean>>;
  setCategories: React.Dispatch<SetStateAction<string>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSearchTermMobile: React.Dispatch<React.SetStateAction<string>>;
  setToogleComments: React.Dispatch<React.SetStateAction<boolean>>;
  setToogleDescription: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchToogle: React.Dispatch<React.SetStateAction<boolean>>;
};
export type TLinks = {
  icon: string;
  targetUrl: string;
  title: string;
};

export type TChannel = {
  avatar: [TAvatar];
  banner: {
    desktop: [TAvatar];
    mobile: [TAvatar];
  };
  channelId: string;
  country: string;
  description: string;
  badges: [TBadges];
  hasBusinessEmail: boolean;
  joinedDateText: string;
  keywords: [];
  links: [TLinks];
  stats: {
    subscribersText: string;
    videosText: string;
    views: number;
  };
  title: string;
  username: string;
};
export type TCommentsDetail = {
  author: {
    avatar: [TAvatar];
    channelId: string;
    title: string;
  };
  pinned: {
    status: boolean;
    text: string;
  };
  creatorHeart: boolean;
  content: string;
  publishedTimeText: string;
  stats: {
    replies: number;
    votes: number;
  };
};
export type TId = {
  title: string;
  id: string;
};
export type TComments = {
  comments: [];
  cursorNext: string;
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
