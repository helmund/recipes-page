export const state = () => ({
  recipes: [],
  tags: [],
  loading: true
})

export const mutations = {
  getRecipes: (state) => {
    state.loading = true;
  },
  updateRecipes: (state, recipes) => {
    state.recipes = Object.freeze(recipes),
    state.loading = false;
  },
  getTags: (state) => {
    state.loading = true;
  },
  updateTags: (state, tags) => {
    state.tags = Object.freeze(tags),
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
    let recipes = await fetch('/rezepte-0-250.json'
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
  },

  async getTags ({
    state,
    commit
  }) {
    commit('getTags', tags)
    if (state.tags.length) { return }
    let tags = await fetch('/tags.json'
    ).then(res => res.json())
    tags = tags.items
      // .filter(el => el.status === 'publish')
      .map(({ id, slug, name, type }) => ({
        id,
        slug,
        name,
        type
      }))
    commit('updateTags', tags)
  },
  catch (err) {
    console.log(err)
  }
}
