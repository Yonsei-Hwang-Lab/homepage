// 컴포넌트 로드 함수
async function loadComponent(componentPath, containerId) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading ${componentPath}:`, error);
    }
}

// 모든 컴포넌트 로드
async function loadAllComponents() {
    await Promise.all([
        loadComponent('components/research.html', 'research-container'),
        loadComponent('components/members.html', 'members-container'),
        loadComponent('components/publications.html', 'publications-container'),
        loadComponent('components/photos.html', 'photos-container'),
        loadComponent('components/contact.html', 'contact-container')
    ]);
    
    // 로드 완료 후 섹션 전환 설정
    setupNavigation();
}

// 섹션 전환 함수
function showSection(sectionId) {
    // 모든 섹션 숨기기
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 선택한 섹션만 표시
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // 히어로 텍스트 표시/숨김 (Home에서만 표시)
    const heroContent = document.querySelector('.hero-content');
    const heroSection = document.getElementById('hero-section');
    if (sectionId === 'home') {
        heroContent.style.display = 'block';
        heroSection.style.height = '100vh';
    } else {
        heroContent.style.display = 'none';
        heroSection.style.height = '0';
    }
    
    // 네비게이션 활성 상태 업데이트
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
        }
    });
    
    // 페이지 상단으로 스크롤
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 네비게이션 설정
function setupNavigation() {
    // 네비게이션 클릭 이벤트
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
            
            // URL 해시 업데이트 (뒤로가기 지원)
            history.pushState(null, null, '#' + sectionId);
        });
    });
    
    // 페이지 로드 시 또는 URL 해시 변경 시
    function handleHashChange() {
        const hash = window.location.hash.substring(1) || 'home';
        showSection(hash);
    }
    
    // 초기 로드
    handleHashChange();
    
    // 뒤로가기/앞으로가기 지원
    window.addEventListener('popstate', handleHashChange);
}

// 스크롤 시 네비게이션 배경 진하게
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 32, 91, 1)';
    } else {
        nav.style.background = 'rgba(0, 32, 91, 0.95)';
    }
});

// 페이지 로드 시 모든 컴포넌트 로드
document.addEventListener('DOMContentLoaded', loadAllComponents);