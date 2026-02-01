import AsyncStorage from "@react-native-async-storage/async-storage";

const CACHE_PREFIX = "cache_";
const CACHE_EXPIRY_TIME = 5 * 60 * 1000; // 5 minutes

class CacheService {
  /**
   * Get cached data
   * @param {string} key - Cache key
   * @returns {Promise<any|null>} - Cached data or null
   */
  async get(key) {
    try {
      const cacheKey = `${CACHE_PREFIX}${key}`;
      const cached = await AsyncStorage.getItem(cacheKey);

      if (!cached) {
        return null;
      }

      const { data, timestamp } = JSON.parse(cached);
      return { data, timestamp, isStale: this.isStale(timestamp) };
    } catch (error) {
      console.error("Cache get error:", error);
      return null;
    }
  }

  /**
   * Set cache data
   * @param {string} key - Cache key
   * @param {any} data - Data to cache
   */
  async set(key, data) {
    try {
      const cacheKey = `${CACHE_PREFIX}${key}`;
      const cacheData = {
        data,
        timestamp: Date.now(),
      };
      await AsyncStorage.setItem(cacheKey, JSON.stringify(cacheData));
    } catch (error) {
      console.error("Cache set error:", error);
    }
  }

  /**
   * Check if cache is stale
   * @param {number} timestamp - Cache timestamp
   * @returns {boolean}
   */
  isStale(timestamp) {
    return Date.now() - timestamp > CACHE_EXPIRY_TIME;
  }

  /**
   * Clear specific cache
   * @param {string} key - Cache key
   */
  async clear(key) {
    try {
      const cacheKey = `${CACHE_PREFIX}${key}`;
      await AsyncStorage.removeItem(cacheKey);
    } catch (error) {
      console.error("Cache clear error:", error);
    }
  }

  /**
   * Clear all cache
   */
  async clearAll() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const cacheKeys = keys.filter((key) => key.startsWith(CACHE_PREFIX));
      await AsyncStorage.multiRemove(cacheKeys);
    } catch (error) {
      console.error("Cache clear all error:", error);
    }
  }
}

export default new CacheService();
