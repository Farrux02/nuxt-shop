import { ref } from "vue";

export function useDebounce(callback: (...args: any[]) => void, delay = 300) {
  const timeout = ref<ReturnType<typeof setTimeout> | null>(null);

  const debouncedFunction = (...args: any[]) => {
    if (timeout.value) {
      clearTimeout(timeout.value);
    }
    timeout.value = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedFunction;
}
