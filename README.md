# jquery-prayer-times

A small jQuery plugin for displaying Muslim Prayer Times.

<br>
### Features!

  - English/Arabic language support.
  - Auto detect visitor location.
  - 13 Different Calculation Methods.
  - 2 Calculation Methods for Asr Time (Shafi/Hanafi).
  - Ability to show/hide additional times (imsak, sunrise and midnight).


<br>
### Install

```sh
$ npm install jquery-prayer-times --save
```

or

```html
<!-- jquery file -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- jquery.prayer.times file -->
<script src="jquery.prayer.times.min.js"></script>
```


<br>
### Examples:

```html
<!-- prayer times will be appended to this div -->
<div class="prayer-times"></div>
```


<br>
**1- Default:**
```javascript
$('.prayer-times').prayerTimes();
```

<br>
![alt text](https://drive.google.com/uc?export=view&id=1BrO_Y1spw7LDD5QT9wfPR6JuPUHuDPmh "Default Prayer Times")


<br>
**2- Arabic:**
```javascript
$('.prayer-times').prayerTimes({ arabic: true });
```

<br>
![alt text](https://drive.google.com/uc?export=view&id=1yn5_djV6dG73rw-f2W2IB1aTKIhXWVP7 "Arabic")

<br>
### Options:
| Prop | Type | Description | Default |
| ----------- |    :----:   | ----------- |    :----:   |
| method | `number` | A prayer times calculation method. <br> Methods identify various schools of thought about how to compute the timings. <br> Available Methods: <br> `1` - University of Islamic Sciences, Karachi <br> `2` - Islamic Society of North America (ISNA) <br> `3` - Muslim World League <br> `4` - Umm Al-Qura University, Makkah <br> `5` - Egyptian General Authority of Survey <br> `7` - Institute of Geophysics, University of Tehran <br> `8` - Gulf Region <br> `9` - Kuwait <br> `10` - Qatar <br> `11` - Majlis Ugama Islam Singapura, Singapore <br> `12` - Union Organization islamic de France <br> `13` - Diyanet İşleri Başkanlığı, Turkey <br> `14` - Spiritual Administration of Muslims of Russia | `4` |
| school | `number` | Asr calculation method. Available Methods: <br> `0` - Shafei <br> `1` - Hanafi | `0` |
| country | `string` | A country name or 2 character alpha ISO 3166 code. <br> (Examples: `SA` or `Saudi Arabia`) <br> If you leave this empty, it defaults to user country. | `null` |
| city | `string` | A city name. (Example: `Mecca`) <br> If you leave this empty, it defaults to user city. | `null` |
| imsak | `boolean` | Set to `true` or `false` to show or hide the imsak time | `true` |
| sunrise | `boolean` | Set to `true` or `false` to show or hide the sunrise time | `true` |
| midnight | `boolean` | Set to `true` or `false` to show or hide the midnight time | `true` |
| arabic | `boolean` | Set to `true` or `false` to display in arabic | `false` |
| outputEl | `'table'` &#124; `'ul'` | Determine an HTML element to print timings. | `'table'` |

<br>
**3- Customized:**
```javascript
$('.prayer-times').prayerTimes({
  method: 4,
  arabic: true,
  imsak: false,
  sunrise: false,
  midnight: false,
  outputEl: 'ul'
});
```

<br>
![alt text](https://drive.google.com/uc?export=view&id=1PODfTdS4E3y2Pn8laqSF__cD8B3dqPjy "Customized")
<br>
<br>

### License

MIT
