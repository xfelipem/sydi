import { Article } from "../Model/Article";
import { Title } from "../Model/Title";

export interface ArticleRepositoryInterface {
  add: (article: Article) => Promise<void>;
  getArticleByTitle: (title: Title) => Promise<Article | null>;
}
