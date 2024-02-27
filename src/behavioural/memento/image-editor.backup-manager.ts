import { ImageEditor } from './image-editor';
import { Memento } from './memento';

export class ImageEditorBackupManager {
  private mementos: Memento[] = [];

  constructor(private readonly originator: ImageEditor) {}

  backup(): void {
    console.log('Backup: Salvando o status de ImageEditor');
    this.mementos.push(this.originator.save());
  }

  undo(): void {
    const memento = this.mementos.pop();
    if (!memento) {
      console.log('Restore: no memento');
      return;
    }

    console.log(`Restore: memento ${memento.getName()} restored`);
    this.originator.restore(memento);
  }

  showMementos(): void {
    console.log(this.mementos);
  }
}
