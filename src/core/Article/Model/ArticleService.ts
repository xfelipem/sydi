import { Abstract } from "./Abstract";
import { Article } from "./Article";
import { Title } from "./Title";

export class ArticleService {
  constructor(private articleRepository: ArticleRepositoryInterface);
  create(props: any): void {
    const newArticle = new Article(props);
    return newArticle;
  }

  private getNewArticle(props: any): Article {
    const validatedProps = {
      title: Title.create(props.title),
      abstract: Abstract.create(props.abstract),
      content: Content.create(props.content),
      sources: Source.bulkCreate(props.sources)
    };
    return new Article(validatedProps);
  }
}
