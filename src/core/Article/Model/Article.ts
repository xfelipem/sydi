import { Title } from "./Title";
import { getRandomInt } from "../../../utils";

interface ArticleProps {
  title: Title;
  abstract: string;
  content: string;
  sources: string[];
}

export class Article {
  private temporalId = getRandomInt();
  constructor(private props: ArticleProps) {}
  getId() {
    return this.temporalId;
  }
}
