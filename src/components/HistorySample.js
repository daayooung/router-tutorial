import React, { Component } from 'react';

class HistorySample extends Component {
  // 뒤로 가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  // 홈으로 가기
  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    // 페이지에 변화가 생기려고 할 때마다 정말 나갈 것인지를 질문
    this.unblock = this.props.history.block('이동합니다.');
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트되면 질문을 멈춤
    if (this.unblock) {
      this.unblock();
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈</button>
      </div>
    );
  }
}

export default HistorySample;
