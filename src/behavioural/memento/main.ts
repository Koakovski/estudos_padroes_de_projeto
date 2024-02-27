import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor.backup-manager';

const imageEditor = new ImageEditor('/media/image.png');

const imageEditorBackupManager = new ImageEditorBackupManager(imageEditor);

imageEditorBackupManager.backup();
console.log(imageEditor);

imageEditor.convertFormatTo('gif');
console.log(imageEditor);

imageEditorBackupManager.showMementos();
imageEditorBackupManager.undo();
imageEditorBackupManager.undo();

console.log(imageEditor);
