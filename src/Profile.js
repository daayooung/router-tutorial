import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
  harrypotter: {
    name: '해리포터',
    description: '조앤 K. 롤링의 소설 《해리포터》 시리즈의 주인공이다.',
    image:
      'https://lh3.googleusercontent.com/proxy/G4KuJthl7E_Y_X_4wYalU7wsO9EfyL7KdlLV42zuucughdgdgDHNqoTUBS3O5LeNUD62-soPXdXYMsJ6QwUpmH4tr_GgCLviEQhwqkGp9dE9a58UxRHtwfxnxh-82mgH42xmByDiwFSzM40utxqyW7FBp3CZ3B91OBmeqnnVWyccthHnbt-sNlxE8p8yyzFM5LzaBElJaeM1ZG7fXrsARbJg3TahELU2ugpxidGpkSHPCJ1vpxw6fZYuyygyxRrq8hoav1DjMBpBCDmft8w42n7AD91_ZxkACbz4l-eNxD7hOHHaWtZPDndlH5Xrjc4B-f6P8GNZj_sbGDYVCojAqwAunzRNO9Yt49FFhP1uLNCNbnnm-IBIubsfuDtImEgdOG_WMCcRq_D-LdWoyzNKdYH5H7WvArSNGJmBZsclrMrrcrZC-sRRBaWOzorSub6jYBBPdALGyu_ruwFzloUsxt4ifQ'
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
