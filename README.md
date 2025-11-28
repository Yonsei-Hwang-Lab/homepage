# Hwang Lab Homepage

연세대학교 의과대학 황병진 교수 연구실 홈페이지

## 파일 구조

```
homepage/
├── index.html              # 메인 HTML 파일
├── css/
│   └── styles.css         # 전체 스타일시트
├── js/
│   └── load-components.js # 컴포넌트 동적 로딩 스크립트
├── components/            # 페이지별 컴포넌트 (수정 용이)
│   ├── research.html      # 연구 분야
│   ├── members.html       # 멤버 정보
│   ├── publications.html  # 논문 목록
│   ├── photos.html        # Lab 사진
│   └── contact.html       # 연락처
└── images/                # 이미지 파일들 (직접 추가 필요)
    ├── bhwang.jpg
    ├── suhyeon_lee.jpg
    ├── ...
    └── lab_photos/
        ├── 2025_ksbmb_emm.jpg
        └── ...
```

## 수정 방법

### 1. 멤버 업데이트
`components/members.html` 파일을 수정하세요.

**새 멤버 추가:**
```html
<div class="member-card">
    <div class="member-photo">
        <img src="images/파일명.jpg" alt="이름">
    </div>
    <div class="member-name">이름 (한글이름)</div>
    <div class="member-role">직책</div>
    <div class="member-role">소속 (입학년월~)</div>
</div>
```

**졸업생 추가:**
Alumni 섹션에 이름을 추가하세요.

### 2. 논문 업데이트
`components/publications.html` 파일을 수정하세요.

**새 논문 추가:**
```html
<div class="publication-item">
    <div class="publication-year">2025</div>
    <p>
        <strong>논문 제목</strong><br>
        저자명*, 저자명#<br>
        <em>저널명</em>. 연도. <a href="DOI링크" target="_blank">DOI</a>
    </p>
</div>
```

### 3. Lab 사진 업데이트
`components/photos.html` 파일을 수정하세요.

**새 사진 추가:**
1. `images/lab_photos/` 폴더에 사진 업로드
2. `components/photos.html`에 추가:
```html
<div class="photo-item">
    <img src="images/lab_photos/파일명.jpg" alt="설명">
    <div class="photo-caption">사진 설명</div>
</div>
```

### 4. 연구 분야 업데이트
`components/research.html` 파일을 수정하세요.

### 5. 연락처 업데이트
`components/contact.html` 파일을 수정하세요.

## Git 사용법

### 초기 설정
```bash
cd homepage
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/scHwanglab/homepage.git
git push -u origin main
```

### 파일 수정 후 업데이트
```bash
git add .
git commit -m "업데이트 내용 설명"
git push
```

## 주의사항

- 이미지 파일은 직접 `images/` 폴더에 추가해야 합니다
- 비디오 파일은 `images/homepage_background.mp4`로 추가하거나 index.html에서 URL을 변경하세요
- 각 컴포넌트 파일은 독립적으로 수정 가능합니다

## 문의
문제가 발생하면 bhwang@yuhs.ac로 연락주세요.