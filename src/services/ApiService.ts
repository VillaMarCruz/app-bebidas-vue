import api from '@/lib/axios';

export default {
  getCategories() {
    return api.get('/list.php?c=list');
  },
  searchRecipes({ category, name }: { category: string; name: string }) {
    return api.get(`/filter.php?c=${category}&i=${name}`);
  },
  searchReceta(id?: string) {
    return api.get(`/lookup.php?i=${id}`);
  },
};
