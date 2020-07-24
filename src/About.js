import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>해리포터</h1>
      <p>
        《해리 포터》(Harry Potter)는 1997년부터 2016년까지 연재된 영국의 작가
        J.K. 롤링의 판타지 소설 시리즈다. 이모네 집 계단 밑 벽장에서 생활하던
        11살 소년 해리 포터가 호그와트 마법학교에 가면서 겪게 되는 판타지
        이야기를 그리고 있다.
      </p>
      <img
        src="https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1526749461/owuddaks65bfs94bop4u.jpg"
        alt="영화 해리포터 포스터"
        style={{ width: '470px' }}
      ></img>
      {showDetail && (
        <span role="img" aria-label="호그와트 초대장">
          detail 값이 true : 🏰🎇호그와트 초대장🧙‍♂️
        </span>
      )}
    </div>
  );
};

export default About;
