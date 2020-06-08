import { ArticlePersistenceRepository } from '../../../../core/Article/Infrastructure/ArticlePersistenceRepository';
import { ArticleService } from '../../../../core/Article/Model/ArticleService';

describe('Given a ArticleService', () => {
  const empty = '';
  const title = 'Pascal en la web';
  const abstract =
    'Esta es la idea que vamos a intentar comprobar en el content';
  const content = 'Contenido fundamentado, relacionado a sources';
  const emptySurces: string[] = [];
  const invalidSources = [''];
  const sources = ['fuente 1', 'fuente 2'];

  const articlePersistenceRepository = new ArticlePersistenceRepository();

  test(`
    when an article with no title is provided during creation, then should throw an error.
  `, async () => {
    const articleService = new ArticleService(articlePersistenceRepository);
    const protoArticleWithNoTitle = {
      title: empty,
      abstract,
      content,
      sources,
    };
    const protoArticleWithNoAbstract = {
      title,
      abstract: empty,
      content,
      sources,
    };
    const protoArticleWithNoSources = {
      title,
      abstract,
      content,
      sources: emptySurces,
    };

    expect(
      articleService.create(protoArticleWithNoTitle)
    ).rejects.toThrowError();
    expect(
      articleService.create(protoArticleWithNoAbstract)
    ).rejects.toThrowError();
    expect(
      articleService.create(protoArticleWithNoSources)
    ).rejects.toThrowError();
  });

  test(`
    when an article with no content is provided during creation, then should
    throw an error
  `, async () => {
    const articleService = new ArticleService(articlePersistenceRepository);
    const protoArticleWithNoContent = {
      title,
      abstract,
      content: empty,
      sources,
    };

    expect(
      articleService.create(protoArticleWithNoContent)
    ).rejects.toThrowError();
  });

  test(`
    when an article with no sources is provided during creation, then should
    throw an error.
  `, async () => {
    const articleService = new ArticleService(articlePersistenceRepository);
    const protoArticleWithNoSources = {
      title,
      abstract,
      content,
      sources: emptySurces,
    };
    const protoArticleWithInvalidSources = {
      title,
      abstract,
      content,
      sources: invalidSources,
    };

    expect(
      articleService.create(protoArticleWithNoSources)
    ).rejects.toThrowError();
    expect(
      articleService.create(protoArticleWithInvalidSources)
    ).rejects.toThrowError();
  });

  test(`
    when a title is provided during getArticleByTitle execution but has no
    matchs, then should throw an error
  `, async () => {
    const articleService = new ArticleService(articlePersistenceRepository);
    const protoArticle = {
      title,
      abstract,
      content,
      sources,
    };

    await articleService.create(protoArticle);

    expect(
      articleService.getArticleByTitle('Unexistant title')
    ).rejects.toThrowError();
  });
});
