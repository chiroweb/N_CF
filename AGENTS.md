<claude-mem-context>
# Memory Context

# [N_CF] recent context, 2026-04-27 2:17pm GMT+9

Legend: 🎯session 🔴bugfix 🟣feature 🔄refactor ✅change 🔵discovery ⚖️decision 🚨security_alert 🔐security_note
Format: ID TIME TYPE TITLE
Fetch details: get_observations([IDs]) | Search: mem-search skill

Stats: 50 obs (10,177t read) | 620,101t work | 98% savings

### Apr 20, 2026
262 1:36p 🔵 nbpcofe 저장소 public 디렉토리에 제품 이미지 없음 — src 내부 또는 외부 URL 참조 구조
263 " 🔵 nbpcofe 이미지 소스 — constants.ts(561줄)·products/page.tsx(671줄)에 집중
265 1:37p 🔵 nbpcofe S3 이미지 URL 전체 구조 확인 — 제품별 용량 이미지 매핑표
267 " 🔵 넛버터(NUTS-STAR) 갤러리 이미지 미완성 — 참조 저장소에 빈 문자열 3개
269 1:39p 🔵 로스터기 SUPREME 모델 이미지 확인 — roaster-supreme-1~5 S3 파일 존재
271 1:40p 🔵 애프터버너 PRODUCT_DETAILS 완전 구조 확인 — heroImage·gallery·모델별 이미지 매핑
273 " 🔵 EdgeRails.tsx NAV_ITEMS 배열 확인 — PARTNER 항목 9번 줄 위치
274 1:41p ✅ EdgeRails.tsx 네비게이션 전면 개편 — PARTNER 제거 및 제품 링크 3개 추가
277 1:42p ✅ src/lib/products.ts — nbpcofe 참조 기반 전체 이미지 경로 재매핑 및 NUTBUTTER_PRODUCT 추가
279 1:43p ✅ TheLabPage — 더미 스펙 제거 및 NUTBUTTER_PRODUCT 실제 데이터로 전면 교체
281 1:44p 🔵 N_CF 프로덕션 빌드 성공 — 7개 라우트 오류 없이 정적 생성 완료
282 1:45p ✅ 제품 이미지 재매핑 및 PARTNER 제거 — GitHub main 브랜치 배포 완료
### Apr 27, 2026
392 11:34a ⚖️ hotel_win 프로토타입 섹션 2 — 탭별 이미지 교체 계획 확정
393 " 🔵 N_CF 프로젝트 — 3탭 제품 섹션 컴포넌트 위치 확인
394 11:35a 🔵 N_CF Mission.tsx — 3탭 슬라이드 이미지 구조 및 S3 매핑 확인
395 " 🔵 N_CF 이미지 교체 소스 — Downloads/AFTERBUNNER/ 폴더 내 실제 제품 사진 확인
396 " 🔵 N_CF 이미지 교체 후보 — AFTERBUNNER 폴더 파일 스펙 및 크기 확인
397 11:36a 🔵 N_CF S3 버킷 경로 이중 구조 확인 — Mission 이미지와 제품 이미지가 다른 S3 경로 사용
398 " 🔵 S3 버킷 DNS 해석 실패 — chiro-web.s3.ap-northeast-2.amazonaws.com 접근 불가
399 11:37a 🔵 S3 버킷 공개 읽기 접근 확인 — escalated 권한으로 HTTP 200 응답 성공
400 11:38a 🔵 N_CF S3 기존 히어로 이미지 치수 확인 — 모두 1456×816px (16:9 가로형)
401 11:39a 🔵 N_CF S3 제품 이미지 치수 확인 — 제품 페이지 이미지는 모두 세로형 포트레이트
402 11:53a ⚖️ AFTER 프로젝트 섹션 2 — 탭 3개 이미지 교체 범위 확정
403 " 🔵 AFTER 프로젝트 — 로컬 cofe 폴더 SUPREME ROASTERS 이미지 에셋 구조 확인
404 11:54a 🔵 AFTER 프로젝트 — 섹션 2 이미지 교체용 소스 파일 목록 확인 (Downloads/AFTERBUNNER)
405 11:56a 🔵 AFTER 프로젝트 — KUBAN SUPREME V2 ROASTER 이미지 소스 확인
406 12:08p ⚖️ AFTER 프로젝트 섹션 2 탭 이미지 교체 계획 확정
407 " 🔵 N_CF 프로젝트 프로덕션 빌드 성공 — ESLint 경고 있으나 28페이지 정상 생성
408 12:13p 🔵 N_CF 개발 서버 포트 충돌 — 3000 사용 중, 3001로 자동 전환 후 정상 응답
409 " 🔵 N_CF 이미지 교체 작업 진행 중 — 신규 이미지 4장 추가 및 컴포넌트 3개 수정
410 " 🔵 N_CF 이미지 교체 변경 규모 — Mission.tsx 주요 변경, images.ts 4라인 추가
411 12:24p ⚖️ hotel_win 섹션 2 — 탭 3개 구조 이미지 배치 교체 계획 확정
412 12:26p ✅ N_CF Mission.tsx — 섹션 2 탭 이미지 4장 PNG로 교체 (파일 준비 완료)
413 12:27p 🔵 N_CF Next.js 14 빌드 성공 — ESLint tsconfig-paths 경고 지속, 28개 정적 페이지 생성
414 12:51p ⚖️ AFTER 프로젝트 섹션 2 — 탭 이미지 4장 교체 계획 확정
415 12:53p 🔵 N_CF ProductsSection.tsx — 홈 섹션 2 탭 구조 및 이미지 경로 확인
416 " 🔄 EdgeRails.tsx — 슬라이드인 메뉴 하단 소셜 링크 absolute 포지셔닝으로 변경
417 12:55p 🟣 N_CF Mission.tsx — 섹션 2 슬라이드 이미지 4장 교체 및 동적 aspect 비율 적용
418 12:56p 🔵 N_CF 빌드 성공 — ESLint tsconfig-paths 경고 비차단 확인
419 1:08p ⚖️ AFTER 프로젝트 섹션 2 — 탭별 이미지 교체 계획 확정
420 " 🔵 N_CF Mission.tsx 탭 섹션 — 이미지 아키텍처 전체 맵핑 확인
421 " 🔵 N_CF git status — Mission 이미지 파일 4개 이미 public/images/ 추가됨 (untracked)
422 1:09p 🔵 N_CF public/images/ 현황 — 신규 Mission 이미지 3개 오늘 추가, 왼쪽 마스크(mission-left.png)는 미교체
423 1:10p 🔵 AFTERBUNNER 후보 이미지 치수 조사 — 3가지 비율 그룹 확인 및 3D렌더링 파일 유효하지 않음
424 " 🔵 src/lib/images.ts — IMAGES 객체 전체 구조 확인: missionLeft는 S3 URL, 탭 썸네일들은 로컬 /images/ 경로
425 2:00p ⚖️ AFTER 프로젝트 — 섹션 3 탭 레이아웃 4장 이미지 교체 범위 확정
426 2:06p 🔵 N_CF + hotel_win — 두 Next.js 개발 서버 동시 실행 중 확인
427 2:09p ✅ N_CF — 개발 서버 종료 및 .next 캐시 삭제
428 2:11p ⚖️ hotel_win 섹션 2 — 탭별 이미지 교체 계획 확정
S101 hotel_win 섹션 2 탭별 이미지 4장 교체 — 개발 서버 재시작 진행 중 (Apr 27 at 2:11 PM)
431 2:12p 🔵 N_CF 개발 서버 — 포트 3001로 정상 기동 확인

Access 620k tokens of past work via get_observations([IDs]) or mem-search skill.
</claude-mem-context>