import { ConcreteMemento } from './concrete-memento';
import { Memento } from './memento';

export class ImageEditor {
  private fileFormat: string;
  constructor(private filePath: string) {
    const splitedFilePath = this.filePath.split('.');
    this.fileFormat = splitedFilePath[splitedFilePath.length - 1];
  }

  convertFormatTo(format: string): void {
    this.fileFormat = format;
    this.filePath =
      this.filePath.split('.').slice(0, -1).join() + '.' + this.fileFormat;
  }

  save(): Readonly<Memento> {
    const now = new Date();
    return new ConcreteMemento(
      now.toISOString(),
      now,
      this.filePath,
      this.fileFormat,
    );
  }

  restore(memento: Memento): void {
    const concreteMemento = memento as ConcreteMemento;

    this.fileFormat = concreteMemento.getFileFormat();
    this.filePath = concreteMemento.getFilePath();
  }
}
