export function fisherYatesShuffle(tasks) {
    const shuffledTasks = [...tasks];
    for (let i = shuffledTasks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledTasks[i], shuffledTasks[j]] = [shuffledTasks[j], shuffledTasks[i]];
    }
    return shuffledTasks;
  }