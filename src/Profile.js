import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
  harrypotter: {
    name: '해리포터',
    description: '조앤 K. 롤링의 소설 《해리포터》 시리즈의 주인공이다.',
    image:
      'https://lh3.googleusercontent.com/proxy/yRG84MB8fqCoCsy825TWPtUl4AXCNJYWCMikDws35N6fE_9ldiOFbdtk1ijLXS5T5XfDCxNHZsUT37MHacB1DvOdQXZTkWz1GEQnEdh2BNczeS_XTZsaUS8hfZqqK-1k6VIeo8d0L8cr7khqIsTcNaXKhZMUlMojxv2fjxohjm1Ff1xYaLArvrrdW6x3ylV-SjUP-Cx0qlBVnmTrkBcx7ha0YcKJBght_1JbnZSjEicp5O9dq014SJJ2WYVxQdQx-vHyURcP_yRuUQgp6wB2gzo6b5FR9Dak8ZrhJzS0GW7FPAeRHIKtoApePuyowd3Sux5aSHoqtF2VNxVC4QKv0kDj44jRVZp3P7CCGTCHbPTi4cjyt_CVpnBqv3qQEUos_tAaRqjarDi3VJObwZDbgg9Q2kkDSbXg9JRwnbYWMW5s4H0ByI_U9-IZ-7LLi55T8MKWZM0vZGzjlX0sF0QXfTgpGw'
  },
  ronweasley: {
    name: '론 위즐리',
    description:
      '조앤 K. 롤링의 판타지 소설 《해리 포터》 시리즈의 등장인물이다. 호그와트 그리핀도르 기숙사 소속의 학생으로, 해리 포터와 헤르미온느 그레인저의 절친한 친구이다. ',
    image:
      'https://static.smalljoys.me/2020/04/1992428_eb8298ebacb4ec9c84ed82a4_1586584946.jpeg'
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
        src={profile.image}
        alt="해리포터 등장인물"
        style={{ width: '470px' }}
      />
      <WithRouterSample />
    </div>
  );
};

export default Profile;
