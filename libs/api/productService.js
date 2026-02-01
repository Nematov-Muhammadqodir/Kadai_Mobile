import axios from "axios";
import cacheService from "../cache/cacheService";

const API_BASE_URL = "http://192.168.0.27:8080";
const PRODUCTS_CACHE_KEY = "products";

/**
 * Get products with caching
 * Stale-while-revalidate pattern:
 * 1. Return cached data immediately if available
 * 2. Fetch fresh data in background
 * 3. Update cache with fresh data
 */
export const getProducts = async (
  page = 0,
  size = 10,
  forceRefresh = false
) => {
  try {
    // Check cache first (unless force refresh)
    if (!forceRefresh) {
      const cached = await cacheService.get(PRODUCTS_CACHE_KEY);

      if (cached) {
        console.log("📦 Returning cached products");

        // Return cached data immediately
        const cachedData = cached.data;

        // Fetch fresh data in background if stale
        if (cached.isStale) {
          console.log("🔄 Cache is stale, refreshing in background...");
          fetchAndCacheProducts(page, size); // Fire and forget
        }

        return cachedData;
      }
    }

    // No cache or force refresh - fetch from API
    console.log("🌐 Fetching products from API");
    return await fetchAndCacheProducts(page, size);
  } catch (error) {
    console.error("Error getting products:", error);

    // Try to return stale cache as fallback
    const cached = await cacheService.get(PRODUCTS_CACHE_KEY);
    if (cached) {
      console.log("⚠️ API failed, returning stale cache");
      return cached.data;
    }

    throw error;
  }
};

/**
 * Fetch products from API and update cache
 */
const fetchAndCacheProducts = async (page = 0, size = 10) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/allProducts`, {
      params: { page, size },
    });

    const products = response.data.content || response.data;

    // Update cache
    await cacheService.set(PRODUCTS_CACHE_KEY, products);
    console.log("✅ Cache updated with fresh data");

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

/**
 * Clear products cache
 */
export const clearProductsCache = async () => {
  await cacheService.clear(PRODUCTS_CACHE_KEY);
};

/**
 * Prefetch products (useful for app initialization)
 */
export const prefetchProducts = async () => {
  try {
    await fetchAndCacheProducts();
    console.log("✅ Products prefetched");
  } catch (error) {
    console.error("Error prefetching products:", error);
  }
};
