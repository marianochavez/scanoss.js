import { FilterList } from '../Filtering/Filtering';
import { Filter } from './Filters/Filter';

export default abstract class Node {
  protected type: NodeType;

  protected path: string; // Relative path to the folder or file

  protected label: string;

  protected action: string;

  constructor(path: string, label: string) {
    this.path = path;
    this.label = label;
  }

  public abstract getNode(path: string): Node;

  public abstract getFiles(f: Filter): Array<string>;

  public getName(): string {
    return this.label;
  }

  public getPath(): string {
    return this.path;
  }

  public getType(): NodeType {
    return this.type;
  }

}

export enum NodeType {
  FOLDER = 'FOLDER',
  FILE = 'FILE',
};
