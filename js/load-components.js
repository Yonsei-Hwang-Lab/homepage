console.log("🚀 load-components.js loaded!");

// 컴포넌트 로드 함수
async function loadComponent(path, containerId) {
  console.log(`Loading: ${path} -> #${containerId}`);
  
  try {
    const response = await fetch(path);
    const html = await response.text();
    const container = document.getElementById(containerId);
    
    if (container) {
      container.innerHTML = html;
      console.log(`✅ Loaded: ${path}`);
    } else {
      console.error(`❌ Container not found: #${containerId}`);
    }
  } catch (error) {
    console.error(`❌ Error loading ${path}:`, error);
  }
}

// 모든 컴포넌트 로드 (캐시 무력화)
async function loadAllComponents() {
  console.log("📦 Loading all components...");
  
  const timestamp = Date.now(); // 캐시 무력화용
  
  await loadComponent(`components/home.html?v=${timestamp}`, "home-container");
  await loadComponent(`components/research.html?v=${timestamp}`, "research");
  await loadComponent(`components/members.html?v=${timestamp}`, "members");
  await loadComponent(`components/publications.html?v=${timestamp}`, "publications");
  await loadComponent(`components/photos.html?v=${timestamp}`, "photos");
  await loadComponent(`components/contact.html?v=${timestamp}`, "contact");
  
  console.log("✅ All components loaded!");
  setupNavigation();
}

// 네비게이션 설정
function setupNavigation() {
  console.log("🔧 Setting up navigation...");
  
  const links = document.querySelectorAll(".nav-links a");
  const homeView = document.getElementById("home-view");
  const spaView = document.getElementById("spa-view");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.dataset.target;
      console.log(`Clicked: ${target}`);

      // 모든 링크에서 active 제거
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      if (target === "home") {
        // Home 보이기
        homeView.style.display = "block";
        spaView.style.display = "none";
        
        // 모든 spa-section 숨기기
        document.querySelectorAll(".spa-section").forEach(sec => {
          sec.classList.remove("active");
        });
      } else {
        // Home 숨기고 SPA 보이기
        homeView.style.display = "none";
        spaView.style.display = "block";
        
        // 모든 spa-section 숨기기
        document.querySelectorAll(".spa-section").forEach(sec => {
          sec.classList.remove("active");
        });
        
        // 선택한 섹션만 보이기
        const section = document.getElementById(target);
        if (section) {
          section.classList.add("active");
          console.log(`✅ Showing: #${target}`);
        } else {
          console.error(`❌ Section not found: #${target}`);
        }
      }
      
      window.scrollTo(0, 0);
    });
  });
}

// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", () => {
  console.log("🎬 DOMContentLoaded!");
  loadAllComponents();
});