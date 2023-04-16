import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const newSave = await GameSavingLoader.load();
    console.log(newSave);
  } catch (e) {
    throw new Error('error');
  }
})();
