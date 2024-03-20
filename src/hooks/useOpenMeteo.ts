import { useCallback, useEffect, useState } from "react";

/**
 * 検索条件
 */
export type OpenMeteoConditions = {
  latitude: number;
  longitude: number;
};

/**
 * 検索結果
 */
export type OpenMeteoResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
};

/**
 * useOpenMeteo の型定義
 */
export type OpenMeteoHook = [
  OpenMeteoResponse | undefined,
  Error | undefined,
  Boolean | undefined,
  () => Promise<void>
];

/**
 * OpenMeteoから天気情報を取得する
 * @param conditions 検索条件
 * @returns OpenMeteoHook
 */
const useOpenMeteo = (
  conditions: OpenMeteoConditions | undefined
): OpenMeteoHook => {
  const [response, setResponse] = useState<OpenMeteoResponse | undefined>(
    undefined
  );
  const [error, setError] = useState<Error | undefined>(undefined);
  const [reading, setReading] = useState<Boolean | undefined>(undefined);

  const startStatus = useCallback(() => {
    setReading(true);
    setResponse(undefined);
    setError(undefined);
  }, []);

  const runOpenMeteo = useCallback(async () => {
    console.log("runOpenMeteo");
    if (conditions) {
      if (conditions.latitude && conditions.longitude) {
        const url =
          "https://api.open-meteo.com/v1/forecast?" +
          `latitude=${conditions.latitude}` +
          `&longitude=${conditions.longitude}`;
        console.log(url);
        startStatus();
        try {
          const res = await fetch(url);
          if (res.ok) {
            const response: OpenMeteoResponse = await res.json();
            setResponse(response);
          } else {
            setError(new Error(`HTTP error. Status: ${res.status}`));
          }
        } catch (e) {
          if (e instanceof Error) {
            console.error(e.message);
            setError(e);
          }
        } finally {
          setReading(false);
        }
      } else {
        setError(new Error("Conditions error."));
      }
    }
  }, [conditions, startStatus]);

  /**
   * 検索条件が変更されたらOpenMeteoから天気情報を再取得する
   */
  useEffect(() => {
    runOpenMeteo();
  }, [conditions, runOpenMeteo]);

  return [response, error, reading, runOpenMeteo];
};

export default useOpenMeteo;
