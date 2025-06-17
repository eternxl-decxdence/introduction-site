import { useCallback, useState, useEffect } from "react";
import { getCurrentLocale } from "../../utils/textUtils";
import { useAppSelector } from "../redux/hooks";
import { selectLanguage } from "../redux/slices/languageSlice";

const localeCache = new Map<string, any>();

export default function useLocaleFile<T>(fileName: string) {
  const lang = useAppSelector(selectLanguage);
  const [data, setData] = useState<T | null>(null);

  const cacheKey = `${lang}_${fileName}`;

  const fetchLocale = useCallback(async () => {
    if (localeCache.has(cacheKey)) {
      setData(localeCache.get(cacheKey));
      return;
    }
    try {
      const res = await getCurrentLocale(lang, fileName);
      const localeData = res.default ?? res;

      localeCache.set(cacheKey, localeData);

      setData(localeData);
    } catch (error) {}
  }, [lang, fileName]);

  useEffect(() => {
    fetchLocale();
  }, [fetchLocale]);

  return data;
}
