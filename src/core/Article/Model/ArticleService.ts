import { ArticleRepositoryInterface } from "../Contract/ArticleRepositoryInterface";
import { Abstract } from "./Abstract";
import { Article } from "./Article";
import { Content } from "./Content";
import { SourceCollection } from "./SourceCollection";
import { Title } from "./Title";

export class ArticleService {
  constructor(private articleRepository: ArticleRepositoryInterface){};
  
  async create(props: any): Promise<void> {
    try{
      const newArticle = this.getNewArticle(props);
      this.articleRepository.add(newArticle);
    } catch (error) {
      throw error;
    }
  }

  async getArticleByTitle(title: string): Promise<Article>{
    const articleTitle = Title.create(title);
    const persistenceArticle = await this.articleRepository.getArticleByTitle(articleTitle);

    if(!persistenceArticle) throw new Error(`There is no article with title "${title}"`)

    return persistenceArticle;
  }

  private getNewArticle(props: any): Article {
    const validatedProps = {
      title: Title.create(props.title),
      abstract: Abstract.create(props.abstract),
      content: Content.create(props.content),
      sources: SourceCollection.create(props.sources)
    };
    return new Article(validatedProps);
  }
}
