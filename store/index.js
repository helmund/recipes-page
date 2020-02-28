export const state = () => ({
  recipes: [],
  loading: true
})

export const mutations = {
  getRecipes: (state) => {
    state.loading = true;
  },
  updateRecipes: (state, recipes) => {
    state.recipes = recipes,
    state.loading = false;
  }
}

export const actions = {
  async getRecipes ({
    state,
    commit
  }) {
    commit('getRecipes', recipes)
    if (state.recipes.length) { return }
    let recipes = await fetch('/recipes.json'
    ).then(res => res.json())
    recipes = recipes.items
      // .filter(el => el.status === 'publish')
      .map(({ id, slug, name, description, imagePath, tags, headline, descriptionHTML, ingredients, steps, instructionsHTML, yields }) => ({
        id,
        slug,
        name,
        description,
        imagePath,
        tags,
        headline,
        descriptionHTML,
        ingredients,
        steps,
        instructionsHTML,
        yields
      }))
    commit('updateRecipes', recipes)
  },
  catch (err) {
    console.log(err)
  }
}
