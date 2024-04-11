
export function useLocalStorage(){
    function getter(key) {
      if (!key) return;
      return JSON.parse(localStorage.getItem(key));
    }
    function remover() {
      localStorage.clear();
    }
    function setter(key, data) {
      if (!key) return;
      localStorage.setItem(key, JSON.stringify(data));
    }
    return [getter, setter, remover];
}