import recipesData from '../data/recipes.json';

// PUBLIC_INTERFACE
export type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  cuisine: string;
  course: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack' | 'Dessert';
  timeMinutes: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  ingredients: { item: string; quantity?: string }[];
  steps: string[];
  servings: number;
};

// PUBLIC_INTERFACE
export function getAllRecipes(): Recipe[] {
  /** Returns all mock recipes. In the future, this can fetch from PUBLIC_API_BASE if provided. */
  return recipesData as Recipe[];
}

// PUBLIC_INTERFACE
export function getRecipeById(id: string): Recipe | undefined {
  /** Lookup a recipe by id */
  return (recipesData as Recipe[]).find(r => r.id === id);
}

// PUBLIC_INTERFACE
export function getAllFacets(recipes: Recipe[]) {
  /** Returns facet value sets for filtering UI. */
  const cuisines = new Set<string>();
  const courses = new Set<string>();
  const difficulties = new Set<Recipe['difficulty']>();
  const tags = new Set<string>();

  recipes.forEach(r => {
    cuisines.add(r.cuisine);
    courses.add(r.course);
    difficulties.add(r.difficulty);
    r.tags.forEach(t => tags.add(t));
  });

  return {
    cuisines: Array.from(cuisines).sort(),
    courses: Array.from(courses).sort(),
    difficulties: Array.from(difficulties).sort(),
    tags: Array.from(tags).sort(),
  };
}
