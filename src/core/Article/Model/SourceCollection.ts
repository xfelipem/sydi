import { ArticleSource, Source } from "./Source";

interface SourceProps {
  value: Source[];
}

export class SourceCollection {
  private constructor(private props: SourceProps) {}

  static create(sources: ArticleSource[]): SourceCollection{
    this.validateSource(sources);
    const articleSources = sources.map((source: ArticleSource) => Source.create(source));
    return new SourceCollection({ value: articleSources})
  }

  public get value(): Source[]{
    return this.props.value;
  }

  private static validateSource(sources: ArticleSource[]): void {
    if (sources.length < 1) throw new Error("Sources can not be empty");
  }
}
