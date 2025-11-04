type DeepReadonly<T> =
  T extends readonly (infer R)[] ? readonly DeepReadonly<R>[] :
  T extends Function ? T :
  T extends null ? T :
  T extends object ? {
    readonly [K in keyof T]: DeepReadonly<T[K]>
  } :

  T;
type Config = { api: { url: string; }, features: string[] };
const config: DeepReadonly<Config> = {
  api: { url: "http://..." },
  features: ["A", "B"]
};

// @ts-expect-error - Bu atamanın HATA vermesi beklenir
config.api.url = "yeni-url";

// @ts-expect-error - Bu atamanın (diziye ekleme) HATA vermesi beklenir
config.features.push("C");

console.log("Soru 14 Başarılı!", config.api.url);
