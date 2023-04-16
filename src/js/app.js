import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    return await GameSavingLoader.load();
  } catch (e) {
    throw new Error('error');
  }
})();
