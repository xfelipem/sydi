export type ArticleAbstract = string;

interface AbstractProps {
  value: ArticleAbstract;
}

export class Abstract {
  private constructor(private props: AbstractProps) {}

  static create(abstract: ArticleAbstract): Abstract {
    this.validateAbstract(abstract);
    return new Abstract({ value: abstract });
  }

  get value(): ArticleAbstract {
    return this.props.value;
  }

  private static validateAbstract(abstract: ArticleAbstract): void {
    if (abstract === "") throw new Error("Abstract can not be empty");
  }
}
