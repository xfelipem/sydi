import { ArticleRepositoryInterface } from "../Contract/ArticleRepositoryInterface";
import { Article } from "../Model/Article";
import { Title } from "../Model/Title";

export class ArticlePersistenceRepository implements ArticleRepositoryInterface {
  private articles: Article[] = [];

  async add(newArticle: Article) {
    this.articles.push(newArticle);
  }

  async getArticleByTitle(title: Title): Promise<Article | null> {
    const article = this.articles.find((storedArticle: Article) => {
      if (title.isEqual(storedArticle.title)) return storedArticle;
      return false;
    })

    return article || null;
  }
}
