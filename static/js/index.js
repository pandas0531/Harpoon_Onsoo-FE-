window.onload = function() {
    // 로딩 화면 추가
    const loader = document.createElement('div');
    loader.style.position = 'fixed';
    loader.style.top = '0';
    loader.style.left = '0';
    loader.style.width = '100%';
    loader.style.height = '100%';
    loader.style.backgroundColor = '#ffffff';
    loader.style.zIndex = '9999';
    loader.style.display = 'flex';
    loader.style.justifyContent = 'center';
    loader.style.alignItems = 'center';
    loader.innerHTML = '<h1>수학을 켜다 | Onsoo</h1>';
    document.body.appendChild(loader);

    // 일정 시간 후 로딩 화면 제거
    setTimeout(function() {
        loader.style.transition = 'opacity 0.5s ease'; // 페이드아웃 효과
        loader.style.opacity = '0';
        setTimeout(function() {
            document.body.removeChild(loader);
        }, 1000); // 1초 후 완전히 제거
    }, 800); // 2초 후 로딩 화면 페이드 아웃 시작

    // 로고 클릭 시 홈으로 이동
    const logoImg = document.querySelector('.menu-img');
    logoImg.addEventListener('click', function() {
        location.href = 'templates/blog/home.html';
    });

    // 로그인 클릭 시 로그인 페이지로 이동
    const loginElement = document.querySelector('.menu-login');
    loginElement.addEventListener('click', function() {
        location.href = 'templates/auth/login.html';
    });

    // 시작하기 버튼 클릭 시 홈 페이지로 이동
    const startButton = document.querySelector('.start-btn');
    startButton.addEventListener('click', function() {
        location.href = 'templates/blog/home.html';
    });
};