export function validateTasks(tasks) {
    return Array.isArray(tasks) && tasks.map( t => {
        return t.id !== undefined && typeof t.id === 'number'
            && t.name !== undefined && typeof t.name === 'string'
            && t.desc !== undefined && typeof t.desc === 'string'
            && t.code !== undefined && typeof t.code === 'string'
            && t.test !== undefined && typeof t.test === 'string';
    }).reduce( (acc, t) => acc && t, true);
}