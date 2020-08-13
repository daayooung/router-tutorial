import React from 'react';

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

const Profiles2 = () => {
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
  const submenu = () => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }
  };

  console.log(data);
  return (
    <div>
      <p> 소개</p>
    </div>
  );
};

export default Profiles2;
