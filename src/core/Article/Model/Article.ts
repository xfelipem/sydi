import { getRandomInt } from "../../../utils";
import { Abstract } from "./Abstract";
import { Content } from "./Content";
import { SourceCollection } from "./SourceCollection";
import { Title } from "./Title";

interface ArticleProps {
  title: Title;
  abstract: Abstract;
  content: Content;
  sources: SourceCollection;
}

export class Article {
  private temporalId = getRandomInt();
  
  constructor(private props: ArticleProps) {}
  
  get abstract(): Abstract{
    return this.props.abstract
  }

  get content(): Content{
    return this.props.content;
  }

  get title(): Title {
    return this.props.title;
  }

  get sources(): SourceCollection {
    return this.props.sources;
  }
}
