/* Supabase 연결 정보
   - 이 파일이 html 옆에 있으면 접속만 해도 자동으로 연결됩니다.
   - 여기 들어가는 anon public key 는 공개되어도 되는 키입니다.
     (보안은 Supabase 쪽 RLS 정책이 담당합니다)
   - service_role key 는 절대 넣지 마세요.
   - 배포_빌드 를 다시 돌려도 이 값은 그대로 유지됩니다. */
window.TEAM_CONFIG = {
  supabaseUrl: 'https://eabjlszntlvjkctuyapb.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhYmpsc3pudGx2amtjdHV5YXBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwNTMwNTIsImV4cCI6MjEwNTYyOTA1Mn0.T_IG_QbFcg-vc-uOOA4yCDNN3cKR8TogWxLxD7f1SbY'
};
