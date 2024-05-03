const express = require('express'); // Express 모듈
const path = require('path'); // 파일 및 디렉토리 경로를 처리
const morgan = require('morgan'); // HTTP 요청 로깅
const nunjucks = require('nunjucks'); // 템플릿 엔진 Nunjucks 사용

// models 폴더의 sequelize 객체 가져오기
const { sequelize } = require('./models'); // 폴더내의 index.js 파일은 require할 때 이름 생략가능