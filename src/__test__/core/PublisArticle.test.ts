import { PublishArticleUseCase } from "../../core/PublishArticleUseCase";
import { ArticleService } from "../../core/Article/Model/ArticleService";
import { ArticlePersistenceRepository } from "../../core/Article/Infrastructure/ArticlePersistenceRepository";

describe("Given a PublishArticle use case", () => {
  const articlePersistenceRepository = new ArticlePersistenceRepository();
  const articleService = new ArticleService(articlePersistenceRepository);

  test(`
    when an article with title, abstract, content and sources, is provided
    during execution, then should create an Article in persistence.
  `, async () => {
    const title = "Pascal en la web";
    const abstract =
      "Esta es la idea que vamos a intentar comprobar en el content";
    const content = "Contenido fundamentado, relacionado a sources";
    const sources = ["fuente 1", "fuente 2"];
    const protoArticle = { title, abstract, content, sources };

    const publishArticle = new PublishArticleUseCase(articleService);

    await publishArticle.execute(protoArticle);

    const persistenceArticle = await articleService.getArticleByTitle(title);

    expect(persistenceArticle.abstract.value).toBe(protoArticle.abstract);
    expect(persistenceArticle.content.value).toBe(protoArticle.content);
    expect(persistenceArticle.sources.value.map(source => source.value)).toStrictEqual(protoArticle.sources);
    expect(persistenceArticle.title.value).toBe(protoArticle.title);
  });

  test(`
    when an article with invalid title, abstract, content and sources,
    is provided during execution, then should throw an error.
  `, async () => {
    const title = "";
    const abstract = "";
    const content = "";
    const sources: any[] = [];
    const protoArticle = { title, abstract, content, sources };

    const publishArticle = new PublishArticleUseCase(articleService);

    expect(publishArticle.execute(protoArticle)).rejects.toThrowError();
  });
});
