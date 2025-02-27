document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('sub');
  const commentList = document.getElementById('comment-list');
  const commentInput = document.getElementById('comment-input');

  submitButton.addEventListener('click', function() {
    const commentText = commentInput.value.trim();

    // 입력된 내용이 있을 경우에만 처리
    if (commentText !== '') {
      // 새로운 댓글을 li로 추가
      const newComment = document.createElement('li');
      newComment.classList.add('comment-item');
      newComment.innerHTML = `
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
          <span>방문자</span>
        </div>
        <div class="comment-content">
          ${commentText}
        </div>
      `;

      // 댓글 목록에 새 댓글 추가
      commentList.appendChild(newComment);

      // 입력 필드 초기화
      commentInput.value = '';
      alert("댓글이 등록되었습니다")
    } else {
      alert('댓글을 입력해주세요!');
    }
  });
});
