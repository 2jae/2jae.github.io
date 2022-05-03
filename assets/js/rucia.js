let bgm = new Audio(" "); //오디오 엘리먼트 생성
const bgm_url = "../assets/audios/rucia.mp3"; //mp3파일을 스트리밍 해올 주소
bgm = new Audio(bgm_url); //위에서 생성한 bgm 변수에 url값 대입
bgm.volume = 0.3; // 재생할때 볼륨 설정
const promise = bgm.play();
document.body.addEventListener("mousemove", function () {
  promise;
});
