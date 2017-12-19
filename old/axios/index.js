import axios from 'axios';

// 创建请求单例。
const instance = axios.create();
instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// API 基础地址
const base = document.head.querySelector('meta[name="api-base"]');
if (! base) {
  console.error('请设置 "<meta name="api-base" content="url">"');
}

// API 版本
const version = document.head.querySelector('meta[name="api-version"]');
if (! version) {
  console.error('请设置 "<meta name="api-version" content="version">"');
}

// 设置基础地址。
instance.defaults.baseURL = `${base.content}/${version.content}/`;

export function saveToken(token) {
  localStorage.setItem('api-bearer-token', token);
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export function getToken() {
  return localStorage.getItem('api-bearer-token');
}

// 设置 token。
saveToken(getToken());

export default instance;
