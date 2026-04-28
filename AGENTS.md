<claude-mem-context>
# Memory Context

# [N_CF] recent context, 2026-04-28 3:39pm GMT+9

Legend: 🎯session 🔴bugfix 🟣feature 🔄refactor ✅change 🔵discovery ⚖️decision 🚨security_alert 🔐security_note
Format: ID TIME TYPE TITLE
Fetch details: get_observations([IDs]) | Search: mem-search skill

Stats: 50 obs (10,318t read) | 1,154,435t work | 99% savings

### Apr 27, 2026
S145 N_CF 프로젝트 — Mission.tsx 넛버터 슬라이드 "STONE-GROUND" 문구 및 이미지 중복 문제 조사, the-lab 히어로 패러럭스 개선 후속 작업 (Apr 27 at 2:11 PM)
S101 hotel_win 섹션 2 탭별 이미지 4장 교체 — 개발 서버 재시작 진행 중 (Apr 27 at 2:11 PM)
### Apr 28, 2026
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
601 1:16p ✅ N_CF products.ts — roaster-base-15 & SUPREME image paths migrated to S3
602 " 🔵 AfterBurner 제품 이미지 — 용량별 이미지 불일치 문제 발견 및 교체 방향 결정
604 1:43p 🔵 AfterBurner KUBAN 15kg 로스터 소스 이미지 — 로컬 파일 구조 및 해상도 확인
607 " 🔵 ImageMagick montage — gs(Ghostscript) 미설치로 레이블 렌더링 실패
609 1:44p ⚖️ AfterburnerPage — 용량별 제품 이미지 교체 범위 및 방향 확정
610 1:46p ⚖️ AFTER 프로젝트 — AfterburnerPage 용량별 제품 이미지 교체 방향 확정
611 " ✅ AfterburnerPage — 15k 로스터 이미지 리사이즈 및 S3 업로드 시작
612 1:47p 🔵 S3 업로드 실패 — chiro-web 버킷 엔드포인트 연결 불가
613 " 🔵 chiro-web S3 버킷 리전 확인 — ap-northeast-2 (서울) 지정 시 업로드 성공
614 " ✅ products.ts — 15kg 로스터 이미지 경로를 black 버전으로 업데이트
615 1:48p 🔵 S3 업로드 검증 완료 — roaster-base-15-black-1.png 공개 접근 확인
616 1:49p ✅ N_CF 프로젝트 — 15k 이미지 교체 후 Next.js 프로덕션 빌드 성공
641 " 🔵 AfterburnerPage 용량별 이미지 크기 차이 — CSS scale 변환으로 구현됨
643 2:30p 🔄 RoastersPage Product Details — TiltCard 4열 그리드 → BentoFeatureCard 비대칭 레이아웃으로 교체
644 " 🔄 RoastersPage — TiltCard 컴포넌트 제거, BentoFeatureCard로 완전 대체
645 2:32p 🔄 RoastersPage BentoFeatureCard 교체 후 빌드 성공 — 페이지 번들 크기 감소 확인
648 2:33p 🔵 en/ 페이지 — TiltCard 3D 인터랙션 코드 잔존 확인 (roasters, afterburner)
649 2:34p 🔵 Mission.tsx 컴포넌트 전체 구조 확인 — 3슬라이드 Collections 캐러셀
650 2:35p 🔄 Mission.tsx — 슬라이드 네비게이션 컨트롤을 섹션 헤더에서 텍스트 패널 CTA 영역으로 이동
652 2:36p 🔵 N_CF 빌드 실패 — .next 캐시 손상으로 _document.js 모듈 누락 오류
653 2:37p 🔵 _document.js 오류 — .next 삭제 후에도 동일 세션(62939)이 재사용되어 오류 지속
654 2:38p 🔴 N_CF _document.js 빌드 오류 — 새 세션(69727) + 클린 .next 삭제로 해결
660 2:39p 🔄 Mission.tsx CTA 영역 — "+" 링크 버튼 제거 및 네비게이션 순서 재정렬

Access 1154k tokens of past work via get_observations([IDs]) or mem-search skill.
</claude-mem-context>