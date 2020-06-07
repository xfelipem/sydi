type ArticleTitle = string;

interface TitleProps {
  value: ArticleTitle;
}

export class Title {
  private constructor(private props: TitleProps) {}

  static create(title: ArticleTitle): Title {
    this.validateTitle(title);
    return new Title({ value: title });
  }

  private static validateTitle(title: ArticleTitle): void {
    if (title === "") throw new Error("Title can not be empty");
  }
}
