/*
* Name: jquery-prayer-times
* Author: Muhammad Mabrouk
* NPM: https://www.npmjs.com/package/jquery-prayer-times
* GitHub: https://github.com/MuhammadMabrouk/jquery-prayer-times
*/
$.fn.prayerTimes = function(options = {}) {
  const $this = this;
  const prayersList = [
    "الفجر",
    "الشروق",
    "الظهر",
    "العصر",
    "الغروب",
    "المغرب",
    "العشاء",
    "الإمساك",
    "منتصف الليل"
  ];
  const defaultOptions = {
    method: typeof options.method === 'undefined' ? 4 : options.method,
    school: typeof options.school === 'undefined' ? 0 : options.school,
    city: options.city || null,
    country: options.country || null,
    imsak: typeof options.imsak === 'undefined' ? true : options.imsak,
    sunrise: typeof options.sunrise === 'undefined' ? true : options.sunrise,
    midnight: typeof options.midnight === 'undefined' ? true : options.midnight,
    arabic: typeof options.arabic === 'undefined' ? false : options.arabic,
    outputEl: options.outputEl || 'table'
  };

  // get prayer times
  function getPrayerTimes({city, country}) {
    const url = `http://api.aladhan.com/v1/timingsByCity?method=${defaultOptions.method}&school=${defaultOptions.school}&city=${city}&country=${country}`;
    $.get(url, res => $this.html(generateOutput(res.data.timings)));
  }

  // generate output content
  function generateOutput(timings) {
    const container = (defaultOptions.outputEl === 'table') ? 'table' : 'ul';
    const isArabic = defaultOptions.arabic ? true : false;
    const name = (time, index) => isArabic ? prayersList[index] : time;

    let i = 0;
    let content = `<${container}>`;
    for (const time in timings) {
      const timeName = name(time, i);
      const timeValue = timings[time];
      if (time === 'Sunset') { i++; continue; };
      if (!defaultOptions.imsak && time === 'Imsak') { i++; continue; };
      if (!defaultOptions.sunrise && time === 'Sunrise') { i++; continue; };
      if (!defaultOptions.midnight && time === 'Midnight') { i++; continue; };

      content += `${container === 'table' ?
        `<tr><td tabindex="0">${timeName}</td><td tabindex="0">${timeValue}</td></tr>` :
        `<li><span tabindex="0">${timeName}</span><span tabindex="0">${timeValue}</span></li>`}`;
      i++;
    }
    content += `</${container}>`;

    return content;
  }

  // call 'getPrayerTimes' function
  if (defaultOptions.city && defaultOptions.country) {
    getPrayerTimes({city: defaultOptions.city, country: defaultOptions.country});

  } else {
    $.get("http://ip-api.com/json", data => {
      getPrayerTimes({city: data.city, country: data.country});
    });
  }
}
