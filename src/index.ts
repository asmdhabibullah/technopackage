import {
  AdditionalRobotsProps, MetaTag, OpenGraph, Twitter
} from "next-seo/lib/types";

export type BCPathProps = {
  path?: string | string[];
};

export type SubHeaderProps = {
  classData?: string;
  title?: string;
  categories?: {
    [key: string]: string | undefined;
  }[];
};

export type LayoutProps = {
  children?: JSX.Element | JSX.Element[];
};

export type StoreDispatchProps = {

};

export type StoreInitialProps = {
  articles?: ArticleProps[];
};

export type CssProps = {
  [key: string]: string | undefined
};

export type UserProp = {
  name?: string;
  role?: string;
  email?: string;
  avater?: string;
  categury?: string;
  comments?: {
    article: string;
  }[];
  publishedArticles?: ArticleProps[];
};

export type ArticleProps = {
  tags?: string;
  slug?: string;
  title?: string;
  views?: {
    view: string;
    user: UserProp;
  }[];
  loves?: {
    love: number;
    user: UserProp;
  }[];
  images?: string;
  postTime?: Date;
  clickes?: number;
  author?: UserProp,
  noindex?: boolean;
  comments?: {
    user: UserProp;
    details: string;
  }[];
  category?: string;
  nofollow?: boolean;
  thumbnail?: string;
  canonical?: string;
  subCategory?: string;
  description?: {
    sub: string;
    main: string;
    support: string;
  };
  robotsProps?: boolean;
  titleTemplate?: string;
}

export type SeoProps = {
  title?: string;
  children?: never;
  noindex?: boolean;
  twitter?: Twitter;
  facebook?: {
    appId: string;
  };
  nofollow?: boolean;
  canonical?: string;
  useAppDir?: boolean;
  themeColor?: string;
  description?: string;
  openGraph?: OpenGraph;
  defaultTitle?: string;
  titleTemplate?: string;
  mobileAlternate?: {
    media: string;
    href: string;
  };
  languageAlternates?: {
    hrefLang: string;
    href: string;
  }[];
  additionalLinkTags?: {
    rel: string;
    href: string;
    as?: string;
    type?: string;
    sizes?: string;
    media?: string;
    color?: string;
    keyOverride?: string;
    crossOrigin?: string;
  }[];
  robotsProps?: AdditionalRobotsProps;
  additionalMetaTags?: ReadonlyArray<MetaTag>;
};

export type ArticlesProps = {
  // mdxSource?: MDXRemoteSerializeResult?: string;
  products?: ArticleProps[];
  articles?: ArticleProps[];
};

export type ConfigProps = {
  CLIENT_URI?: string;
  SERVER_URI?: string;
  REDIS_URL?: string;
  IMG_ENDPOINT?: string;
};
