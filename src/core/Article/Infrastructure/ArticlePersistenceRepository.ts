import { ArticleRepositoryInterface } from "../Contract/ArticleRepositoryInterface";
import { Article } from "../Model/Article";

export class ArticlePersistenceRepository
  implements ArticleRepositoryInterface {
  private articles: Article[] = [];
  async create(newArticle: Article) {
    this.articles.push(newArticle);
  }
  async getArticleByID(id: number): Promise<Article | undefined> {
    return this.articles.find((article: Article) => {
      if (article.getId() === id) return article;
      return false;
    });
  }
}
