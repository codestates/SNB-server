const axios = require('axios');
const cheerio = require('cheerio');

const TITLE = 'title';
const SINGER = 'singer';
const URL_HEADER = 'http://www.tjmedia.co.kr/tjsong/song_search_list.asp';

const getHTML = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    return new Error(`${error.name}: ${error.message} \n${error.stack}`);
  }
};

const getTitleURL = (title, rowOfNum, page) => {
  const URL_PARAMES = `?strType=1&strText=${encodeURI(title)}&strSize01=${rowOfNum}&intPage=${page}`;
  return URL_HEADER + URL_PARAMES;
};

const getSingerURL = (singer, rowOfNum, page) => {
  const URL_PARAMES = `?strType=2&strText=${encodeURI(singer)}&strSize02=${rowOfNum}&intPage=${page}`;
  return URL_HEADER + URL_PARAMES;
};

const getFormatedSongArr = (arr) => {
  const resultArr = [];
  for (let i = 0; i < arr.length - 9; i += 9) {
    let song = [];
    for(let j = i; j < i + 9; j++) {
      if(arr[j] !== '') {
        song.push(arr[j]);
      }
    }
    resultArr.push(song);
  }
  return resultArr;
};

const extractSong = ($) => {
  const arr = $('#BoardType1 > table > tbody > tr:not(:first-child)').text().replace(/[\t]/g, '').split('\n');
  const formatedArr = getFormatedSongArr(arr);

  return formatedArr.reduce((acc, cur) => {
    const [songNum, title, singer, writer, composer] = cur;
    acc.push({
      songNum,
      title,
      singer,
      writer,
      composer,
      link: 'https://www.youtube.com/user/ziller/search?query=' + songNum
    });
    return acc;
  }, []);
};

const extractPage = ($) => {
  let lastChild = $('.page1 > tbody > tr > td > a:nth-last-of-type(1)');
  if (lastChild[0]?.firstChild?.name === 'img') {
    return {
      nowPages: 10,
      isNext: true
    };
  } else {
    return {
      nowPages: Number(lastChild.text().replace(/[[,\]]/g, '')) + 1,
      isNext: false
    };
  }
};

const searchSongs = async (way, param, rowOfNum = 15, page = 1) => {
  const URL = way === TITLE ? getTitleURL(param, rowOfNum, page) : getSingerURL(param, rowOfNum, page);
  return await getHTML(URL)
    .then(html => {
      const $ = cheerio.load(html.data);
      const results = extractSong($);
      const page = extractPage($);

      return {
        results,
        page,
      };
    })
    .then(result => {
      return result;
    });
};

module.exports = {
  TITLE,
  SINGER,
  searchSongs
};