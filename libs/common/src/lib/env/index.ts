export function env(key: string) {
  const __env: any = process.env;

  console.log(__env);
  if (__env) {
    const value = __env[key];

    if (value) {
      return value;
    }
  }

  throw new Error(key + ' environment variable is not set!');
}
