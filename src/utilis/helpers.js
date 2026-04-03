export const getDailyForecast = (list) => {
  const map = {};

  list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!map[date]) {
      map[date] = item;
    }
  });

  return Object.values(map).slice(0, 5);
};