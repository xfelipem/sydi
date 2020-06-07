import { Article } from "../Model/Article";

export interface ArticleRepositoryInterface {
  create: (article: Article) => Promise<void>;
  getArticleByID: (id: number) => Promise<Article>;
}
