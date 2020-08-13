import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
  harrypotter: {
    name: '해리포터',
    description: '조앤 K. 롤링의 소설 《해리포터》 시리즈의 주인공이다.',
    image: './images/unnamed.jpg'
  },
  ronweasley: {
    name: '론 위즐리',
    description:
      '조앤 K. 롤링의 판타지 소설 《해리 포터》 시리즈의 등장인물이다. 호그와트 그리핀도르 기숙사 소속의 학생으로, 해리 포터와 헤르미온느 그레인저의 절친한 친구이다. ',
    image: './images/ron.jpeg'
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>입력하신 사용자 정보가 없습니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <img
        src={require(`${profile.image}`)}
        alt="해리포터 등장인물"
        style={{ width: '470px' }}
      />
      <WithRouterSample />
    </div>
  );
};

export default Profile;
