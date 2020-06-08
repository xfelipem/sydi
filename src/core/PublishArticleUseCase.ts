import { Article } from "./Article/Model/Article";
import { ArticleService } from "./Article/Model/ArticleService";

export class PublishArticleUseCase {
  constructor(private articleService: ArticleService) {}

  async execute(newArticle: any): Promise<void> {
    this.articleService.create(newArticle);
  }
}
