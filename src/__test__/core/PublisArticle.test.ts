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

    const publishArticle = new PublishArticleUseCase(articleService);

    await publishArticle.execute({ title, abstract, content, sources });

    const persistenceArticle = await articlePersistenceRepository.getArticleByID(
      newArticle.getId()
    );

    expect(newArticle).toBe(persistenceArticle);
  });

  // test(`
  //   when an article with invalid title, abstract, content and sources,
  //   is provided during execution, then should create an Article in persistence.
  // `, async () => {
  //   const title = "";
  //   const abstract = "";
  //   const content = "";
  //   const sources: any[] = [];
  //   const newArticle = new Article({ title, abstract, content, sources });
  //   const articlePersistenceRepository = new ArticlePersistenceRepository();
  //   const publishArticle = new PublishArticleUseCase(
  //     articlePersistenceRepository
  //   );

  //   await publishArticle.execute(newArticle);

  //   const persistenceArticle = await articlePersistenceRepository.getArticleByID(
  //     newArticle.getId()
  //   );

  //   expect(newArticle).toBe(persistenceArticle);
  // });
});
