<claude-mem-context>
# Memory Context

# [N_CF] recent context, 2026-04-30 3:45pm GMT+9

Legend: 🎯session 🔴bugfix 🟣feature 🔄refactor ✅change 🔵discovery ⚖️decision 🚨security_alert 🔐security_note
Format: ID TIME TYPE TITLE
Fetch details: get_observations([IDs]) | Search: mem-search skill

Stats: 50 obs (10,706t read) | 1,141,406t work | 99% savings

### Apr 28, 2026
551 9:08a 🔴 N_CF 클린 빌드 성공 — .next 캐시 삭제 후 exit 0 확인
552 9:09a 🔵 git status — afterburner MM (staged+unstaged 혼재), roasters 2개 여전히 unstaged
564 9:13a ⚖️ 납품실적 페이지 — 초기 20건 표시 + 더보기 UI 방향 결정
565 9:36a 🔵 NUTSTAR_DELIVERIES 중복 항목 발견 — No.02·No.03 동일 거래처
566 " 🔵 NUTSTAR_DELIVERIES 참조 범위 확인 — KR·EN 두 페이지가 단일 소스 공유
567 " ✅ nutstar-deliveries.ts 파일 주석 — 중복 제거 방침 문서화
568 " 🔴 NUTSTAR_DELIVERIES 중복 거래처 병합 완료 — 11개 → 9개 레코드
570 9:38a ✅ deliveries/page.tsx sr-only 텍스트 — 거래처 수 11→9 수정
S166 N_CF brand-hall/page.tsx — 4연속 풀와이드 배너 → 12-col 비대칭 벤토 그리드 + 인터루드 섹션 추가 (Apr 28 at 9:40 AM)
S153 N_CF 넛버터머신 납품 실적 중복 카드 제거 — NUTSTAR_DELIVERIES 배열 병합 및 빌드 확인 (Apr 28 at 9:40 AM)
575 9:43a 🟣 en/the-lab/page.tsx — 전면 EN 로컬라이제이션 완료
576 " 🟣 en/roasters/page.tsx — 4차 콘텐츠 폴리시 적용 (reversion 재수정)
577 " 🟣 AFTER 프로젝트 AfterBurnerPage 전시 페이지 대규모 시각 보강 요청
579 10:22a 🔵 Persistent Reversion — en/the-lab, en/roasters 동시 확인 및 빌드 성공
S191 N_CF RoastersPage — 벤토 카드 이미지 3종 교체 + 텍스트 검정 스트로크 적용 + EN 페이지 동기화 (Apr 28 at 10:22 AM)
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
### Apr 29, 2026
672 8:25a ⚖️ RoastersPage — 이미지 3종 섹션 배치 및 텍스트 가시성 처리 방향 확정
673 8:26a 🔵 N_CF RoastersPage BentoFeatureCard 현황 파악 — 이미지 교체 대상 카드 3종 확인
674 " 🔵 BentoFeatureCard 내부 구조 확인 — 텍스트 가시성 이미 white+gradient 처리됨
675 8:27a 🟣 KUBAN 15kg · 20kg BASE 모델 — 고객 현장 갤러리 이미지 추가 요청
S192 N_CF 프로젝트 — 15kg/20kg BASE 로스터 갤러리에 고객 현장 사진 각 3장 추가 (Apr 29 at 8:27 AM)
S193 N_CF RoastersPage BentoFeatureCard 텍스트 스타일 — WebkitTextStroke 제거 완료, afterburner/page.tsx 동일 패턴 존재 확인 (Apr 29 at 8:34 AM)
676 8:36a ⚖️ RoastersPage BentoFeatureCard 텍스트 스타일 — 검정 스트로크 제거, 흰색 단색으로 변경
678 8:37a ✅ N_CF 빌드 성공 — BentoFeatureCard 스트로크 제거 후 빌드 통과
S195 N_CF RoastersPage BentoFeatureCard — afterburner 스타일로 통일 완료, 빌드 통과 (Apr 29 at 8:37 AM)
S196 N_CF 로스터 페이지 BentoFeatureCard — 애프터버너 스타일 동기화 및 고객 현장 사진 갤러리 추가 (Apr 29 at 8:44 AM)
677 8:45a ✅ RoastersPage BentoFeatureCard — WebkitTextStroke 제거, 흰색 단색 텍스트로 단순화
S194 N_CF RoastersPage BentoFeatureCard 텍스트 스타일 — 결국 afterburner 스타일로 동기화 (스트로크 유지, rgba 반투명 버전) (Apr 29 at 8:45 AM)
S197 N_CF 로스터 페이지 BentoFeatureCard — 애프터버너 스타일 동기화 및 고객 현장 사진 갤러리 추가 (빌드 재확인) (Apr 29 at 8:47 AM)
### Apr 30, 2026
714 2:05p 🔵 N_CF 프로젝트 — git 인덱스 전체 손상, 모든 파일 추적 해제 상태
715 2:06p 🔵 N_CF git 인덱스 손상 근본 원인 확정 — git rm --cached 또는 index 리셋으로 전체 파일 스테이징 해제
716 " 🔴 N_CF git index 복구 완료 — git add -A 후 실제 변경 파일 2개 확정
717 " ✅ AfterburnerPage — 직화 온도 텍스트 200°C → 300°C 수정
718 " 🔵 N_CF AGENTS.md — MM 상태 감지, 스테이징 후 추가 변경 발생
719 2:16p 🔵 N_CF 전체 페이지 구조 서베이 — KO/EN 이중 언어 아키텍처 및 이미지 레퍼런스 차이 확인
731 2:18p ⚖️ N_CF SEO/AEO 전략 방향 확정 — 타깃 키워드 정의
732 2:43p 🔵 N_CF 프로젝트 SEO/AEO 현황 전체 감사 — 키워드 커버리지 및 구조화 데이터 상태

Access 1141k tokens of past work via get_observations([IDs]) or mem-search skill.
</claude-mem-context>