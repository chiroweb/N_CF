<claude-mem-context>
# Memory Context

# [N_CF] recent context, 2026-04-28 1:27pm GMT+9

Legend: 🎯session 🔴bugfix 🟣feature 🔄refactor ✅change 🔵discovery ⚖️decision 🚨security_alert 🔐security_note
Format: ID TIME TYPE TITLE
Fetch details: get_observations([IDs]) | Search: mem-search skill

Stats: 50 obs (10,983t read) | 1,286,522t work | 99% savings

### Apr 27, 2026
S145 N_CF 프로젝트 — Mission.tsx 넛버터 슬라이드 "STONE-GROUND" 문구 및 이미지 중복 문제 조사, the-lab 히어로 패러럭스 개선 후속 작업 (Apr 27 at 2:11 PM)
S101 hotel_win 섹션 2 탭별 이미지 4장 교체 — 개발 서버 재시작 진행 중 (Apr 27 at 2:11 PM)
457 3:36p 🔵 N_CF — NUTS-STAR 넛버터머신 이미지 구조 현황 파악
458 " 🔵 N_CF — git 인덱스 전체 삭제(D) 상태 발견
459 3:37p 🔵 N_CF — 땅콩버터머신 교체 대상 로컬 이미지 파일 위치 확인
460 " ⚖️ AFTER 프로젝트 — 땅콩버터 머신 이미지 교체 방향 확정
461 3:39p ⚖️ AFTER 프로젝트 — 땅콩버터 머신 이미지 사용 결정
462 " ✅ N_CF — 땅콩버터 머신 실사 이미지 public/images에 복사
463 3:40p ✅ N_CF — 땅콩버터 머신 이미지 참조 S3 → 로컬 파일로 전면 교체
465 " 🔵 ui-ux-pro-max 스킬 — scripts/search.py 경로 오류 (파일이 디렉토리 아님)
466 " ⚖️ AFTER 프로젝트 — 용량 표기·이미지 마스크·네비게이션 레이블 수정 범위 확정
468 " ⚖️ AFTER 프로젝트 — 애프터버너·쿠반 용량 기준 및 UI 레이블 변경 방향 확정
472 3:43p ⚖️ AFTER 프로젝트 — AfterBurner·KUBAN 용량 범위 및 UI 3종 수정 범위 확정
473 " ✅ N_CF — AfterBurner·KUBAN 제품 라인업 5K 시작으로 축소 및 KUBAN 이미지 레이아웃 수정
474 " ✅ N_CF 전사 네비게이션 "THE LAB" → "BUTTER MACHINE" 레이블 변경
475 3:44p 🔵 N_CF — "THE LAB" 및 1K/3K 용량 잔존 위치 전수 조사 결과
476 " ✅ N_CF — SEO 메타데이터·layout.tsx·Mission·the-lab 페이지 잔존 구버전 문구 전면 동기화
477 " 🔵 N_CF 전사 5K 시작·BUTTER MACHINE 브랜딩 전환 완료 — 최종 잔존 확인
478 3:46p ⚖️ AFTER 프로젝트 — UI 수정 범위 결정: 용량·사진 마스크·네비게이션 레이블
479 " 🔵 N_CF 프로젝트 — Next.js 빌드 성공, /the-lab 라우트 여전히 존재 확인
### Apr 28, 2026
527 8:38a 🔵 N_CF 레포 — git 인덱스 전체 붕괴 상태 확인
528 " 🔵 N_CF 레포 — git 인덱스 완전 초기화 확인: 루트 원인 특정
530 " 🔴 N_CF — 스테일 .git/index.lock 파일 삭제 완료
532 " 🔵 N_CF 디버깅 — exec_command 도구 캐시 반환으로 실제 명령 미실행 확인
529 8:39a 🔵 N_CF — 스테일 .git/index.lock 파일이 git reset 차단
531 8:40a 🔵 N_CF — index.lock 삭제 후 새 에러: "Operation not permitted" — .git 디렉토리 권한 문제로 전환
533 8:41a 🔴 N_CF git 인덱스 복구 완료 — git reset --mixed HEAD 성공
536 " 🔵 N_CF 배포 현황 — 어제 작업 변경사항이 origin/main에 미반영 상태 확인
537 " 🔵 N_CF 미커밋 로컬 변경 20파일 — 5K 시작 전환·버터머신 브랜딩·이미지 교체 전체 내용 확인
534 8:42a 🔴 N_CF git push 에러 완전 해결 — dry-run "Everything up-to-date" 확인
540 8:46a ⚖️ 애프터버너 호환 로스터기 목록 — 한 줄 or 무한 루프 마퀴 방식으로 변경 요청
541 8:58a ⚖️ 로스터 페이지 — 애프터버너 변경사항 동기화 검토 요청
542 9:04a 🔵 로스터 페이지 — TiltCard 3-card 구조 현황 확인
543 " 🟣 로스터 페이지 KR·EN — TiltCard 3-card → 4-card 전면 업데이트
544 9:05a 🟣 로스터 페이지 TiltCard 4-card 빌드 성공 확인
545 9:06a 🔵 N_CF git status — afterburner 스테이징됨, roasters 미스테이징 상태
546 " 🔵 애프터버너 vs 로스터 히어로 이미지 구조 비교
547 " 🔄 애프터버너 히어로 이미지 패럴랙스 + 피팅 방식 개선
548 9:07a 🔴 N_CF 빌드 실패 — .next 캐시 손상 `_document.js` MODULE_NOT_FOUND
549 " 🔴 N_CF .next 캐시 삭제로 _document.js 빌드 에러 해결
551 9:08a 🔴 N_CF 클린 빌드 성공 — .next 캐시 삭제 후 exit 0 확인
S152 N_CF 넛버터머신 납품 실적 중복 카드 제거 — NUTSTAR_DELIVERIES 배열 병합 및 빌드 확인 (Apr 28 at 9:08 AM)
552 9:09a 🔵 git status — afterburner MM (staged+unstaged 혼재), roasters 2개 여전히 unstaged
564 9:13a ⚖️ 납품실적 페이지 — 초기 20건 표시 + 더보기 UI 방향 결정
565 9:36a 🔵 NUTSTAR_DELIVERIES 중복 항목 발견 — No.02·No.03 동일 거래처
566 " 🔵 NUTSTAR_DELIVERIES 참조 범위 확인 — KR·EN 두 페이지가 단일 소스 공유
567 " ✅ nutstar-deliveries.ts 파일 주석 — 중복 제거 방침 문서화
568 " 🔴 NUTSTAR_DELIVERIES 중복 거래처 병합 완료 — 11개 → 9개 레코드
570 9:38a ✅ deliveries/page.tsx sr-only 텍스트 — 거래처 수 11→9 수정
S156 N_CF 프로젝트 — EN afterburner 페이지 capacity-scale 애니메이션 + 색상 커스텀 배지 적용 및 최종 빌드 검증 (Apr 28 at 9:38 AM)
S166 N_CF brand-hall/page.tsx — 4연속 풀와이드 배너 → 12-col 비대칭 벤토 그리드 + 인터루드 섹션 추가 (Apr 28 at 9:40 AM)
S153 N_CF 넛버터머신 납품 실적 중복 카드 제거 — NUTSTAR_DELIVERIES 배열 병합 및 빌드 확인 (Apr 28 at 9:40 AM)
575 9:43a 🟣 en/the-lab/page.tsx — 전면 EN 로컬라이제이션 완료
576 " 🟣 en/roasters/page.tsx — 4차 콘텐츠 폴리시 적용 (reversion 재수정)
577 " 🟣 AFTER 프로젝트 AfterBurnerPage 전시 페이지 대규모 시각 보강 요청
579 10:22a 🔵 Persistent Reversion — en/the-lab, en/roasters 동시 확인 및 빌드 성공
S160 N_CF BrandHallPage 전시 페이지 보강 — 그래피티 에디션 이미지 6장으로 섹션 재구성 (Apr 28 at 10:22 AM)
**Investigated**: - AFTERBUNNER 다운로드 폴더에서 이미지 3장 추가 읽기 (brick-cafe, graffiti-gallery-pair, afterburner-trio)
    - src/lib/images.ts 현재 상태 확인 (24줄, 브랜드홀 이미지 키 없음)
    - src/app/brand-hall/page.tsx 기존 구조 (GALLERY_ITEMS 6개, 비디오 섹션, GalleryCard 컴포넌트)

