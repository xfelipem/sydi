export type ArticleSource = string;

interface SourceProps {
  value: ArticleSource;
}

export class Source {
  private constructor(private props: SourceProps) {}

  static create(source: ArticleSource): Source {
    this.validateSource(source);
    return new Source({ value: source });
  }
  
  get value(): ArticleSource {
    return this.props.value;
  }

  private static validateSource(source: ArticleSource): void {
    if (source === "") throw new Error("Source can not be empty");
  }
}
