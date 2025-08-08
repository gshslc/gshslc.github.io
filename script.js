// HTML에서 필요한 요소(element)들을 가져옵니다.
const voteAButton = document.getElementById('vote-a-btn');
const voteBButton = document.getElementById('vote-b-btn');

const progressA = document.getElementById('progress-a');
const progressB = document.getElementById('progress-b');
const totalVotesDisplay = document.getElementById('total-votes');

// 투표 수를 저장할 변수를 만듭니다. (let은 변수를 선언하는 명령어)
let countA = 0;
let countB = 0;

// A 버튼을 클릭했을 때 실행될 함수
voteAButton.addEventListener('click', function() {
    countA++; // A의 투표 수를 1 증가시킵니다.
    updateChart(); // 차트를 업데이트하는 함수를 호출합니다.
});

// B 버튼을 클릭했을 때 실행될 함수
voteBButton.addEventListener('click', function() {
    countB++; // B의 투표 수를 1 증가시킵니다.
    updateChart(); // 차트를 업데이트하는 함수를 호출합니다.
});

// 투표 결과를 계산하고 화면에 반영하는 함수
function updateChart() {
    const totalVotes = countA + countB;

    // 만약 총 투표가 0이면, 계산 오류를 막기 위해 0으로 설정
    const percentA = totalVotes === 0 ? 0 : (countA / totalVotes) * 100;
    const percentB = totalVotes === 0 ? 0 : (countB / totalVotes) * 100;

    // 계산된 퍼센트를 결과 바의 너비(width)에 적용합니다.
    progressA.style.width = percentA + '%';
    progressB.style.width = percentB + '%';

    // 화면에 보이는 텍스트도 업데이트합니다.
    progressA.textContent = `A: ${percentA.toFixed(1)}%`;
    progressB.textContent = `B: ${percentB.toFixed(1)}%`;
    totalVotesDisplay.textContent = `총 투표 수: ${totalVotes}`;
}

// 페이지가 처음 로드될 때 차트를 한번 초기화합니다.
updateChart();