import read from './reader';
import json from './parser';
import GameSaving from './GameSave';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const value = await json(data);
    return new GameSaving(JSON.parse(value));
  }
}
