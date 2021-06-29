import React, {useEffect} from 'react';

function HistorySample({history}) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push('/');
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block('페이지를 벗어나시겠습니까?');
    return () => {
      unblock();
    };
  }, [history])

  return (
    <div>
      <button onClick = {goBack}>뒤로가기</button>
      <button onClick = {goHome}>홈으로</button>
    </div>
  );
}

export default HistorySample;