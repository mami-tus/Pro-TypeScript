export type GetTimeFunc = () => Date;

function useTime(getTimeFunc: GetTimeFunc | undefined) {
  // timeOrUndefinedは string | undefined 型
  const timeOrUndefined = getTimeFunc?.().toString();
}
