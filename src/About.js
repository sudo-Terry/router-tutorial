import React from 'react';
import qs from 'qs';

function About({location}) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const detail = query.detail === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 기초 실습 예제</p>
      {
        detail &&
        <p>추가 정보들...</p>
      }
    </div>
  );
}

export default About;