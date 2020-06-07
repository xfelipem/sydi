import { Article } from "./Article/Model/Article";
import { ArticleService } from "./Article/Model/ArticleService";

export class PublishArticleUseCase {
  constructor(private articleService: ArticleService) {}

  async execute(newArticle: Article): Promise<void> {
    this.articleService.create(newArticle);
  }
}