**Learned**: - 6개 이미지 모두 public/images/에 복사 성공 (brand-graffiti-gallery-pair, brand-afterburner-five-lineup, brand-brick-cafe-install, brand-kuban-graffiti-pair, brand-kuban-afterburner-mix, brand-afterburner-trio), 각 1.6~2.2MB
    - images.ts에 6개 키 추가 완료 (userModified: false — 지속적인 revert 패턴이 없음, 정상 동작)
    - brand-hall/page.tsx 전면 재작성 후 빌드 성공, /brand-hall 6.56kB, 오류 없음
    - 비디오 섹션을 CSS crossfade(useState + setInterval 6초)로 교체하는 패턴 작동 확인
    - objectPosition + scale CSS inline style로 동일 이미지의 디테일 크롭을 JS 없이 구현 가능

**Completed**: 1. public/images/ — 6개 그래피티 에디션 이미지 복사 완료
    2. src/lib/images.ts — brandGraffitiGalleryPair, brandAfterburnerFiveLineup, brandKubanGraffitiPair, brandKubanAfterburnerMix, brandBrickCafeInstall, brandAfterburnerTrio 키 추가 완료
    3. src/app/brand-hall/page.tsx 전면 재작성:
       - HERO "기계지만, 예술의 자리" 유지
       - GRAFFITI EDITION: 풀와이드 16:9 배너 4장 (scroll fade-in, 하단 그라디언트+캡션)
       - DETAIL FILM: 비디오 섹션 제거 → CSS crossfade 6초 자동전환, 인디케이터 버튼
       - SCENES: 4카드 그리드 (작업장/골든아워/동네한복판/브릭월카페 신규)
       - THE MACHINES: brand-afterburner-trio 16:9 쇼케이스 + 모델명 캡션
       - MANIFESTO 유지
       - EVENT CTA 유지
       - FloatingSectionNav 7개 섹션으로 갱신
    4. npm run build 성공 (no errors, /brand-hall 6.56kB)

**Next Steps**: - 빌드 완료 상태, 사용자 검토 대기
    - 필요 시 이미지 크롭 방식 변경 (object-contain으로 원본 비율 완전 유지)
    - 미처리 항목: Hero.tsx "A SIHEUNG"→"AN ANSAN", SINCE 2011→2006 마킹, en/brand-hall/page.tsx 영문 버전, 영문 페이지 revert 이슈 조사


Access 1287k tokens of past work via get_observations([IDs]) or mem-search skill.
</claude-mem-context>