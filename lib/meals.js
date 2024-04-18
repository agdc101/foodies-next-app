import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    // throw new Error('Failed to fetch meals');
    const meals = db.prepare('SELECT * FROM meals').all();
    return meals;
}

export function getMeal(slug) {
    const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
    return meal;
}