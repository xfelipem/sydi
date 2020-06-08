export type ArticleContent = string;

interface ContentProps {
  value: ArticleContent;
}

export class Content {
  private constructor(private props: ContentProps) {}

  static create(content: ArticleContent): Content {
    this.validateContent(content);
    return new Content({ value: content });
  }

  get value(): ArticleContent {
    return this.props.value;
  }

  private static validateContent(content: ArticleContent): void {
    if (content === "") throw new Error("Content can not be empty");
  }
}
