import fetch from 'isomorphic-unfetch'

const BASE_URL = 'http://localhost:6060';



function check200(res) {
  if (res.code != 200) {
    return Promise.reject(res);
  }
  return res.data;
}

function jsonParse(res) {
  return res.json();
}

function setUriParam(keys, value, keyPostfix) {
  let keyStr = keys[0];
  
  keys.slice(1).forEach((key) => {
    keyStr += `[${key}]`;
  });
  
  if (keyPostfix) {
    keyStr += keyPostfix;
  }
  
  return `${encodeURIComponent(keyStr)}=${encodeURIComponent(value)}`;
}

function getUriParam(keys, object) {
  const array = [];
  
  if (object instanceof(Array)) {
    object.forEach((value) => {
      array.push(setUriParam(keys, value, '[]'));
    });
  } else if (object instanceof(Object)) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];
        
        array.push(getUriParam(keys.concat(key), value));
      }
    }
  } else {
    if (object !== undefined) {
      array.push(setUriParam(keys, object));
    }
  }
  
  return array.join('&');
}

export function toQueryString(object) {
  const array = [];
  
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const str = getUriParam([key], object[key]);
      
      if (str !== '') {
        array.push(str);
      }
    }
  }
  
  return array.join('&');
}

async function eFetch(url, options) {
  let mergeUrl = BASE_URL + url;
  const defaultOptions = {
    method: 'GET'
  };
  
  const opts = Object.assign({}, defaultOptions, {...options});
  //get请求
  if (opts && opts.method == "GET" && opts['params']) {
    mergeUrl = mergeUrl + '?' + toQueryString(opts['params']);
  }
  
  opts.headers = {
    ...opts.headers,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  
  if(opts.body){
    opts.body=JSON.stringify(opts.body)
  }
  console.log("url-------",mergeUrl)
  console.log("body--------",opts)
  return fetch(mergeUrl, opts)
  .then(jsonParse)
  .then(check200)
  .catch((error) => {
    console.log('request failed', error);
    return { error };
  });
}

export default eFetch;